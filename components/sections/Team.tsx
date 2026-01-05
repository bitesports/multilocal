"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Section from "../Section";

const teamMembers = [
  {
    name: "Emi Velazquez",
    role: "CEO",
    image: "/team/KhbR2c0r_400x400.jpg",
    link: "https://x.com/emivelazquez6",
    linkType: "twitter"
  },
  {
    name: "KC",
    role: "CTO",
    image: "/team/KC.jpeg",
    link: "https://www.linkedin.com/in/kritarthchhabra/",
    linkType: "linkedin"
  },
  {
    name: "Marc Baque Vilamala",
    role: "Fullstack Engineer, Identity",
    image: "/team/Marc.jpeg",
    link: "https://www.linkedin.com/in/marcbaque/",
    linkType: "linkedin"
  },
  {
    name: "Jordi Pinyana",
    role: "Voting and Governance",
    image: "/team/Jordi.jpeg",
    link: "https://www.linkedin.com/in/jordi-painan/",
    linkType: "linkedin"
  },
  {
    name: "Paisanos.io",
    role: "Design Agency",
    image: "/team/paisanos.png",
    link: "https://www.linkedin.com/company/paisanos/",
    linkType: "linkedin"
  },
  {
    name: "Mike Tango Bravo",
    role: "Global BD",
    image: "/team/MikeBravo.jpeg",
    link: "https://www.linkedin.com/in/barrowmike/",
    linkType: "linkedin"
  },
  {
    name: "Matias Huala",
    role: "Chief Operations Latam",
    image: "/team/MatiasHuala.png",
    link: "https://www.linkedin.com/in/matias-huala/",
    linkType: "linkedin"
  },
];

const advisors = [
  { name: "Luis Cuende", link: "https://www.perplexity.ai/search/luis-cuende-F5zhizGmTvy2vgWSol5IMw#0" },
  { name: "Juan Benet", link: "https://www.perplexity.ai/search/juan-benet-and-how-could-he-ad-KgPr7KahTaagT1Z1ddvGjw#0" },
  { name: "Agustin Antonetti", link: "https://www.perplexity.ai/search/agustin-antonetti-4_WekVX3QOu9IcFxX0DaaQ#0" },
  { name: "Niklas Anzinger", link: "https://www.perplexity.ai/search/niklas-infinita-kmPfIo8qQsmMzXayhpX3YQ#0" },
  { name: "Yeshodhara Baskaran", link: "https://www.perplexity.ai/search/yeshodhara-baskaran-nieQue6ETNyvKuObyu_YaQ#0" },
  { name: "Christian Betancourt", link: "https://www.perplexity.ai/search/christian-betancourt-prospera-xIF338FUSgCc8nGoFxzceg#0" },
  { name: "Sun (The Mu Pop Up City)", link: "https://www.perplexity.ai/search/sun-https-x-com-sunbh-eth-http-Re5TxErSRtePDPJselrMcg#0" },
  { name: "Ala & Termak", note: "Policy Middle East for Deel UAE" },
  { name: "Kimberly Adams", link: "https://www.perplexity.ai/search/kim-dubai-onchain-city-UKSY5XyNRbiF.0fjAuEO1w#0" },
  { name: "Jesse Katz", link: "https://www.perplexity.ai/search/jesse-katz-speech-without-bord-DQop.jnwSBiIeBKff5.37g#0" },
  { name: "Alejandro Tule Romeo", link: "https://www.perplexity.ai/search/https-www-linkedin-com-in-alej-zJAZaH.zQfSpEmUincKRjg#0" },
  { name: "Mili Santamaria", link: "https://www.perplexity.ai/search/milagros-santamaria-7zYzzVWMRkCw9wUVviB28w#0" },
  { name: "Bob Haywood", link: "https://www.perplexity.ai/search/bob-haywood-sez-YPwhwQiBRwSeqYWm0PmAcQ#0", note: "Pending" },
  { name: "Janine Ledger", link: "https://www.perplexity.ai/search/janine-ledger-BYMFnDcWR4GMByzDNqnwFw#0" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="team" background="gray">
      <div ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-rausch font-body text-sm font-medium tracking-wide uppercase mb-4"
          >
            The Team
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-hof mb-4"
          >
            Built to Ship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg text-foggy max-w-2xl mx-auto"
          >
            A team that understands both the technology and the real-world constraints
            of building infrastructure for jurisdictions.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="bg-white border border-limewash rounded-2xl p-6 text-center card-shadow-sm group hover:border-rausch/30 transition-colors duration-200"
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-limewash group-hover:border-rausch/50 transition-colors duration-200">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-kazan flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-rausch">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="font-heading font-semibold text-hof">
                  {member.name}
                </h3>
                {member.link && (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foggy hover:text-rausch transition-colors"
                    aria-label={`${member.name}'s profile`}
                  >
                    {member.linkType === "twitter" ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                )}
              </div>
              <p className="font-body text-foggy text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Advisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-limewash rounded-2xl p-8 card-shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-hof mb-2">
              Advisors & Partners
            </h3>
            <div className="w-16 h-1 bg-rausch mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
                className="flex items-center gap-2"
              >
                {advisor.link ? (
                  <a
                    href={advisor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hof hover:text-rausch transition-colors font-body font-medium inline-flex items-center gap-1"
                  >
                    {advisor.name}
                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-hof font-body font-medium">{advisor.name}</span>
                )}
                {advisor.note && (
                  <span className="text-foggy text-sm">({advisor.note})</span>
                )}
                {index < advisors.length - 1 && (
                  <span className="text-rausch ml-2">•</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
