import { cn } from "@/lib/cn";

/** Process step card aligned with premium service detail cards (e.g. bio-based verification). */
export function AccreditationProcessCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.125rem]",
        "border border-[color:color-mix(in_oklab,var(--brand-accent)_22%,var(--border-soft))]",
        "bg-gradient-to-br from-white via-[#f9fcfe] to-[#f4f9fc]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_36px_-18px_rgba(29,37,47,0.12),0_4px_14px_-6px_rgba(0,86,145,0.06)]",
        "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_10%,transparent)]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-colors motion-reduce:hover:translate-y-0",
        "motion-safe:hover:-translate-y-[2px]",
        "hover:border-[color:color-mix(in_oklab,var(--brand-accent)_32%,var(--border-soft))]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_22px_48px_-20px_rgba(29,37,47,0.16),0_10px_28px_-12px_rgba(0,86,145,0.09)]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_oklab,var(--brand-accent-soft)_65%,white)_0%,transparent_42%,transparent_100%)] opacity-[0.95]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--brand-primary)_35%,white)]/50 to-transparent"
        aria-hidden
      />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col p-7 sm:p-8 lg:p-9">
        <div className="flex items-start gap-4">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-sm font-semibold tabular-nums text-[color:var(--brand-primary)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))]">
            {String(index).padStart(2, "0")}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--ink-dark)] sm:text-[1.125rem]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-[1.74]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
