import React, { useState, useEffect, useRef } from 'react';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import gsap from 'gsap';
import asad_black from '../assets/hero_asad_pic_black.png';


const Hero = () => {
  const roles = ["Frontend Developer", "React Specialist", "Data Science Student"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(leftTextRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
      });

      tl.from(
        imageWrapperRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: 'back.out(1.7)',
        },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 flex items-center justify-center overflow-hidden bg-black text-white"
    >

      <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-4 opacity-20' >
        <source src="/hero_bg_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">


        <div ref={leftTextRef} className="flex flex-col items-start gap-5 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AVAILABLE FOR PROJECTS
          </div>

          <div className="space-y-1">
            <p className="text-xl md:text-2xl text-neutral-300 font-light flex items-center gap-2">
              Hi, I'm <span className="inline-block animate-bounce">👋</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Asad Ullah
            </h1>
          </div>

          <div className="text-2xl sm:text-3xl font-bold min-h-[44px] flex items-center gap-2">
            <span className="text-neutral-400">I am</span>
            <span className="text-cyan-400 transition-all duration-500 ease-in-out">
              {roles[currentRoleIndex]}
            </span>
          </div>

          <p className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed">
            Building responsive, high-performance web applications with modern frontend architectures and clean interactive design.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="/resume.pdf"
              download="Mirza_Asad_CV.pdf"
              className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-medium text-sm flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 shadow-lg"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: FaGithub, href: "https://github.com/asadmirza-dev" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/mirza-asad-dev/" },
              { icon: FaInstagram, href: "https://www.instagram.com/asadmirza_dev7/" },
              { icon: Mail, href: "mailto:asadmirza960i@gmail.com" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <div
            ref={imageWrapperRef}
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] flex items-center justify-center transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 animate-spin-slow scale-105"></div>

            <div className="absolute w-[85%] h-[85%] rounded-full bg-cyan-500/15 blur-3xl -z-10"></div>

            <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-neutral-800 bg-neutral-900 shadow-2xl [filter:drop-shadow(0_0_25px_rgba(6,182,212,0.3))]">
              <img
                src={asad_black}
                alt="Asad Ullah"
                className="w-full h-full object-cover bg-black object-top"
              />
            </div>

            <div className="absolute top-[0%] left-[8%] p-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl animate-float z-20">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="absolute top-[18%] -right-[2%] p-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl animate-float-delayed z-20">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="absolute bottom-[12%] -left-[3%] p-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl animate-float-delayed z-20">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Python" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="absolute -bottom-[1%] right-[12%] p-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl animate-float z-20">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;