"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const fundUse = [
  { label: "Tech Development", percentage: 50 },
  { label: "Ecosystem Partnerships", percentage: 25 },
  { label: "Go-to-Market Acceleration", percentage: 20 },
  { label: "Operations", percentage: 5 },
];

export default function Investment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="invest" background="gray">
      <div ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Investment Opportunity
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof"
          >
            The Ask
          </motion.h2>
        </div>

        {/* Investment Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-hof text-white rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto card-shadow-sm"
        >
          {/* Key Numbers */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="text-center md:text-left">
              <p className="font-body text-white/60 text-sm tracking-widest uppercase mb-2">Raising</p>
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-rausch">
                $1.5M
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-body text-white/60 text-sm tracking-widest uppercase mb-2">Post-Money Valuation</p>
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                $10M
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-12" />

          {/* Use of Funds */}
          <div>
            <h3 className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-8 text-center md:text-left">
              Use of Funds
            </h3>
            <div className="space-y-6">
              {fundUse.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-white">{item.label}</span>
                    <span className="font-body text-rausch font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-rausch rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://calendly.com/emivelazquez/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-rausch hover:bg-rausch-dark text-white font-body font-medium rounded-lg transition-colors duration-200"
          >
            Discuss Investment
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
