import {
  BadgeCheck,
  CalendarClock,
  Cctv,
  Gamepad2,
  Headset,
  Keyboard,
  Laptop,
  Network,
  Printer,
  ShieldCheck,
  Tag,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/products";

/**
 * Data files store icons as string keys so they stay serialisable; this map is
 * the single place those keys become components.
 */
const icons: Record<IconKey, LucideIcon> = {
  laptop: Laptop,
  keyboard: Keyboard,
  gamepad: Gamepad2,
  network: Network,
  printer: Printer,
  cctv: Cctv,
  shield: ShieldCheck,
  tag: Tag,
  truck: Truck,
  headset: Headset,
  calendar: CalendarClock,
  badge: BadgeCheck,
};

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
