import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaTools, FaLaptopCode } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Engineering",
      icon: <FaCode className="text-cyan-400" size={20} />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "GSAP Animations",
        "HTML5 & CSS3",
        "Responsive Design"
      ]
    },
    {
      id: 2,
      title: "Currently Learning Backend",
      icon: <FaServer className="text-emerald-400" size={20} />,
      skills: [
        "Node.js Basics",
        "Express.js Basics",
        "MongoDB Basics",
        "Mongoose Basics",
        "REST API Basics",
        "Authentication Concepts"
      ]
    },
    {
      id: 3,
      title: "Tools I Use",
      icon: <FaTools className="text-purple-400" size={20} />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Vercel",
        "Web3Forms",
        "Postman"
      ]
    }
  ];

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

      gsap.fromTo(
        cardsRef.current.children,
        {
          opacity: 0,
          y: 35,
          scale: 0.97,
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
      className="bg-neutral-950 text-white py-24 px-4 sm:px-8 lg:px-16 relative border-b border-neutral-900"
      id="skills"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FaLaptopCode size={14} />
            <span>My Skills</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">
              Tools
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Technologies I use in my projects and topics I am currently learning.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono text-neutral-300 bg-neutral-950 border border-neutral-800/80 px-3.5 py-1.5 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;