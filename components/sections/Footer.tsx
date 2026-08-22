import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { company, navLinks, telHref } from "@/lib/company";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

// TODO: replace "#" with the real profile URLs once the accounts are live.
const socials = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              {company.name} supplies genuine IT products and complete
              technology solutions across Sri Lanka backed by expert technical
              support and dependable after sales service.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`${company.shortName} on ${social.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white">
              Get in Touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <address className="not-italic">{company.address}</address>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-brand-500"
                >
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone.number} className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href={telHref(phone.number)}
                      className="transition-colors hover:text-brand-500"
                    >
                      {phone.number}
                    </a>
                    <span className="block text-xs text-gray-400">
                      {phone.label}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {company.founded}–{new Date().getFullYear()} {company.name}{" "}
            All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
