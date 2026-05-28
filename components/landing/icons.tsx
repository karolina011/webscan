import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Briefcase,
  CalendarX,
  Check,
  CircleCheck,
  CircleCheckBig,
  CircleDashed,
  Clock,
  ClockAlert,
  CreditCard,
  FileWarning,
  Gauge,
  Globe,
  LoaderCircle,
  Lock,
  MailWarning,
  Radar,
  RefreshCw,
  Search,
  SearchX,
  Server,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  Smartphone,
  Sparkles,
  Store,
  TimerOff,
  TriangleAlert,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  activity: Activity,
  "arrow-right": ArrowRight,
  "badge-check": BadgeCheck,
  "bed-double": BedDouble,
  briefcase: Briefcase,
  "calendar-x": CalendarX,
  check: Check,
  "circle-check": CircleCheck,
  "circle-check-big": CircleCheckBig,
  "circle-dashed": CircleDashed,
  clock: Clock,
  "clock-alert": ClockAlert,
  "credit-card": CreditCard,
  "file-warning": FileWarning,
  gauge: Gauge,
  globe: Globe,
  "loader-circle": LoaderCircle,
  lock: Lock,
  "mail-warning": MailWarning,
  radar: Radar,
  "refresh-cw": RefreshCw,
  search: Search,
  "search-x": SearchX,
  server: Server,
  "shield-alert": ShieldAlert,
  "shield-check": ShieldCheck,
  "shield-off": ShieldOff,
  smartphone: Smartphone,
  sparkles: Sparkles,
  store: Store,
  "timer-off": TimerOff,
  "triangle-alert": TriangleAlert,
  x: X,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className,
}: {
  name: IconName | string;
  className?: string;
}) {
  const Cmp = iconMap[name as IconName];
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden="true" />;
}
