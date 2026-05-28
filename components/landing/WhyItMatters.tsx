import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhyItMatters() {
  const t = getContent().whyItMatters;
  const lead = t.leadStat;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 lg:text-5xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600">{t.body}</p>
        </div>

        {/* Lead stat */}
        <div className="mt-14 lg:mt-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div className="shrink-0 md:w-[44%]">
              <div
                className="flex items-start leading-none"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  fontFeatureSettings: '"ss01","tnum"',
                }}
              >
                <span className="text-[88px] font-medium leading-[0.82] tracking-[-0.055em] text-neutral-900 lg:text-[148px]">
                  {lead.big}
                </span>
                <span className="ml-0.5 mt-1 text-[44px] font-medium leading-[0.82] tracking-[-0.04em] text-primary-700 lg:ml-1 lg:mt-2 lg:text-[72px]">
                  {lead.unit}
                </span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-neutral-500">
                <Icon
                  name={lead.categoryIcon}
                  className="h-3.5 w-3.5 text-primary-700"
                />
                {lead.category}
              </div>
            </div>

            <div className="flex-1 md:pt-4">
              <p className="max-w-xl text-2xl font-light leading-[1.2] tracking-tight text-neutral-900 lg:text-[30px]">
                {lead.lineOne}{" "}
                <span className="whitespace-nowrap font-semibold underline decoration-primary-700/60 decoration-[2.5px] underline-offset-[6px]">
                  {lead.lineOneEmphasis}
                </span>
                {lead.lineOneTail}
              </p>
              <p className="mt-3 max-w-xl text-2xl font-semibold leading-[1.2] tracking-tight text-primary-700 lg:mt-4 lg:text-[30px]">
                {lead.lineTwo}
              </p>
              <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-neutral-500">
                {lead.note}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting stats */}
        <div className="mt-14 lg:mt-16">
          <div
            className="-mx-6 grid grid-cols-1 md:mx-0 md:grid-cols-3 md:divide-x md:divide-neutral-200"
            style={{
              fontVariantNumeric: "tabular-nums",
              fontFeatureSettings: '"tnum"',
            }}
          >
            {t.minor.map((stat, idx) => (
              <div
                key={stat.category}
                className={
                  "px-6 py-6 md:px-8 md:py-2 lg:px-10 " +
                  (idx === 0
                    ? "first:border-t-0"
                    : "border-t border-neutral-200 md:border-t-0")
                }
              >
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-700">
                  <Icon name={stat.icon} className="h-3.5 w-3.5" />
                  {stat.category}
                </div>
                <div className="mt-3 flex items-start leading-none">
                  {stat.prefix && (
                    <span className="mr-0.5 mt-2 text-[20px] font-medium leading-none text-primary-700 lg:mt-3 lg:text-[24px]">
                      {stat.prefix}
                    </span>
                  )}
                  <span className="text-[68px] font-medium leading-[0.82] tracking-[-0.045em] text-neutral-900 lg:text-[84px]">
                    {stat.big}
                  </span>
                  <span className="ml-0.5 mt-1 text-[28px] font-medium leading-[0.82] tracking-[-0.02em] text-neutral-400 lg:mt-2 lg:text-[34px]">
                    {stat.unit}
                  </span>
                  <span className="ml-2 mt-3 self-center font-mono text-[11px] font-medium tracking-wider text-neutral-400 lg:mt-4">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-3 max-w-[260px] text-[15px] leading-snug text-neutral-600">
                  <span className="font-semibold text-neutral-900">
                    {stat.boldLead}
                  </span>
                  {stat.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
