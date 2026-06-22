"use client";

import { motion } from "framer-motion";

const clients = [
  "Meridian Capital",
  "Northline Logistics",
  "Atlas Health Group",
  "Vertex Manufacturing",
  "Summit Financial",
  "Horizon Retail",
  "Pinnacle Energy",
  "Clearview Insurance",
];

export default function TrustedBy() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-16 md:py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-[0.25em] uppercase text-gray-500"
        >
          Trusted by forward-thinking enterprises worldwide
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-12 md:gap-20 px-6">
            {doubled.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-lg md:text-xl font-bold text-gray-500 whitespace-nowrap hover:text-gray-300 transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
