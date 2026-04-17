import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import profilei from "../assets/por.jpeg"

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hi! I'm Ojashva Bhikonde, a passionate 2nd-year B.Tech Computer Science student.
              My journey in tech began with a deep curiosity about how things work on the web,
              which quickly evolved into a passion for software development.
            </p>
            <p>
              I specialize in creating modern, interactive web applications. Whether it's building
              complex logic on the backend or crafting pixel-perfect, 3D-integrated interfaces on the frontend,
              I enjoy every part of the development process.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new technologies, participating in hackathons,
              or learning about the latest trends in UI/UX design. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
              <img src={profilei} alt="Ojashva Bhikonde" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 border border-primary/30 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
