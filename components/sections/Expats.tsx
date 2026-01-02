"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";

const communities = [
  "Expats",
  "Digital workers",
  "Founders",
  "Remote professionals",
  "Diaspora communities",
];

const solutions = [
  "A voice in global governance",
  "Shared infrastructure and services",
  "Collective bargaining power",
];

export default function Expats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="expats" background="white">
      <div ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Community
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            For those without representation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy"
          >
            Hundreds of millions live outside the countries they were born in
          </motion.p>
        </div>

        {/* Communities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {communities.map((community) => (
            <span
              key={community}
              className="px-5 py-2.5 rounded-full bg-kazan font-body text-hof"
            >
              {community}
            </span>
          ))}
        </motion.div>

        {/* Problem/Solution */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-limewash"
          >
            <h3 className="font-heading text-lg font-semibold text-hof mb-6">
              They currently
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-foggy">•</span>
                <span className="font-body text-foggy">Contribute economically</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-foggy">•</span>
                <span className="font-body text-foggy">Pay taxes in multiple places</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-rausch">×</span>
                <span className="font-body text-hof">Lack meaningful political representation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-8 rounded-2xl bg-rausch/5 border border-rausch/10"
          >
            <h3 className="font-heading text-lg font-semibold text-hof mb-6">
              Multilocal provides
            </h3>
            <div className="space-y-4">
              {solutions.map((solution) => (
                <div key={solution} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-rausch flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-body text-hof">{solution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
