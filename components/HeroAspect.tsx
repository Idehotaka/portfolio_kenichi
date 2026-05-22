"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const layers = [
  {
    className:
      "left-[-15%] top-[5%] h-[55%] w-[60%] bg-gradient-to-br from-indigo-500/40 via-violet-500/25 to-transparent dark:from-indigo-500/30 dark:via-violet-600/20",
    style: { clipPath: "polygon(0 10%, 100% 0, 90% 100%, 5% 95%)" },
    rotate: -12,
    delay: 0,
  },
  {
    className:
      "right-[-10%] top-[20%] h-[50%] w-[55%] bg-gradient-to-bl from-cyan-400/35 via-sky-400/20 to-transparent dark:from-cyan-400/25 dark:via-teal-500/15",
    style: { clipPath: "polygon(12% 0, 100% 6%, 94% 90%, 0 100%)" },
    rotate: 10,
    delay: 0.12,
  },
  {
    className:
      "bottom-[-5%] left-[20%] h-[45%] w-[62%] bg-gradient-to-tr from-fuchsia-400/25 via-violet-400/15 to-transparent dark:from-fuchsia-500/18 dark:via-violet-600/10",
    style: { clipPath: "polygon(5% 100%, 90% 80%, 100% 15%, 0 0)" },
    rotate: -5,
    delay: 0.24,
  },
] as const;

type HeroAspectProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function HeroAspect({ scrollRef }: HeroAspectProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <motion.div
      aria-hidden
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[32%] h-[min(75vw,560px)] w-[min(75vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[110px] dark:bg-violet-600/15"
        />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[6%] top-[15%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px] dark:bg-cyan-500/12"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[4%] h-80 w-80 rounded-full bg-fuchsia-400/15 blur-[100px] dark:bg-fuchsia-500/10"
        />
      </div>

      <div className="absolute inset-0 mix-blend-multiply opacity-75 dark:mix-blend-plus-lighter dark:opacity-65">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92, rotate: layer.rotate - 8 }}
            animate={{ opacity: 1, scale: 1, rotate: layer.rotate }}
            transition={{ duration: 1.2, delay: layer.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute blur-[2px] ${layer.className}`}
            style={layer.style}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(99 102 241 / 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(99 102 241 / 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 38%, black 15%, transparent 78%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-light-bg to-transparent dark:from-dark-bg" />
    </motion.div>
  );
}
