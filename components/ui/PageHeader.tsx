"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { Spark } from "./Spark";
import { AnimatedHeadline, type HeadlineLine } from "./AnimatedHeadline";
import { BrandPanel } from "./BrandPanel";

/**
 * Landing block at the top of /products, /services, /about and /contact.
 *
 * Mirrors the homepage hero: eyebrow + multi-line headline + intro on the left,
 * the brand mock-up panel on the right, all entering with the same staggered
 * rise. The headline uses `display-lg` — the same scale as the homepage section
 * headings — so it sits comfortably beside the panel.
 */
export function PageHeader({
  label,
  lines,
  intro,
}: {
  label: string;
  /** One entry per rendered line; mark one `accent` to colour it red. */
  lines: HeadlineLine[];
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/15 blur-[110px]"
      />

      <Container className="relative">
        {/*
         * Fixed 360px panel column rather than a fraction: the longest headline
         * line ("Genuine technology,") needs 745px at this size, and a
         * proportional split left only 676px. This gives the text 816px and
         * keeps the panel the same width on every page.
         */}
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <motion.p
              data-reveal=""
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mb-[22px] flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-500"
            >
              <Spark className="h-3.5 w-3.5" />
              {label}
            </motion.p>

            <AnimatedHeadline lines={lines} className="display-lg" />

            {intro && (
              <motion.p
                data-reveal=""
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  // Falls in after the last headline line.
                  delay: 0.35 + lines.length * 0.15,
                  ease: "easeOut",
                }}
                className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
              >
                {intro}
              </motion.p>
            )}
          </div>

          <BrandPanel
            delay={0.4}
            className="h-[300px] sm:h-[340px] lg:h-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}
