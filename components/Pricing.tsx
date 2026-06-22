"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const plans = [
  {
    name: "Growth",
    price: "From $25K",
    period: "per project",
    description: "For scaling businesses ready to modernize their digital presence.",
    features: [
      "Custom web platform or app",
      "UI/UX design system",
      "Cloud deployment & hosting setup",
      "30-day post-launch support",
      "Analytics & conversion tracking",
    ],
    highlighted: false,
    cta: "Start Growth Project",
  },
  {
    name: "Enterprise",
    price: "From $75K",
    period: "per engagement",
    description: "Full digital transformation for organizations with complex requirements.",
    features: [
      "Everything in Growth",
      "AI & automation integration",
      "Enterprise security & compliance",
      "Dedicated project manager",
      "API & legacy system integration",
      "90-day optimization period",
    ],
    highlighted: true,
    cta: "Book Strategy Call",
  },
  {
    name: "Partnership",
    price: "Custom",
    period: "retainer",
    description: "Ongoing product development for companies building at scale.",
    features: [
      "Dedicated engineering squad",
      "Continuous feature delivery",
      "24/7 priority support SLA",
      "Quarterly executive reviews",
      "Infrastructure management",
      "Unlimited scope iterations",
    ],
    highlighted: false,
    cta: "Discuss Partnership",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Investment"
          title="Transparent pricing for every stage"
          description="Clear engagement models with no hidden fees. Every plan includes executive reporting, secure delivery, and a team that treats your business like their own."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col ${
                plan.highlighted
                  ? "glass-card border-cyan-400/40 neon-glow relative"
                  : "glass-card glass-card-hover"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full bg-cyan-400 text-black">
                  Most Popular
                </span>
              )}

              <p className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-2">
                {plan.name}
              </p>
              <p className="text-4xl font-black mb-1">{plan.price}</p>
              <p className="text-gray-500 text-sm mb-4">{plan.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 rounded-xl font-black transition ${
                  plan.highlighted
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-cyan-400/30 hover:bg-cyan-400/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
