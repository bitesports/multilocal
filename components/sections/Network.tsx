"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Section from "../Section";

// Node positions for the network graph
const nodes = [
  // Central hub
  { id: "hub", x: 400, y: 200, size: 24, label: "Multilocal", type: "hub" },
  // Primary nodes (jurisdictions)
  { id: "j1", x: 200, y: 100, size: 16, label: "Digital", type: "digital" },
  { id: "j2", x: 600, y: 100, size: 16, label: "Physical", type: "physical" },
  { id: "j3", x: 150, y: 250, size: 16, label: "Network", type: "digital" },
  { id: "j4", x: 650, y: 250, size: 16, label: "Embassy", type: "physical" },
  { id: "j5", x: 250, y: 350, size: 16, label: "DAO", type: "digital" },
  { id: "j6", x: 550, y: 350, size: 16, label: "Hub", type: "physical" },
  // Secondary nodes
  { id: "n1", x: 100, y: 50, size: 10, type: "digital" },
  { id: "n2", x: 280, y: 40, size: 10, type: "digital" },
  { id: "n3", x: 520, y: 40, size: 10, type: "physical" },
  { id: "n4", x: 700, y: 60, size: 10, type: "physical" },
  { id: "n5", x: 70, y: 180, size: 10, type: "digital" },
  { id: "n6", x: 730, y: 180, size: 10, type: "physical" },
  { id: "n7", x: 80, y: 320, size: 10, type: "digital" },
  { id: "n8", x: 720, y: 320, size: 10, type: "physical" },
  { id: "n9", x: 180, y: 420, size: 10, type: "digital" },
  { id: "n10", x: 350, y: 400, size: 10, type: "digital" },
  { id: "n11", x: 450, y: 400, size: 10, type: "physical" },
  { id: "n12", x: 620, y: 420, size: 10, type: "physical" },
];

// Connections between nodes
const connections = [
  // Hub to primary nodes
  { from: "hub", to: "j1" },
  { from: "hub", to: "j2" },
  { from: "hub", to: "j3" },
  { from: "hub", to: "j4" },
  { from: "hub", to: "j5" },
  { from: "hub", to: "j6" },
  // Primary to secondary
  { from: "j1", to: "n1" },
  { from: "j1", to: "n2" },
  { from: "j2", to: "n3" },
  { from: "j2", to: "n4" },
  { from: "j3", to: "n5" },
  { from: "j3", to: "n7" },
  { from: "j4", to: "n6" },
  { from: "j4", to: "n8" },
  { from: "j5", to: "n9" },
  { from: "j5", to: "n10" },
  { from: "j6", to: "n11" },
  { from: "j6", to: "n12" },
  // Cross connections
  { from: "j1", to: "j3" },
  { from: "j2", to: "j4" },
  { from: "j5", to: "j6" },
  { from: "n2", to: "n3" },
  { from: "n10", to: "n11" },
];

const partners = [
  { name: "Frontier Tower", url: "https://frontiertower.io", logo: "/partners/frontier-tower.png" },
  { name: "Edge City", url: "https://edgecity.live", logo: "/partners/edge-city.svg" },
  { name: "Crecimiento", url: "https://crecimiento.build", logo: "/partners/crecimiento.png" },
  { name: "Noma Collective", url: "https://noma-collective.com", logo: "/partners/noma-collective.png" },
];

export default function Network() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getNode = (id: string) => nodes.find((n) => n.id === id);

  return (
    <Section id="network" background="gray">
      <div ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            The Network
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-6"
          >
            Hundreds of nodes, one jurisdiction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg md:text-xl text-foggy leading-relaxed max-w-3xl mx-auto"
          >
            Multilocal spans across physical and digital jurisdictions around the world.
            Each node is a point of presence—an embassy, a co-living space, a DAO, or a digital
            coordination layer—all connected through shared governance and identity.
          </motion.p>
        </div>

        {/* Network Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto mb-16"
        >
          <svg
            viewBox="0 0 800 450"
            className="w-full h-auto"
            style={{ minHeight: "300px" }}
          >
            {/* Connections */}
            {connections.map((conn, index) => {
              const fromNode = getNode(conn.from);
              const toNode = getNode(conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <motion.line
                  key={`conn-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#E0E0E0"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 0.6 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.02,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Animated pulse lines */}
            {connections.slice(0, 6).map((conn, index) => {
              const fromNode = getNode(conn.from);
              const toNode = getNode(conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <motion.line
                  key={`pulse-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#FF5A5F"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          pathLength: [0, 1, 1],
                          opacity: [0, 0.8, 0],
                        }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 2,
                    delay: 1 + index * 0.3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, index) => (
              <motion.g key={node.id}>
                {/* Pulse effect for hub */}
                {node.type === "hub" && (
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill="none"
                    stroke="#FF5A5F"
                    strokeWidth="2"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.8, 2],
                            opacity: [0.6, 0.3, 0],
                          }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={{
                      duration: 2,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Main node circle */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill={
                    node.type === "hub"
                      ? "#FF5A5F"
                      : node.type === "digital"
                      ? "#00A699"
                      : "#484848"
                  }
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.03,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />

                {/* Node labels for primary nodes */}
                {node.label && (
                  <motion.text
                    x={node.x}
                    y={node.y + node.size + 16}
                    textAnchor="middle"
                    className="font-body text-xs md:text-sm fill-foggy"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                  >
                    {node.label}
                  </motion.text>
                )}
              </motion.g>
            ))}
          </svg>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-8 mt-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-babu" />
              <span className="font-body text-sm text-foggy">Digital Nodes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-hof" />
              <span className="font-body text-sm text-foggy">Physical Nodes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "100+", label: "Physical Nodes" },
            { value: "50+", label: "Digital DAOs" },
            { value: "30+", label: "Countries" },
            { value: "1", label: "Unified Jurisdiction" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl card-shadow">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-rausch mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm text-foggy">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-sm font-medium tracking-wide uppercase text-foggy mb-8">
            Potential Partners
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="group flex items-center justify-center px-6 py-4 bg-white rounded-xl card-shadow-sm hover:card-shadow transition-all duration-200 min-h-[72px]"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={40}
                    className="h-8 md:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                ) : (
                  <span className="font-heading text-lg md:text-xl font-semibold text-hof group-hover:text-rausch transition-colors duration-200">
                    {partner.name}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
