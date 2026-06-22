"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FolderKanban,
  Headphones,
  LayoutGrid,
  MessageSquare,
  Receipt,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const navItems = [
  { icon: FolderKanban, label: "Projects", active: true },
  { icon: LayoutGrid, label: "Tasks", active: false },
  { icon: FileText, label: "Files", active: false },
  { icon: MessageSquare, label: "Messages", badge: 3, active: false },
  { icon: TrendingUp, label: "Progress", active: false },
  { icon: Receipt, label: "Invoices", active: false },
  { icon: Headphones, label: "Support Tickets", badge: 1, active: false },
];

const dashboardCards = [
  {
    label: "Active Projects",
    value: "12",
    change: "+2 this month",
    color: "text-cyan-400",
  },
  {
    label: "Tasks Completed",
    value: "847",
    change: "94% on time",
    color: "text-blue-400",
  },
  {
    label: "Open Tickets",
    value: "3",
    change: "Avg. 2h response",
    color: "text-emerald-400",
  },
  {
    label: "Overall Progress",
    value: "78%",
    change: "On track",
    color: "text-violet-400",
  },
];

export default function ClientPortal() {
  return (
    <section id="portal" className="py-24 md:py-32 px-6 bg-[#030b18] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Client Portal"
          title="Track Everything In Real Time"
          description="Every HDynix client gets a dedicated portal to monitor projects, tasks, files, messages, and support — with full transparency from day one."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden border-cyan-400/15 neon-glow"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="text-[11px] text-gray-500 font-mono ml-2">
              portal.hdynixsystems.com
            </span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[480px]">
            <aside className="lg:w-56 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#07111f]/50 p-4">
              <p className="text-xs font-black tracking-widest uppercase text-gray-600 px-3 mb-4">
                Navigation
              </p>
              <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap shrink-0 ${
                      item.active
                        ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto text-[10px] font-black bg-cyan-400 text-black px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </aside>

            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <div>
                  <h3 className="text-lg font-black">Project Dashboard</h3>
                  <p className="text-gray-500 text-sm">Meridian Capital — Platform Rebuild</p>
                </div>
                <span className="self-start text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  Live sync enabled
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {dashboardCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-2xl p-4 border-white/5"
                  >
                    <p className={`text-2xl font-black ${card.color}`}>{card.value}</p>
                    <p className="text-xs font-semibold text-white mt-1">{card.label}</p>
                    <p className="text-[11px] text-gray-600 mt-1">{card.change}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-5 border-white/5">
                  <p className="text-sm font-bold mb-4">Recent Messages</p>
                  <div className="space-y-3">
                    {[
                      { from: "Sarah C.", msg: "Design review approved ✓", time: "2m ago" },
                      { from: "HDynix Team", msg: "Sprint 4 deployed to staging", time: "1h ago" },
                    ].map((m) => (
                      <div key={m.msg} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-400/20 shrink-0" />
                        <div>
                          <p className="text-xs font-bold">{m.from}</p>
                          <p className="text-xs text-gray-500">{m.msg}</p>
                          <p className="text-[10px] text-gray-600 mt-0.5">{m.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5 border-white/5">
                  <p className="text-sm font-bold mb-4">Milestone Progress</p>
                  {[
                    { phase: "Discovery", pct: 100 },
                    { phase: "Design", pct: 100 },
                    { phase: "Development", pct: 78 },
                    { phase: "Testing", pct: 20 },
                  ].map((m) => (
                    <div key={m.phase} className="mb-3 last:mb-0">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-400">{m.phase}</span>
                        <span className="text-cyan-400 font-bold">{m.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
