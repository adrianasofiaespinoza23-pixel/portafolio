import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  width?: "w-fit" | "w-full" | "inline" | "block";
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
}

export default function Reveal({
  children,
  width = "w-full",
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  xOffset = 0,
  scale = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  const containerClasses = 
    width === "inline"
      ? "inline-block"
      : width === "w-fit"
      ? "w-fit"
      : width === "block"
      ? "block"
      : "w-full";

  return (
    <div ref={ref} className={`${containerClasses} relative overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: yOffset, x: xOffset, scale }}
        animate={
          isInView
            ? { opacity: 1, y: 0, x: 0, scale: 1 }
            : { opacity: 0, y: yOffset, x: xOffset, scale }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo / easeOutQuart
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
