import React from "react";
import { motion } from "motion/react";
import AnimatedBackground from "./AnimatedBackground";
import Reveal from "./Reveal";
import aboutImage from "../assets/images/avatar1.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 md:py-36 overflow-hidden flex flex-col justify-center bg-[#f6f6f4] text-[#1a1a1c] select-none"
    >
      {/* Light editorial themed background */}
      <AnimatedBackground theme="light" />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 lg:px-20 z-10">
        
        {/* Section Identifier */}
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#71717a] mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          About me
        </div>

        {/* Diagonal layout dividing key statement and overview details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Large display philosophy manifesto */}
          <div className="lg:col-span-8 text-left">
            <Reveal yOffset={45} duration={1.1}>
              <h2 className="font-sans font-bold text-4xl sm:text-5xl uppercase tracking-wide text-[#111112]">
                ADRIANA ESPINOZA
              </h2>
              <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 mt-3 mb-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                Web Developer
              </div>
              <p className="font-display font-light text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#1a1a1c] leading-snug">
                Creating digital experiences with clarity, and purpose.
              </p>
            </Reveal>

            {/* Split paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 text-left">
              <Reveal yOffset={30} delay={0.1} duration={0.9}>
                <p className="font-sans text-[#4b5563] text-base md:text-lg leading-relaxed font-light">
                  I believe great websites should feel effortless. Every interface I build is designed to be intuitive, responsive, and visually engaging.
                </p>
              </Reveal>
              <Reveal yOffset={30} delay={0.2} duration={0.9}>
                <p className="font-sans text-[#4b5563] text-base md:text-lg leading-relaxed font-light">
                  Currently, I focus on building modern web applications while expanding my knowledge in AI and machine learning. I value simplicity, performance, and creating products that make a real impact.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Luxury 3D Avatar without card box layout */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] flex items-center justify-center group"
            >
            <img
                src={aboutImage}
                alt="Adriana Espinoza - About Section"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
