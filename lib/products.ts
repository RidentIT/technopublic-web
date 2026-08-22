/**
 * Static product/category catalogue for the Products page.
 *
 * This is intentionally a plain data file — the site is a marketing brochure,
 * not a store. There is no cart, no checkout and no pricing; every card routes
 * the visitor to an enquiry instead.
 */

export type CategoryId =
  | "laptops-desktops"
  | "accessories"
  | "gaming"
  | "networking"
  | "printers-projectors"
  | "cctv";

export type Category = {
  id: CategoryId;
  /** Short label used on filter chips. */
  label: string;
  /** Full label used in headings and card eyebrows. */
  name: string;
  /** Lucide icon key — resolved to a component in `components/ui/Icon.tsx`. */
  icon: IconKey;
  description: string;
};

export type IconKey =
  | "laptop"
  | "keyboard"
  | "gamepad"
  | "network"
  | "printer"
  | "cctv"
  | "shield"
  | "tag"
  | "truck"
  | "headset"
  | "calendar"
  | "badge";

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  /** Path to a local image under /public. */
  image: string;
  /** Highlighted on the home page teaser grid. */
  featured?: boolean;
};

export const categories: Category[] = [
  {
    id: "laptops-desktops",
    label: "Laptops & Desktops",
    name: "Laptops & Desktops",
    icon: "laptop",
    description:
      "Business laptops, student notebooks, all-in-ones and custom-built desktop workstations.",
  },
  {
    id: "accessories",
    label: "Accessories",
    name: "Computer Accessories",
    icon: "keyboard",
    description:
      "Keyboards, mice, monitors, storage, cables and every day-to-day peripheral you need.",
  },
  {
    id: "gaming",
    label: "Gaming",
    name: "Gaming Products",
    icon: "gamepad",
    description:
      "Gaming rigs, graphics cards, high-refresh monitors, headsets and controllers.",
  },
  {
    id: "networking",
    label: "Networking",
    name: "Networking Solutions",
    icon: "network",
    description:
      "Routers, switches, access points and complete structured cabling for home and office.",
  },
  {
    id: "printers-projectors",
    label: "Printers & Projectors",
    name: "Printers & Projectors",
    icon: "printer",
    description:
      "Inkjet and laser printers, scanners, multifunction units and presentation projectors.",
  },
  {
    id: "cctv",
    label: "CCTV",
    name: "CCTV Systems",
    icon: "cctv",
    description:
      "IP and analogue camera systems, recorders and full installation for home and business.",
  },
];

export const categoryById = (id: CategoryId): Category =>
  categories.find((c) => c.id === id)!;

/**
 * The placeholder art is SVG, which the Next.js image optimizer will not serve
 * without `dangerouslyAllowSVG`, and which has nothing to optimize regardless.
 * Vector sources are therefore passed through untouched; swapping in a real
 * JPG/PNG/WebP automatically re-enables optimization with no other change.
 */
export const isVector = (src: string): boolean => src.endsWith(".svg");

/*
 * The four featured entries (business-laptops, gaming-pcs, routers, cctv-kits)
 * use real photos from /public. Every other `image` below still points at
 * /products/*.svg — generated dark-gradient placeholder panels, correct in
 * tone and aspect ratio but not actual products.
 * TODO: replace the remaining SVG placeholders with real product photography.
 */
export const products: Product[] = [
  {
    id: "business-laptops",
    name: "Business & Student Laptops",
    category: "laptops-desktops",
    description:
      "Genuine, warranty-backed laptops from leading brands — configured for study, office work or travel.",
    image: "/laptop.jpg",
    featured: true,
  },
  {
    id: "desktop-workstations",
    name: "Desktop Workstations",
    category: "laptops-desktops",
    description:
      "Custom-built desktops assembled to your budget and workload, from office PCs to design workstations.",
    image: "/products/desktops.svg",
  },
  {
    id: "all-in-one-pcs",
    name: "All-in-One PCs",
    category: "laptops-desktops",
    description:
      "Space-saving all-in-one systems for reception desks, clinics and small offices.",
    image: "/products/all-in-one.svg",
  },
  {
    id: "monitors",
    name: "Monitors & Displays",
    category: "accessories",
    description:
      "Full HD to 4K displays, including eye-care panels for long working hours and dual-screen setups.",
    image: "/products/monitors.svg",
  },
  {
    id: "keyboards-mice",
    name: "Keyboards & Mice",
    category: "accessories",
    description:
      "Wired, wireless and mechanical input devices for everyday productivity and heavy typing.",
    image: "/products/keyboards.svg",
  },
  {
    id: "storage",
    name: "Storage & Memory",
    category: "accessories",
    description:
      "SSDs, hard drives, external storage, pen drives and RAM upgrades to bring older machines back to life.",
    image: "/products/storage.svg",
  },
  {
    id: "gaming-pcs",
    name: "Gaming PCs & Graphics Cards",
    category: "gaming",
    description:
      "High-performance builds and GPUs, assembled and stress-tested before they reach you.",
    image: "/pc.png",
    featured: true,
  },
  {
    id: "gaming-peripherals",
    name: "Gaming Peripherals",
    category: "gaming",
    description:
      "Mechanical keyboards, precision mice, headsets, controllers and high-refresh gaming monitors.",
    image: "/products/gaming-gear.svg",
  },
  {
    id: "routers",
    name: "Routers & Access Points",
    category: "networking",
    description:
      "Dual-band routers, mesh systems and access points sized to your home or office coverage.",
    image: "/router.jpg",
    featured: true,
  },
  {
    id: "switches-cabling",
    name: "Switches & Structured Cabling",
    category: "networking",
    description:
      "Managed and unmanaged switches, patch panels and complete office network cabling.",
    image: "/products/networking.svg",
  },
  {
    id: "printers",
    name: "Printers & Multifunction Units",
    category: "printers-projectors",
    description:
      "Inkjet, laser and ink-tank printers, plus scanners and all-in-one office machines.",
    image: "/products/printers.svg",
  },
  {
    id: "projectors",
    name: "Projectors & Presentation Kit",
    category: "printers-projectors",
    description:
      "Classroom and boardroom projectors with screens, mounts and cabling supplied and set up.",
    image: "/products/projectors.svg",
  },
  {
    id: "cctv-kits",
    name: "CCTV Camera Systems",
    category: "cctv",
    description:
      "Complete IP and analogue surveillance packages with recorders, storage and installation.",
    image: "/cctv.jpg",
    featured: true,
  },
  {
    id: "cctv-accessories",
    name: "Recorders & Surveillance Accessories",
    category: "cctv",
    description:
      "DVRs, NVRs, surveillance-grade drives, power supplies and remote viewing setup.",
    image: "/products/cctv-accessories.svg",
  },
];

/** The four cards shown in the home page "Featured" teaser grid. */
export const featuredProducts: Product[] = products.filter((p) => p.featured);
