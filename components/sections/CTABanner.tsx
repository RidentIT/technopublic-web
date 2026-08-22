import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Spark } from "@/components/ui/Spark";

/** Red gradient closing banner, reused at the bottom of every route. */
export function CTABanner({
  heading = "Ready to upgrade your technology?",
  subtext = "Get in touch and we'll help you find the right solution for your needs.",
  buttonLabel = "Contact Us",
  href = "/contact",
}: {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-brand-deep p-8 sm:p-14">
            <Spark className="absolute -bottom-10 -left-8 h-48 w-48 text-white/10" />
            <Spark className="absolute -right-6 top-6 h-24 w-24 text-white/10" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="display-md text-balance text-white">{heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                  {subtext}
                </p>
              </div>
              <Button href={href} variant="white" size="lg" className="shrink-0">
                {buttonLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
