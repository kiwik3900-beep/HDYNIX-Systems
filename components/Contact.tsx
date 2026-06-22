"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@hdynixsystems.com",
    href: "mailto:contact@hdynixsystems.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) 439-6499",
    href: "tel:+18884396499",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA — Global Remote",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Ready to build your next digital system?"
          description="Tell us about your project. A senior architect will respond within one business day with a tailored recommendation."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-semibold hover:text-cyan-400 transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-6 border-cyan-400/20">
              <p className="text-sm font-bold text-cyan-400 mb-2">
                Enterprise SLA
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Priority response for enterprise inquiries. NDA available upon
                request before sharing sensitive project details.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10 neon-glow border-cyan-400/15"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Sarah Chen"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="sarah@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-400 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Meridian Capital"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 transition"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-400 mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="25-75">$25K – $75K</option>
                  <option value="75-150">$75K – $150K</option>
                  <option value="150+">$150K+</option>
                  <option value="retainer">Ongoing Retainer</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your goals, timeline, and current systems..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-400 text-black px-10 py-4 rounded-xl font-black hover:bg-cyan-300 transition neon-glow"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
