import { CircleCheckBig } from "lucide-react";
import { getContent } from "@/lib/content";
import { ScanForm } from "./ScanForm";
import { AuditReportPreview } from "./AuditReportPreview";

export function Hero() {
  const t = getContent().hero;

  return (
    <header id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-60 [mask-image:linear-gradient(180deg,white,transparent_85%)]" />

      <div className="relative mx-auto max-w-screen-xl px-6 pb-14 pt-10 md:px-8 lg:px-12 lg:pb-16 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — pitch + form */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-extrabold text-primary-800">
              {t.badge}
            </span>

            <h1 className="mt-4 text-neutral-900">
              <span className="block text-4xl font-black leading-[1.02] tracking-tighter lg:text-[56px]">
                {t.titleTop}
              </span>
              <span className="mt-2 block text-2xl font-light leading-[1.1] tracking-tight text-neutral-500 lg:mt-3 lg:text-[34px]">
                <span className="font-normal text-primary-700/70">—</span> Are
                you{" "}
                <span className="relative inline-block font-medium text-neutral-800">
                  sure
                  <svg
                    className="absolute -bottom-1 left-0 w-[70px] overflow-visible"
                    viewBox="0 0 80 8"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 5 Q20 1 40 4 T78 3"
                      fill="none"
                      stroke="var(--color-primary-700)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ?
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 lg:text-[17px]">
              {t.description}
            </p>

            <ul className="mt-5 flex max-w-xl flex-col gap-2">
              {t.bullets.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14.5px] text-neutral-700"
                >
                  <CircleCheckBig
                    className="mt-0.5 h-4 w-4 shrink-0 text-success"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <ScanForm id="hero-url" className="mt-6" />
          </div>

          {/* Right — report mock */}
          <AuditReportPreview />
        </div>
      </div>
    </header>
  );
}
