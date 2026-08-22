"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { missionShort } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { BrandPanel } from "@/components/ui/BrandPanel";

/** Fixed copy — the three-line break pattern is deliberate, don't reflow it. */
const headline = [
  { text: "Technology solutions" },
  { text: "That perform.", accent: true },
  { text: "Deliver. Empower." },
];

export function Hero() {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Cursor-tracked spotlight. Written straight to CSS custom properties so
  // pointer movement never triggers a React re-render.
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const el = backdropRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty(
        "--hero-x",
        `${((event.clientX - rect.left) / rect.width) * 100}%`,
      );
      el.style.setProperty(
        "--hero-y",
        `${((event.clientY - rect.top) / rect.height) * 100}%`,
      );
    },
    [],
  );

  return (
    <section className="relative pb-20 pt-10 sm:pt-14 lg:pb-24" onPointerMove={handlePointerMove}>
      {/*
       * Decorative backdrop. It clips its own overflow so the blurred orbs stay
       * inside the hero — and because it lives here rather than wrapping the
       * page, it is never an ancestor of the sticky navbar (which sits in the
       * root layout as a sibling of <main>). Moving this up the tree would
       * silently break `position: sticky` on the header.
       */}
      <div
        ref={backdropRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span
          className="hero-orb hero-orb-1 -right-32 -top-40 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(227,30,36,0.55), transparent 70%)",
          }}
        />
        <span
          className="hero-orb hero-orb-2 -bottom-28 -left-24 h-[380px] w-[380px]"
          style={{
            background:
              "radial-gradient(circle, rgba(227,30,36,0.25), transparent 70%)",
          }}
        />
        <span className="hero-spotlight" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <AnimatedHeadline lines={headline} className="hero-headline" />

            <motion.p
              data-reveal=""
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
              className="mt-[26px] max-w-xl text-base leading-relaxed text-gray-400 sm:text-[16.5px]"
            >
              {missionShort}
            </motion.p>

            <motion.div
              data-reveal=""
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="mt-[34px] flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Button href="/products" size="lg" className="shine">
                Explore Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>

          <BrandPanel
            delay={0.5}
            priority
            image={{
              src: "/techno1.png",
              alt: "A laptop displaying a website design, part of the technology range supplied by Techno Hub",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
