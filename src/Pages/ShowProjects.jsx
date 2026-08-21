import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaExternalLinkAlt, FaCube, FaCloudSun, FaQuestionCircle, FaGamepad, FaLaptopCode } from 'react-icons/fa';
import gsap from 'gsap';

const ShowProjects = () => {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  cardsRef.current = []; // Array clear kar ke manual push handle karenge

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projectsList = [
    {
      id: 1,
      title: "3D Hero Page",
      category: "HTML5, CSS3 & JS",
      tag: "Interactive UI",
      description: "A visually striking hero section featuring perspective shifts, 3D transform layers, and smooth mouse-move interaction.",
      icon: <FaCube className="text-cyan-400" size={22} />,
      accentColor: "border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Weather Forecast App",
      category: "HTML5, CSS3 & Vanilla JS",
      tag: "API Integration",
      description: "Clean weather UI displaying dynamic temperature status, humidity indexes, and atmospheric conditions based on location input.",
      icon: <FaCloudSun className="text-amber-400" size={22} />,
      accentColor: "border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Interactive Quiz Application",
      category: "HTML5, CSS3 & JavaScript",
      tag: "Logic & DOM",
      description: "Dynamic quiz interface handling real-time score tracking, timer bounds, options validation, and instant summary screens.",
      icon: <FaQuestionCircle className="text-emerald-400" size={22} />,
      accentColor: "border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Animated Webpage Showcase",
      category: "HTML, CSS & JS Animations",
      tag: "CSS Keyframes",
      description: "Fluid web page layout showcasing custom CSS animations, scroll triggers, layered text masks, and subtle transitions.",
      icon: <FaLaptopCode className="text-purple-400" size={22} />,
      accentColor: "border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 5,
      title: "Stone Paper Scissors Game",
      category: "HTML5, CSS3 & Vanilla JS",
      tag: "Game Logic",
      description: "A fun classic hand game built with state management, automated computer turn generation, and score calculation.",
      icon: <FaGamepad className="text-rose-400" size={22} />,
      accentColor: "border-rose-500/30 hover:border-rose-400 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
      githubLink: "#",
      liveLink: "#"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const validCards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // Cards Animation (Explicit From & To state)
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.1
          }
        );
      }
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-950/20 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef}>
          <div className="flex items-center justify-between mb-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2.5 text-xs font-mono text-neutral-300 hover:text-cyan-400 bg-neutral-900/90 border border-neutral-800 px-4 py-2.5 rounded-xl transition-all duration-300 hover:border-cyan-500/40 shadow-lg group"
            >
              <FaArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Main Portfolio</span>
            </Link>

            <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/50 border border-cyan-800/40 px-3 py-1 rounded-lg">
              {projectsList.length} Mini Apps Showcase
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Mini Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">Code Labs</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              A complete collection of functional web experiments, DOM practice projects, and HTML/CSS/JS interactive tools built during development iterations.
            </p>
          </div>
        </div>

        {/* 3-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              ref={addToRefs}
              className={`group relative bg-neutral-900/80 backdrop-blur-xl border ${project.accentColor} rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}></div>

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-neutral-950 border border-neutral-800/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 bg-neutral-950 border border-neutral-800 px-3 py-1 rounded-md">
                    {project.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono text-cyan-400 font-medium">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                      className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      <FaCode size={15} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="p-2 text-neutral-400 hover:text-cyan-400 hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ShowProjects;