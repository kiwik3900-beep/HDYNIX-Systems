"use client";

import { motion } from "framer-motion";
import {
  Compass,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Discover",
    icon: Compass,
    description:
      "Deep-dive into your business goals, user needs, technical landscape, and competitive positioning.",
  },
  {
    step: "02",
    title: "Design",
    icon: PenTool,
    description:
      "UX research, wireframes, design systems, and interactive prototypes validated with stakeholders.",
  },
  {
    step: "03",
    title: "Develop",
    icon: Code2,
    description:
      "Agile engineering with CI/CD, clean architecture, API integrations, and weekly progress demos.",
  },
  {
    step: "04",
    title: "Test",
    icon: FlaskConical,
    description:
      "Rigorous QA, security audits, performance benchmarking, and user acceptance testing.",
  },
  {
    step: "05",
    title: "Launch",
    icon: Rocket,
    description:
      "Zero-downtime deployment, monitoring setup, team training, and go-live support.",
  },
  {
    step: "06",
    title: "Scale",
    icon: TrendingUp,
    description:
      "Continuous optimization, feature iterations, infrastructure scaling, and long-term partnership.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          label="Methodology"
          title="Our Process"
          description="Six proven phases that take you from vision to production — with transparency at every milestone."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 shrink-0">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#020617] border border-cyan-400/30 flex items-center justify-center neon-glow"
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                  </motion.div>
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-black tracking-widest text-cyan-400">
                      STEP {item.step}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
