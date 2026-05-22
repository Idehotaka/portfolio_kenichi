"use client";

import { motion } from "framer-motion";
import { HiCalendar, HiGlobeAlt, HiLocationMarker } from "react-icons/hi";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

export function About() {
  const details = [
    {
      icon: HiCalendar,
      label: "生年月日",
      value: `${personalInfo.birthDate}（${personalInfo.age}歳）`,
    },
    { icon: HiLocationMarker, label: "所在地", value: personalInfo.location },
    { icon: HiGlobeAlt, label: "国籍", value: personalInfo.nationality },
  ];

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <SectionHeading title="About" subtitle="プロフィール概要" />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="glass-card relative overflow-hidden p-8 md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
              <p className="relative leading-relaxed text-slate-600 dark:text-slate-300">
                {personalInfo.nameJa}（{personalInfo.nameEn}）は、
                {personalInfo.role}として{personalInfo.location}
                を拠点に活動しています。SIerとSaaS双方の経験を活かし、
                エンタープライズからスタートアップまで幅広い領域で価値を提供しています。
              </p>
              <blockquote className="relative mt-8 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/50 py-4 pl-5 pr-4 italic text-slate-600 dark:border-indigo-400 dark:bg-indigo-950/30 dark:text-slate-400">
                {personalInfo.selfPR}
              </blockquote>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="space-y-4 lg:col-span-2">
            {details.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="glass-card-hover flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 text-indigo-600 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-0.5 font-medium text-light-text dark:text-dark-text">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="glass-card p-6">
              <p className="mb-4 text-sm font-semibold text-light-text dark:text-dark-text">
                特徴・強み
              </p>
              <ul className="space-y-3">
                {personalInfo.strengths.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
