/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWorks from "./components/FeaturedWorks";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="relative bg-[#0a0a0b] text-[#f4f4f5] overflow-x-hidden selection:bg-white/[0.12]">
        <LoadingScreen isVisible={loading} />
        {/* Absolute full-screen border guidelines mimicking architecture drawing grids */}
        <div className="absolute inset-y-0 left-[8%] md:left-[12%] lg:left-[20%] w-px bg-white/[0.015] pointer-events-none z-30" />
        <div className="absolute inset-y-0 right-[8%] md:right-[12%] lg:right-[20%] w-px bg-white/[0.015] pointer-events-none z-30" />

        {/* Global Floating Navigation */}
        <Navbar />

        {/* Cinematic Hero Segment */}
        <Hero />

        {/* Warm Off-White About/Capabilities Manifest */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Premium Dark Works Carousel */}
        <ScrollReveal>
          <FeaturedWorks />
        </ScrollReveal>

        {/* Light Editorial Capabilities Matrix */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        {/* Dark Dialogue Contact Suite */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>

        {/* Fine-Spaced Footer signature */}
        <Footer />
      </div>
  );
}

