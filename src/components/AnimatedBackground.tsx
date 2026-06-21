import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface AnimatedBackgroundProps {
  theme?: "dark" | "light";
  interactive?: boolean;
}

export default function AnimatedBackground({
  theme = "dark",
  interactive = true,
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to center of the section container
      const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  if (theme === "dark") {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 -z-50 overflow-hidden bg-[#0a0a0b]"
        style={{
          boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Subtle Radial Gradient of obsidian and deep charcoal */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#0a0a0b] to-[#0a0a0b] opacity-95" />

        {/* Ambient Blurred Glow Effects */}
        <div className="absolute inset-0 opacity-40">
          {/* Cyan/Violet Blob 1 */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: mousePosition.x * 1.5,
              y: mousePosition.y * 1.5,
            }}
            className="absolute top-[10%] left-[15%] h-[400px] w-[400px] rounded-full bg-indigo-950/20 blur-[130px]"
          />

          {/* Warm Amber/Bronze Blob 2 */}
          <motion.div
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -30, 0],
              scale: [1, 0.9, 1.05, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              x: mousePosition.x * -1.2,
              y: mousePosition.y * -1.2,
            }}
            className="absolute bottom-[15%] right-[20%] h-[450px] w-[450px] rounded-full bg-neutral-800/30 blur-[140px]"
          />

          {/* Obsidian Soft Pearl Centre Glow */}
          <div className="absolute top-[40%] left-[45%] h-[350px] w-[350px] rounded-full bg-neutral-900/40 blur-[110px]" />
        </div>

        {/* Elegant Faint Grid Pattern */}
        <svg
          className="absolute inset-0 h-full w-full stroke-white/[0.02] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dark-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 64V.5H64" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dark-grid)" />
        </svg>

        {/* Dynamic Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />

        {/* SVG Organic Fractal Noise Overlays for textured luxury feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none mix-blend-overlay">
          <filter id="noiseFilterDark">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterDark)" />
        </svg>
      </div>
    );
  }

  // Soft Editorial Minimal Light Theme Background (Apple / Warm stone feels)
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-50 overflow-hidden bg-[#f6f6f4]"
    >
      {/* Editorial subtle stone gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#faf9f6] via-[#f6f6f4] to-[#efeedc] opacity-80" />

      {/* Floating subtle warm glow blobs with extremely low opacity */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          className="absolute top-[20%] left-[25%] h-[300px] w-[300px] rounded-full bg-stone-300/40 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            x: mousePosition.x * -0.4,
            y: mousePosition.y * -0.4,
          }}
          className="absolute bottom-[20%] right-[25%] h-[350px] w-[350px] rounded-full bg-neutral-300/30 blur-[120px]"
        />
      </div>

      {/* Faint elegant Grid Pattern for structured luxury looks */}
      <svg
        className="absolute inset-0 h-full w-full stroke-neutral-900/[0.025] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="light-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 80V.5H80" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-grid)" />
      </svg>

      {/* Smooth soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(240,239,235,0.4)_100%)] pointer-events-none" />

      {/* Fine analog paper texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.012] pointer-events-none mix-blend-multiply">
        <filter id="noiseFilterLight">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilterLight)" />
      </svg>
    </div>
  );
}
