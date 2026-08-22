"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { categoryById, featuredProducts, isVector } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedProducts() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28" aria-labelledby="featured-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Featured Range</SectionLabel>
              <h2
                id="featured-heading"
                className="display-lg mt-5 max-w-2xl text-balance"
              >
                What we <span className="text-brand-500">stock</span>
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                disabled={atStart}
                aria-label="Previous featured products"
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white transition-colors",
                  atStart
                    ? "cursor-not-allowed opacity-40"
                    : "hover:border-brand-600 hover:bg-brand-600",
                )}
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                disabled={atEnd}
                aria-label="Next featured products"
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white transition-colors",
                  atEnd
                    ? "cursor-not-allowed opacity-40"
                    : "hover:border-brand-600 hover:bg-brand-600",
                )}
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>

        <ul
          ref={trackRef}
          onScroll={sync}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {featuredProducts.map((product) => {
            const category = categoryById(product.category);
            return (
              <li
                key={product.id}
                className="w-[82%] shrink-0 snap-start sm:w-[47%] lg:w-[calc(25%-15px)]"
              >
                <Link
                  href={`/products?category=${product.category}`}
                  className="group relative block h-full overflow-hidden rounded-xl border border-white/10"
                >
                  <div className="relative aspect-[4/5]">
                    {/* TODO: replace with a real product photo. */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized={isVector(product.image)}
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 47vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark red gradient overlay. */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-800/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-500">
                      {category.label}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight tracking-tight">
                      {product.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      View Products
                      <ArrowRight
                        className="h-4 w-4 text-brand-500 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
