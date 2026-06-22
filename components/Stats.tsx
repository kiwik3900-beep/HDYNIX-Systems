"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    detail: "Across finance, healthcare, logistics, and SaaS",
  },
  {
    value: 50,
    suffix: "+",
    label: "Systems Built",
    detail: "Platforms, apps, dashboards, and automation",
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries Served",
    detail: "Global delivery with timezone-aligned teams",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    detail: "Measured through post-project NPS surveys",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
    detail: "Enterprise SLA with dedicated response channels",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 px-6 gradient-mesh overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Impact"
          title="Numbers that build confidence"
          description="Measurable results from partnerships with organizations that demand excellence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <h3 className="text-sm md:text-base font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed hidden md:block">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
