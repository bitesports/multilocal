"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Section from "../Section";

const modules = [
  {
    id: "identity",
    name: "Identity & Citizenship",
    status: "Your global passport",
    description: "Verifiable credentials as digital citizenship. ZK-based DID with granular disclosures.",
    details: [
      "Supports government IDs and third-party reputations (Airbnb, Uber, MercadoPago)",
      "Designed for rapid onboarding at scale",
      "Zero-knowledge proofs for privacy-preserving verification",
      "IDs are interoperable—Multilocal citizens can use them worldwide, and projects can build on top"
    ]
  },
  {
    id: "governance",
    name: "Governance & Voting",
    status: "Citizen-led",
    description: "Citizens govern real economic flows. Sequencer fees allocated via VC-based voting.",
    details: [
      "Identity-aware, not token-only governance",
      "Quadratic voting and delegation support",
      "Built with experienced governance designers"
    ]
  },
  {
    id: "disputes",
    name: "Dispute Resolution",
    status: "Kleros + Genlayer",
    description: "Onchain dispute system for Multilocal citizens.",
    details: [
      "Partners: Kleros, Genlayer",
      "Configurable between automated resolution and human arbitration",
      "Bridges code and local legal norms"
    ]
  },
  {
    id: "stablecoin",
    name: "Stablecoin & Payments",
    status: "Multilocal's own Stablecoin",
    description: "Jurisdiction-issued stablecoin for payments, incentives, and treasury operations.",
    details: [
      "Yield generated accumulates in treasury",
      "Interoperable with DeFi while remaining Multilocal native",
      "Built-in compliance and reporting"
    ]
  },
  {
    id: "treasury",
    name: "Treasury & Revenue",
    status: "Sequencer Fees",
    description: "Sequencer fees accrue directly to the jurisdiction treasury.",
    details: [
      "Governance decides allocation: Public goods, Incentives, Reserves, Dividends",
      "Creates direct feedback loop between activity and governance",
      "Transparent, auditable fund flows"
    ]
  },
  {
    id: "exchange",
    name: "Exchange",
    status: "Uniswap v4 + VCs",
    description: "Uniswap v4 with verifiable credential checks.",
    details: [
      "Permissioned markets without sacrificing liquidity",
      "Enables compliant trading of jurisdiction-specific assets",
      "KYC/AML integration via identity layer"
    ]
  },
  {
    id: "bonds",
    name: "Jurisdiction Bonds",
    status: "New Asset Class",
    description: "Invest in the future of Multilocal.",
    details: [
      "Programmatic bonds receive % of future sequencer fees",
      "Transparent, onchain alternative to public debt",
      "A new sovereign asset class"
    ]
  },
  {
    id: "privacy",
    name: "Privacy & Storage",
    status: "Zama + Aztec + Filecoin",
    description: "Privacy-preserving compliance and decentralized storage.",
    details: [
      "Partners: Zama, Aztec for FHE and ZK privacy",
      "Built on Filecoin for censorship resistance",
      "Auditability without surveillance"
    ]
  },
];

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const selectedModule = modules.find(m => m.id === activeModule) || modules[0];

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <Section id="stack" background="gray">
      <div ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            Modular Architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof inline">
              The Stack
            </h2>
            <a
              href="https://civic-stack.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 ml-4 px-3 py-1.5 bg-hof/5 hover:bg-hof/10 rounded-full text-foggy hover:text-hof transition-colors duration-200 align-middle"
            >
              <span className="font-body text-sm">Powered by Civic Stack</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy max-w-2xl mx-auto"
          >
            Adopt modules independently or deploy as a complete system.
          </motion.p>
        </div>

        {/* Mobile: Accordion Layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:hidden space-y-3"
        >
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white border border-limewash rounded-2xl overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleMobileAccordion(module.id)}
                className={`w-full px-5 py-4 flex items-center justify-between transition-all duration-300 ${
                  expandedMobile === module.id ? "bg-hof" : ""
                }`}
              >
                <div className="text-left">
                  <p className={`font-heading font-semibold ${
                    expandedMobile === module.id ? "text-white" : "text-hof"
                  }`}>
                    {module.name}
                  </p>
                  <p className={`text-sm ${
                    expandedMobile === module.id ? "text-rausch" : "text-foggy"
                  }`}>
                    {module.status}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedMobile === module.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={expandedMobile === module.id ? "text-white" : "text-foggy"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {expandedMobile === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-limewash">
                      <p className="text-hof text-sm mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      <div className="space-y-2">
                        {module.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-rausch text-sm mt-0.5">→</span>
                            <span className="text-foggy text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Desktop: Tabs Layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden lg:flex gap-8"
        >
          {/* Left Tabs */}
          <div className="w-1/3">
            <div className="bg-white border border-limewash rounded-2xl overflow-hidden card-shadow-sm">
              {modules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between transition-all duration-200 ${
                    index !== modules.length - 1 ? "border-b border-limewash" : ""
                  } ${
                    activeModule === module.id
                      ? "bg-hof"
                      : "hover:bg-kazan"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading font-semibold text-sm truncate ${
                      activeModule === module.id ? "text-white" : "text-hof"
                    }`}>
                      {module.name}
                    </p>
                    <p className={`text-xs truncate ${
                      activeModule === module.id ? "text-rausch" : "text-foggy"
                    }`}>
                      {module.status}
                    </p>
                  </div>
                  {activeModule === module.id && (
                    <div className="w-1 h-8 bg-rausch rounded-full ml-3" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-limewash rounded-2xl p-8 h-full card-shadow-sm"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-semibold text-hof mb-3">
                    {selectedModule.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-rausch/10 text-rausch text-sm font-medium rounded-full">
                    {selectedModule.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-hof text-lg mb-8 leading-relaxed">
                  {selectedModule.description}
                </p>

                {/* Details */}
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foggy">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedModule.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-rausch mt-0.5">→</span>
                        <span className="text-foggy">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
