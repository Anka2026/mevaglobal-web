import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { premiumCardInteractive, premiumGoldTopLine } from "@/lib/premiumUi";

/** Featured technical note — Knowledge Hub index. */
export function TechnicalResourceCard({
  category,
  date,
  dateTime,
  readingTime,
  title,
  body,
  cta,
  href,
}: {
  category: string;
  date: string;
  dateTime: string;
  readingTime?: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <article className={cn(premiumCardInteractive, "group flex h-full min-h-[17rem] flex-col")}>
      <div className={premiumGoldTopLine} aria-hidden />
      <div className="relative z-[1] flex min-h-full flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex max-w-[85%] items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_65%,white)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">
            {category}
          </span>
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-right">
            <time dateTime={dateTime} className="text-[10px] font-semibold tabular-nums tracking-wide text-[color:var(--text-muted)]">
              {date}
            </time>
            {readingTime ? (
              <span className="text-[10px] font-medium text-[color:var(--text-muted)]">{readingTime}</span>
            ) : null}
          </div>
        </div>
        <h2 className="mt-5 text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--ink-dark)] sm:text-[1.2rem]">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.72] text-[color:var(--text-muted)] sm:text-base sm:leading-[1.7]">
          {body}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-[color:var(--brand-primary)] transition-colors hover:text-[color:var(--brand-primary-hover)]"
        >
          <span className="border-b border-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] pb-0.5 transition-[border-color] group-hover:border-[color:var(--brand-gold)]">
            {cta}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
