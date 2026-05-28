import {
  ArrowRight,
  CircleCheck,
  Globe,
  LoaderCircle,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { getContent } from "@/lib/content";
import { SectionEyebrow } from "./SectionEyebrow";

export function HowItWorks() {
  const t = getContent().howItWorks;
  const [step1, step2, step3] = t.steps;

  return (
    <section id="how" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-5xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600">{t.body}</p>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 items-stretch gap-x-6 gap-y-16 md:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-x-10">
          <Step number={step1.number} title={step1.title} body={step1.body}>
            <div className="flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-card">
              <div className="flex min-w-0 flex-1 items-center gap-1.5 px-2.5">
                <Globe className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
                <span className="truncate font-mono text-[12.5px] text-neutral-900">
                  https://yoursite.com
                </span>
                <span className="inline-block h-3.5 w-px bg-primary-700 motion-safe:animate-pulse" />
              </div>
              <button
                type="button"
                tabIndex={-1}
                className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg bg-primary-700 px-3 text-[12px] font-bold text-white"
              >
                Scan
                <ArrowRight className="h-3 w-3" aria-hidden />
              </button>
            </div>
          </Step>

          <Connector />

          <Step number={step2.number} title={step2.title} body={step2.body}>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-3.5 shadow-card">
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <LoaderCircle
                    className="h-3.5 w-3.5 animate-spin text-primary-700"
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-bold leading-tight text-neutral-900">
                    Scanning...
                  </div>
                  <div className="text-[10.5px] text-neutral-500">
                    4 of 6 checks complete
                  </div>
                </div>
              </div>
              <div className="relative h-1.5 overflow-hidden rounded-full bg-neutral-100">
                <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-primary-700" />
              </div>
              <ul className="mt-3 flex flex-col gap-1">
                <MiniCheck label="SSL certificate" time="0.4s" />
                <MiniCheck label="Page speed" time="2.1s" />
                <MiniCheck label="Security headers" time="running" running />
              </ul>
            </div>
          </Step>

          <Connector />

          <Step number={step3.number} title={step3.title} body={step3.body}>
            <ScorePreview />
          </Step>
        </ol>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  body,
  children,
}: {
  number: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative mx-auto flex w-full max-w-[300px] flex-col">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] font-bold tracking-widest text-primary-700">
          {number}
        </span>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-primary-200 to-primary-200/30"
        />
      </div>

      <h3 className="mt-3 text-[22px] font-extrabold leading-tight tracking-tight text-neutral-900">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-600">
        {body}
      </p>

      <div className="mt-auto flex h-[176px] items-center justify-center pt-7">
        <div className="w-full max-w-[300px]">{children}</div>
      </div>
    </li>
  );
}

function Connector() {
  return (
    <li
      aria-hidden
      className="hidden items-center justify-center text-neutral-300 md:flex"
    >
      <svg width="56" height="10" viewBox="0 0 56 10" fill="none">
        <line
          x1="0"
          y1="5"
          x2="46"
          y2="5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
        <path
          d="M44 1 L54 5 L44 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </li>
  );
}

function MiniCheck({
  label,
  time,
  running = false,
}: {
  label: string;
  time: string;
  running?: boolean;
}) {
  return (
    <li className="flex items-center gap-2 text-[11px]">
      {running ? (
        <LoaderCircle
          className="h-3.5 w-3.5 shrink-0 animate-spin text-primary-700"
          aria-hidden
        />
      ) : (
        <CircleCheck className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
      )}
      <span
        className={
          running
            ? "font-semibold text-neutral-900"
            : "font-medium text-neutral-700"
        }
      >
        {label}
      </span>
      <span
        className={
          "ml-auto font-mono text-[10px] " +
          (running ? "font-bold text-primary-700" : "text-neutral-400")
        }
      >
        {time}
      </span>
    </li>
  );
}

function ScorePreview() {
  return (
    <div className="w-full rounded-xl border border-neutral-200 bg-white p-3.5 shadow-card">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <svg width="50" height="50" viewBox="0 0 54 54" aria-hidden>
            <circle
              cx="27"
              cy="27"
              r="22"
              fill="none"
              stroke="var(--color-neutral-100)"
              strokeWidth="6"
            />
            <circle
              cx="27"
              cy="27"
              r="22"
              fill="none"
              stroke="var(--color-primary-600)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="64 138"
              transform="rotate(-90 27 27)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[14px] font-black tracking-tighter text-neutral-900">
            46
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-500">
            Health score
          </div>
          <div className="mt-0.5 text-[12.5px] font-extrabold leading-tight text-neutral-900">
            Needs work
          </div>
          <div className="mt-0.5 text-[10px] text-neutral-500">
            5 issues · 2 critical
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex flex-col gap-1">
        <MiniIssue
          icon="shield-alert"
          label="SSL expires in 12 days"
          tone="destructive"
        />
        <MiniIssue
          icon="zap"
          label="Pages load in 4.1s"
          tone="warning"
        />
      </div>
    </div>
  );
}

function MiniIssue({
  icon,
  label,
  tone,
}: {
  icon: "shield-alert" | "zap";
  label: string;
  tone: "destructive" | "warning";
}) {
  const palette =
    tone === "destructive"
      ? "bg-destructive-bg/50 border-destructive-border/70 text-destructive"
      : "bg-warning-bg/50 border-warning-border/70 text-warning";

  const IconCmp = icon === "shield-alert" ? ShieldAlert : Zap;

  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-2 py-1.5 ${palette}`}
    >
      <IconCmp className="h-3 w-3 shrink-0" aria-hidden />
      <span className="flex-1 truncate text-[10.5px] font-semibold text-neutral-900">
        {label}
      </span>
      <span className="text-[9px] font-bold uppercase tracking-wider">Fix</span>
    </div>
  );
}
