import type { IconKey } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Deliberately factual figures only. Techno Hub was founded in 2025, so no
 * "years in business" or client-count claims are made here.
 */
const stats: { icon: IconKey; value: string; label: string }[] = [
  { icon: "calendar", value: "2025", label: "Established in Sri Lanka" },
  { icon: "badge", value: "100%", label: "Genuine, warranty-backed products" },
  { icon: "truck", value: "25", label: "Districts served islandwide" },
  { icon: "headset", value: "24/7", label: "Online support availability" },
];

export function StatsBar() {
  return (
    <section
      className="border-y border-white/10 bg-ink-900 py-14"
      aria-label="Techno Hub at a glance"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div className="flex flex-col items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                  <Icon name={stat.icon} className="h-5 w-5" />
                </span>
                <dd className="font-display text-4xl font-black leading-none tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="text-sm leading-snug text-gray-400">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
