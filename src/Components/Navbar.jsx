import React, { useState } from 'react';
import { Menu, X, Home, User, FolderKanban, BookOpen, Briefcase, Wrench, Moon } from 'lucide-react';
import asad_img from '../assets/hero_asad_pic_natural.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Case Studies', href: '#casestudies', icon: BookOpen },
    { name: 'Skills', href: '#skills', icon: Briefcase },
    { name: 'FAQs', href: '#faqs', icon: Wrench },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-neutral-800/50 px-6 py-4 flex items-center justify-between  md:justify-evenly w-full  ">
        <a href="#home" className="text-2xl font-bold tracking-wider text-cyan-400">
          Asad Ullah
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg text-neutral-300 hover:text-white transition">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="px-5 py-2 text-xs font-semibold uppercase tracking-wider border-2 text-white  border-cyan-500/50 rounded-full hover:bg-cyan-500/50 transition">
            Contact Me
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-300 hover:text-white">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div className={`fixed inset-y-0 right-0 z-50 w-72 bg-neutral-950/95 backdrop-blur-lg border-l border-neutral-800 p-6 flex flex-col justify-between transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <span className="text-xl font-bold text-cyan-400">Asad Ullah</span>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col items-center my-6 text-center">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400 overflow-hidden mb-2">
              <img src={asad_img} alt="Asad Ulah" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold text-white">Asad Ulah</h3>
            <p className="text-xs text-neutral-400">Frontend & Web Developer</p>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 rounded-xl hover:bg-neutral-800/60 transition"
                >
                  <Icon size={18} className="text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-2.5 text-center text-sm font-medium text-white bg-cyan-600 rounded-xl hover:bg-cyan-500 transition">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;