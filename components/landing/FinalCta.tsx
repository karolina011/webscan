import { Clock } from "lucide-react";
import { getContent } from "@/lib/content";
import { ScanForm } from "./ScanForm";

export function FinalCta() {
  const t = getContent().finalCta;

  return (
    <section className="relative overflow-hidden bg-primary-50">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-screen-xl px-6 py-14 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-3 py-1 text-[13px] font-semibold text-primary-800">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {t.badge}
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tighter text-neutral-900 lg:text-5xl">
            {t.titleLead}
            <span className="text-primary-700">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 lg:text-lg">{t.body}</p>

          <ScanForm id="cta-url" align="center" className="mt-6" />
        </div>
      </div>
    </section>
  );
}
