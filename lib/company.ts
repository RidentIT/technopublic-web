/**
 * Single source of truth for every piece of company information rendered on the
 * public site. Import from here rather than hardcoding strings in components so
 * a phone number or address only ever has to change in one place.
 *
 * NOTE: the owner's personal phone number and personal email address are
 * deliberately NOT stored in this file. Only the business email and the three
 * business phone numbers below may appear on the public site.
 */
export const company = {
  name: "Techno Hub Technology (PVT) LTD.",
  shortName: "Techno Hub",
  tagline: "Technology Solutions That Perform. Deliver. Empower.",
  email: "hello.technohub@gmail.com",
  address: "601/111, Airport Road, Anuradhapura, Sri Lanka.",
  hours: "Online Support Available 24/7 | Customer Service During Business Hours",
  founded: 2025,
  phones: [
    { label: "Nuwan (Owner)", number: "070 332 3352" },
    { label: "Yashoda – Techno Hub", number: "077 080 1219" },
    { label: "Sajini", number: "072 400 2220" },
  ],
  mission:
    "To deliver innovative, reliable, and affordable technology solutions supported by excellent customer service, technical expertise, and trustworthy after-sales support, ensuring complete customer satisfaction.",
  vision:
    "To become one of Sri Lanka's most recognized and trusted technology solution providers by delivering quality products, exceptional service, and innovative solutions that empower individuals and businesses.",
  whyChooseUs: [
    "Genuine & Quality-Assured Products",
    "Competitive Market Pricing",
    "Professional Customer Support",
    "Expert Technical Assistance",
    "Islandwide Delivery Facilities",
    "Warranty & Genuine Product Assurance",
    "Reliable After-Sales Service",
    "Complete IT Solutions Under One Roof",
  ],
} as const;

/** Short mission line used in the hero, where the full paragraph is too long. */
export const missionShort =
  "Built on trust, powered by technology. From genuine devices to dependable after sales support, we're with you beyond the checkout.";

/** `tel:` href for a Sri Lankan local number written as "070 332 3352". */
export function telHref(number: string): string {
  const digits = number.replace(/\D/g, "");
  return `tel:+94${digits.replace(/^0/, "")}`;
}

/** Prefilled mailto link, used by product "Enquire" buttons. */
export function mailtoHref(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${company.email}?${params.toString()}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Company story shown on /about. */
export const story = [
  `${company.name} is an emerging IT solutions provider based in Anuradhapura, supplying laptops, desktops, computer accessories, gaming products, networking equipment, printers, projectors and CCTV systems to customers across Sri Lanka.`,
  "We built the business around a simple idea: genuine technology should be affordable, and it should keep working after the sale. That means competitive market pricing on everything we stock, honest advice about what you actually need, and reliable after-sales support you can call on when something goes wrong.",
];

export const businessGoals = [
  "Deliver premium-quality technology products at competitive market prices.",
  "Build long-term relationships through trust, transparency, and excellent customer service.",
  "Expand our product portfolio with the latest technology innovations.",
  "Strengthen our online presence and provide convenient islandwide purchasing facilities.",
  "Offer professional technical support and reliable after-sales services.",
  "Become a recognized and respected technology brand throughout Sri Lanka.",
  "Continuously improve customer experience through quality, reliability, and innovation.",
];

export const targetAudience = [
  "Students",
  "Office Employees",
  "Government & Private Organizations",
  "Small and Medium Businesses",
  "Corporate Clients",
  "Gamers",
  "Graphic Designers",
  "Video Editors",
  "Software Developers",
  "Content Creators",
  "Educational Institutions",
  "Technology Enthusiasts",
  "IT Professionals",
  "Home Users",
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://technohub.lk";
