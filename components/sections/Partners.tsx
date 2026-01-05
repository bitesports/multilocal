"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Section from "../Section";

const partners = [
  {
    name: "Filecoin",
    category: "Storage",
    logo: "/partners/Filecoin.png"
  },
  {
    name: "Aztec",
    category: "Privacy",
    logo: "/partners/Aztec.png"
  },
  {
    name: "Zama",
    category: "Privacy",
    logo: "/partners/Zama.png"
  },
  {
    name: "Genlayer",
    category: "Disputes",
    logo: "/partners/Genlayer.png"
  },
  {
    name: "m0",
    category: "Stablecoin",
    logo: "/partners/m0.jpg"
  },
  {
    name: "Uniswap",
    category: "Exchange",
    logo: "/partners/Uniswap.png"
  },
  {
    name: "Davinci.vote",
    category: "Governance",
    logo: "/partners/Davinci.png"
  },
  {
    name: "Kleros",
    category: "Disputes",
    logo: "/partners/Kleros.svg"
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="partners" background="white">
      <div ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Ecosystem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            Built With Industry Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy max-w-2xl mx-auto"
          >
            Partnering with the best protocols to deliver production-ready infrastructure.
          </motion.p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="bg-white border border-limewash rounded-2xl p-6 text-center card-shadow-sm group hover:border-rausch/30 transition-all duration-200 flex flex-col items-center justify-center min-h-[180px]"
            >
              {/* Logo */}
              {partner.logo ? (
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-16 h-16 mb-4 bg-kazan rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-rausch">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              )}

              <h3 className="font-heading font-semibold text-lg text-hof mb-1">
                {partner.name}
              </h3>
              <p className="font-body text-foggy text-xs tracking-widest uppercase">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional partners note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center font-body text-foggy mt-12"
        >
          And more partnerships in development...
        </motion.p>
      </div>
    </Section>
  );
}
