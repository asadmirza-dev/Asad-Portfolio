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
      title: "Food Landing Page",
      category: "HTML5, CSS3 & JS",
      tag: "Interactive UI",
      description: "A food website landing page with a responsive layout, CSS 3D effects, and mouse-move animations in the hero section.",
      icon: <FaCube className="text-cyan-400" size={22} />,
      accentColor: "border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      githubLink: "https://github.com/asadmirza-dev/Full-Responsive-food-website",
      liveLink: "https://full-responsive-food-website.vercel.app/"
    },
    {
      id: 2,
      title: "Weather Forecast App",
      category: "HTML5, CSS3 & Vanilla JS",
      tag: "Weather API",
      description: "A weather app that fetches live weather data and shows the temperature, humidity, wind speed, and weather condition for a searched city.",
      icon: <FaCloudSun className="text-amber-400" size={22} />,
      accentColor: "border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      githubLink: "https://github.com/asadmirza-dev/Responsive-Weather-app",
      liveLink: "https://responsive-weather-app-chi.vercel.app/"
    },
    {
      id: 3,
      title: "Interactive Quiz Application",
      category: "HTML5, CSS3 & JavaScript",
      tag: "JavaScript Logic",
      description: "A quiz app with multiple-choice questions, a timer, score tracking, and a final result screen.",
      icon: <FaQuestionCircle className="text-emerald-400" size={22} />,
      accentColor: "border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      githubLink: "https://github.com/asadmirza-dev/Quiz-app-by-js",
      liveLink: "https://quiz-app-by-js-mauve.vercel.app/"
    },
    {
      id: 4,
      title: "Animated Webpage Showcase",
      category: "HTML, CSS & JS Animations",
      tag: "CSS Animations",
      description: "A landing page built to practice CSS keyframe animations, hover effects, text animations, and smooth section transitions.",
      icon: <FaLaptopCode className="text-purple-400" size={22} />,
      accentColor: "border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      githubLink: "https://github.com/asadmirza-dev/Modern-animated-webpage",
      liveLink: "https://modern-animated-webpage.vercel.app/"
    },
    {
      id: 5,
      title: "Stone Paper Scissors Game",
      category: "HTML5, CSS3 & Vanilla JS",
      tag: "Game Logic",
      description: "A simple browser game where the user plays against the computer, with random choices and live score updates.",
      icon: <FaGamepad className="text-rose-400" size={22} />,
      accentColor: "border-rose-500/30 hover:border-rose-400 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
      githubLink: "https://github.com/asadmirza-dev/stone-paper-secissor-game-",
      liveLink: "https://stone-paper-secissor-game.vercel.app/"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const validCards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

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

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-950/20 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

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
              Small projects I built while practicing HTML, CSS, JavaScript, animations, APIs, and DOM manipulation.
            </p>
          </div>
        </div>

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