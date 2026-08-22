import type { Metadata } from "next";
import { Check, Target } from "lucide-react";
import {
  businessGoals,
  company,
  story,
  targetAudience,
} from "@/lib/company";
import { CTABanner } from "@/components/sections/CTABanner";
import { MissionVisionCards } from "@/components/sections/MissionVision";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Spark } from "@/components/ui/Spark";

export const metadata: Metadata = {
  title: "About",
  description:
    "Techno Hub Technology (PVT) LTD. is an emerging Sri Lankan IT solutions provider based in Anuradhapura, supplying genuine laptops, accessories, gaming, networking, printers and CCTV systems at competitive prices with reliable after-sales support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Techno Hub",
    description:
      "Who we are: an emerging Sri Lankan IT solutions provider built on genuine products, competitive pricing and dependable after-sales support.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Who We Are"
        image={{
          src: "/techno4.jpg",
          alt: "A red-lit gaming setup with a desk, monitors and gaming chair, reflecting the technology Techno Hub supports",
        }}
        lines={[
          { text: "Who We Are." },
          { text: "Built On Trust.", accent: true },
        ]}
        intro={`${company.shortName} supplies genuine technology and complete IT solutions across Sri Lanka — at prices that make sense, with support that lasts beyond the sale.`}
      />

      {/* Company story */}
      <section className="py-16 sm:py-20" aria-labelledby="story-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
              <h2 id="story-heading" className="display-lg mt-5 text-balance">
                An emerging Sri Lankan{" "}
                <span className="text-brand-500">technology partner</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5">
                {story.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-relaxed text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section
        className="border-y border-white/10 bg-ink-900 py-16 sm:py-20"
        aria-labelledby="mission-heading"
      >
        <Container>
          <Reveal>
            <SectionLabel>What Drives Us</SectionLabel>
            <h2 id="mission-heading" className="display-lg mt-5 max-w-3xl text-balance">
              Our mission &amp; <span className="text-brand-500">vision</span>
            </h2>
          </Reveal>
          <MissionVisionCards className="mt-12" />
        </Container>
      </section>

      {/* Business goals */}
      <section className="py-16 sm:py-20" aria-labelledby="goals-heading">
        <Container>
          <Reveal>
            <SectionLabel>Business Goals</SectionLabel>
            <h2 id="goals-heading" className="display-lg mt-5 max-w-3xl text-balance">
              What we&apos;re <span className="text-brand-500">working towards</span>
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-4 lg:grid-cols-2">
            {businessGoals.map((goal, i) => (
              <li key={goal} className="h-full">
                <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
                  <div className="panel flex h-full items-start gap-4 p-5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <Target className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-300">
                      {goal}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Who we serve */}
      <section
        className="border-y border-white/10 bg-ink-900 py-16 sm:py-20"
        aria-labelledby="audience-heading"
      >
        <Container>
          <Reveal>
            <SectionLabel>Who We Serve</SectionLabel>
            <h2
              id="audience-heading"
              className="display-lg mt-5 max-w-3xl text-balance"
            >
              Built for <span className="text-brand-500">everyone</span> who
              relies on technology
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
              From a student buying a first laptop to an organisation rolling out
              a full office network — we supply and support them all.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 flex flex-wrap gap-3">
              {targetAudience.map((audience) => (
                <li
                  key={audience}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-800 px-4 py-2.5 text-sm text-gray-300 transition-colors hover:border-brand-600/50 hover:text-white"
                >
                  <Spark className="h-3.5 w-3.5" />
                  {audience}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Why choose us — the full eight, unlike the four-card homepage teaser */}
      <section className="py-16 sm:py-20" aria-labelledby="why-us-heading">
        <Container>
          <Reveal>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              id="why-us-heading"
              className="display-lg mt-5 max-w-3xl text-balance"
            >
              Eight reasons customers{" "}
              <span className="text-brand-500">stay with us</span>
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {company.whyChooseUs.map((reason, i) => (
              <li key={reason} className="h-full">
                <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
                  <div className="panel flex h-full items-center gap-4 p-5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-display text-base font-bold uppercase leading-tight tracking-tight">
                      {reason}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
