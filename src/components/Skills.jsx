import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & Core",
    skills: ["Node.js", "Express", "Python", "Java", "C++", "REST APIs"]
  },
  {
    title: "Tools & Others",
    skills: ["Git & GitHub", "VS Code", "Figma", "Linux", "Data Structures", "Algorithms"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
