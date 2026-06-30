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
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

