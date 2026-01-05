"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  { title: "Property Registries", desc: "Land titles, real estate, and physical assets verifiable onchain" },
  { title: "Company Formation", desc: "Business registrations and corporate structures with cryptographic proof" },
  { title: "Legal Interactions", desc: "Contracts, agreements, and compliance records bridged to the blockchain" },
];

export default function Layer0() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kintsugi" className="relative py-20 md:py-28 lg:py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kintsugi.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Layer 2
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Kintsugi — CivicStack OS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-white/70 max-w-2xl mx-auto"
          >
            The coordination layer that bridges the physical world to the blockchain.
            Connecting jurisdictions, registries, and real-world interactions onchain.
          </motion.p>
        </div>

        {/* Key Point Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-black/50 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-8 text-center mb-12 max-w-xl mx-auto"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
            The Jurisdiction Routing Layer
          </h3>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-body text-white/70">
            Bringing physical-world registries onchain with cryptographic guarantees
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:border-amber-400/40 transition-colors duration-200"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-amber-400/10 border border-amber-400/30 rounded-xl flex items-center justify-center group-hover:bg-amber-400/20 transition-colors duration-200">
                <span className="text-amber-400 font-heading font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="font-heading font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="font-body text-white/60 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
