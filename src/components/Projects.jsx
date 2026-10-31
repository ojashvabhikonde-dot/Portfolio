import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal, 
  LayoutGrid, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { getDynamicProjects } from '../services/githubService';
import { GITHUB_USERNAME } from '../data/curatedProjects';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter & Search states
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'

  const loadProjects = async (force = false) => {
    if (force) setRefreshing(true);
    try {
      const result = await getDynamicProjects(force);
      setProjects(result.projects || []);
    } catch (err) {
      console.error('Failed to load projects:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProjects(false);
  }, []);

  // Filter categories
  const categories = useMemo(() => {
    const liveCount = projects.filter((p) => p.hasLive).length;
    const featuredCount = projects.filter((p) => p.featured).length;

    return [
      { id: 'all', label: 'All Projects', count: projects.length },
      { id: 'live', label: 'Live Demos', count: liveCount, isLiveTag: true },
      { id: 'featured', label: 'Featured', count: featuredCount },
    ];
  }, [projects]);

  // Filtered & Searched Projects list
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeFilter === 'live' && !p.hasLive) return false;
      if (activeFilter === 'featured' && !p.featured) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchRepo = p.repoName.toLowerCase().includes(query);
        const matchTags = p.tags && p.tags.some((t) => t.toLowerCase().includes(query));
        return matchTitle || matchDesc || matchRepo || matchTags;
      }

      return true;
    });
  }, [projects, activeFilter, searchQuery]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter, searchQuery]);

  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030308]">
      {/* Background ambient purple blob */}
      <div className="blob-animate w-96 h-96 top-1/3 left-1/2 -translate-x-1/2 opacity-25"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title (Reference style) */}
        <div className="text-center mb-14">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            My Portfolio
          </h3>
          <h2 className="text-3xl sm:text-5xl font-bold text-titleText tracking-tight">
            Recent Projects
          </h2>
        </div>

        {/* Filter Pills, Search Bar & View Mode */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-glow'
                      : 'bg-[#0e0e14] border border-white/5 text-bodyText hover:text-white'
                  }`}
                >
                  {cat.isLiveTag && (
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-emerald-400 animate-pulse'}`} />
                  )}
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controls: Search + View Mode */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-56">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-bodyText" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0e0e14] border border-white/5 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-bodyText focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex bg-[#0e0e14] border border-white/5 rounded-full p-1">
              <button
                onClick={() => setViewMode('carousel')}
                title="Slider View (Reference Video)"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'carousel' ? 'bg-primary text-white' : 'text-bodyText hover:text-white'
                }`}
              >
                <SlidersHorizontal size={15} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'text-bodyText hover:text-white'
                }`}
              >
                <LayoutGrid size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="bg-[#0e0e14] border border-white/5 rounded-[2.5rem] p-12 text-center animate-pulse text-bodyText">
            Loading Projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-[#0e0e14] border border-white/5 rounded-[2.5rem] p-12 text-center max-w-md mx-auto">
            <AlertCircle size={36} className="text-primary mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">No projects found</h4>
            <p className="text-xs text-bodyText mb-4">Try clearing your search query.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="btn-panda"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'carousel' ? (
          /* Carousel Slider (Direct reference implementation) */
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredProjects[currentIndex]?.id || currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={filteredProjects[currentIndex]}
                  index={currentIndex}
                  layout="carousel"
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls: Bullets + Prev / Next Arrows */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 px-2">
              <div className="text-xs text-bodyText font-medium">
                Project <span className="text-white font-bold">{currentIndex + 1}</span> of <span className="text-primary font-bold">{filteredProjects.length}</span>
              </div>

              {/* Indicator Bullets (Reference style) */}
              <div className="flex items-center gap-2">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    title={`Slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-7 bg-primary shadow-glow'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Circular Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  title="Previous Project"
                  className="w-12 h-12 rounded-full bg-[#0e0e14] hover:bg-primary border border-white/10 hover:border-primary text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  title="Next Project"
                  className="w-12 h-12 rounded-full bg-[#0e0e14] hover:bg-primary border border-white/10 hover:border-primary text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id || idx}
                project={project}
                index={idx}
                layout="grid"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
