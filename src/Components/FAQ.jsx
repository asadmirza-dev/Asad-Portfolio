import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What primary tech stack do you specialize in?",
      answer: "I specialize in modern JavaScript web development, primarily focusing on React.js, Tailwind CSS, GSAP for smooth interactive animations on the frontend, and Node.js with Express & MongoDB for full-stack applications."
    },
    {
      question: "Are you available for full-time frontend roles or freelance projects?",
      answer: "Yes! I am actively looking for full-time frontend/web developer roles as well as custom freelance projects. Feel free to connect via the contact form or direct message."
    },
    {
      question: "Can you convert Figma or web designs into responsive React components?",
      answer: "Absolutely. I focus on translating designs into clean, responsive, and pixel-perfect React components using modern utility frameworks like Tailwind CSS."
    },
    {
      question: "How do you handle routing and navigation in single-page apps (SPAs)?",
      answer: "I utilize React Router for client-side routing, enabling seamless view switching and link updates without triggering full browser reloads."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#080d1a] to-[#050811] text-white py-24 px-4 sm:px-8 lg:px-16 relative" id="faqs">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FaQuestionCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Questions</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Quick answers to common questions regarding my development workflow, tech stack, and availability.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown 
                    size={16} 
                    className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;