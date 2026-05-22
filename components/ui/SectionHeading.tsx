"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <motion.span
        initial={{ opacity: 0, x: centered ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-3xl font-bold tracking-tight text-light-text md:text-4xl lg:text-5xl dark:text-dark-text"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-4 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 ${
          centered ? "mx-auto origin-center" : ""
        }`}
      />
    </div>
  );
}
