import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { mailtoHref } from "@/lib/company";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <Container>
        <h2 id="services-heading" className="sr-only">
          What we supply and support
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            // The support service isn't a stock range; it spans the final row
            // so the grid closes cleanly and it reads as its own thing.
            const wide = !service.category;
            return (
              <Reveal
                key={service.id}
                delay={Math.min(i, 5) * 0.06}
                className={cn(wide && "sm:col-span-2 lg:col-span-3")}
              >
                <article
                  className={cn(
                    "panel group flex h-full flex-col p-6 transition-colors duration-300 hover:border-brand-600/50 hover:bg-ink-750",
                    wide && "lg:flex-row lg:items-center lg:gap-10",
                  )}
                >
                  {/* Grows so the button sits at the card foot (column layout)
                      or fills the row (wide layout). */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                        <Icon name={service.icon} className="h-6 w-6" />
                      </span>
                      {service.category && (
                        <Link
                          href={`/products?category=${service.category}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 transition-colors hover:text-brand-500"
                        >
                          View stock
                          <ArrowUpRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight">
                      {service.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed text-gray-400",
                        wide && "max-w-3xl",
                      )}
                    >
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={mailtoHref(
                      `Enquiry: ${service.name}`,
                      `Hello Techno Hub,\n\nI'd like to enquire about "${service.name}".\n\nThank you.`,
                    )}
                    className={cn(
                      "mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-brand-deep px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep-hover",
                      wide && "shrink-0 lg:mt-0",
                    )}
                  >
                    Enquire
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
