"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const proofTypes = [
  "Economic activity",
  "Capital formation",
  "Consumption and investment flows",
];

const negotiations = [
  { text: "Visas", highlight: true },
  { text: "Tax treatment", highlight: false },
  { text: "Regulatory sandboxes", highlight: false },
  { text: "Infrastructure access", highlight: false },
];

export default function EconomicProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="economic-proof" background="gray">
      <div ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Collective Power
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            Economic proof changes everything
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy max-w-2xl mx-auto"
          >
            A jurisdiction becomes meaningful when it can demonstrate economic power.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 card-shadow-sm"
          >
            <h3 className="font-heading text-lg font-semibold text-hof mb-6">
              Citizens collectively prove
            </h3>
            <div className="space-y-4 mb-8">
              {proofTypes.map((proof) => (
                <div key={proof} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rausch" />
                  <span className="font-body text-hof">{proof}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-kazan">
              <p className="font-body text-sm text-foggy">
                Without exposing individual data, the network shows its aggregate footprint and the value it brings to host jurisdictions.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 card-shadow-sm"
          >
            <h3 className="font-heading text-lg font-semibold text-hof mb-6">
              This enables negotiation on
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {negotiations.map((item) => (
                <div
                  key={item.text}
                  className={`p-4 rounded-xl text-center ${
                    item.highlight
                      ? "bg-rausch text-white"
                      : "bg-kazan text-hof"
                  }`}
                >
                  <span className="font-body font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="font-body text-foggy">
                Negotiate from a position of{" "}
                <span className="text-rausch font-medium">strength</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
