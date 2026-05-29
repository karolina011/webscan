import { getContent } from "@/lib/content";
import { Icon } from "./icons";
import { SectionEyebrow } from "./SectionEyebrow";

export function WhoItsFor() {
  const t = getContent().whoItsFor;

  return (
    <section id="who-its-for" className="bg-neutral-50 py-12 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 lg:text-4xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-neutral-600 lg:text-base">{t.body}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.personas.map((p) => (
            <article
              key={p.title}
              className="lift group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-100">
                  <Icon name={p.icon} className="h-5 w-5 text-primary-800" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary-700">
                    {p.forLabel}
                  </div>
                  <h3 className="mt-0.5 text-[17px] font-extrabold leading-tight tracking-tight text-neutral-900">
                    {p.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
                {p.body}
              </p>

              <ul className="mt-4 flex flex-1 flex-col gap-3 border-t border-neutral-100 pt-4">
                {p.pains.map((pain) => (
                  <li key={pain.boldLead} className="flex gap-2.5">
                    <Icon
                      name={pain.icon}
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive"
                    />
                    <p className="text-[13px] leading-snug text-neutral-700">
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
