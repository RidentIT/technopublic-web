/**
 * Service/solution categories for the /services page.
 *
 * The six product categories reuse the name and icon already defined in
 * `categories` (lib/products.ts) so those never drift apart — only the longer
 * page copy lives here. Technical support is a service rather than a product
 * range, so it is defined in full below.
 */
import { type CategoryId, type IconKey, categories } from "./products";

export type Service = {
  id: string;
  name: string;
  icon: IconKey;
  /** Two-to-three line description used on the services grid. */
  description: string;
  /** Category to deep link into on /products, when the service maps to stock. */
  category?: CategoryId;
};

/** Longer copy per product category, keyed by category id. */
const detail: Record<CategoryId, string> = {
  "laptops-desktops":
    "Business laptops, student notebooks, all-in-ones and custom-built desktop workstations. We size the specification to how you actually work and your budget, then supply it configured and ready to use.",
  accessories:
    "Monitors, keyboards, mice, storage, memory, cables and every day-to-day peripheral. Ideal for kitting out a new desk or upgrading an ageing machine rather than replacing it.",
  gaming:
    "Gaming rigs, graphics cards, high-refresh monitors, mechanical keyboards, headsets and controllers. Every build is assembled and stress-tested before it reaches you.",
  networking:
    "Routers, switches, access points and complete structured cabling for home and office. We plan the coverage, supply the hardware and get the network running properly.",
  "printers-projectors":
    "Inkjet, laser and ink-tank printers, scanners, multifunction units and presentation projectors — supplied with screens, mounts and cabling where you need them.",
  cctv:
    "IP and analogue camera systems with recorders, surveillance-grade storage and full installation. Set up for remote viewing so you can check in from anywhere.",
};

export const services: Service[] = [
  ...categories.map((category) => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
    description: detail[category.id],
    category: category.id,
  })),
  {
    id: "support",
    name: "Technical Support & After-Sales Service",
    icon: "headset",
    description:
      "Installation, setup and troubleshooting for everything we supply — plus warranty claims handled on your behalf. Expert technical assistance is available online 24/7, and our team stays with you long after the sale.",
  },
];
