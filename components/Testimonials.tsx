"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const testimonials = [
  {
    quote:
      "HDynix rebuilt our entire digital infrastructure in four months. The client portal alone transformed how we communicate with investors — transparent, professional, and always up to date.",
    name: "Sarah Chen",
    role: "Chief Digital Officer",
    company: "Meridian Capital",
  },
  {
    quote:
      "We evaluated six agencies before choosing HDynix. They were the only team that understood HIPAA compliance while delivering a product our patients actually enjoy using.",
    name: "Dr. James Okonkwo",
    role: "VP of Technology",
    company: "Atlas Health Group",
  },
  {
    quote:
      "The automation system HDynix built saves our operations team 30+ hours per week. ROI was visible within the first quarter — this is what a true technology partner looks like.",
    name: "Elena Rodriguez",
    role: "Director of Operations",
    company: "Northline Logistics",
  },
  {
    quote:
      "Our enterprise dashboard went from concept to production in 10 weeks. Executive leadership now has real-time visibility across every business unit. Game-changing.",
    name: "Michael Torres",
    role: "CEO",
    company: "Summit Financial",
  },
  {
    quote:
      "HDynix didn't just build us a mobile app — they built a platform that scales. We hit 890K users in six months with 99.9% uptime. Exceptional engineering.",
    name: "Priya Sharma",
    role: "Head of Product",
    company: "Horizon Retail",
  },
  {
    quote:
      "From cloud migration to CI/CD pipelines, HDynix handled our entire infrastructure modernization. Our deployment time dropped from days to minutes.",
    name: "David Kim",
    role: "CTO",
    company: "Pinnacle Energy",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#030b18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Client Voices"
          title="Trusted by leaders worldwide"
          description="Executives and technical leaders share why they chose HDynix Systems for mission-critical digital transformation."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <Quote className="w-7 h-7 text-cyan-400/30" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="border-t border-white/10 pt-5">
                <p className="font-black text-white text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {item.role}, {item.company}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
