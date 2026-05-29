import { getContent } from "@/lib/content";
import { Logo } from "./Logo";

export function SiteHeader() {
  const t = getContent().nav;

  return (
    <nav className="sticky top-0 z-[200] border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Logo label={t.logoLabel} />

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center rounded-full border border-neutral-200 p-0.5 text-[11px] font-semibold sm:flex">
            <button
              type="button"
              aria-pressed="true"
              className="rounded-full bg-neutral-900 px-2 py-0.5 text-white"
            >
              {t.langEN}
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="rounded-full px-2 py-0.5 text-neutral-600 hover:text-neutral-900"
            >
              {t.langPL}
            </button>
          </div>
          <a
            href="#login"
            className="rounded-lg px-3 py-1.5 text-[13px] font-semibold text-neutral-700 transition-colors duration-150 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
          >
            {t.login}
          </a>
        </div>
      </div>
    </nav>
  );
}
