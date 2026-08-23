import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import { FaPaperPlane } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';


gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionref = useRef(null)
  const headerRef = useRef(null)
  const cardref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        headerRef.current.children, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
      }
      );
      gsap.fromTo(
        cardref.current, {
        opacity: 0,
        y: 35,
        scale: 0.97
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardref.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
      }
      );
      ScrollTrigger.refresh();
    }, sectionref)

    return () => {
      ctx.revert()
    }
  }, [])


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2ffa9815-5df5-403b-9416-58958817a146");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully 👍🏻");
      event.target.reset();
    } else {
      setResult("Error! Please try again.");
    }
  };

  return (
    <section ref={sectionref} className="bg-neutral-950 text-white py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto space-y-12">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="text-center space-y-2">
          <span className="text-xs  font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
            <HiEnvelope className="text-cyan-400 text-sm" />
            Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div ref={headerRef} className="lg:col-span-6 space-y-5">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Work</span> <br />
              Together
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
              Have a project in mind or just want to chat? Drop a message below and I'll get back to you as soon as possible.
            </p>
          </div>

          <div ref={cardref} className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form className="space-y-5" onSubmit={onSubmit}>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase">Name</label>
                <input
                  name='name'
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase">Email</label>
                <input
                  name='email'
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase">Message</label>
                <textarea
                  name='message'
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-400 text-black font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-cyan-300 transition-all shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane size={12} />
              </button>

              {result && (
                <p className="text-xs font-mono text-cyan-400 text-center animate-pulse">
                  {result}
                </p>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;