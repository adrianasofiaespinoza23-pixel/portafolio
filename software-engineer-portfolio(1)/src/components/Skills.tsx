import React from "react";
import { motion } from "motion/react";
import AnimatedBackground from "./AnimatedBackground";
import Reveal from "./Reveal";

const SKILL_CATEGORIES = [
  {
    title: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js"
    ]
  },
  {
    title: "BACKEND",
    items: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "REST APIs"
    ]
  },
  {
    title: "TOOLS & DEVOPS",
    items: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Vercel",
      "Figma"
    ]
  },
  {
    title: "DESIGN",
    items: [
      "UI/UX Design",
      "Design Systems",
      "Framer",
      "Prototyping",
      "Motion Design"
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-center bg-[#f6f6f4] text-[#1a1a1c] select-none border-t border-neutral-900/[0.03]"
    >
      {/* Light editorial themed background matching About section */}
      <AnimatedBackground theme="light" />

      <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 md:px-20 lg:px-32 z-10">
        
        {/* Expertise Tag */}
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#a19e95] mb-6 flex items-center">
          EXPERTISE
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <Reveal yOffset={45} duration={1.1}>
            <h2 className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-[#1a1a1c] leading-[1.15] pb-4 relative z-10">
              Skills & <br />
              <span className="font-normal text-[#1a1a1c]">technologies.</span>
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-12 md:mt-14">
            <Reveal yOffset={30} delay={0.15} duration={1}>
              <p className="font-sans text-[#7c7569] text-base md:text-lg leading-relaxed font-light max-w-2xl">
                A curated toolkit refined over years of building production applications at scale.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 2x2 Grid matching reference image precisely */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: 0.9,
                delay: catIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#faf9f6]/80 backdrop-blur-md hover:bg-white border border-[#e8e6df] shadow-[0_4px_24px_rgba(26,26,28,0.02)] hover:shadow-[0_20px_45px_rgba(26,26,28,0.04)] rounded-[1.8rem] p-8 md:p-10 transition-all duration-500 text-left"
            >
              {/* Category label with horizontal line indicator */}
              <div className="flex items-center gap-3 mb-8">
                <span className="h-[2px] w-6 bg-[#af9675]/80" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#af9675] font-semibold">
                  {category.title}
                </span>
              </div>

              {/* Grid / flex wrap of skills tags precisely styled as pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-4.5 py-2.5 rounded-full text-xs md:text-sm font-light text-[#5a5852] bg-[#f0ede4]/60 border border-[#e4ded2]/75 hover:bg-white hover:border-[#cfc6b5] hover:text-[#1a1a1c] transition-all duration-300 cursor-default shadow-sm font-sans"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

