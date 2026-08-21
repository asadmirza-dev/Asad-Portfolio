import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-8 px-4 sm:px-8 lg:px-16 border-t border-neutral-900 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        
        {/* Left Side: Copyright */}
        <div>
          © 2026 <span className="text-white font-bold">Asad Ullah</span>. Built with React & Tailwind CSS.
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-4 text-neutral-500">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <span>•</span>
          <a href="#casestudies" className="hover:text-cyan-400 transition-colors">Case Study</a>
          <span>•</span>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-cyan-500/50 transition-all active:scale-95 cursor-pointer"
        >
          <span>Back to Top</span>
          <FaArrowUp size={12} className="text-cyan-400" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;