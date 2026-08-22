"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/**
 * Sticky header.
 *
 * `position: sticky` breaks if any ancestor has a non-visible `overflow`. This
 * component is rendered in the root layout as a sibling of <main>, so the
 * hero's decorative backdrop (which does clip its own overflow) is never an
 * ancestor of it. Keep it that way when moving things around.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent at the top; blurred/darkened once past the threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-[350ms] ease-out",
        solid
          ? "border-white/[0.07] bg-[rgba(8,9,11,0.78)] backdrop-blur-[14px]"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between gap-4 transition-[padding] duration-[350ms] ease-out",
            solid ? "py-4" : "py-[26px]",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative py-1 text-sm font-medium transition-colors duration-200",
                      active ? "text-white" : "text-gray-400 hover:text-white",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-500 transition-[width] duration-300 ease-out",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href="/contact" className="shine">
              Let&apos;s Power Up
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-ink-950 lg:hidden"
        >
          <Container className="py-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium",
                      isActive(link.href)
                        ? "bg-white/5 text-brand-500"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="shine mt-4 w-full" size="lg">
              Let&apos;s Talk
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
