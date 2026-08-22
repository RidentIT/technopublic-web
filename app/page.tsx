import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Solutions } from "@/components/sections/Solutions";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "IT Products & Solutions in Sri Lanka",
  description:
    "Genuine laptops, desktops, accessories, gaming products, networking, printers, projectors and CCTV systems — supplied, delivered islandwide and supported by Techno Hub Technology (PVT) LTD.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Solutions />
      <FeaturedProducts />
      <StatsBar />
      <CTABanner />
    </>
  );
}
