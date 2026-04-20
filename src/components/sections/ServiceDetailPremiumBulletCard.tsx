import { cn } from "@/lib/cn";

/** Premium bullet-list card for standard service detail pages (e.g. ISO 14067)—aligned with editorial `premiumModule` chrome. */
export function ServiceDetailPremiumBulletCard({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.125rem]",
        "border border-[color:color-mix(in_oklab,var(--brand-accent)_22%,var(--border-soft))]",
        "bg-gradient-to-br from-white via-[#f9fcfe] to-[#f4f9fc]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_36px_-18px_rgba(29,37,47,0.14),0_4px_14px_-6px_rgba(0,86,145,0.07)]",
        "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_10%,transparent)]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-colors motion-reduce:hover:translate-y-0",
        "motion-safe:hover:-translate-y-[2px]",
        "hover:border-[color:color-mix(in_oklab,var(--brand-accent)_32%,var(--border-soft))]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_22px_48px_-20px_rgba(29,37,47,0.18),0_10px_28px_-12px_rgba(0,86,145,0.11)]",
        className,
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
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-accent)_14%,white)_0%,transparent_68%)]"
        aria-hidden
      />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col px-7 pb-8 pt-7 sm:px-8 sm:pb-9 sm:pt-8 lg:px-9 lg:pb-10 lg:pt-9">
        <header className="min-w-0">
          <div
            className="mb-3 h-[2px] w-9 rounded-full bg-gradient-to-r from-[color:var(--brand-primary)]/55 via-[color:var(--brand-accent)]/35 to-transparent"
            aria-hidden
          />
          <h2 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--ink-dark)] sm:text-lg lg:text-[1.125rem] lg:leading-tight">
            {title}
          </h2>
          <div
            className="mt-4 h-px max-w-[3.25rem] bg-gradient-to-r from-[color:var(--brand-primary)]/18 to-transparent"
            aria-hidden
          />
        </header>

        <ul
          className={cn(
            "mt-5 min-w-0 flex-1 space-y-3.5 text-[0.9375rem] leading-[1.78] text-[color:var(--text-muted)] antialiased sm:text-base sm:leading-[1.76]",
            "[&_li]:text-pretty",
          )}
        >
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-[0.52rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[color:var(--brand-primary)]/55 via-[color:var(--brand-accent)]/45 to-[color:var(--brand-primary)]/35 ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_12%,transparent)]"
                aria-hidden
              />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <div
          className="pointer-events-none absolute right-6 top-6 h-7 w-7 border-t border-r border-[color:color-mix(in_oklab,var(--brand-primary)_14%,transparent)] opacity-50 transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden
        />
      </div>
    </article>
  );
}
