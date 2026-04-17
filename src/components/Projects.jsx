import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "EHV Substation Twin (Indra)",
    description: "A production-level AI/ML-enabled Digital Twin platform designed for high-voltage electrical substations, featuring real-time 3D visualization and predictive analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "3D Visualization", "AI/ML"],
    github: "https://github.com/ojashvabhikonde-dot/ehv-substation-twin",
    live: "https://ehv-substation-twin.vercel.app"
  },
  {
    title: "Substation Twin AI",
    description: "AI-powered digital twin interface designed for intelligent substation monitoring and fault simulation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ojashvabhikonde-dot/substation-twin-ai",
    live: "https://substation-twin-ai-nu.vercel.app"
  },
  {
    title: "Modern Authentication UI",
    description: "A sleek, responsive login and registration interface featuring smooth transitions and robust form validation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "React", "CSS"],
    github: "https://github.com/ojashvabhikonde-dot/Login-Register-page-",
    live: "https://login-register-page-six.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 1 ? 'md:items-end md:text-right' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm mb-6 z-20 relative">
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-3 mb-8 ${idx % 2 === 1 ? 'justify-end' : ''}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-secondary text-sm font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="p-2 bg-white/10 hover:bg-primary/50 rounded-full transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-white/10 hover:bg-primary/50 rounded-full transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
