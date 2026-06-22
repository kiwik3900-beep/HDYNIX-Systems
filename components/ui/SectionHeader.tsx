"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}
    >
      <p className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
