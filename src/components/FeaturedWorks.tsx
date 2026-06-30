import { motion } from "motion/react";
import AnimatedBackground from "./AnimatedBackground";
import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";
import { Project } from "../types";

const PREMIUM_PROJECTS: Project[] = [
  {
    id: "coffeeee",
    title: "Coff-ee",
    category: "Restaurant Landing Page",
    client: "Coff-ee",
    year: "2025",
    image: "/src/assets/images/project_coffeeee.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://cafe-zular.vercel.app/",
    description: "Landing page for a coffee shop with menu, specialties, reviews and online reservation system."
  },
  {
    id: "stronggait",
    title: "Strong Gait",
    category: "Health Services Website",
    client: "Strong Gait",
    year: "2025",
    image: "/src/assets/images/project_stronggait.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://stronggait.com/",
    description: "Professional website for a home physiotherapy service covering all of Quito, with appointment scheduling and service listings."
  },
  {
    id: "new",
    title: "NEW",
    category: "Fashion E-Commerce",
    client: "NEW Store",
    year: "2026",
    image: "/src/assets/images/project_new.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://new-smoky-omega.vercel.app/",
    description: "Elegant fashion e-commerce store with collections, product catalog, cart and user account management."
  },
  {
    id: "gymignacio",
    title: "Gym Ignacio",
    category: "Fitness Landing Page",
    client: "Gym Ignacio",
    year: "2025",
    image: "/src/assets/images/project_gymignacio.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://gym-ignacio.vercel.app/",
    description: "Premium fitness center landing page showcasing classes, multiple locations and membership pricing."
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
