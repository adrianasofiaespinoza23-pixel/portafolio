import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0b] text-[#8e8e91] py-8 border-t border-white/4 select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-light">
        <div className="text-left font-sans">
          © 2026 Adriana Espinoza. Crafted with care.
        </div>

        <a
          href="https://github.com/adrianasofiaespinoza23-pixel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 hover:text-white transition-colors duration-300 group font-sans"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
          <span>GitHub</span>
        </a>

        <button
          onClick={handleScrollTop}
          className="flex items-center gap-2 hover:text-white transition-colors duration-300 bg-transparent border-0 cursor-pointer group font-sans"
        >
          <span>Back to top</span>
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
