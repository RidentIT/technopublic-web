import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { company, siteUrl } from "@/lib/company";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Techno Hub Technology (PVT) LTD. supplies genuine laptops, desktops, accessories, gaming gear, networking, printers, projectors and CCTV systems across Sri Lanka, with islandwide delivery and reliable after-sales service.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | IT Products & Solutions in Sri Lanka`,
    template: `%s | ${company.shortName}`,
  },
  description,
  keywords: [
    "IT products Sri Lanka",
    "laptops Anuradhapura",
    "computer accessories Sri Lanka",
    "CCTV systems Sri Lanka",
    "networking solutions",
    "gaming PCs Sri Lanka",
    "Techno Hub Technology",
  ],
  authors: [{ name: company.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | IT Products & Solutions in Sri Lanka`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | IT Products & Solutions`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Scroll-reveal wrappers render with opacity:0 in the server HTML.
            Without JavaScript nothing would ever reveal them, so the whole page
            would read as blank. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-ink-950 font-sans text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
