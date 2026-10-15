"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ExecutiveFlyIn({
  children,
  className,
  delay = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: -150, x: 36, scale: 0.86, rotateZ: -5, filter: "blur(6px)" }
      }
      whileInView={
        reducedMotion
          ? undefined
          : { opacity: 1, y: 0, x: 0, scale: 1, rotateZ: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.28 }}
      transition={
        reducedMotion
          ? undefined
          : { type: "spring", stiffness: 56, damping: 18, mass: 1.3, delay }
      }
    >
      {children}
    </motion.div>
  );
}
