import { cn } from "@/lib/utils";
import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import {
  CircleCheck,
  CircleDashed,
  Globe,
  LoaderCircle,
  Lock,
  RefreshCw,
} from "lucide-react";

/** Maps an issue severity to the colour palette used on its card. */
const issueStyle: Record<
  string,
  {
    container: string;
    iconBox: string;
    iconColor: string;
    badge: string;
    link: string;
  }
> = {
  critical: {
    container: "border-destructive-border bg-destructive-bg/40",
    iconBox: "bg-white border-destructive-border",
    iconColor: "text-destructive",
    badge: "bg-destructive text-white",
    link: "text-destructive hover:text-destructive/80",
  },
  warning: {
    container: "border-warning-border bg-warning-bg/40",
    iconBox: "bg-white border-warning-border",
    iconColor: "text-warning",
    badge: "bg-warning text-white",
    link: "text-warning hover:text-warning/80",
  },
  seo: {
    container: "border-primary-200 bg-primary-50/60",
    iconBox: "bg-white border-primary-200",
    iconColor: "text-primary-800",
    badge: "bg-primary-700 text-white",
    link: "text-primary-800 hover:text-primary-900",
  },
};

export function AuditReportPreview() {
  const { step1, step2, step3 } = getContent().preview;

  return (
    <div className="amber-halo relative lg:-mr-12 xl:-mr-24">
      {/* Back card — Step 1 */}
      <aside
        aria-hidden
        className="absolute -left-20 -top-10 z-0 hidden w-[250px] rotate-[-10deg] rounded-2xl border border-neutral-200 bg-white p-4 opacity-55 shadow-card md:block lg:-left-32 lg:-top-14 lg:w-[280px]"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            {step1.stepLabel}
          </span>
        </div>
        <div className="text-[13px] font-extrabold leading-tight text-neutral-900">
          {step1.heading}
        </div>
        <div className="mt-1 text-[11px] text-neutral-500">{step1.subhead}</div>
        <div className="mt-4 flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 p-1.5">
          <Globe className="ml-1 h-3.5 w-3.5 text-neutral-400" aria-hidden />
          <span className="flex-1 font-mono text-[11px] text-neutral-600">
            {step1.domain}
          </span>
          <span className="rounded-md bg-primary-700 px-2.5 py-1 text-[10px] font-bold text-white">
            {step1.cta}
          </span>
        </div>
      </aside>

      {/* Middle card — Step 2 */}
      <aside
        aria-hidden
        className="absolute -left-8 -top-4 z-[5] hidden w-[280px] rotate-[-5deg] rounded-2xl border border-neutral-200 bg-white p-4 shadow-card md:block lg:-left-16 lg:-top-6 lg:w-[310px]"
      >
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50">
            <LoaderCircle
              className="h-4 w-4 animate-spin text-primary-700"
              aria-hidden
            />
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-bold leading-tight text-neutral-900">
              {step2.heading}
            </div>
            <div className="text-[11px] text-neutral-500">{step2.progressNote}</div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            {step2.stepLabel}
          </span>
        </div>

        <div className="relative h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-primary-700" />
        </div>

        <ul className="mt-4 flex flex-col gap-1.5">
          {step2.checks.map((c) => (
            <li
              key={c.label}
              className={cn(
                "flex items-center gap-2 text-[11.5px]",
                c.state === "queued" && "opacity-50",
              )}
            >
              {c.state === "done" && (
                <CircleCheck className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
              )}
              {c.state === "running" && (
                <LoaderCircle
                  className="h-3.5 w-3.5 shrink-0 animate-spin text-primary-700"
                  aria-hidden
                />
              )}
              {c.state === "queued" && (
                <CircleDashed
                  className="h-3.5 w-3.5 shrink-0 text-neutral-300"
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  "font-medium",
                  c.state === "running"
                    ? "font-semibold text-neutral-900"
                    : c.state === "queued"
                      ? "text-neutral-500"
                      : "text-neutral-700",
                )}
              >
                {c.label}
              </span>
              <span
                className={cn(
                  "ml-auto font-mono text-[10px]",
                  c.state === "running"
                    ? "font-bold text-primary-700"
                    : c.state === "queued"
                      ? "text-neutral-300"
                      : "text-neutral-400",
                )}
              >
                {c.time}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Front card — Step 3 (full report) */}
      <article className="relative z-10 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-hover md:ml-auto md:w-[460px] lg:w-[520px] xl:w-[560px]">
        {/* browser chrome */}
        <div className="flex h-10 items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <div className="mx-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-neutral-200 bg-white px-3">
            <Lock className="h-3 w-3 text-neutral-400" aria-hidden />
            <span className="truncate font-mono text-[11px] text-neutral-500">
              {step3.browserUrl}
            </span>
          </div>
          <RefreshCw className="h-3.5 w-3.5 text-neutral-400" aria-hidden />
        </div>

        <div className="p-5 sm:p-6">
          {/* heading */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <Globe className="h-3.5 w-3.5" aria-hidden />
                {step3.reportLabel}
                <span className="ml-1 text-[9px] font-bold text-neutral-400">
                  {step3.stepLabel}
                </span>
              </div>
              <div className="mt-1 truncate text-[22px] font-extrabold tracking-tight text-neutral-900">
                {step3.domain}
              </div>
              <div className="mt-1 text-[12px] font-medium text-neutral-500">
                {step3.meta}
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-destructive-border bg-destructive-bg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              {step3.statusBadge}
            </span>
          </div>

          {/* gauge + counts */}
          <div className="mt-5 flex items-center gap-5">
            <div className="relative shrink-0">
              <svg width="116" height="116" viewBox="0 0 116 116" aria-hidden>
                <circle
                  cx="58"
                  cy="58"
                  r="48"
                  fill="none"
                  stroke="var(--color-neutral-100)"
                  strokeWidth="12"
                />
                <circle
                  cx="58"
                  cy="58"
                  r="48"
                  fill="none"
                  stroke="var(--color-primary-600)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="138.7 301.6"
                  transform="rotate(-90 58 58)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[34px] font-black leading-none tracking-tighter text-neutral-900">
                  {step3.score}
                </div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  / 100
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-bold text-neutral-800">
                {step3.summaryTitle}
              </div>
              <div className="mt-1 text-[12px] leading-snug text-neutral-600">
                {step3.summaryBody}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                <Count
                  count={step3.counts.critical}
                  label={step3.countLabels.critical}
                  bg="bg-destructive-bg"
                  border="border-destructive-border"
                  text="text-destructive"
                />
                <Count
                  count={step3.counts.warning}
                  label={step3.countLabels.warning}
                  bg="bg-warning-bg"
                  border="border-warning-border"
                  text="text-warning"
                />
                <Count
                  count={step3.counts.passing}
                  label={step3.countLabels.passing}
                  bg="bg-success-bg"
                  border="border-success-border"
                  text="text-success"
                />
              </div>
            </div>
          </div>

          {/* issue rows */}
          <div className="mt-5 flex flex-col gap-2">
            {step3.issues.map((issue) => {
              const s = issueStyle[issue.severity];
              return (
                <div
                  key={issue.title}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border p-3",
                    s.container,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                      s.iconBox,
                      s.iconColor,
                    )}
                  >
                    <Icon name={issue.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-bold leading-tight text-neutral-900">
                      {issue.title}
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-neutral-600">
                      {issue.body}
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                        s.badge,
                      )}
                    >
                      {issue.badge}
                    </span>
                    <a
                      href="#fix"
                      className={cn(
                        "inline-flex items-center gap-0.5 text-[10.5px] font-bold",
                        s.link,
                      )}
                    >
                      {step3.fixLink}
                      <Icon name="arrow-right" className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
}

function Count({
  count,
  label,
  bg,
  border,
  text,
}: {
  count: number;
  label: string;
  bg: string;
  border: string;
  text: string;
}) {
  return (
    <div className={cn("rounded-lg border py-1.5 text-center", bg, border)}>
      <div className={cn("text-[13px] font-extrabold leading-none", text)}>
        {count}
      </div>
      <div
        className={cn(
          "mt-0.5 text-[9px] font-semibold uppercase tracking-wider",
          text,
          "opacity-80",
        )}
      >
        {label}
      </div>
    </div>
  );
}
