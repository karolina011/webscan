import { Radar, TriangleAlert } from "lucide-react";
import { getContent } from "@/lib/content";

export function SocialProof() {
  const t = getContent().socialProof;

  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-screen-xl px-6 py-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-center gap-3 text-sm sm:flex-row sm:items-center sm:gap-5">
          <div className="flex items-center gap-2.5 font-semibold text-neutral-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-800">
              <Radar className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-[15px]">
              <span className="font-black tracking-tight text-neutral-900">
                {t.domainsScannedNumber}
              </span>{" "}
              {t.domainsScannedLabel}
            </span>
          </div>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block"
          />
          <div className="flex items-center gap-2 font-semibold text-neutral-700">
            <TriangleAlert className="h-4 w-4 text-warning" aria-hidden />
            {t.criticalStat}
          </div>
        </div>
      </div>
    </section>
  );
}
