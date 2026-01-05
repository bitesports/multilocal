"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const rotatingWords = [
  "Societies",
  "Network States",
  "Nation States",
  "Digital Neighborhoods",
  "Physical Neighborhoods",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Global network of cities connected by light trails"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ color: '#FFFFFF' }}
        >
          Multilocal
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-10 flex flex-col items-center gap-2"
        >
          <span>A launchpad for</span>
          {/* Dial container with background */}
          <span className="relative inline-block overflow-hidden bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-3 border border-white/20 shadow-lg min-w-[280px] md:min-w-[360px]">
            {/* Top gradient fade for dial effect */}
            <span className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none rounded-t-lg" />
            {/* Bottom gradient fade for dial effect */}
            <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none rounded-b-lg" />

            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0, rotateX: -45 }}
                animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                exit={{ y: "-100%", opacity: 0, rotateX: 45 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="font-semibold block text-white text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://tally.so/r/EkdQaX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-rausch hover:bg-rausch-dark text-white font-body font-medium rounded-lg transition-colors duration-200"
          >
            Apply as Citizen
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-body font-medium rounded-lg transition-colors duration-200 backdrop-blur-sm"
          >
            Launch a Society
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
