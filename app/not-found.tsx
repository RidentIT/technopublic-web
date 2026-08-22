import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <SectionLabel>Error 404</SectionLabel>
        <h1 className="display-xl mt-6 max-w-3xl text-balance">
          This page has <span className="text-brand-500">moved on.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
          The page you were looking for doesn&apos;t exist. Browse our product
          range instead, or get in touch and we&apos;ll point you in the right
          direction.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/products" size="lg">
            Explore Products
          </Button>
          <Button href="/" variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
