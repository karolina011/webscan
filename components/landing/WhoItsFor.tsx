import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhoItsFor() {
  const t = getContent().whoItsFor;

  return (
    <section id="who-its-for" className="bg-neutral-50 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-5xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600">{t.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.personas.map((p) => (
            <article
              key={p.title}
              className="lift group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-100">
                  <Icon name={p.icon} className="h-6 w-6 text-primary-800" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary-700">
                    {p.forLabel}
                  </div>
                  <h3 className="mt-0.5 text-[19px] font-extrabold leading-tight tracking-tight text-neutral-900">
                    {p.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-[14.5px] leading-relaxed text-neutral-600">
                {p.body}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-4 border-t border-neutral-100 pt-5">
                {p.pains.map((pain) => (
                  <li key={pain.boldLead} className="flex gap-3">
                    <Icon
                      name={pain.icon}
                      className="mt-1 h-4 w-4 shrink-0 text-destructive"
                    />
                    <p className="text-[14px] leading-snug text-neutral-700">
                      <span className="font-bold text-neutral-900">
                        {pain.boldLead}
                      </span>
                      {pain.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
