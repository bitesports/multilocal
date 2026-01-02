"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const features = [
  {
    title: "Opt-in",
    description: "Citizenship is voluntary, not determined by birth or passport.",
    highlight: false,
  },
  {
    title: "Verifiable",
    description: "Prove identity, participation, and contribution with cryptographic credentials.",
    highlight: true,
  },
  {
    title: "Privacy-preserving",
    description: "Zero-knowledge proofs protect your personal information.",
    highlight: false,
  },
];

const benefits = [
  "Governance rights in the network",
  "Access to shared economic infrastructure",
  "Collective negotiation with physical jurisdictions",
];

export default function Citizenship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="citizenship" background="gray">
      <div ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Membership
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            Citizenship reimagined
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy max-w-2xl mx-auto"
          >
            Based on participation, alignment, and contribution—not place of birth.
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className={`rounded-2xl p-8 ${
                feature.highlight
                  ? "bg-rausch text-white"
                  : "bg-white card-shadow-sm card-shadow-hover"
              }`}
            >
              <h3 className={`font-heading text-xl font-semibold mb-3 ${
                feature.highlight ? "text-white" : "text-hof"
              }`}>
                {feature.title}
              </h3>
              <p className={`font-body leading-relaxed ${
                feature.highlight ? "text-white/90" : "text-foggy"
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 card-shadow-sm"
        >
          <h3 className="font-heading text-lg font-semibold text-hof mb-6 text-center">
            Citizenship grants
          </h3>
          <div className="space-y-4">
            {benefits.map((benefit) => (
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
      </div>
    </Section>
  );
}
