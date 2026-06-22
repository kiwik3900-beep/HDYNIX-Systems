"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Bell,
  LayoutDashboard,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";
import SectionHeader from "./ui/SectionHeader";

const sidebarItems = ["Overview", "Analytics", "Automations", "Clients", "Settings"];

export default function DashboardPreview() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Platform Preview"
          title="Command centers your team will actually use"
          description="We build executive dashboards, operational portals, and client-facing platforms with the clarity of Linear and the polish of Stripe."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden neon-glow border-cyan-400/20"
        >
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <span className="text-xs text-gray-500 ml-3 font-mono">
              app.hdynixsystems.com/dashboard
            </span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[420px]">
            <aside className="hidden lg:flex flex-col w-56 border-r border-white/10 bg-[#07111f]/60 p-5 gap-1">
              <div className="flex items-center gap-2 mb-8 px-2">
                <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                <span className="font-black text-sm">HDynix OS</span>
              </div>
              {sidebarItems.map((item, i) => (
                <div
                  key={item}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium ${
                    i === 0
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-black">Operations Overview</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Real-time metrics across all business units
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="p-2 rounded-xl border border-white/10 text-gray-400"
                    aria-label="Notifications"
                  >
                    <Bell className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    All systems operational
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    icon: TrendingUp,
                    label: "Monthly Revenue",
                    value: 2840000,
                    prefix: "$",
                    change: "+18.4%",
                  },
                  {
                    icon: Users,
                    label: "Active Clients",
                    value: 1247,
                    change: "+6.2%",
                  },
                  {
                    icon: Activity,
                    label: "Automation Runs",
                    value: 89340,
                    change: "+42.1%",
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card rounded-2xl p-5 border-white/5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <metric.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                        {metric.change}
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                    <p className="text-2xl font-black text-white">
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix ?? ""}
                      />
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-5 border-white/5">
                <p className="text-sm font-bold mb-4">Revenue Trend — Last 12 Months</p>
                <div className="flex items-end gap-2 h-28">
                  {[40, 55, 48, 62, 58, 72, 68, 80, 75, 88, 92, 100].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-400/30 to-cyan-400/80 min-h-[4px]"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
