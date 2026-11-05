import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const navLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030308]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Subtle background blob in header */}
        <div className="blob-animate w-24 h-24 -top-8 -left-8 opacity-40"></div>

        {/* Logo */}
        <a href="#home" className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors z-10 flex items-center gap-2">
          <span>Ojashva Bhikonde</span>
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
        </a>

        {/* Desktop Nav Links & Theme Switcher */}
        <div className="hidden md:flex items-center gap-6 z-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-bodyText hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-5 w-[1px] bg-white/10"></div>
          <ThemeToggle showLabel={true} />
        </div>

        {/* Mobile Toggle & Switcher */}
        <div className="md:hidden flex items-center gap-3 z-10">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030308]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-bodyText hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
