import { ArrowRight, CircleCheckBig, Sparkles, X } from "lucide-react";
import { getContent } from "@/lib/content";
import { SectionEyebrow } from "./SectionEyebrow";

export function Pricing() {
  const t = getContent().pricing;

  return (
    <section id="pricing" className="bg-neutral-50 py-12 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-4xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-neutral-600 lg:text-base">{t.body}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Free */}
          <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {t.free.label}
                </div>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-neutral-900">
                  {t.free.title}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black tracking-tighter text-neutral-900">
                  {t.free.price}
                </div>
                <div className="text-[11px] font-medium text-neutral-500">
                  {t.free.priceUnit}
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-600">
              {t.free.body}
            </p>

            <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[14px]">
              {t.free.included.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-neutral-800"
                >
                  <CircleCheckBig
                    className="mt-0.5 h-4 w-4 shrink-0 text-success"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
              {t.free.excluded.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-neutral-400"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-neutral-300" aria-hidden />
                  <span className="line-through decoration-neutral-300">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#top"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white text-[13px] font-bold text-neutral-800 transition-colors hover:border-primary-700 hover:bg-primary-50 hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
            >
              {t.free.cta}
            </a>
          </article>

          {/* Full */}
          <article className="relative flex flex-col rounded-2xl border-2 border-primary-700 bg-white p-6 shadow-amber">
            <span className="absolute -top-3 right-5 inline-flex items-center gap-1.5 rounded-full bg-primary-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" aria-hidden />
              {t.full.badge}
            </span>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary-800">
                  {t.full.label}
                </div>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-neutral-900">
                  {t.full.title}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black tracking-tighter text-neutral-900">
                  {t.full.price}
                </div>
                <div className="text-[11px] font-medium text-neutral-500">
                  {t.full.priceUnit}
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-600">
              {t.full.body}
            </p>

            <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[14px]">
              {t.full.included.map((line, i) => (
                <li
                  key={line}
                  className={
                    i === 0
                      ? "flex items-start gap-2.5 font-semibold text-neutral-800"
                      : "flex items-start gap-2.5 text-neutral-800"
                  }
                >
                  <CircleCheckBig
                    className="mt-0.5 h-4 w-4 shrink-0 text-success"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-black tracking-tighter text-neutral-900">
                {t.full.price}
              </span>
              <span className="text-[13px] font-semibold text-neutral-500">
                {t.full.priceNote}
              </span>
            </div>
            <a
              href="#top"
              className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary-700 text-[13px] font-bold text-white transition-colors duration-150 hover:bg-primary-800 active:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-amber"
            >
              {t.full.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </article>
        </div>

        <p className="mt-6 text-center text-[12.5px] text-neutral-500">
          {t.monitoring}{" "}
          <a
            href="#monitoring"
            className="font-semibold text-neutral-700 hover:text-primary-800"
          >
            {t.monitoringCta}
          </a>
        </p>
      </div>
    </section>
  );
}
