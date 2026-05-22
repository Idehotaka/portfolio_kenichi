"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
};

const offsets = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -48 },
  right: { x: 48 },
  none: {},
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 48,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const offset = offsets[direction];
  const initialY = "y" in offset ? (offset.y ?? amount) : 0;
  const initialX = "x" in offset ? (offset.x ?? amount) : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : { opacity: 0, y: initialY, x: initialX, filter: "blur(6px)" }
      }
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
