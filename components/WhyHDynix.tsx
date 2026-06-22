"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Layers,
  Globe2,
  Lock,
  BarChart3,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-grade security",
    description:
      "SOC 2-aligned practices, encrypted data flows, role-based access, and audit-ready infrastructure from day one.",
  },
  {
    icon: Zap,
    title: "AI-native engineering",
    description:
      "We embed intelligent automation, LLM workflows, and predictive analytics into products that give you a competitive edge.",
  },
  {
    icon: Layers,
    title: "Full-stack ownership",
    description:
      "One partner for strategy, design, development, DevOps, and support — no fragmented vendor management.",
  },
  {
    icon: Globe2,
    title: "Global delivery model",
    description:
      "Distributed teams across 12 countries with timezone overlap and executive-level communication standards.",
  },
  {
    icon: Lock,
    title: "Compliance-ready builds",
    description:
      "HIPAA, GDPR, and industry-specific requirements baked into architecture — not bolted on after launch.",
  },
  {
    icon: BarChart3,
    title: "Outcome-driven delivery",
    description:
      "We measure success in revenue, efficiency gains, and user adoption — not just shipped features.",
  },
];

export default function WhyHDynix() {
  return (
    <section id="why" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why HDynix"
          title="The partner enterprises choose when stakes are high"
          description="We combine the polish of world-class SaaS products with the rigor required for regulated, high-growth businesses."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:neon-glow transition-shadow">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
