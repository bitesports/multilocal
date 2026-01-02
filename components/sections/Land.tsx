"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const landBenefits = [
  {
    title: "Physical anchors",
    description: "Real-world presence for the network",
    highlight: false,
  },
  {
    title: "Legal interfaces",
    description: "Bridge between network and nation-states",
    highlight: true,
  },
  {
    title: "Gathering spaces",
    description: "For communities to build and experiment",
    highlight: false,
  },
];

const treasuryBenefits = [
  "Treasury secures long-term, non-dilutive assets",
  "Citizens co-own physical infrastructure",
  "Jurisdictional claims become tangible",
];

export default function Land() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="land" background="gray">
      <div ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Sovereignty
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            Why land matters
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy"
          >
            Jurisdictions are ultimately grounded in physical reality
          </motion.p>
        </div>

        {/* Land provides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {landBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className={`rounded-2xl p-8 text-center ${
                benefit.highlight
                  ? "bg-rausch text-white"
                  : "bg-white card-shadow-sm card-shadow-hover"
              }`}
            >
              <h3 className={`font-heading text-xl font-semibold mb-3 ${
                benefit.highlight ? "text-white" : "text-hof"
              }`}>
                {benefit.title}
              </h3>
              <p className={`font-body ${
                benefit.highlight ? "text-white/90" : "text-foggy"
              }`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Collective acquisition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 card-shadow-sm"
        >
          <h3 className="font-heading text-lg font-semibold text-hof mb-6 text-center">
            Acquiring land as a global collective
          </h3>
          <div className="space-y-4">
            {treasuryBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-rausch/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-rausch"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="font-body text-hof">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-heading text-xl md:text-2xl text-center text-hof mt-12"
        >
          Land is not speculation—
          <span className="text-rausch"> it is sovereignty made physical.</span>
        </motion.p>
      </div>
    </Section>
  );
}
