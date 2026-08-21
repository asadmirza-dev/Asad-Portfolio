import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaCode, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaCheckCircle, FaLaptopCode, FaBolt } from 'react-icons/fa';
import gsap from 'gsap';

const CaseStudy = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);


  const caseStudies = [
    {
      id: "twitter-clone",
      isFeatured: true, // Takes full row / big bento card
      title: "Twitter / X Clone",
      subtitle: "A responsive social media interface built with React and Tailwind CSS.",
      myRole: "I built reusable components, dynamic routes, interactive UI states, and a dark-mode interface inspired by Twitter/X.",
      category: "React.js & Tailwind CSS",
      badge: "Flagship Case Study",
      description: "A comprehensive deep-dive into engineering a scalable, responsive Twitter/X clone. Focused on component modularity, seamless UI transitions, and dark-mode aesthetic performance.",
      problem: "Building a complex social media frontend requires handling rich state management, custom routing, and rendering smooth interactive feeds without performance lag.",
      solution: "Engineered modular React components paired with Tailwind CSS utility architecture and React Router. Implemented responsive layout grids, custom tweet creation handlers, and optimized DOM rendering.",
      keyFeatures: [
        "React.js",
        "Dynamic Dark-Mode Aesthetic UI System",
        "Responsive Tweet Feed Layout with Interactive Components",
        "GSAP Micro-Interactions & State Animations"
      ],
      techStack: ["React.js", "Tailwind CSS", "React Router", "GSAP", "Lucide Icons"],
      liveLink: "https://twitter-clone-using-tailwind-or-rea.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/Twitter-Clone-using-tailwind-or-react-js"
    },
    {
      id: "weather-app",
      isFeatured: false,
      title: "Dynamic Weather Forecast System",
      subtitle: "A weather app that fetches live data from an API and updates the interface based on the selected city.",
      myRole: " API integration, async JavaScript, loading states, and responsive UI..",
      category: "Vanilla JavaScript",
      badge: "API Architecture",
      description: "Focuses on fetch API error handling, async data parsing, and dynamic UI state updates without external dependencies.",
      problem: "Managing unpredictable weather API response states and dynamic layout color shifts based on live conditions.",
      solution: "Structured native JS promises and async/await handlers with dynamic DOM manipulation for seamless UI state updates.",
      keyFeatures: ["Async Weather API Integration", "Dynamic UI Theme Shifts", "Error Handling & Fallback UI"],
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST API"],
      liveLink: "https://responsive-weather-app-chi.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/Responsive-Weather-app"
    },
    {
      id: "e-commerce",
      isFeatured: false,
      title: "E-Commerce Cart System",
      subtitle: "A simple shopping cart built with HTML, CSS, and JavaScript.",
      myRole: "My Role: Product display, cart logic, quantity controls, and localStorage.",
      category: "Vanilla JavaScript",
      badge: "Cart System",
     description: "I made a basic e-commerce website where users can add products to the cart, change quantities, remove items, and keep their cart data saved in the browser.",
      problem: "I wanted to learn how an online shopping cart works and how product data can be saved even after refreshing the page.",
      solution: "I used JavaScript to add products to the cart, update the total price, change product quantity, remove items, and save cart data in localStorage.",
     keyFeatures: [
  "Add products to cart",
  "Increase or decrease product quantity",
  "Remove products from cart",
  "Automatic total price calculation",
  "Cart data saved with localStorage"
],
     techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
      liveLink: "https://e-commerence-website.vercel.app/",
      githubLink: "https://github.com/asadmirza-dev/e-commerence-website"
    }
  ];

  // GSAP Modal Animation
  useEffect(() => {
    if (selectedCaseStudy && modalRef.current && modalContentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [selectedCaseStudy]);

  const closeModal = () => {
    if (modalRef.current && modalContentRef.current) {
      gsap.to(modalContentRef.current, { opacity: 0, y: 20, scale: 0.95, duration: 0.2 });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => setSelectedCaseStudy(null)
      });
    } else {
      setSelectedCaseStudy(null);
    }
  };

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16 relative" id="casestudies">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
            <FaLayerGroup size={13} />
            <span>In-Depth Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">Case Studies</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
          A closer look at the problems, decisions, and technologies behind my projects.
          </p>
        </div>

        {/* BENTO GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`group bg-neutral-900/70 border border-neutral-800 hover:border-cyan-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden ${
                study.isFeatured ? "lg:col-span-12 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-cyan-950/20" : "lg:col-span-6"
              }`}
            >
              {/* Card Header */}
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1.5 rounded-lg font-medium">
                    {study.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {study.category}
                  </span>
                </div>

                <div>
                  <h3 className={`font-extrabold text-white group-hover:text-cyan-300 transition-colors ${study.isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                    {study.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm font-medium mt-1">
                    {study.subtitle}
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-3 font-light">
                    {study.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono text-neutral-400 bg-neutral-950 border border-neutral-800 px-3 py-1 rounded-md">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-8 mt-8 border-t border-neutral-800/80 flex items-center justify-between relative z-10">
                <span className="text-xs text-neutral-400 italic">
                  My Role: <span className="text-neutral-300">{study.myRole}</span>
                </span>
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-colors duration-300 shadow-md cursor-pointer shrink-0"
                >
                  <span>Read Full Case Study</span>
                  <FaBolt size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CASE STUDY POPUP MODAL */}
      {selectedCaseStudy && (
        <div ref={modalRef} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            ref={modalContentRef}
            className="bg-neutral-900 border border-neutral-800 text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl space-y-8"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition-colors cursor-pointer"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Header */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-md">
                {selectedCaseStudy.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {selectedCaseStudy.title}
              </h3>
              <p className="text-neutral-400 text-sm font-light">
                {selectedCaseStudy.subtitle}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 space-y-2">
              <h4 className="text-sm font-mono text-cyan-400 font-semibold flex items-center gap-2">
                <FaLaptopCode size={16} />
                <span>I wanted to learn...</span>
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                {selectedCaseStudy.problem}
              </p>
            </div>

            {/* Solution & Engineering Strategy */}
            <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 space-y-2">
              <h4 className="text-sm font-mono text-emerald-400 font-semibold flex items-center gap-2">
                <FaCheckCircle size={16} />
                <span>The Solution is...</span>
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                {selectedCaseStudy.solution}
              </p>
            </div>

            {/* Key Features & Architecture Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-neutral-300 font-semibold">
                Architectural Highlights & Key Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCaseStudy.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-neutral-950/50 border border-neutral-800/80 p-3 rounded-xl text-xs text-neutral-300">
                    <FaCheckCircle className="text-cyan-400 shrink-0" size={13} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-neutral-800 flex items-center gap-4">
              <a
                href={selectedCaseStudy.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
              >
                <span>Live Project Demo</span>
                <FaExternalLinkAlt size={12} />
              </a>
              <a
                href={selectedCaseStudy.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-950 text-neutral-300 border border-neutral-800 font-semibold text-xs hover:text-white transition-colors"
              >
                <FaCode size={14} />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudy;