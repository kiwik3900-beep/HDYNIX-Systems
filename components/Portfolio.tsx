"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const projects = [
  {
    client: "Meridian Capital",
    industry: "Financial Services",
    title: "Investor Portal & Compliance Dashboard",
    result: "3.2× faster client onboarding",
    tags: ["Next.js", "AWS", "SOC 2"],
    gradient: "from-blue-600/30 to-cyan-400/20",
  },
  {
    client: "Atlas Health Group",
    industry: "Healthcare",
    title: "Patient Management & AI Triage System",
    result: "41% reduction in admin workload",
    tags: ["React Native", "HIPAA", "AI/ML"],
    gradient: "from-emerald-600/20 to-cyan-400/20",
  },
  {
    client: "Northline Logistics",
    industry: "Supply Chain",
    title: "Fleet Tracking & Automation Platform",
    result: "$2.1M annual cost savings",
    tags: ["IoT", "Cloud", "Automation"],
    gradient: "from-violet-600/20 to-blue-600/20",
  },
  {
    client: "Summit Financial",
    industry: "Fintech",
    title: "Wealth Management SaaS Platform",
    result: "890K monthly active users",
    tags: ["SaaS", "Stripe", "Real-time"],
    gradient: "from-amber-600/20 to-orange-600/10",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#030b18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Case Studies"
          title="Results that speak for themselves"
          description="Selected engagements where HDynix Systems delivered measurable business impact for enterprise clients."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative p-8 flex flex-col justify-end`}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <p className="text-xs font-bold tracking-widest uppercase text-cyan-400 relative z-10">
                  {project.industry}
                </p>
                <p className="text-sm text-gray-400 relative z-10">
                  {project.client}
                </p>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-black leading-snug">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 shrink-0 transition-colors" />
                </div>

                <p className="text-cyan-400 font-bold mb-5">{project.result}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
