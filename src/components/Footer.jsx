import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Ojashva Bhikonde. All rights reserved.
        </p>
        <div className="text-sm text-gray-500">
          Designed & Built with React, Tailwind & Three.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
