import React, { useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaMagic, FaLayerGroup } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Projectsdetails } from '../Data/Projectdetails';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-[#080d1a] to-[#050811] text-white py-24 px-4 sm:px-8 lg:px-16"
      id="projects"
    >
      <div
        ref={headerRef}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
          <FaLayerGroup size={13} />
          <span>Selected Projects</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Crafted With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">
            Precision & Logic
          </span>
        </h2>

        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
          A collection of frontend projects built with React, JavaScript,
          Tailwind CSS, and responsive design.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32 relative pb-40">
        {Projectsdetails.map((project, index) => (
          <div
            key={project.id || index}
            style={{
              top: `${96 + index * 65}px`,
              zIndex: index + 1
            }}
            className={`relative sticky group bg-neutral-950/95 border border-neutral-800/80 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-lg shadow-black/40 hover:border-neutral-700 transition-colors duration-300 ${project.borderColor}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-20 pointer-events-none`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[450px] items-center relative z-10">
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1.5 rounded-lg">
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

                  <div className="flex flex-wrap items-center gap-3 pt-1">
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

              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center relative z-20">
        <Link
          to="/ShowProjects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-white font-bold text-sm sm:text-base tracking-wide hover:bg-neutral-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 shadow-xl active:scale-95 group cursor-pointer"
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