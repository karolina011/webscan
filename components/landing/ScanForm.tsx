import { cn } from "@/lib/utils";
import { ArrowRight, Check, Globe } from "lucide-react";
import { getContent } from "@/lib/content";

type ScanFormProps = {
  id: string;
  align?: "start" | "center";
  className?: string;
};

export function ScanForm({ id, align = "start", className }: ScanFormProps) {
  const t = getContent().hero.form;

  return (
    <form
      action="#"
      className={cn("max-w-xl", align === "center" && "mx-auto", className)}
    >
      <label htmlFor={id} className="sr-only">
        {t.label}
      </label>
      <div className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-card sm:flex-row">
        <div className="flex flex-1 items-center gap-2 px-3">
          <Globe className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden />
          <input
            id={id}
            type="url"
            placeholder={t.placeholder}
            className="h-10 flex-1 bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary-700 px-5 text-sm font-bold text-white transition-colors duration-150 hover:bg-primary-800 active:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-amber"
        >
          {t.submit}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div
        className={cn(
          "mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-medium text-neutral-500",
          align === "center" && "justify-center text-neutral-600",
        )}
      >
        {t.trust.map((line) => (
          <span key={line} className="inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-success" aria-hidden />
            {line}
          </span>
        ))}
      </div>
    </form>
  );
}
