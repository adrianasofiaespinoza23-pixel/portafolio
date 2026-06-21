import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0b] text-[#8e8e91] py-8 border-t border-white/[0.04] select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-light">
        <div className="text-left font-sans">
          © 2026 Adriana Espinoza. Crafted with care.
        </div>
        
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
