import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  Sparkles, 
  Send, 
  Layers, 
  Globe, 
  Cpu, 
  Palette, 
  Code, 
  Trophy, 
  Award, 
  GraduationCap, 
  FileText, 
  Download, 
  Users, 
  Flame, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X 
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import heroPersonImg from '../assets/hero-person.jpg';
import heroCurrentImg from '../assets/hero-current.png';
import sihPhotoImg from '../assets/sih-photo.jpg';
import { curatedProjects } from '../data/curatedProjects';
import ThemeToggle from './ThemeToggle';

const LightThemeView = () => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const email = "ojashva.bhikonde@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedProjects = curatedProjects.slice(0, 3);

  const services = [
    {
      title: "Full Stack Web",
      category: "SYSTEMS & APIS",
      desc: "Architecting end-to-end web applications with Next.js, React, Node.js, Express, and MongoDB.",
      icon: <Code className="w-5 h-5 text-white" />
    },
    {
      title: "Digital Twin & SCADA",
      category: "AI & TELEMETRY",
      desc: "SIH '25 Grand Finale platform for 220/400 kV EHV substation real-time monitoring and dashboards.",
      icon: <Cpu className="w-5 h-5 text-white" />
    },
    {
      title: "UI/UX & Frontend",
      category: "CREATIVE & INTERFACE",
      desc: "Pixel-perfect, interactive responsive interfaces with Tailwind CSS, micro-interactions, and animations.",
      icon: <Palette className="w-5 h-5 text-white" />
    },
    {
      title: "Web3 & Rapid Prototyping",
      category: "HACKATHON INNOVATION",
      desc: "Turning real-world problem statements into functional, deployed prototypes under extreme hackathon deadlines.",
      icon: <Flame className="w-5 h-5 text-white" />
    }
  ];

  const keyAchievements = [
    {
      number: "01",
      title: "Smart India Hackathon 2025",
      badge: "GRAND FINALE FINALIST",
      venue: "IIT Hyderabad",
      role: "Frontend Developer (Participant)",
      description: "Competed in the national grand finale at IIT Hyderabad. Engineered SCADA telemetry dashboards and real-time equipment status views for 220/400 kV substation digital twins.",
      icon: Trophy
    },
    {
      number: "02",
      title: "Mumbai Hacks 2025",
      badge: "FINALIST",
      venue: "D. Y. Patil College, Mumbai",
      role: "Participant & Lead Presenter",
      description: "Researched and built Legal TimeLock Network (LTN) — a blockchain-based legal verification concept using tamper-evident timestamps, IPFS, and Solana Web3 workflows.",
      icon: Award
    },
    {
      number: "03",
      title: "15+ Hackathons Track Record",
      badge: "MULTI-FINALIST",
      venue: "National & Collegiate Level",
      role: "Full Stack & Prototyping Lead",
      description: "Consistently delivered high-velocity prototypes, from rapid 24-hr MVP sprints to winning top ranks across collegiate tech competitions.",
      icon: Flame
    },
    {
      number: "04",
      title: "Chief @ Pixela Club",
      badge: "CAMPUS LEADERSHIP",
      venue: "OIST Bhopal",
      role: "Club Chief & Platform Creator",
      description: "Leading the creative photography community at OIST Bhopal; independently designed, developed, and deployed the full-stack Pixela club web portal for student portfolios.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#1E1E24] font-sans antialiased selection:bg-[#FF5C2B]/20 selection:text-[#FF5C2B]">
      
      {/* ─── 1. NAVBAR (Exact Pill Style from reference image) ─── */}
      <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 bg-[#F8F8F6]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="text-2xl font-black tracking-tight text-[#161618] flex items-center">
            <span>ojashva</span>
            <span className="text-[#FF5C2B]">.</span>
          </a>

          {/* Desktop Capsule Menu */}
          <nav className="hidden md:flex items-center bg-[#1C1C1E] p-1.5 rounded-full shadow-lg border border-white/5">
            <a 
              href="#home" 
              className="bg-[#FF5C2B] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              Services
            </a>
            <a 
              href="#work" 
              className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#achievements" 
              className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Actions: Let's Talk + Theme Switcher */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a 
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1C1C1E] hover:bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide shadow-md transition-all group"
            >
              <span>Let's Talk</span>
              <span className="w-5 h-5 rounded-full bg-[#FF5C2B] flex items-center justify-center text-white text-[11px] group-hover:rotate-45 transition-transform duration-300">
                ↗
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#1C1C1E] text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#1C1C1E] text-white rounded-2xl shadow-xl flex flex-col gap-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm text-[#FF5C2B] font-semibold">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm hover:text-gray-300">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm hover:text-gray-300">Services</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm hover:text-gray-300">Projects</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm hover:text-gray-300">Achievements</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm hover:text-gray-300">Contact</a>
          </div>
        )}
      </header>

      {/* ─── 2. HERO SECTION (Reference Design + Dark Theme Content & Same Photo) ─── */}
      <section id="home" className="pt-8 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & Badges (From Dark Theme) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge: Available for Roles */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FF5C2B]/20 text-[#1E1E24] shadow-sm text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FF5C2B] animate-pulse"></span>
              <span>Available for Roles ✦</span>
              <Send size={12} className="text-[#FF5C2B] -rotate-12 ml-1" />
            </div>

            {/* Headline */}
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#FF5C2B] mb-2 tracking-tight">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#161618] leading-[1.05]">
                Ojashva <br />
                <span className="text-[#FF5C2B]">Bhikonde.</span>
              </h1>
            </div>

            {/* Subtitle & Role */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              <b className="text-[#161618]">Creative Full Stack Developer</b> & B.Tech Computer Science student at <b className="text-[#161618]">OIST Bhopal (2024–2028)</b>. Passionate about architecting scalable web applications, experimenting with innovative UI/UX, and building high-performance modern software.
            </p>

            {/* Social Links & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#FF5C2B] hover:bg-[#E04B1D] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#FF5C2B]/30 hover:scale-105 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#161618] hover:text-[#FF5C2B] transition-colors px-4 py-3"
              >
                <span>Contact Me</span>
                <ArrowRight size={15} />
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a 
                  href="https://linkedin.com/in/ojashva-bhikonde-947a48331" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#FF5C2B] text-gray-700 hover:text-[#FF5C2B] flex items-center justify-center shadow-sm transition-all hover:scale-110"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href="https://github.com/ojashvabhikonde-dot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#FF5C2B] text-gray-700 hover:text-[#FF5C2B] flex items-center justify-center shadow-sm transition-all hover:scale-110"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Orange Circular Backdrop with Correctly Placed, Enlarged Photo */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6 lg:py-0">
            {/* The Circle Anchor */}
            <div className="relative w-[340px] sm:w-[410px] md:w-[450px] aspect-square flex items-end justify-center">
              
              {/* 1. Vibrant Orange Circle Backdrop */}
              <div className="absolute inset-0 rounded-full bg-[#FF5C2B] shadow-2xl shadow-[#FF5C2B]/35"></div>

              {/* 2. Photo Wrapper: Starts right from the bottom border of the circle, smoothly curved at bottom, and rises up */}
              <div className="relative z-10 w-full h-[118%] sm:h-[122%] rounded-b-full overflow-hidden flex items-end justify-center pointer-events-none">
                <img 
                  src={heroCurrentImg} 
                  alt="Ojashva Bhikonde" 
                  className="w-auto h-[104%] sm:h-[108%] max-w-none object-contain object-bottom select-none transition-transform duration-500 hover:scale-105"
                />
                {/* Subtle bottom vignette shadow for seamless curve blend */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 via-black/5 to-transparent pointer-events-none"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT SECTION (Dedicated About Section) ─── */}
      <section id="about" className="px-4 sm:px-8 max-w-6xl mx-auto py-16">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: About Text & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C2B] block mb-2">
                  ABOUT ME
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#161618]">
                  Creativity Is My Passion<span className="text-[#FF5C2B]">.</span>
                </h2>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                I'm a <b className="text-[#161618]">Full Stack Developer</b> and B.Tech Computer Science student at <b className="text-[#161618]">Oriental Institute of Science and Technology, Bhopal (2024–2028)</b>. Passionate about building robust web applications, exploring interactive UI/UX, and engineering distributed systems.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Driven by rapid prototyping and curiosity, I've competed as a <b className="text-[#FF5C2B]">finalist in 15+ hackathons</b> including the prestigious <b className="text-[#161618]">Smart India Hackathon 2025 Grand Finale at IIT Hyderabad</b> and Mumbai Hacks. I also lead as the <b className="text-[#161618]">Chief of Pixela Photography Club</b> at OIST Bhopal.
              </p>

              {/* Quick Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FFF5EE] border border-[#FFE2D1]">
                  <div className="flex items-center gap-2 text-[#FF5C2B] font-bold text-sm mb-1">
                    <GraduationCap size={18} />
                    <span>Education</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">B.Tech CSE (2024–2028), OIST Bhopal</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF5EE] border border-[#FFE2D1]">
                  <div className="flex items-center gap-2 text-[#FF5C2B] font-bold text-sm mb-1">
                    <Trophy size={18} />
                    <span>SIH '25 Grand Finale</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">IIT Hyderabad (EHV Substation Twin)</p>
                </div>
              </div>

              {/* Action Buttons: Resume & Contact */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="/resume.docx" 
                  download 
                  className="inline-flex items-center gap-2 bg-[#FF5C2B] hover:bg-[#E04B1D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#FF5C2B]/20 hover:scale-105 transition-all"
                >
                  <Download size={15} />
                  <span>Download Resume (DOCX)</span>
                </a>

                <a 
                  href="/resume.pdf" 
                  download 
                  className="inline-flex items-center gap-2 bg-[#1C1C1E] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  <FileText size={15} />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right: About Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                <img 
                  src={sihPhotoImg} 
                  alt="Ojashva Bhikonde SIH" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white text-center">
                  <p className="text-xs font-bold">Smart India Hackathon 2025</p>
                  <p className="text-[10px] text-gray-300">Grand Finale Participant @ IIT Hyderabad</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. SERVICES: "What I Do." (Dark Rounded Container) ─── */}
      <section id="services" className="px-4 sm:px-8 max-w-6xl mx-auto py-12">
        <div className="bg-[#161618] text-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C2B] block mb-2">
                SERVICES & SKILLS
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                What I Do<span className="text-[#FF5C2B]">.</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Design and engineering solutions that are user-focused, strategy-driven, and scalable across modern web ecosystems.
            </p>
          </div>

          {/* 4 Vertical Dark Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, index) => (
              <div 
                key={index}
                className="bg-[#212124] hover:bg-[#28282C] border border-white/5 hover:border-[#FF5C2B]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group min-h-[220px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF5C2B] flex items-center justify-center mb-5 shadow-md shadow-[#FF5C2B]/20">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5C2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#FF5C2B] text-gray-400 group-hover:text-white flex items-center justify-center text-xs transition-colors duration-300">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. FEATURED WORK: "Selected Projects." ─── */}
      <section id="work" className="px-4 sm:px-8 max-w-6xl mx-auto py-16">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C2B] block mb-2">
            FEATURED WORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#161618]">
            Selected Projects<span className="text-[#FF5C2B]">.</span>
          </h2>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview */}
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700">
                  {project.tags[0] || 'FEATURED'}
                </div>
              </div>

              {/* Dark Bottom Bar */}
              <div className="bg-[#161618] text-white p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5C2B] block mb-1">
                    {project.category || 'FULL STACK'}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF5C2B] transition-colors">
                    {project.title}
                  </h4>
                </div>

                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#FF5C2B] hover:bg-[#E04B1D] text-white flex items-center justify-center text-sm transition-all duration-300 flex-shrink-0"
                  aria-label="View Project"
                >
                  ➔
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/ojashvabhikonde-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5C2B] hover:bg-[#E04B1D] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF5C2B]/30 hover:scale-105 transition-all duration-300"
          >
            <span>View All on GitHub</span>
            <span className="text-sm">➔</span>
          </a>
        </div>
      </section>

      {/* ─── 6. STATS BAR (Real Stats, No Fake Experience) ─── */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#FFF4ED] border border-[#FFE2D1] rounded-2xl p-6 text-center shadow-sm">
            <Trophy className="w-6 h-6 text-[#FF5C2B] mx-auto mb-2 opacity-80" />
            <h4 className="text-2xl sm:text-3xl font-black text-[#161618]">15+</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-tight mt-1">Hackathons Finalist</p>
          </div>

          <div className="bg-[#FFF4ED] border border-[#FFE2D1] rounded-2xl p-6 text-center shadow-sm">
            <Code className="w-6 h-6 text-[#FF5C2B] mx-auto mb-2 opacity-80" />
            <h4 className="text-2xl sm:text-3xl font-black text-[#161618]">10+</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-tight mt-1">Full Stack Projects</p>
          </div>

          <div className="bg-[#FFF4ED] border border-[#FFE2D1] rounded-2xl p-6 text-center shadow-sm">
            <Users className="w-6 h-6 text-[#FF5C2B] mx-auto mb-2 opacity-80" />
            <h4 className="text-2xl sm:text-3xl font-black text-[#161618]">100+</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-tight mt-1">Pixela Club Members</p>
          </div>

          <div className="bg-[#FFF4ED] border border-[#FFE2D1] rounded-2xl p-6 text-center shadow-sm">
            <GraduationCap className="w-6 h-6 text-[#FF5C2B] mx-auto mb-2 opacity-80" />
            <h4 className="text-2xl sm:text-3xl font-black text-[#161618]">2028</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-tight mt-1">B.Tech CSE OIST</p>
          </div>
        </div>
      </section>

      {/* ─── 7. ACHIEVEMENTS SECTION (Replaces "Trusted by Clients") ─── */}
      <section id="achievements" className="px-4 sm:px-8 max-w-6xl mx-auto py-16">
        <div className="text-center sm:text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C2B] block mb-2">
            HONORS & RECOGNITION
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#161618]">
            Key Achievements & Milestones<span className="text-[#FF5C2B]">.</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mt-3 leading-relaxed">
            Proven track record of building high-impact technology solutions under competitive national hackathon environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyAchievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FFF4ED] border border-[#FFE2D1] hover:border-[#FF5C2B]/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#FF5C2B]/30 group-hover:text-[#FF5C2B] transition-colors">
                      {item.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#FF5C2B]/10 text-[#FF5C2B] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#161618] mb-1 group-hover:text-[#FF5C2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FF5C2B] font-semibold mb-3">
                    {item.role} • {item.venue}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-5 mt-4 border-t border-[#FFE2D1] text-xs font-bold text-gray-700">
                  <Icon size={16} className="text-[#FF5C2B]" />
                  <span>National Hackathon Recognition</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 8. CALL TO ACTION: "Have a project in mind?" ─── */}
      <section id="contact" className="px-4 sm:px-8 max-w-6xl mx-auto py-10">
        <div className="bg-[#FF5C2B] text-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl shadow-[#FF5C2B]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
              LET'S WORK TOGETHER
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Have a project or opportunity? <br />
              <span className="underline decoration-white/30">Let's create something bold.</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#161618] hover:bg-black text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy ojashva.bhikonde@gmail.com</span>
                  <Copy size={14} className="ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ─── 9. FOOTER ─── */}
      <footer className="bg-[#161618] text-gray-400 mt-16 pt-16 pb-12 px-4 sm:px-8 rounded-t-[2.5rem]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <a href="#home" className="text-3xl font-black tracking-tight text-white flex items-center">
                <span>ojashva</span>
                <span className="text-[#FF5C2B]">.</span>
              </a>
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                Designing & engineering scalable full stack digital platforms and innovative solutions.
              </p>
              
              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://linkedin.com/in/ojashva-bhikonde-947a48331" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FF5C2B] text-white flex items-center justify-center text-xs transition-colors"
                >
                  <FaLinkedin size={14} />
                </a>
                <a 
                  href="https://github.com/ojashvabhikonde-dot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FF5C2B] text-white flex items-center justify-center text-xs transition-colors"
                >
                  <FaGithub size={14} />
                </a>
                <a 
                  href="mailto:ojashva.bhikonde@gmail.com" 
                  title="Email"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FF5C2B] text-white flex items-center justify-center text-xs transition-colors"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2 space-y-3">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Skills & Focus</h5>
              <ul className="space-y-2 text-xs">
                <li><span className="text-gray-400">Full Stack Web</span></li>
                <li><span className="text-gray-400">Digital Twin & SCADA</span></li>
                <li><span className="text-gray-400">UI/UX & Frontend</span></li>
                <li><span className="text-gray-400">Rapid Prototyping</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h5>
              <p className="text-xs text-gray-400">ojashva.bhikonde@gmail.com</p>
              <p className="text-xs text-gray-400">Bhopal, Madhya Pradesh, India</p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
            <p>© 2026 Ojashva Bhikonde. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#home" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LightThemeView;
