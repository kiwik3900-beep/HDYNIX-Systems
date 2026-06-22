"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Globe,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

export const services = [
  {
    title: "AI Systems",
    description:
      "Custom LLM pipelines, intelligent agents, predictive models, and AI-powered workflows integrated into your existing operations.",
    icon: Brain,
  },
  {
    title: "Web Development",
    description:
      "High-performance web platforms, SaaS products, and client portals built with Next.js, React, and enterprise-grade architecture.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications with offline support, push notifications, and seamless backend integration.",
    icon: Smartphone,
  },
  {
    title: "Automation",
    description:
      "End-to-end workflow automation, RPA, data pipelines, and integrations that eliminate manual processes at scale.",
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "AWS, Azure, and GCP architecture with CI/CD, auto-scaling, monitoring, disaster recovery, and cost optimization.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description:
      "Research-driven design systems, prototyping, and interfaces that build trust and drive conversion for enterprise users.",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-[#030b18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Services"
          title="Everything you need to go digital"
          description="From strategy to launch and beyond — one partner for your entire digital stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:neon-glow transition-shadow">
                <service.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
