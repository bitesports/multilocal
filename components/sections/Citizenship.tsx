"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Opt-in",
    description: "Citizenship is voluntary, not determined by birth or passport.",
  },
  {
    title: "Verifiable",
    description: "Prove identity, participation, and contribution with cryptographic credentials.",
  },
  {
    title: "Privacy-preserving",
    description: "Zero-knowledge proofs protect your personal information.",
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
    <section id="citizenship" className="relative py-20 md:py-28 lg:py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/passport.png"
          alt=""
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
        {/* Light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-kazan/40" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
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
              className="rounded-2xl p-8 bg-rausch/50 backdrop-blur-sm"
            >
              <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="font-body leading-relaxed text-white/90">
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
      </motion.div>
    </section>
  );
}
