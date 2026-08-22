import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // The deep surface red, not the accent red — see the `brand` token comment in
  // tailwind.config.ts. White on it is 6.71:1, clearing WCAG AA for body text.
  solid: "bg-brand-deep text-white hover:bg-brand-deep-hover",
  outline:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  white: "bg-white text-ink-950 hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  /** Set for `mailto:` / `tel:` / external destinations. */
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "solid", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof props.href === "string") {
    const { href, external } = props as ButtonAsLink;
    if (external || /^(mailto:|tel:|https?:)/.test(href)) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
