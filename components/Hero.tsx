"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  ShieldCheck,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    text: "Web platforms, dashboards, client portals, SaaS products, and scalable business systems.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    text: "AI assistants, intelligent automation, business intelligence, and smart workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Secure architecture, audits, monitoring, infrastructure protection, and risk reduction.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud deployment, Docker, CI/CD, monitoring, and production-ready infrastructure.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    text: "Automated workflows, API integrations, internal tools, and operational efficiency.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    text: "Premium online stores, product catalogs, order systems, and conversion-focused commerce.",
  },
];

const stats = [
  ["AI", "Powered Systems"],
  ["Secure", "Digital Infrastructure"],
  ["Cloud", "Scalable Platforms"],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0D10] px-6 pb-24 pt-32 text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-12%] h-[520px] w-[520px] rounded-full bg-white/5 blur-[130px]" />
        <div className="absolute right-[-12%] top-[18%] h-[520px] w-[520px] rounded-full bg-gray-400/5 blur-[130px]" />
        <div className="absolute bottom-[-22%] left-[25%] h-[520px] w-[520px] rounded-full bg-white/[0.03] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-gray-300 backdrop-blur-xl">
            Premium Global Technology Company
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
          HDYNIX Systems builds premium digital systems for serious
            businesses — combining software engineering, AI, cybersecurity,
            cloud infrastructure, automation, and e-commerce solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-100 px-8 py-4 font-black text-black shadow-[0_0_45px_rgba(255,255,255,0.12)] transition hover:bg-white"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold text-gray-200 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <p className="text-2xl font-black text-gray-100">{title}</p>
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_90px_rgba(255,255,255,0.08)] backdrop-blur-xl md:p-7">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#111418]/80 p-6">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-400">
                    HDYNIX Core Engine
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    Digital Systems Platform
                  </h2>
                </div>

                <div className="h-4 w-4 rounded-full bg-gray-200 shadow-[0_0_25px_rgba(255,255,255,0.45)]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.07,
                      }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="font-black text-white group-hover:text-gray-200">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">
                  Mission
                </p>

                <p className="mt-2 font-bold leading-relaxed text-gray-200">
                  Professional, secure, scalable, and conversion-focused digital
                  products for modern companies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
