"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, ZapOff } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const problems = [
  {
    icon: TrendingDown,
    title: "Outdated websites kill trust",
    description:
      "First impressions happen in seconds. Legacy sites signal instability and drive high-value prospects straight to competitors.",
  },
  {
    icon: Clock,
    title: "Manual workflows waste time",
    description:
      "Teams spend hours on repetitive tasks that should be automated — draining productivity and slowing every decision.",
  },
  {
    icon: AlertTriangle,
    title: "Poor systems block growth",
    description:
      "Fragmented tools and disconnected data create bottlenecks that cap revenue and make scaling nearly impossible.",
  },
  {
    icon: ZapOff,
    title: "Lack of automation increases costs",
    description:
      "Without intelligent automation, operational overhead grows faster than revenue — eroding margins every quarter.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="The Problem"
          title="Most Businesses Are Losing Opportunities Every Day"
          description="While competitors invest in modern digital systems, outdated infrastructure silently costs you clients, efficiency, and market share."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
              <div className="w-12 h-12 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center justify-center mb-6 group-hover:border-cyan-400/30 transition-colors">
                <item.icon className="w-5 h-5 text-red-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-black mb-3 leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
