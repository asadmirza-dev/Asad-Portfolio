import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaMagic, FaLayerGroup } from "react-icons/fa";
import { Link } from 'react-router-dom';
import agency_img from '../assets/agency_site.png';
import twitter_site from '../assets/twitter_site.png';
import e_commernce_site from '../assets/e_commernce_site.png';
import education_site from '../assets/education_site.png';

const Projects = () => {

  const featuredProjects = [
    {
      id: 1,
      title: "Twitter / X Clone",
      category: "React.js & Tailwind CSS",
      badge: "Featured App",
      description: "A full-featured Twitter/X frontend clone featuring custom routing, dark mode UI, responsive tweet feeds, and dynamic user interaction components.",
      tags: ["React.js", "Tailwind CSS", "React Router", "Lucide Icons"],
      image: twitter_site,
      liveLink: "https://twitter-clone-using-tailwind-or-rea.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/Twitter-Clone-using-tailwind-or-react-js",
      accentColor: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      category: "HTML5, CSS3 & JavaScript",
      badge: "Vanilla Stack",
      description: "Interactive e-commerce storefront with dynamic product filtering, cart management, responsive grid layouts, and custom JavaScript state handling.",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation"],
      image: e_commernce_site,
      liveLink: "https://e-commerence-website.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/e-commerence-website",
      accentColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
    },
    {
      id: 3,
      title: "Education Website",
      category: "HTML5, CSS3 & JavaScript",
      badge: "Academic UI",
      description: "A clean, responsive educational platform interface designed for course viewing, structured curriculum presentation, and student portal layouts.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: education_site,
      liveLink: "https://learn-ui-eight.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/learnwell-ui",
      accentColor: "from-amber-500/10 via-amber-500/5 to-transparent",
      borderColor: "hover:border-amber-500/50",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]"
    },
    {
      id: 4,
      title: "Modern Agency Website",
      category: "React.js & Tailwind CSS",
      badge: "Client Agency",
      description: "High-converting corporate agency landing page with modern dark layout aesthetics, smooth section transitions, and responsive grid structures.",
      tags: ["React.js", "Tailwind CSS", "GSAP ScrollTrigger", "Vercel"],
      image: agency_img,
      liveLink: "https://agency-website-by-react.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/agency-website-by-react",
      accentColor: "from-purple-500/10 via-purple-500/5 to-transparent",
      borderColor: "hover:border-purple-500/50",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black via-[#080d1a] to-[#050811] text-white py-28 px-4 sm:px-8 lg:px-16 relative" id="projects">
      
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
          <FaLayerGroup size={13} />
          <span>Selected Projects</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Crafted With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">Precision & Logic</span>
        </h2>
        
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
          A collection of real-world applications, frontend clones, and responsive web interfaces built with modern technologies.
        </p>
      </div>

      {/* STACKED CARDS CONTAINER */}
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 relative pb-28">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            style={{ 
              top: `${100 + index * 70}px`,
              zIndex: index + 1 
            }}
            className={`sticky transition-all duration-300 ease-out group bg-neutral-950/95 backdrop-blur-2xl border border-neutral-800/80 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] ${project.borderColor} ${project.glowColor}`}
          >
            {/* Background Subtle Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-30 pointer-events-none group-hover:opacity-60 transition-opacity duration-300`} />

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[450px] items-center relative z-10">
              
              {/* LEFT SIDE: TEXT DETAILS */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-3.5 py-1.5 rounded-lg font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Buttons */}
                <div className="space-y-5 pt-4 border-t border-neutral-800/60">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-mono text-neutral-400 bg-black/60 border border-neutral-800 px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs sm:text-sm hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
                    >
                      <span>Live Preview</span>
                      <FaExternalLinkAlt size={13} />
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 font-semibold text-xs sm:text-sm hover:bg-neutral-800 hover:text-white transition-all duration-300 active:scale-95"
                    >
                      <FaGithub size={15} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: SCREENSHOT FRAME */}
              <div className="lg:col-span-6 relative group/img overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* SHOW MORE PROJECTS BUTTON */}
      <div className="mt-12 text-center relative z-20">
        <Link
          to="/ShowProjects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-white font-bold text-sm sm:text-base tracking-wide hover:bg-neutral-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 shadow-2xl active:scale-95 group cursor-pointer"
        >
          <FaMagic size={18} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span>Explore All Projects & Mini Apps</span>
          <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

    </section>
  );
};

export default Projects;