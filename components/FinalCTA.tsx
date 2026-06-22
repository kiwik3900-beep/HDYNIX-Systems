"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="glass-card rounded-3xl p-10 md:p-16 border-cyan-400/20 neon-glow">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
          >
            Ready To Transform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Your Business?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto"
          >
            Let&apos;s build your next digital system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:contact@hdynixsystems.com"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-cyan-400 text-black px-10 py-4 rounded-xl font-black hover:bg-cyan-300 transition neon-glow"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@hdynixsystems.com?subject=Consultation%20Request"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-white/10 px-10 py-4 rounded-xl font-bold hover:bg-white/5 hover:border-cyan-400/30 transition"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              Book Consultation
            </a>
          </motion.div>

          <p className="text-gray-600 text-sm mt-8">
            Response within one business day · NDA available on request
          </p>
        </div>
      </motion.div>
    </section>
  );
}
