"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "citizenship", label: "Citizenship" },
  { id: "manifesto", label: "Manifesto" },
  { id: "stack", label: "Stack" },
  { id: "expats", label: "Community" },
  { id: "land", label: "Land" },
  { id: "neighborhoods", label: "Neighborhoods" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm border-b border-limewash"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className={`font-heading text-xl font-bold transition-colors duration-200 ${
                isScrolled ? "text-rausch" : "text-white"
              }`}
            >
              Multilocal
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-hof hover:text-rausch"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-hof" : "bg-white"
                  } ${isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-hof" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-hof" : "bg-white"
                  } ${isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <nav className="relative pt-24 px-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    onClick={() => scrollToSection(item.id)}
                    className="p-4 text-left font-body text-lg text-hof hover:text-rausch transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
