"use client";

import { motion } from "framer-motion";

/**
 * Scroll-triggered fade-up wrapper. Kept as a thin client component so the
 * sections that use it can stay server components.
 *
 * Reduced-motion and no-JS handling are deliberately done in CSS (see the
 * `[data-reveal]` rules in app/globals.css and the <noscript> block in
 * app/layout.tsx) rather than by branching on `useReducedMotion()` here.
 * Framer Motion serialises `initial` into the server HTML as
 * `style="opacity:0"`, and that inline style survives hydration — so rendering
 * a plain <div> on the client instead would leave the content permanently
 * invisible. A CSS rule with `!important` beats the inline style at paint time
 * and cannot go out of sync with hydration.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
