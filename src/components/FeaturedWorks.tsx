import { motion } from "motion/react";
import AnimatedBackground from "./AnimatedBackground";
import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";
import { Project } from "../types";

// Dynamic portfolio projects using beautifully pre-generated assets.
const PREMIUM_PROJECTS: Project[] = [
  {
    id: "atelier",
    title: "Atelier Studio",
    category: "Architecture Platform",
    client: "Design Atelier Ltd",
    year: "2025",
    image: "/src/assets/images/project_atelier_1781879561097.jpg",
    tech: ["React Node", "Three.js", "WebGL", "Tailwind CSS"],
    link: "https://github.com/adriana-espinoza/atelier-studio-visualizer",
    description: "An immersive digital design workspace configured for geometric modeling, architectural visualizers, and interactive structural layouts."
  },
  {
    id: "nova",
    title: "Nova Volumetric",
    category: "AI Lighting Simulation",
    client: "Lumina Labs S.A.",
    year: "2026",
    image: "/src/assets/images/project_nova_1781879574396.jpg",
    tech: ["Next.js", "WebGPU", "Gemini API", "Rust WASM"],
    link: "https://github.com/adriana-espinoza/nova-lighting-simulation",
    description: "A state-of-the-art illumination design and cloud light-scatter rendering engine utilizing deep-learning physics simulations."
  },
  {
    id: "horizon",
    title: "Horizon Prism",
    category: "Decentralized Renderer",
    client: "Horizon Films",
    year: "2025",
    image: "/src/assets/images/project_horizon_1781879587998.jpg",
    tech: ["Vite", "D3.js", "WebRTC", "TypeScript"],
    link: "https://github.com/adriana-espinoza/horizon-prism-renderer",
    description: "Real-time glass optical light-diffraction canvas that distributes decentralized cinematic asset computation with precision."
  },
  {
    id: "vesper",
    title: "Vesper Spatial Synth",
    category: "Interactive Audio Visual",
    client: "Mute Research",
    year: "2026",
    image: "/src/assets/images/project_vesper_1781879601769.jpg",
    tech: ["React SPA", "Web Audio API", "Framer Motion"],
    link: "https://github.com/adriana-espinoza/vesper-spatial-synth",
    description: "An elegant interactive synthesizer workspace connecting spatial audio arrays into beautifully organic fluid metal art motions."
  }
];

export default function FeaturedWorks() {
  return (
    <section
      id="works"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-center text-white select-none"
    >
      {/* Dark luxury background overlay with grids + animated blobs */}
      <AnimatedBackground theme="dark" />

      {/* Title Header with large typography and generous spacing */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 lg:px-20 mb-16 md:mb-24 z-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
          Selected Works
        </div>

        <div className="flex flex-col items-start">
          <Reveal yOffset={60} duration={1.2}>
            <h2 className="font-display font-light text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-neutral-100 sm:whitespace-nowrap">
              Featured <span className="font-normal italic text-white font-serif">Works</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Horizontal Scroll Showcase Gallery (ProjectRow) */}
      <div className="w-full z-10">
        <ProjectRow projects={PREMIUM_PROJECTS} />
      </div>

      {/* Cinematic decorative label */}
      <div className="absolute left-4 bottom-6 font-mono text-[9px] text-white/10 uppercase tracking-[0.4em] pointer-events-none hidden md:block">
        © 2026 Studio Showcase — Editorial Portfolio Layout
      </div>
    </section>
  );
}
