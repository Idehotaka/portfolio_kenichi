"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 py-12 dark:border-slate-800/80">
      <div className="mx-auto max-w-content px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-sm font-semibold text-light-text dark:text-dark-text">
            {personalInfo.nameJa}
            <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
            {personalInfo.role}
          </p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {personalInfo.nameJa} ({personalInfo.nameEn}
            ). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
