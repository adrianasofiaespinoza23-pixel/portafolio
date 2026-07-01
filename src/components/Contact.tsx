import React from "react";
import { motion } from "motion/react";
import contactImage from "../assets/images/avatar2.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] py-24 overflow-hidden flex items-center justify-center bg-[#0a0a0b] text-white px-6 sm:px-12 md:px-20 lg:px-32"
    >
      <div className="max-w-[1000px] w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Original Project Proposal Card */}
        <div className="md:col-span-7 w-full order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left w-full relative"
          >
            {/* Top Label */}
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#8e8e91] mb-6 block">
              CONTACT
            </span>

            {/* Title with exact wording from reference image, styled with a gorgeous golden/champagne gradient */}
            <h2 className="font-sans tracking-tight leading-[1.1] mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-7xl">
              <span className="bg-gradient-to-br from-white via-[#f3e7d5] to-[#c2a781] bg-clip-text text-transparent font-light block">
                Let's build
              </span>
              <span className="bg-gradient-to-br from-[#f3e7d5] via-[#dbcdbb] to-[#9b805d] bg-clip-text text-transparent font-normal block mt-1">
                something
              </span>
              <span className="bg-gradient-to-br from-[#dbcdbb] via-[#c2a781] to-[#8a6e4d] bg-clip-text text-transparent font-normal block mt-1">
                great.
              </span>
            </h2>

            {/* Low-contrast description matching reference image exactly */}
            <p className="font-sans text-[#8e8e91] text-base md:text-lg leading-relaxed font-light mb-10 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Elegant Pill Button as seen in reference image */}
            <a
              id="contact-button"
              href="https://wa.me/593963538478?text=Hola%20Adriana%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium text-neutral-900 bg-[#f5f1eb] hover:bg-[#eadecc] px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.15)] group cursor-pointer"
            >
              Start a conversation
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Joyful 3D Full-Body Avatar & Social Links */}
        <div className="md:col-span-5 flex flex-col items-center text-center space-y-6 order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[285px] xs:max-w-[320px] aspect-[3/4] flex items-center justify-center group h-[380px] md:h-[420px]"
          >
            <img
              src={contactImage}
              alt="Adriana Espinoza - Contact Section"
              className="h-full w-full object-contain transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

