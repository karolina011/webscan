import { cn } from "@/lib/utils";

export function Logo({
  href = "#top",
  label,
  className,
}: {
  href?: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2",
        className,
      )}
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-700">
        <span className="absolute inset-1 rounded-full border-2 border-primary-50/90 [clip-path:polygon(0_0,55%_0,55%_100%,0_100%)]" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-primary-50" />
      </span>
      <span className="text-[20px] font-extrabold tracking-tight text-neutral-900">
        {label}
      </span>
    </a>
  );
}
