import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, telHref } from "@/lib/company";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Techno Hub Technology (PVT) LTD. in Anuradhapura, Sri Lanka — call us, email hello.technohub@gmail.com, or send an enquiry and our team will get back to you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Techno Hub",
    description:
      "Get in touch with Techno Hub Technology (PVT) LTD. — Airport Road, Anuradhapura, Sri Lanka.",
    url: "/contact",
  },
};

// Keyless Google Maps embed for the Anuradhapura address.
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  company.address,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact Us"
        lines={[
          { text: "Let's talk about" },
          { text: "your setup.", accent: true },
        ]}
        intro="Whether it's a single laptop or a complete office rollout, tell us what you need and we'll point you at the right solution."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact details */}
            <Reveal>
              <div className="panel h-full p-6 sm:p-8">
                <h2 className="font-display text-2xl font-black uppercase tracking-tight">
                  Contact details
                </h2>

                <ul className="mt-8 space-y-7">
                  <li className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                        Address
                      </h3>
                      <address className="mt-1.5 not-italic text-sm leading-relaxed text-gray-300">
                        {company.address}
                      </address>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                        Email
                      </h3>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-1.5 block break-all text-sm text-gray-300 transition-colors hover:text-brand-500"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                        Phone
                      </h3>
                      <ul className="mt-2 space-y-3">
                        {company.phones.map((phone) => (
                          <li key={phone.number}>
                            <a
                              href={telHref(phone.number)}
                              className="text-sm font-semibold text-gray-200 transition-colors hover:text-brand-500"
                            >
                              {phone.number}
                            </a>
                            <span className="block text-xs text-gray-400">
                              {phone.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                        Working hours
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-300">
                        {company.hours}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
                  <iframe
                    src={mapSrc}
                    title={`Map showing ${company.name} at ${company.address}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full grayscale-[35%]"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
