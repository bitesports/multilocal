"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Section from "../Section";

const characteristics = [
  "City-based clusters of citizens",
  "Connected through shared digital infrastructure",
  "Anchored by physical spaces and events",
];

const roles = [
  { title: "Embassies", subtitle: "of the network society", highlight: false },
  { title: "Coordination hubs", subtitle: "high-trust environments", highlight: true },
  { title: "Interfaces", subtitle: "between global and local", highlight: false },
];

export default function Neighborhoods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="neighborhoods" background="white">
      <div ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow"
          >
            <Image
              src="/neighborhood.png"
              alt="Digital neighborhood community"
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }}
              className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
            >
              Local Presence
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
            >
              Digital neighborhoods
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-lg text-foggy mb-8"
            >
              Multilocal is global—but it is <span className="text-hof font-medium">lived locally</span>.
            </motion.p>

            {/* Characteristics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {characteristics.map((char, index) => (
                <div key={char} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rausch/10 flex items-center justify-center text-rausch font-body text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="font-body text-hof">{char}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="font-heading text-lg font-semibold text-hof text-center mb-8">
            Neighborhoods act as
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className={`p-8 rounded-2xl text-center ${
                  role.highlight
                    ? "bg-rausch"
                    : "border border-limewash bg-white"
                }`}
              >
                <h4 className={`font-heading text-xl font-semibold mb-2 ${
                  role.highlight ? "text-white" : "text-rausch"
                }`}>
                  {role.title}
                </h4>
                <p className={`font-body text-sm ${
                  role.highlight ? "text-white/90" : "text-foggy"
                }`}>
                  {role.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
