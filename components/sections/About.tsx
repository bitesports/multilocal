"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="about" background="white">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
        >
          What is Multilocal?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-8"
        >
          A global network society
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-lg md:text-xl text-foggy leading-relaxed mb-6"
        >
          Not tied to any single nation-state, but composed of citizens who already live, work, and create value across borders.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-lg md:text-xl text-foggy leading-relaxed mb-6"
        >
          Multilocal demonstrates how a jurisdiction can function when citizenship is voluntary, sovereignty is modular, and economic coordination is programmable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mt-8 px-6 py-4 rounded-2xl bg-kazan"
        >
          <p className="font-body text-hof font-medium">
            This is not a thought experiment. It is a <span className="text-rausch">live jurisdiction</span>.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
