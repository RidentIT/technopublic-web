import { Suspense } from "react";
import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the Techno Hub range: laptops and desktops, computer accessories, gaming products, networking solutions, printers and projectors, and CCTV systems — all genuine and warranty-backed, delivered islandwide.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Techno Hub",
    description:
      "Genuine laptops, accessories, gaming gear, networking, printers, projectors and CCTV systems, delivered islandwide across Sri Lanka.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        label="Our Products"
        lines={[
          { text: "Genuine technology," },
          { text: "ready to deliver.", accent: true },
        ]}
        intro="Every range below is sourced through authorised channels and backed by warranty. Tell us what you need and we'll quote you the right configuration."
      />
      {/* useSearchParams needs a Suspense boundary to keep this route static. */}
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <ProductCatalog />
      </Suspense>
      <CTABanner
        heading="Can't find what you're looking for?"
        subtext="We source a much wider range than we list here. Send us your requirement and we'll get back to you with options and pricing."
        buttonLabel="Request a Quote"
      />
    </>
  );
}
