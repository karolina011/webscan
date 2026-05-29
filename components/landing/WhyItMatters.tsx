import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhyItMatters() {
  const t = getContent().whyItMatters;
  const lead = t.leadStat;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 lg:text-4xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-neutral-600 lg:text-base">{t.body}</p>
        </div>

        {/* Lead stat */}
        <div className="mt-10 lg:mt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="shrink-0 md:w-[44%]">
              <div
                className="flex items-start leading-none"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  fontFeatureSettings: '"ss01","tnum"',
                }}
              >
                <span className="text-[68px] font-medium leading-[0.82] tracking-[-0.055em] text-neutral-900 lg:text-[108px]">
                  {lead.big}
                </span>
                <span className="ml-0.5 mt-1 text-[34px] font-medium leading-[0.82] tracking-[-0.04em] text-primary-700 lg:ml-1 lg:mt-2 lg:text-[54px]">
                  {lead.unit}
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                <Icon
                  name={lead.categoryIcon}
                  className="h-3.5 w-3.5 text-primary-700"
                />
                {lead.category}
              </div>
            </div>

            <div className="flex-1 md:pt-3">
              <p className="max-w-xl text-xl font-light leading-[1.2] tracking-tight text-neutral-900 lg:text-[24px]">
                {lead.lineOne}{" "}
                <span className="whitespace-nowrap font-semibold underline decoration-primary-700/60 decoration-[2.5px] underline-offset-[6px]">
                  {lead.lineOneEmphasis}
                </span>
                {lead.lineOneTail}
              </p>
              <p className="mt-2.5 max-w-xl text-xl font-semibold leading-[1.2] tracking-tight text-primary-700 lg:mt-3 lg:text-[24px]">
                {lead.lineTwo}
              </p>
              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-neutral-500">
                {lead.note}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting stats */}
        <div className="mt-10 lg:mt-12">
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
                  "px-6 py-5 md:px-7 md:py-2 lg:px-8 " +
                  (idx === 0
                    ? "first:border-t-0"
                    : "border-t border-neutral-200 md:border-t-0")
                }
              >
                <div className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary-700">
                  <Icon name={stat.icon} className="h-3 w-3" />
                  {stat.category}
                </div>
                <div className="mt-2.5 flex items-start leading-none">
                  {stat.prefix && (
                    <span className="mr-0.5 mt-1.5 text-[16px] font-medium leading-none text-primary-700 lg:mt-2 lg:text-[19px]">
                      {stat.prefix}
                    </span>
                  )}
                  <span className="text-[52px] font-medium leading-[0.82] tracking-[-0.045em] text-neutral-900 lg:text-[64px]">
                    {stat.big}
                  </span>
                  <span className="ml-0.5 mt-1 text-[22px] font-medium leading-[0.82] tracking-[-0.02em] text-neutral-400 lg:mt-1.5 lg:text-[26px]">
                    {stat.unit}
                  </span>
                  <span className="ml-2 mt-2 self-center font-mono text-[10px] font-medium tracking-wider text-neutral-400 lg:mt-3">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2.5 max-w-[260px] text-[13.5px] leading-snug text-neutral-600">
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
