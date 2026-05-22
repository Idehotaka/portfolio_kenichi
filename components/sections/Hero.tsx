"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown } from "react-icons/hi";
import { HeroAspect } from "@/components/HeroAspect";
import { personalInfo } from "@/lib/data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-28 md:px-8"
    >
      <HeroAspect scrollRef={sectionRef} />
      <div className="relative z-10 mx-auto w-full max-w-content text-center">
        <motion.div
          {...fadeUp(0)}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/60 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-500/30 dark:bg-slate-900/50 dark:text-indigo-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {personalInfo.role}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          <TypingTitle text={personalInfo.nameJa} />
        </motion.h1>

        <motion.p
          {...fadeUp(0.85)}
          className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-400 md:text-xl"
        >
          {personalInfo.nameEn}
        </motion.p>

        <motion.p
          {...fadeUp(1)}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300"
        >
          {personalInfo.catchphrase}
        </motion.p>

        <motion.div
          {...fadeUp(1.2)}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            連絡する
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/60 px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-indigo-500/50 dark:hover:text-indigo-400"
          >
            実績を見る
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href="#about"
            aria-label="Aboutへスクロール"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/50 text-slate-400 backdrop-blur dark:border-slate-700 dark:bg-slate-900/50"
          >
            <HiArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function TypingTitle({ text }: { text: string }) {
  const chars = text.split("");

  return (
    <span className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: 0.35 + i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="gradient-text inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
