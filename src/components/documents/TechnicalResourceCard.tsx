import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const cardShell = cn(
  "group relative flex min-h-0 flex-col overflow-hidden rounded-[1.0625rem]",
  "border border-[color:color-mix(in_oklab,var(--brand-accent)_20%,var(--border-soft))]",
  "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_28px_-14px_rgba(29,37,47,0.09)]",
  "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_8%,transparent)]",
  "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-colors",
  "motion-safe:hover:-translate-y-[2px]",
  "hover:border-[color:color-mix(in_oklab,var(--brand-accent)_30%,var(--border-soft))]",
  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_38px_-18px_rgba(29,37,47,0.13)]",
);

/** Featured technical note — resources index. */
export function TechnicalResourceCard({
  category,
  date,
  dateTime,
  title,
  body,
  cta,
  href,
}: {
  category: string;
  date: string;
  dateTime: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <article className={cn(cardShell, "group h-full")}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--brand-primary)_30%,white)]/45 to-transparent"
        aria-hidden
      />
      <div className="relative z-[1] flex min-h-[100%] flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="inline-flex max-w-[85%] items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))] bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--brand-primary)]">
            {category}
          </span>
          <time
            dateTime={dateTime}
            className="shrink-0 text-[11px] font-semibold tabular-nums tracking-wide text-[color:var(--text-muted)]"
          >
            {date}
          </time>
        </div>
        <h2 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--ink-dark)] sm:text-lg">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.72] text-[color:var(--text-muted)] antialiased sm:text-base sm:leading-[1.7]">
          {body}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-[color:var(--brand-primary)] transition-colors hover:text-[color:var(--brand-primary-hover)]"
        >
          <span className="border-b border-[color:color-mix(in_oklab,var(--brand-primary)_22%,transparent)] pb-0.5 transition-[border-color] group-hover:border-[color:var(--brand-primary)]">
            {cta}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
