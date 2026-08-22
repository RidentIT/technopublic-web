import { ArrowRight } from "lucide-react";
import type { IconKey } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Spark } from "@/components/ui/Spark";

/** Four of the eight "Why Choose Techno Hub" points, expanded into cards. */
const pillars: { icon: IconKey; title: string; body: string }[] = [
  {
    icon: "badge",
    title: "Genuine & Quality-Assured Products",
    body: "Every item we supply is sourced through authorised channels and carries a manufacturer warranty.",
  },
  {
    icon: "tag",
    title: "Competitive Market Pricing",
    body: "Honest, transparent pricing on everything from a single accessory to a full office rollout.",
  },
  {
    icon: "truck",
    title: "Islandwide Delivery",
    body: "Ordered from anywhere in Sri Lanka we deliver to your door, carefully packed and tracked.",
  },
  {
    icon: "headset",
    title: "Reliable After-Sales Service",
    body: "Expert technical assistance and warranty support that continues long after the sale.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="why-heading">
      <Container>
        <Reveal>
          <SectionLabel>What We Deliver</SectionLabel>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="why-heading" className="display-lg max-w-2xl text-balance">
              Why businesses choose <span className="text-brand-500">Techno Hub</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-gray-400">
              We help you choose the right solutions, source genuine products, handle delivery and setup, and provide reliable support to keep your technology working every day.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.07}>
              <article className="panel group h-full p-6 transition-colors duration-300 hover:border-brand-600/50 hover:bg-ink-750">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Large flat-red callout. */}
        <Reveal delay={0.1}>
          <div className="relative mt-5 overflow-hidden rounded-xl bg-brand-deep p-8 sm:p-12">
            <Spark className="absolute -right-6 -top-6 h-40 w-40 text-white/10" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <SectionLabel tone="light">One Roof</SectionLabel>
                <h3 className="display-md mt-4 max-w-2xl text-balance text-white">
                  Your IT partner for every need
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
                  Complete technology solutions under one roof from a single
                  keyboard to laptops, networking, printers and full CCTV systems.
                </p>
              </div>
              <Button href="/contact" variant="white" size="lg" className="shrink-0">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
