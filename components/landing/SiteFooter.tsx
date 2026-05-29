import { Radar } from "lucide-react";
import { getContent } from "@/lib/content";
import { Logo } from "./Logo";

export function SiteFooter() {
  const t = getContent().footer;
  const nav = getContent().nav;

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-12 md:px-8 lg:px-12 lg:pt-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 pr-4 md:col-span-4">
            <Logo label={nav.logoLabel} />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-neutral-600">
              {t.tagline}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 py-1 pl-1.5 pr-3">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-800">
                <Radar className="h-3 w-3" aria-hidden />
              </span>
              <span className="text-[12px] font-semibold text-neutral-700">
                <span className="font-black text-neutral-900">
                  {t.domainsCount}
                </span>{" "}
                {t.domainsBadge}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {t.columns.map((col) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className="col-span-1 md:col-span-2"
            >
              <h3 className="text-[12.5px] font-bold tracking-tight text-neutral-900">
                {col.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-600 transition-colors hover:text-primary-800"
                    >
                      {link.label}
                      {"badge" in link && link.badge ? (
                        <span className="inline-flex items-center rounded-md border border-primary-200 bg-primary-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-800">
                          {link.badge}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#status"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <span className="relative inline-flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {t.status}
            </a>
            <span
              aria-hidden
              className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block"
            />
            <span className="text-[13px] font-medium text-neutral-500">
              {t.copyright}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
              {t.languageLabel}
            </span>
            <div className="flex items-center rounded-full border border-neutral-200 p-0.5 text-xs font-semibold">
              <button
                type="button"
                aria-pressed="true"
                className="rounded-full bg-neutral-900 px-3 py-1 text-white"
              >
                {nav.langEN}
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="rounded-full px-3 py-1 text-neutral-600 hover:text-neutral-900"
              >
                {nav.langPL}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
