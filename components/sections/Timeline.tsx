"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, workExperience } from "@/lib/data";

const allItems = [
  ...education.map((edu) => ({
    type: "education" as const,
    icon: HiAcademicCap,
    period: edu.period,
    title: `${edu.university}（${edu.location}）`,
    role: edu.major,
    description: edu.description,
    achievement: edu.degree,
    tech: undefined as string[] | undefined,
  })),
  ...workExperience.map((job) => ({
    type: "work" as const,
    icon: HiBriefcase,
    period: job.period,
    title: `${job.company}（${job.location}）`,
    role: job.role,
    description: job.description,
    achievement: job.achievement,
    tech: job.technologies,
  })),
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <section id="timeline" className="section-pad section-alt">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <SectionHeading title="Timeline" subtitle="学歴・職歴" />
        </ScrollReveal>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-slate-200 md:left-1/2 md:block md:-translate-x-px dark:bg-slate-800">
            <motion.div
              style={{ scaleY: lineScale, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500"
            />
          </div>

          <div className="space-y-10 md:space-y-12">
            {allItems.map((item, i) => (
              <ScrollReveal
                key={`${item.title}-${i}`}
                delay={0.08 * i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <TimelineItem
                  icon={item.icon}
                  period={item.period}
                  title={item.title}
                  role={item.role}
                  description={item.description}
                  achievement={item.achievement}
                  tech={item.tech}
                  align={i % 2 === 0 ? "left" : "right"}
                  isLast={i === allItems.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineItemProps = {
  icon: IconType;
  period: string;
  title: string;
  role: string;
  description: string;
  achievement: string;
  tech?: string[];
  align: "left" | "right";
  isLast?: boolean;
};

function TimelineItem({
  icon: Icon,
  period,
  title,
  role,
  description,
  achievement,
  tech,
  align,
}: TimelineItemProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex md:items-center ${
        isLeft ? "md:justify-start md:pr-[calc(50%+2rem)]" : "md:justify-end md:pl-[calc(50%+2rem)]"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 md:left-1/2 md:-translate-x-1/2 dark:from-indigo-500 dark:to-violet-500"
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`glass-card-hover ml-14 w-full p-6 md:ml-0 md:max-w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          {period}
        </span>
        <h3 className="mt-2 font-heading text-xl font-semibold text-light-text dark:text-dark-text">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
        {tech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <p className="mt-4 rounded-lg bg-indigo-50/80 px-3 py-2 text-sm font-medium text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
          成果: {achievement}
        </p>
      </motion.article>
    </div>
  );
}
