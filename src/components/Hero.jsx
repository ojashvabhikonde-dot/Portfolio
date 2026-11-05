import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import heroPersonImg from '../assets/hero-person.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#030308]"
    >
      {/* Background ambient purple glow */}
      <div className="blob-animate w-[450px] h-[450px] top-1/4 left-1/2 -translate-x-1/2 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Main 3-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6 xl:gap-8 min-h-[580px]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-center lg:text-left z-20 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-3">Hello, I'm</h3>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-titleText leading-[1.08] mb-6">
              Ojashva <br />
              Bhikonde
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-titleText mb-6">
              <a
                href="https://linkedin.com/in/ojashva-bhikonde-947a48331"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#0e0e14] border border-white/10 hover:border-primary flex items-center justify-center hover:text-primary transition-all hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ojashvabhikonde-dot"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-11 h-11 rounded-full bg-[#0e0e14] border border-white/10 hover:border-primary flex items-center justify-center hover:text-primary transition-all hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-bodyText hover:text-primary transition-colors ml-2">
                Available for Roles ✦
              </a>
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex justify-center items-center relative z-10 py-4"
          >
            <div className="blob-animate w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] opacity-70"></div>
            <div className="relative w-[350px] sm:w-[420px] xl:w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden z-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#0e0e14]">
              <img
                src={heroPersonImg}
                alt="Ojashva Bhikonde"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-85"></div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 text-center lg:text-right z-20 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-2">Creative</h3>
            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-titleText tracking-tight leading-none mb-1">Full Stack</h2>
            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-primary tracking-tight leading-none mb-8">Developer</h2>
            <div className="flex justify-center lg:justify-end">
              <a href="#projects" className="btn-panda">
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
