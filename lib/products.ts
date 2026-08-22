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
 * Every product now has a real photo:
 *  - The four featured entries (business-laptops, gaming-pcs, routers,
 *    cctv-kits) use local files from /public.
 *  - The rest hotlink free-licence Unsplash photos (no attribution required)
 *    chosen to match each product, allowed via `remotePatterns` in
 *    next.config.mjs.
 * TODO: replace the hotlinked Unsplash photos with real product photography
 * and local files once available, for a permanent, non-external-dependent set.
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
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "all-in-one-pcs",
    name: "All-in-One PCs",
    category: "laptops-desktops",
    description:
      "Space-saving all-in-one systems for reception desks, clinics and small offices.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "monitors",
    name: "Monitors & Displays",
    category: "accessories",
    description:
      "Full HD to 4K displays, including eye-care panels for long working hours and dual-screen setups.",
    image: "https://images.unsplash.com/photo-1611648694931-1aeda329f9da?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "keyboards-mice",
    name: "Keyboards & Mice",
    category: "accessories",
    description:
      "Wired, wireless and mechanical input devices for everyday productivity and heavy typing.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "storage",
    name: "Storage & Memory",
    category: "accessories",
    description:
      "SSDs, hard drives, external storage, pen drives and RAM upgrades to bring older machines back to life.",
    image: "https://images.unsplash.com/photo-1669480380758-4b163a33f6f9?w=1200&q=80&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1566055972289-c52022ae23b7?w=1200&q=80&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "printers",
    name: "Printers & Multifunction Units",
    category: "printers-projectors",
    description:
      "Inkjet, laser and ink-tank printers, plus scanners and all-in-one office machines.",
    image: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "projectors",
    name: "Projectors & Presentation Kit",
    category: "printers-projectors",
    description:
      "Classroom and boardroom projectors with screens, mounts and cabling supplied and set up.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=1200&q=80&auto=format&fit=crop",
  },
];

/** The four cards shown in the home page "Featured" teaser grid. */
export const featuredProducts: Product[] = products.filter((p) => p.featured);
