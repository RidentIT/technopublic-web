import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete IT solutions from Techno Hub Technology (PVT) LTD. — laptops and desktops, computer accessories, gaming products, networking, printers and projectors, CCTV systems, plus technical support and after-sales service across Sri Lanka.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Techno Hub",
    description:
      "Laptops, accessories, gaming, networking, printers, projectors, CCTV and full technical support — supplied and serviced islandwide.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        image={{
          src: "/techno2.jpg",
          alt: "A technician installing a processor onto a motherboard, part of the technical support Techno Hub provides",
        }}
        lines={[
          { text: "Technology" },
          { text: "Solutions", accent: true },
          { text: "For Every Need" },
        ]}
        intro="Everything your workspace needs in one place. We supply quality technology, handle the installation, and provide ongoing support long after delivery."
      />
      <ServicesGrid />
      <CTABanner />
    </>
  );
}
