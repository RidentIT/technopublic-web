import { cn } from "@/lib/cn";
import { company } from "@/lib/company";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Mission and vision cards. Shared by the homepage "Who We Are" teaser and the
 * dedicated /about page so the two can never drift apart.
 */
export function MissionVisionCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2", className)}>
      <Reveal delay={0.08}>
        <article className="panel h-full p-7">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-brand-500">
            Our Mission
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {company.mission}
          </p>
        </article>
      </Reveal>
      <Reveal delay={0.16}>
        <article className="panel h-full p-7">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-brand-500">
            Our Vision
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {company.vision}
          </p>
        </article>
      </Reveal>
    </div>
  );
}
