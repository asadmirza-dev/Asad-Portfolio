import React, { useEffect, useRef } from 'react';
import { Code2, Cpu, GraduationCap, Sparkles, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import asad_natural from '../assets/hero_asad_pic_natural.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const techStack = [
    "React.js", "JavaScript (ES6+)", "Tailwind CSS", "GSAP Animations",
    "Node.js", "Express.js", "MongoDB", "Python", "HTML5 & CSS3", "Git & GitHub"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".about-animate").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className=" bg-neutral-950  text-white overflow-hidden" ref={sectionRef} id="about">

      <div className="w-full bg-neutral-950 border-y border-neutral-800/80 py-4 overflow-hidden relative select-none">

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-8">
          {techStack.concat(techStack).map((tech, index) => (
            <div key={index} className="flex items-center gap-3 text-neutral-400 font-mono text-sm tracking-wide px-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-6 md:px-16 container mx-auto relative z-10">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="flex flex-col items-center text-center gap-3 mb-16 about-animate">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Crafting Digital Experiences <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              With Code & Logic
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">

          <div className="lg:col-span-4 bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-4 flex items-center justify-center relative overflow-hidden about-animate group">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full rounded-2xl overflow-hidden border border-neutral-800">
              <img
                src={asad_natural}
                alt="Asad Ullah"
                className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
                onLoad={() => ScrollTrigger.refresh()} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-mono text-cyan-400">DEVELOPER & STUDENT</p>
                <p className="text-sm font-bold text-white">Asad Ullah</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-neutral-900/50 border border-neutral-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden about-animate hover:border-neutral-700 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <Terminal size={24} />
                <span className="font-mono text-sm tracking-wider uppercase">Who I Am</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Hi, I'm <span className="text-cyan-400">Asad Ullah</span> — A Web Developer & Data Science Student.
              </h3>

              <p className="text-neutral-400 text-base leading-relaxed">
                I build responsive and interactive frontend websites using
                <strong className="text-neutral-200 font-semibold"> React.js, Tailwind CSS</strong>, and
                <strong className="text-neutral-200 font-semibold"> GSAP animations</strong>.
                I enjoy creating clean layouts, reusable components, and smooth user experiences.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                I am currently studying <strong className="text-neutral-200 font-semibold">BS Data Science at the University of Sargodha</strong>.
                Along with frontend development, I am learning backend basics with Node.js, Express.js, and MongoDB.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-neutral-800/80">
              <div>
                <h4 className="text-xs text-neutral-500 uppercase font-mono">Location</h4>
                <p className="text-sm font-medium text-neutral-200">Sargodha, PK</p>
              </div>
              <div>
                <h4 className="text-xs text-neutral-500 uppercase font-mono">Focus</h4>
                <p className="text-sm font-medium text-neutral-200">Frontend / MERN</p>
              </div>
              <div>
                <h4 className="text-xs text-neutral-500 uppercase font-mono">Degree</h4>
                <p className="text-sm font-medium text-neutral-200">BS Data Science</p>
              </div>
            </div>
          </div>

        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-cyan-500/40 transition-all duration-300">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Modern Frontend</h4>
              <p className="text-neutral-400 text-xs mt-1">Responsive, dynamic UIs with React, Tailwind, and interactive GSAP effects.</p>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-emerald-500/40 transition-all duration-300">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Academic Grounding</h4>
              <p className="text-neutral-400 text-xs mt-1">Data Science student at UOS with strong logic design and algorithmic practice.</p>
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-purple-500/40 transition-all duration-300">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Stack Vision</h4>
              <p className="text-neutral-400 text-xs mt-1">Expanding backend skills with Express.js, MongoDB schemas, and REST APIs.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default About;