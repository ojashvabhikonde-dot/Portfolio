import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030308] relative overflow-hidden">
      <div className="blob-animate w-40 h-40 -bottom-10 left-1/2 -translate-x-1/2 opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-xs sm:text-sm text-bodyText">
        <div>
          All Rights Reserved By <span className="text-white font-semibold">Ojashva Bhikonde</span>
        </div>

        <div>
          &#169; <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
