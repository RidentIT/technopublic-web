import { cn } from "@/lib/cn";
import { Spark } from "./Spark";

/** Red uppercase eyebrow above every section heading. */
export function SectionLabel({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  /** `light` is used on the red gradient panels where red-on-red would vanish. */
  tone?: "brand" | "light";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]",
        tone === "brand" ? "text-brand-500" : "text-white/80",
        className,
      )}
    >
      <Spark className={cn("h-3.5 w-3.5", tone === "light" && "text-white")} />
      {children}
    </p>
  );
}
