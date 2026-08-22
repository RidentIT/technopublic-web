"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

export type HeadlineLine = {
  text: string;
  /** Renders this line in the accent red. */
  accent?: boolean;
};

/**
 * Headline whose lines rise up out of a clip on mount, staggered.
 *
 * Each line is wrapped in `.hero-line` (overflow-hidden, with padding to keep
 * descenders from being cut) and the inner span translates up from 100%.
 * `data-reveal` lets the reduced-motion rule in globals.css force the text
 * visible — Framer serialises `initial` into the SSR HTML as opacity:0, which
 * nothing would otherwise clear.
 *
 * Shared by the homepage hero and the page headers so the entrance is identical.
 */
export function AnimatedHeadline({
  lines,
  className,
  as: Tag = "h1",
  startDelay = 0.15,
  step = 0.15,
}: {
  lines: HeadlineLine[];
  className?: string;
  as?: "h1" | "h2";
  startDelay?: number;
  step?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line.text} className="hero-line">
          <motion.span
            data-reveal=""
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: startDelay + i * step,
              ease: EASE,
            }}
            className={cn("block", line.accent && "text-brand-500")}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
