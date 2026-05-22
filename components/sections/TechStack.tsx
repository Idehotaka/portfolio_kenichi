"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  HiCloud,
  HiCode,
  HiCube,
  HiDesktopComputer,
  HiShieldCheck,
} from "react-icons/hi";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

const categoryIcons: Record<string, IconType> = {
  "言語/フレームワーク": HiCode,
  クラウド: HiCloud,
  "IaC/コンテナ": HiCube,
  フロントエンド: HiDesktopComputer,
  "その他スキル": HiShieldCheck,
};

export function TechStack() {
  return (
    <section id="tech" className="section-pad">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <SectionHeading title="Tech Stack" subtitle="現在の技術スタック" />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? HiCode;
            return (
              <ScrollReveal key={group.category} delay={0.06 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="glass-card-hover group h-full p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-light-text dark:text-dark-text">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.04 * j, duration: 0.35 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex cursor-default items-center rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 text-sm text-slate-700 transition-colors hover:border-indigo-400/60 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
