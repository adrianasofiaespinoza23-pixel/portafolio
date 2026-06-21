import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.96, y: 30 }
        }
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // Cinematic easeOutQuart
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
