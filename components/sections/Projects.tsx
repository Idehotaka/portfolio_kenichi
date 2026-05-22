"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-pad section-alt">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <SectionHeading title="Featured Projects" subtitle="主な実績・プロジェクト" />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.08 * i}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="glass-card-hover group relative flex h-full flex-col overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 group-hover:opacity-100" />
                <p className="relative text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {project.company} · {project.period}
                </p>
                <h3 className="relative mt-3 font-heading text-xl font-semibold text-light-text dark:text-dark-text">
                  {project.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="relative mt-5 rounded-lg bg-slate-50/90 px-3 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800/50 dark:text-slate-200">
                  成果: {project.achievement}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
