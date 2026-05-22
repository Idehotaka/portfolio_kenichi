"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPaperAirplane } from "react-icons/hi";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    {
      href: `mailto:${contact.email}`,
      icon: HiMail,
      label: "Email",
      text: contact.email,
      external: false,
    },
    {
      href: contact.github,
      icon: FaGithub,
      label: "GitHub",
      text: "GitHub",
      external: contact.github !== "#",
    },
    {
      href: contact.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
      text: "LinkedIn",
      external: contact.linkedin !== "#",
    },
  ];

  const inputClass = (id: string) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3 text-sm outline-none transition-all duration-300 dark:bg-slate-900/80 ${
      focused === id
        ? "border-indigo-400 ring-2 ring-indigo-500/20 dark:border-indigo-500"
        : "border-slate-200/80 dark:border-slate-700"
    }`;

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <SectionHeading title="Contact" subtitle="お気軽にご連絡ください" />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-4">
              {socialLinks.map(({ href, icon: Icon, label, text, external }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="glass-card-hover flex items-center gap-4 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 text-indigo-600 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-0.5 font-medium text-light-text dark:text-dark-text">
                      {text}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <div className="space-y-5">
                {(
                  [
                    { id: "name", label: "お名前", type: "text" },
                    { id: "email", label: "メールアドレス", type: "email" },
                  ] as const
                ).map(({ id, label, type }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      onFocus={() => setFocused(id)}
                      onBlur={() => setFocused(null)}
                      className={inputClass(id)}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-6 w-full"
              >
                <HiPaperAirplane className="h-4 w-4" />
                送信する
              </motion.button>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    送信ありがとうございます。（デモ表示）
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
