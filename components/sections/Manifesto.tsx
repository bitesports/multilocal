"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const principles = [
  { text: "Give global citizens representation", highlight: true },
  { text: "Create collective leverage through coordination", highlight: false },
  { text: "Preserve local cultures while enabling global mobility", highlight: false },
];

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="manifesto" background="white">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Our Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof"
          >
            Manifesto
          </motion.h2>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-12 py-8 px-8 md:px-12 bg-rausch rounded-2xl"
        >
          <p className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug text-center">
            "In a world where capital, labor, and intelligence are global, political coordination must be global as well."
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg text-foggy text-center leading-relaxed mb-12"
        >
          Traditional nation-states were designed for a world where people lived and worked in one place. That world no longer exists for a growing share of the population.
        </motion.p>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="font-heading text-lg font-semibold text-hof text-center mb-8">
            Multilocal exists to
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div
                key={principle.text}
                className={`relative p-6 rounded-2xl text-center ${
                  principle.highlight
                    ? "bg-rausch text-white"
                    : "border border-limewash bg-white text-hof"
                }`}
              >
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center ${
                  principle.highlight ? "bg-white" : "bg-rausch"
                }`}>
                  <span className={`font-body text-xs font-semibold ${
                    principle.highlight ? "text-rausch" : "text-white"
                  }`}>
                    {index + 1}
                  </span>
                </div>
                <p className="font-body leading-relaxed pt-2">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-lg text-foggy text-center mt-12"
        >
          A jurisdiction built for the internet age—
          <span className="text-hof font-medium"> without erasing the physical world.</span>
        </motion.p>
      </div>
    </Section>
  );
}
