import { cn } from "@/lib/cn";

/**
 * The recurring red asterisk/spark motif used beside section labels and in the
 * CTA banner. Decorative only, so it is hidden from assistive technology.
 */
export function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("h-4 w-4 shrink-0 text-brand-500", className)}
      fill="currentColor"
    >
      <path d="M12 0.5c.5 3.9 1.3 6.6 2.6 8s3.9 2.3 7.7 2.9v1.2c-3.8.6-6.4 1.5-7.7 2.9s-2.1 4.1-2.6 8h-1.2c-.5-3.9-1.3-6.6-2.6-8s-3.9-2.3-7.7-2.9v-1.2c3.8-.6 6.4-1.5 7.7-2.9S10.3 4.4 10.8.5h1.2Z" />
    </svg>
  );
}
