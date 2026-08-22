import Link from "next/link";
import { cn } from "@/lib/cn";
import { company } from "@/lib/company";

/** Red "hub" mark: a central node with four orbiting connection points. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        // Sized relatively so the mark can be scaled up (the hero panel renders
        // it at 54px). At the default 36px badge this is ~20px, unchanged.
        className="h-[55%] w-[55%] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
        <path d="M12 3.2v3.6M12 17.2v3.6M3.2 12h3.6M17.2 12h3.6" />
        <circle cx="12" cy="3.2" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="12" cy="20.8" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="3.2" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="20.8" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${company.name} — home`}
    >
      <LogoMark />
      <span className="font-display text-xl font-black uppercase leading-none tracking-tight">
        Techno<span className="text-brand-500">Hub</span>
      </span>
    </Link>
  );
}
