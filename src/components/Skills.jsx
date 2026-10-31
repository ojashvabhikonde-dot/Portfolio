import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, Boxes, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Web Design"]
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Authentication Workflows"]
  },
  {
    title: "Programming & Core",
    icon: Cpu,
    skills: ["Java", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Problem Solving"]
  },
  {
    title: "Blockchain & Web3",
    icon: Boxes,
    skills: ["Web3 Concepts", "Solana", "IPFS", "Decentralized Storage"]
  },
  {
    title: "Tools & Workflows",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "n8n (Automation)", "Antigravity", "Gamma", "Canva", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030308]">
      {/* Background purple blob */}
      <div className="blob-animate w-80 h-80 top-1/2 -right-20 opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            My Abilities
          </h3>
          <h2 className="text-3xl sm:text-5xl font-bold text-titleText tracking-tight">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0e0e14] border border-white/5 hover:border-primary/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-card group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-titleText group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#030308] border border-white/5 text-bodyText hover:text-white hover:border-primary/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Continuous learning card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-primary/15 via-[#0e0e14] to-[#030308] border border-primary/30 rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Sheryians Coding School</h3>
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Java + DSA Training</p>
              <p className="text-xs text-bodyText leading-relaxed">
                In-depth algorithmic problem solving, recursion, data structures, and object-oriented design patterns.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-bodyText">
              Constantly mastering modern scalable software architectures.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
