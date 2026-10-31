import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ShieldCheck, Flame, Users, ExternalLink, Star } from 'lucide-react';

const achievementsList = [
  {
    number: "01",
    title: "Smart India Hackathon 2025",
    badge: "GRAND FINALE FINALIST",
    venue: "IIT Hyderabad",
    role: "Frontend Developer (EHV Substation Twin)",
    description: "Contributed to the AI/ML-powered digital twin platform for 220/400 kV electrical substations. Engineered SCADA telemetry dashboards, operational insights, and real-time equipment status views.",
    icon: Trophy,
    highlight: true,
  },
  {
    number: "02",
    title: "Mumbai Hacks 2025",
    badge: "FINALIST",
    venue: "D. Y. Patil College, Mumbai",
    role: "Research & Presentation (Legal TimeLock Network)",
    description: "Architected a blockchain-based legal document verification concept using immutable, tamper-evident timestamps, decentralized IPFS storage, and Solana Web3 workflows.",
    icon: Award,
  },
  {
    number: "03",
    title: "GDG On Campus TechSprint",
    badge: "TOP 10 FINALIST",
    venue: "Google Developer Groups",
    role: "Full Stack Prototyper",
    description: "Ranked in the Top 10 for building high-concurrency rapid prototyping solutions leveraging React, Node.js, and Google Cloud APIs under intense 24-hour hackathon constraints.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "15+ Hackathons Multi-Finalist",
    badge: "COMPETITIVE TRACK RECORD",
    venue: "National & Collegiate Level",
    role: "Full Stack & Frontend Lead",
    description: "Repeatedly demonstrated high-velocity engineering by turning ambiguous real-world problem statements into working, deployed full-stack web applications under extreme time limits.",
    icon: Flame,
  },
  {
    number: "05",
    title: "Chief @ Pixela Photography Club",
    badge: "CAMPUS LEADERSHIP",
    venue: "OIST Bhopal",
    role: "Club Chief & Platform Creator",
    description: "Leading creative campus photography initiatives, organizing workshops, and independently engineered and deployed the full-stack Pixela club web portal for member portfolios.",
    icon: Users,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#030308]">
      {/* Background purple blob */}
      <div className="blob-animate w-80 h-80 top-1/4 -left-20 opacity-25"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Combat Record & Honors
          </h3>
          <h2 className="text-3xl sm:text-5xl font-bold text-titleText tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="text-bodyText text-sm sm:text-base max-w-xl mx-auto mt-4">
            Consistently competing and leading at the national collegiate level, transforming innovative ideas into functional software under high-stakes hackathon pressure.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievementsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-[#0e0e14] border ${
                  item.highlight ? 'border-primary/50' : 'border-white/5'
                } hover:border-primary/60 rounded-[2.5rem] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl group`}
              >
                {/* Ambient blob inside highlight card */}
                {item.highlight && (
                  <div className="blob-animate w-64 h-64 -top-10 -right-10 opacity-30"></div>
                )}

                <div className="relative z-10">
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-white/20 group-hover:text-primary/50 transition-colors">
                      {item.number}
                    </span>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-primary/10 border border-primary/30 text-primary">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#030308] border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-titleText group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-primary font-medium mt-0.5">
                        {item.venue} • {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-bodyText text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 rounded-[2.5rem] bg-[#0e0e14] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <Star size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                Looking for a Driven Hackathon Teammate or Software Engineer?
              </h4>
              <p className="text-xs sm:text-sm text-bodyText">
                Experienced in rapid execution, full-stack architecture, and presentation.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-panda shrink-0">
            <span>Connect With Me</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

