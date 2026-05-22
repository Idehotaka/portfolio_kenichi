"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/75 py-3 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/75"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 md:px-8">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white shadow-md shadow-indigo-500/30 dark:from-indigo-500 dark:to-violet-500">
            KS
          </span>
          <span className="text-light-text dark:text-dark-text">
            Kenichi{" "}
            <span className="gradient-text">Sato</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 backdrop-blur md:hidden dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {menuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label={
              !mounted
                ? "テーマを切り替え"
                : resolvedTheme === "dark"
                  ? "ライトモードに切り替え"
                  : "ダークモードに切り替え"
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {!mounted ? (
              <span className="h-5 w-5" aria-hidden />
            ) : resolvedTheme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200/80 bg-white/90 backdrop-blur-xl md:hidden dark:border-slate-800 dark:bg-slate-950/90"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-400"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
