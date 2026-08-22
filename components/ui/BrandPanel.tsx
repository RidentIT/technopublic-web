"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { company } from "@/lib/company";
import { LogoMark } from "@/components/ui/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "100%", label: "Genuine products" },
  { value: "24/7", label: "Online support" },
];

/**
 * The brand mock-up panel: one unified surface, no hover lift.
 *
 * Two modes:
 *  - default — the placeholder composition (logo mark, wordmark, two stats),
 *    used by the page headers.
 *  - `image` — a real photo fills the panel instead, and the placeholder
 *    content is dropped. The homepage hero uses this.
 *
 * The gradient background stays as a fallback behind the photo, so an image
 * that doesn't quite cover never exposes a bare edge.
 *
 * In `image` mode the hairline border is dropped and a vignette (matching the
 * panel's own dark gradient) fades the photo's edges into the surrounding
 * canvas, so the panel reads as the image emerging from the dark background
 * rather than a photo pasted inside a rectangle.
 */
export function BrandPanel({
  className,
  delay = 0.5,
  image,
  priority = false,
}: {
  className?: string;
  delay?: number;
  /** When set, the photo replaces the placeholder content entirely. */
  image?: { src: string; alt: string };
  /** Set for above-the-fold use so the photo isn't lazy-loaded. */
  priority?: boolean;
}) {
  return (
    <motion.div
      data-reveal=""
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={cn(
        "relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-[20px] text-center xl:max-w-none",
        image ? "border-0" : "border border-white/[0.06]",
        className ?? "h-[380px] sm:h-[440px] lg:h-[494px]",
      )}
      style={{
        background:
          "radial-gradient(circle at 70% 20%, rgba(227,30,36,0.35), transparent 55%), linear-gradient(160deg, #17181b, #0c0d0f)",
      }}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 92vw, (max-width: 1280px) 60vw, 500px"
            className="object-cover"
          />
          {/*
           * Vignette that fades the photo's edges into the page background
           * (#0A0A0A). Layered `inset` box-shadows rather than a radial
           * gradient: a radial vignette is elliptical and falls off unevenly
           * near a rounded rectangle's corners, leaving the corner curve
           * visibly exposed against the flat black page. An inset shadow
           * follows the box's own border-radius exactly, so the falloff hugs
           * every edge and corner the same way.
           */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[20px]"
            style={{
              boxShadow:
                "inset 0 0 36px 4px rgba(10,10,10,0.5), inset 0 0 80px 26px rgba(10,10,10,0.85), inset 0 0 130px 50px #0A0A0A",
            }}
          />
        </>
      ) : (
        <>
          <LogoMark className="mb-[18px] h-[54px] w-[54px] rounded-[14px]" />
          <p className="font-display text-[22px] font-black uppercase tracking-[-0.3px]">
            {company.shortName}
          </p>
          <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[1px] text-brand-400">
            IT Products &amp; Solutions
          </p>

          <dl className="mt-7 flex gap-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-xl font-bold">{stat.value}</dd>
                <dt className="mt-0.5 text-[11.5px] text-gray-400">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </>
      )}

      {/* Sits above the photo so the panel keeps its scanning-tech character. */}
      <span className="hero-scan" aria-hidden="true" />
    </motion.div>
  );
}
