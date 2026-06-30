import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -80;
      const yValue = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yValue, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 select-none ${
          scrolled
            ? "py-4 bg-[#0a0a0b]/60 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Logo / Brand signature */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-display font-medium text-base tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-neutral-300">
                A. ESPINOZA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => handleNavClick("about")}
              className="font-mono text-xs uppercase tracking-widest text-[#8e8e91] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("works")}
              className="font-mono text-xs uppercase tracking-widest text-[#8e8e91] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick("skills")}
              className="font-mono text-xs uppercase tracking-widest text-[#8e8e91] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="font-mono text-xs uppercase tracking-widest text-[#8e8e91] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right side is intentionally empty for minimalist layout */}
          <div className="hidden md:block w-32" />

          {/* Mobile Menu Icon Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Drawer Menu (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0a0a0b]/60 backdrop-blur-2xl z-40 flex flex-col justify-center px-6 sm:px-12 pointer-events-auto"
          >
            {/* Visual background lines inside mobile drawer */}
            <div className="absolute inset-x-0 top-0 h-full w-full opacity-5 pointer-events-none stroke-white/[0.2]">
              <svg className="w-full h-full">
                <line x1="25%" y1="0" x2="25%" y2="100%" />
                <line x1="75%" y1="0" x2="75%" y2="100%" />
              </svg>
            </div>

            {/* Mobile Drawer Navigation Links */}
            <div className="flex flex-col gap-8 z-10 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8e8e91]">
                Navigation
              </span>
              <button
                onClick={() => handleNavClick("about")}
                className="font-display font-light text-4xl text-neutral-200 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("works")}
                className="font-display font-light text-4xl text-neutral-200 hover:text-white transition-colors text-left"
              >
                Work
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className="font-display font-light text-4xl text-neutral-200 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="font-display font-light text-4xl text-neutral-200 hover:text-white transition-colors text-left"
              >
                Contact
              </button>

              <div className="mt-8 h-px bg-white/[0.04]" />

              <div className="pt-2 text-left">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8e8e91] block mb-1">
                  Portfolio
                </span>
                <span className="font-sans text-xs text-neutral-400 font-light">
                  © 2026 Adriana Espinoza
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
