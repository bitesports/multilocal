import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Citizenship from "@/components/sections/Citizenship";
import Manifesto from "@/components/sections/Manifesto";
import EconomicProof from "@/components/sections/EconomicProof";
import Expats from "@/components/sections/Expats";
import Land from "@/components/sections/Land";
import Neighborhoods from "@/components/sections/Neighborhoods";
import Stack from "@/components/sections/Stack";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Citizenship />
      <Manifesto />
      <EconomicProof />
      <Expats />
      <Land />
      <Neighborhoods />
      <Stack />

      {/* CTA Section */}
      <section id="apply" className="bg-rausch py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to join?
          </h2>
          <p className="font-body text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Become a citizen of the global network society. Your home can be everywhere.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-kazan text-rausch font-body font-semibold rounded-lg transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hof py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                Multilocal
              </h2>
              <p className="font-body text-white/60">
                Your home, is everywhere.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/50 hover:text-rausch transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-rausch transition-colors duration-200"
                aria-label="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                  <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-rausch transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="font-body text-sm text-white/40">
              A jurisdiction for the internet age.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
