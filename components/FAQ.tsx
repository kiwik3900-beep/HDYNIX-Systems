"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const faqs = [
  {
    question: "What types of companies does HDynix Systems work with?",
    answer:
      "We partner with mid-market and enterprise organizations across finance, healthcare, logistics, manufacturing, and SaaS. Our clients typically have 50–5,000 employees and need reliable digital systems that scale with their growth.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Growth projects typically launch in 8–14 weeks. Enterprise engagements range from 4–9 months depending on scope, integrations, and compliance requirements. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you handle security and compliance requirements?",
    answer:
      "Yes. We build with SOC 2-aligned practices and support HIPAA, GDPR, and industry-specific compliance frameworks. Security architecture is planned from day one, not added as an afterthought.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We regularly integrate with ERPs, CRMs, legacy databases, payment processors, and third-party APIs. Our team has deep experience with Salesforce, SAP, Stripe, AWS, Azure, and custom internal tools.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "We offer structured support SLAs with defined response times, dedicated channels, and quarterly business reviews. Partnership clients receive a dedicated engineering squad for continuous feature delivery.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a strategy call through our contact form. We'll schedule a 45-minute discovery session with a senior architect to understand your goals, assess your current systems, and outline a recommended approach.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[#030b18]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="FAQ"
          title="Questions enterprise teams ask"
          description="Everything you need to know before partnering with HDynix Systems."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
