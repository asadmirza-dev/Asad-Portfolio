import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
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
      setResult("Form Submitted Successfully 👍🏻");
      event.target.reset();
    } else {
      setResult("Error! Please try again.");
    }
  };

  return (
    <section className="bg-neutral-950 text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden border-b border-neutral-900" id="contact">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Tag Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500">Great</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, a freelance inquiry, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: Professional Contact Info & CTA */}
          <div className="lg:col-span-5 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden group">
            
            {/* Background Glow Overlay */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for new projects</span>
              </div>

              {/* Bold Headline */}
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Let’s Work <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    Together.
                  </span>
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  I am open to full-time roles, freelance projects, and web development collaborations.
                </p>
              </div>

              {/* Quick Contact Details */}
              <div className="space-y-4 pt-4 border-t border-neutral-800/80">
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-cyan-400 group-hover/item:border-cyan-500/50 transition-colors">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Direct Email</p>
                    <a href="mailto:asadullah.dev@gmail.com" className="text-sm font-medium text-neutral-200 hover:text-cyan-400 transition-colors">
                      contact@asadullah.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover/item:border-emerald-500/50 transition-colors">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-neutral-200">
                      Pakistan (Remote Available)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-neutral-800/80 relative z-10">
              <p className="text-xs font-mono text-neutral-500 mb-3 uppercase tracking-wider">Connect with me</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-cyan-500/50 transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col justify-between">

            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400">Your Name</label>
                  <input
                    name='name'
                    type="text"
                    placeholder="Enter Name..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400">Your Email</label>
                  <input
                    name='email'
                    type="email"
                    placeholder="Enter Email..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400">
                  What can I help with? <span className="text-neutral-600">(Optional)</span>
                </label>
                <select
                  name="inquiry_type"
                  defaultValue=""
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Portfolio Feedback">Portfolio Feedback</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400">Message</label>
                <textarea
                  name='message'
                  rows="4"
                  placeholder="Hello, I would like to discuss a project..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 text-black font-extrabold text-sm rounded-2xl hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <FaPaperPlane size={14} />
                </button>
                {result && (
                  <span className="text-xs font-mono text-cyan-400 animate-pulse">
                    {result}
                  </span>
                )}
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;