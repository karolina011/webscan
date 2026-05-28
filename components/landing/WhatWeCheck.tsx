import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhatWeCheck() {
  const t = getContent().whatWeCheck;

  return (
    <section id="what-we-check" className="bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-5xl">
            {t.titleLead}
            <em className="not-italic font-extrabold italic text-primary-700 underline decoration-primary-700/60 decoration-[3px] underline-offset-4">
              {t.titleAccent}
            </em>
            {t.titleTail}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600">{t.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card) => (
            <article
              key={card.title}
              className="lift flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-primary-800">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold leading-tight tracking-tight text-neutral-900">
                {card.title}
              </h3>
              <p className="mt-1 text-[14px] font-medium text-neutral-500">
                {card.tagline}
              </p>
              <ul className="mt-5 flex flex-col gap-2 text-[14.5px] text-neutral-700">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold leading-6 text-primary-700">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-neutral-100 pt-4 text-[12.5px] font-semibold text-neutral-500">
                {card.more}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
