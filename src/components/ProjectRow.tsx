import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

interface ProjectRowProps {
  projects: Project[];
}

export default function ProjectRow({ projects }: ProjectRowProps) {
  const items = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden slider-mask">
      <div className="animate-scroll-cards flex gap-8 w-max hover:[animation-play-state:paused]">
        {items.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-75 sm:w-95 md:w-115 group cursor-pointer focus:outline-none"
          >
            {/* Aspect Container */}
            <div className="relative aspect-video w-full rounded-4xl overflow-hidden bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-shadow duration-700">
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-70 z-10 transition-opacity duration-700 group-hover:opacity-85" />

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover rounded-4xl transition-transform duration-[1.5s] group-hover:scale-[1.08]"
              />

              {/* Client and Year */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-center z-20">
                <span className="font-mono text-[9px] sm:text-xs text-white/70 backdrop-blur-md bg-black/40 py-1 px-2.5 sm:px-3.5 rounded-full border border-white/10 uppercase tracking-widest">
                  {project.client}
                </span>
                <span className="font-mono text-[9px] sm:text-xs text-white/70 backdrop-blur-md bg-black/40 py-1 px-2.5 sm:px-3.5 rounded-full border border-white/10">
                  {project.year}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white text-[#0a0a0b] flex items-center justify-center opacity-0 translate-y-4 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 z-20 shadow-lg">
                <ArrowUpRight className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Description */}
              <div className="absolute bottom-4 left-4 right-16 sm:bottom-6 sm:left-6 sm:right-16 z-20 text-left opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                <p className="text-xs sm:text-sm text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Labels Under the Image */}
            <div className="mt-5 flex flex-col items-start px-1 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1.5 sm:gap-4">
                <h3 className="font-display font-medium text-lg sm:text-xl md:text-2xl text-neutral-100 group-hover:text-white transition-colors duration-300 tracking-tight leading-tight">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] sm:text-xs text-[#8e8e91] uppercase tracking-widest sm:self-end">
                  {project.category}
                </span>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 w-full">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400 bg-neutral-900/60 border border-neutral-800 px-2.5 py-1 rounded-full group-hover:border-neutral-700 group-hover:text-neutral-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
