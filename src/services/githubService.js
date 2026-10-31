import { curatedProjects, GITHUB_USERNAME } from '../data/curatedProjects';

const CACHE_KEY = `portfolio_gh_repos_${GITHUB_USERNAME}`;
const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes cache

// Helper to convert repo-name or repo_name into Title Case
function formatRepoTitle(name) {
  if (!name) return 'Untitled Project';
  return name
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Fallback images based on programming language
function getLanguageFallbackImage(language) {
  switch ((language || '').toLowerCase()) {
    case 'typescript':
      return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    case 'python':
      return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    case 'html':
    case 'css':
      return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    default:
      return 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
}

// Merge a GitHub repo object with our curated list
function mergeRepoWithCurated(repo) {
  const repoNameLower = repo.name.toLowerCase();
  
  const curated = curatedProjects.find((item) => {
    if (item.repoName.toLowerCase() === repoNameLower) return true;
    if (item.aliases && item.aliases.some((a) => a.toLowerCase() === repoNameLower)) return true;
    return false;
  });

  // Determine live URL: prioritize verified curated live link, then repo.homepage
  let liveUrl = null;
  if (curated && curated.live) {
    liveUrl = curated.live;
  } else if (repo.homepage && typeof repo.homepage === 'string' && repo.homepage.trim().startsWith('http')) {
    liveUrl = repo.homepage.trim();
  }

  // Tags
  let tags = curated?.tags;
  if (!tags || tags.length === 0) {
    const topicTags = Array.isArray(repo.topics) ? repo.topics : [];
    const langTag = repo.language ? [repo.language] : [];
    tags = [...langTag, ...topicTags];
    if (tags.length === 0) tags = ['Code', 'GitHub'];
  }

  return {
    id: repo.id || repo.name,
    repoName: repo.name,
    title: curated?.title || formatRepoTitle(repo.name),
    role: curated?.role || null,
    description: curated?.description || repo.description || 'Full-stack software and interactive web development repository.',
    image: curated?.image || getLanguageFallbackImage(repo.language),
    tags,
    category: curated?.category || (liveUrl ? 'Web Apps' : 'Open Source'),
    github: repo.html_url || `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
    live: liveUrl,
    hasLive: Boolean(liveUrl),
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    updatedAt: repo.updated_at || repo.pushed_at || null,
    featured: curated ? curated.featured : Boolean(liveUrl || repo.stargazers_count > 0),
    isFork: Boolean(repo.fork),
    language: repo.language || null,
  };
}

// Convert curated list to full project items when offline or rate-limited
function getCuratedAsFallback() {
  return curatedProjects.map((item, idx) => ({
    id: item.repoName || `curated-${idx}`,
    repoName: item.repoName,
    title: item.title,
    role: item.role || null,
    description: item.description,
    image: item.image,
    tags: item.tags,
    category: item.category,
    github: `https://github.com/${GITHUB_USERNAME}/${item.repoName}`,
    live: item.live,
    hasLive: Boolean(item.live),
    stars: item.repoName === 'project-pixel' || item.repoName === 'ehv-substation-twin' ? 1 : 0,
    forks: 0,
    updatedAt: new Date().toISOString(),
    featured: item.featured,
    isFork: item.repoName === 'twindigital',
    language: item.tags[0] || 'JavaScript',
  }));
}

/**
 * Fetches dynamic repositories from GitHub API with caching and fallback.
 */
export async function getDynamicProjects(forceRefresh = false) {
  // Check local storage cache if not forcing refresh
  if (!forceRefresh) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION_MS && Array.isArray(data) && data.length > 0) {
          return {
            projects: data,
            isDynamic: true,
            fromCache: true,
            source: 'cache',
            username: GITHUB_USERNAME,
            lastSynced: new Date(timestamp).toLocaleTimeString(),
          };
        }
      }
    } catch {
      // Ignore cache parse errors
    }
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      throw new Error('No repositories found from GitHub API');
    }

    // Merge every repo with curated data
    const mergedList = repos
      .filter((r) => !r.archived) // exclude archived if any
      .map(mergeRepoWithCurated);

    // Save to cache
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: mergedList,
        })
      );
    } catch {
      // Ignore quota errors
    }

    return {
      projects: mergedList,
      isDynamic: true,
      fromCache: false,
      source: 'live',
      username: GITHUB_USERNAME,
      lastSynced: new Date().toLocaleTimeString(),
    };
  } catch (err) {
    console.warn('GitHub API live fetch failed, using fallback database:', err);
    
    // Attempt to return cached even if expired
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Array.isArray(data) && data.length > 0) {
          return {
            projects: data,
            isDynamic: true,
            fromCache: true,
            source: 'cache-stale',
            username: GITHUB_USERNAME,
            lastSynced: new Date(timestamp).toLocaleTimeString(),
            error: err.message,
          };
        }
      }
    } catch {
      // fallback
    }

    // Fallback to static curated data
    const fallbackProjects = getCuratedAsFallback();
    return {
      projects: fallbackProjects,
      isDynamic: false,
      fromCache: false,
      source: 'curated-fallback',
      username: GITHUB_USERNAME,
      lastSynced: 'Pre-cached',
      error: err.message,
    };
  }
}

