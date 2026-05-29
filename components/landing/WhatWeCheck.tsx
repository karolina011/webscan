import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhatWeCheck() {
  const t = getContent().whatWeCheck;

  return (
    <section id="what-we-check" className="bg-white pb-12 lg:pb-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-4xl">
            {t.titleLead}
            <em className="not-italic font-extrabold italic text-primary-700 underline decoration-primary-700/60 decoration-[3px] underline-offset-4">
              {t.titleAccent}
            </em>
            {t.titleTail}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-neutral-600 lg:text-base">{t.body}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card) => (
            <article
              key={card.title}
              className="lift flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-primary-800">
                  <Icon name={card.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold leading-tight tracking-tight text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-neutral-500">
                    {card.tagline}
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-col gap-1.5 text-[13.5px] text-neutral-700">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold leading-6 text-primary-700">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-neutral-100 pt-3 text-[12px] font-semibold text-neutral-500">
                {card.more}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
