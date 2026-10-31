import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Trophy, GraduationCap, Users } from 'lucide-react';
import profileImg from '../assets/por.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030308]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: About Data (as seen in reference .about__data) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-titleText leading-tight">
              <span className="text-primary font-bold">Creativity</span> <br />
              Is My Passion
            </h2>

            <p className="text-bodyText text-base sm:text-lg leading-relaxed">
              I'm a <b className="text-white">Full Stack Developer</b> and B.Tech Computer Science student at <b className="text-white">Oriental Institute of Science and Technology, Bhopal (2024–2028)</b>. Passionate about architecting scalable web applications, experimenting with innovative UI/UX, and engineering distributed systems.
            </p>

            <p className="text-bodyText text-base sm:text-lg leading-relaxed">
              Driven by rapid prototyping and curiosity, I've competed as a <b className="text-primary">finalist in 15+ hackathons</b> including the prestigious <b className="text-white">Smart India Hackathon 2025 Grand Finale at IIT Hyderabad</b> and Mumbai Hacks. I also lead as the <b className="text-white">Chief of Pixela Photography Club</b> at OIST Bhopal.
            </p>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0e0e14] border border-white/5">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                  <GraduationCap size={18} />
                  <span>Education</span>
                </div>
                <p className="text-xs text-bodyText">B.Tech CSE (2024–2028), OIST Bhopal</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0e0e14] border border-white/5">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                  <Trophy size={18} />
                  <span>SIH '25 Grand Finale</span>
                </div>
                <p className="text-xs text-bodyText">IIT Hyderabad (EHV Substation Twin)</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-panda">
                <span>Get In Touch</span>
                <FileText size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: About Image with dual animated purple blobs (as seen in reference .about__image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Dual animated blobs behind about image */}
            <div className="blob-animate w-64 h-64 -top-8 -left-6 opacity-60"></div>
            <div className="blob-animate w-60 h-60 -bottom-8 -right-6 opacity-50"></div>

            <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 bg-[#0e0e14]">
              <img
                src={profileImg}
                alt="Ojashva Bhikonde"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-80"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
