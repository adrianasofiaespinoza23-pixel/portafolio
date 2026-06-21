import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll link
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-start py-20 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden bg-[#0a0a0b] text-neutral-100 select-none"
    >
      {/* Absolute Cinematic textured backgrounds with slow drifting glows */}
      <AnimatedBackground theme="dark" />

      {/* Main left-aligned layout container */}
      <div className="max-w-6xl w-full z-10 pt-16 md:pt-24">
        
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          className="flex flex-col items-start text-left z-20 space-y-8 md:space-y-10"
        >
          {/* 2. Massive Editorial Heading */}
          <div className="space-y-0 pt-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-sans font-light text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.6rem] leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-[#f0e6d6] to-[#af9675]"
            >
              I craft digital <br />
              experiences that <br />
              <span className="font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#dfd5c6] via-[#c2a781] to-[#9c805a]">inspire.</span>
            </motion.h1>
          </div>

          {/* 3. Sub-text perfectly formatted */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-sans text-[#8e8e91] text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
          >
            Software engineer specializing in building exceptional digital products. Focused on performance, design, and user experience.
          </motion.p>

          {/* 4. Elegant Clean Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollToSection("works")}
              className="px-6 md:px-8 py-3.5 rounded-full font-sans text-xs md:text-sm font-medium tracking-wide text-[#0a0a0b] bg-[#f5f5f3] hover:bg-white active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_10px_35px_rgba(255,255,255,0.06)]"
            >
              View my work
            </button>

            <button
              onClick={() => handleScrollToSection("contact")}
              className="px-6 md:px-8 py-3.5 rounded-full font-sans text-xs md:text-sm font-light tracking-wide text-[#8e8e91] hover:text-white bg-transparent border border-[#2a2a2b] hover:border-neutral-500 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Extreme Bottom Row: Scroll indicator mimicking reference */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => handleScrollToSection("about")}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors duration-300">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-neutral-800"
        />
      </motion.div>
    </section>
  );
}
