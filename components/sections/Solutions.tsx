import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-24 border-y border-white/10 bg-ink-900 py-20 sm:py-28"
      aria-labelledby="solutions-heading"
    >
      <Container>
        <Reveal>
          <SectionLabel>Our Solutions</SectionLabel>
          <h2 id="solutions-heading" className="display-lg mt-5 max-w-3xl text-balance">
            Everything your setup needs,{" "}
            <span className="text-brand-500">supplied and supported</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.06}>
              <Link
                href={`/products?category=${category.id}`}
                className="panel group flex h-full flex-col p-6 transition-colors duration-300 hover:border-brand-600/50 hover:bg-ink-750"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={category.icon} className="h-6 w-6" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {category.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="outline" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
