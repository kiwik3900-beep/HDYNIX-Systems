"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../lib/motion";

const projects = [
  {
    title: "AI Platform",
    description:
      "Intelligent document processing and predictive analytics engine for a global financial services firm.",
    technologies: ["Python", "OpenAI", "AWS", "React"],
    result: "67% faster document processing",
    gradient: "from-cyan-600/20 to-blue-600/10",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Real-time operations command center with multi-tenant architecture and executive reporting.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Tailwind"],
    result: "3.2× faster decision-making",
    gradient: "from-blue-600/20 to-violet-600/10",
  },
  {
    title: "Mobile App",
    description:
      "Cross-platform field service app with offline sync, GPS tracking, and push notifications.",
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
    result: "890K+ active users",
    gradient: "from-emerald-600/15 to-cyan-600/10",
  },
  {
    title: "Automation System",
    description:
      "End-to-end workflow automation replacing 40+ manual processes across logistics operations.",
    technologies: ["n8n", "Python", "API Gateway", "Docker"],
    result: "$2.1M annual savings",
    gradient: "from-amber-600/15 to-orange-600/10",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Multi-region AWS architecture with auto-scaling, disaster recovery, and 99.99% uptime SLA.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Datadog"],
    result: "99.99% uptime achieved",
    gradient: "from-violet-600/15 to-blue-600/10",
  },
  {
    title: "Client Portal",
    description:
      "White-label client portal with project tracking, invoicing, messaging, and document management.",
    technologies: ["Next.js", "Supabase", "Stripe", "Vercel"],
    result: "94% client satisfaction",
    gradient: "from-cyan-600/15 to-emerald-600/10",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-[#030b18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A selection of enterprise systems we've designed and delivered for clients across industries."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden group flex flex-col"
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} relative p-6 flex items-end`}
              >
                <div className="absolute inset-0 grid-bg opacity-40" />
                <h3 className="text-xl font-black relative z-10">{project.title}</h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <p className="text-cyan-400 text-sm font-bold">{project.result}</p>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
