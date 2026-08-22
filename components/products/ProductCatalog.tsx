"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { mailtoHref } from "@/lib/company";
import {
  type CategoryId,
  categories,
  categoryById,
  isVector,
  products,
} from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Filter = CategoryId | "all";

const isCategoryId = (value: string | null): value is CategoryId =>
  categories.some((c) => c.id === value);

export function ProductCatalog() {
  // Deep links from the home page arrive as /products?category=cctv.
  const searchParams = useSearchParams();
  const initial = searchParams.get("category");
  const [filter, setFilter] = useState<Filter>(
    isCategoryId(initial) ? initial : "all",
  );

  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  const chips: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  return (
    <section className="py-16 sm:py-20" aria-labelledby="catalogue-heading">
      <Container>
        <h2 id="catalogue-heading" className="sr-only">
          Product catalogue
        </h2>

        {/* Filter chips — horizontally scrollable on narrow screens. */}
        <div
          role="group"
          aria-label="Filter products by category"
          className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {chips.map((chip) => {
            const active = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setFilter(chip.id)}
                aria-pressed={active}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                  active
                    ? "border-brand-deep bg-brand-deep text-white"
                    : "border-white/15 text-gray-400 hover:border-white/40 hover:text-white",
                )}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-gray-400" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "range" : "ranges"}
          {filter !== "all" && ` in ${categoryById(filter).name}`}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => {
            const category = categoryById(product.category);
            return (
              <Reveal key={product.id} delay={Math.min(i, 5) * 0.05}>
                <article className="panel group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-brand-600/50">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* TODO: replace with a real product photo. */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized={isVector(product.image)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent"
                    />
                    <p className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-500">
                      {category.label}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                      {product.description}
                    </p>
                    <a
                      href={mailtoHref(
                        `Product enquiry: ${product.name}`,
                        `Hello Techno Hub,\n\nI would like more information about "${product.name}".\n\nThank you.`,
                      )}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-brand-deep px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep-hover"
                    >
                      Enquire
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
