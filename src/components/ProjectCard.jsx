import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Star, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index = 0, layout = 'carousel' }) => {
  const projectNumber = String(index + 1).padStart(2, '0');
  const isCarousel = layout === 'carousel';

  if (isCarousel) {
    return (
      <div className="relative bg-[#0e0e14] border border-white/5 hover:border-primary/40 rounded-[2.5rem] p-7 sm:p-10 overflow-hidden transition-all duration-500 shadow-2xl group">
        {/* Ambient purple blob inside the card (Directly from reference) */}
        <div className="blob-animate w-72 h-72 -bottom-10 -right-10 opacity-30"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Info Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Number & Category */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-5xl sm:text-7xl font-bold tracking-tight text-white/20 group-hover:text-primary/50 transition-colors">
                {projectNumber}
              </span>

              <div className="flex items-center gap-2">
                {project.hasLive ? (
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Link Available
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-bodyText">
                    Repository
                  </span>
                )}
                {project.category && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
                    {project.category}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-4">
              <h3 className="text-2xl sm:text-4xl font-bold text-titleText group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              {project.role && (
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                  {project.role}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-bodyText text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-3 py-1 rounded-xl bg-[#030308] border border-white/5 text-primary font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Direct Launch Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {project.hasLive ? (
                <>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-panda"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-[#030308] border border-white/10 hover:border-primary text-bodyText hover:text-white transition-all hover:scale-105"
                    title="View GitHub Code"
                  >
                    <FaGithub size={18} />
                  </a>
                </>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-panda"
                >
                  <FaGithub size={18} />
                  <span>View Code on GitHub</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Image Column with Floating Action Button (Exact Reference Design) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-video lg:aspect-[4/3] bg-[#030308] border border-white/10 shadow-2xl group/img">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14]/80 via-transparent to-transparent"></div>

              {/* The iconic circular floating button on the project image from the reference */}
              <a
                href={project.hasLive ? project.live : project.github}
                target="_blank"
                rel="noopener noreferrer"
                title={project.hasLive ? "Open Live Demo" : "View Code on GitHub"}
                className="projects__button absolute bottom-5 right-5 z-20 shadow-xl"
              >
                {project.hasLive ? <ExternalLink size={20} /> : <ArrowUpRight size={20} />}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Card View (for Grid mode)
  return (
    <div className="relative bg-[#0e0e14] border border-white/5 hover:border-primary/40 rounded-[2rem] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-purple-card flex flex-col justify-between group">
      <div className="blob-animate w-48 h-48 -bottom-10 -right-10 opacity-20"></div>

      <div>
        {/* Top: Number & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-white/20 group-hover:text-primary/50 transition-colors">
            {projectNumber}
          </span>

          {project.hasLive ? (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Live
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-bodyText">
              Code Only
            </span>
          )}
        </div>

        {/* Image Preview with Floating Launch Icon */}
        <div className="relative rounded-2xl overflow-hidden aspect-video mb-5 bg-[#030308] border border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <a
            href={project.hasLive ? project.live : project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__button absolute bottom-3 right-3 !w-10 !h-10 z-10"
          >
            {project.hasLive ? <ExternalLink size={16} /> : <ArrowUpRight size={16} />}
          </a>
        </div>

        <h3 className="text-xl font-bold text-titleText group-hover:text-primary transition-colors mb-1 line-clamp-1">
          {project.title}
        </h3>

        {project.role && (
          <p className="text-[11px] font-semibold text-primary uppercase tracking-wide mb-2 line-clamp-1">
            {project.role}
          </p>
        )}

        <p className="text-bodyText text-xs leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 3).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#030308] border border-white/5 text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-white/5 flex items-center gap-3">
        {project.hasLive ? (
          <>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 rounded-full text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#030308] border border-white/10 text-bodyText hover:text-white"
            >
              <FaGithub size={16} />
            </a>
          </>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-white/5 hover:bg-primary/20 border border-white/10 text-white transition-colors flex items-center justify-center gap-2"
          >
            <FaGithub size={14} />
            <span>GitHub Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
