import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type CtaShape = {
  title: string;
  body: string;
  primaryButton?: string;
  secondaryButton?: string;
  detailLink?: string;
};

/** Shared CTA band for premium verification service detail pages. */
export function PremiumVerificationServiceCtaPanel({
  locale,
  cta,
  ctas,
  hrefOverrides,
  eyebrowOverride,
  omitTertiary,
  taglineTopBar,
  /** Tighter band for hub pages (e.g. accreditation) — less padding and vertical rhythm. */
  compact,
}: {
  locale: Locale;
  cta: CtaShape;
  ctas: Dictionary["ctas"];
  /** Optional paths (e.g. CBAM landing: tertiary → service detail). */
  hrefOverrides?: { primary?: string; secondary?: string; tertiary?: string };
  /** When set, replaces `taglineTopBar` for the first line (e.g. accreditation page). */
  eyebrowOverride?: string;
  omitTertiary?: boolean;
  /** Default first line (typically `dict.brand.taglineTopBar`). */
  taglineTopBar: string;
  compact?: boolean;
}) {
  const primary = cta.primaryButton ?? ctas.requestQuote;
  const secondary = cta.secondaryButton ?? ctas.exploreServices;
  const tertiary = cta.detailLink ?? ctas.learnMore;

  const primaryHref = hrefOverrides?.primary ?? `/${locale}/contact`;
  const secondaryHref = hrefOverrides?.secondary ?? `/${locale}/verification-services`;
  const tertiaryHref = hrefOverrides?.tertiary ?? `/${locale}/verification-process`;

  const firstLine = eyebrowOverride?.trim() ? eyebrowOverride : taglineTopBar;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.125rem]",
        compact ? "rounded-xl sm:rounded-[1.0625rem]" : "rounded-[1.125rem]",
        compact ? "mt-0" : "mt-12 sm:mt-14 lg:mt-16",
        "border border-[color:color-mix(in_oklab,var(--brand-accent)_24%,var(--border-soft))]",
        "bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_92%,white)] via-white to-[#f3f8fb]",
        compact
          ? "p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_28px_-14px_rgba(29,37,47,0.1)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_9%,transparent)]"
          : "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_18px_44px_-22px_rgba(29,37,47,0.16),0_6px_20px_-10px_rgba(0,86,145,0.09)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_11%,transparent)]",
        !compact &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-safe:hover:-translate-y-[1px] hover:border-[color:color-mix(in_oklab,var(--brand-accent)_34%,var(--border-soft))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_24px_52px_-22px_rgba(29,37,47,0.2),0_10px_28px_-12px_rgba(0,86,145,0.12)]",
        compact ? "sm:p-6 lg:px-8 lg:py-6" : "sm:p-8 lg:px-11 lg:py-10",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,color-mix(in_oklab,var(--brand-accent-soft)_55%,white)_0%,transparent_38%)] opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--brand-primary)_40%,white)]/45 to-transparent"
        aria-hidden
      />
      <div
        className={cn(
          "relative z-[1] flex flex-col lg:flex-row lg:items-center lg:justify-between",
          compact ? "gap-4 lg:gap-8" : "gap-6 lg:items-start lg:gap-12",
        )}
      >
        <div className={cn("min-w-0", compact ? "max-w-2xl lg:max-w-[38rem]" : "max-w-2xl lg:max-w-[40rem]")}>
          <p className={cn("font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]", compact ? "text-[11px]" : "text-xs")}>
            {firstLine}
          </p>
          {(cta.title ?? "").trim() ? (
            <p
              className={cn(
                "font-semibold tracking-tight text-[color:var(--ink-dark)]",
                compact ? "mt-1.5 text-base sm:text-[1.0625rem]" : "mt-2 text-lg sm:text-xl",
              )}
            >
              {cta.title}
            </p>
          ) : null}
          <p
            className={cn(
              "text-[color:var(--ink-dark)]/90 antialiased",
              compact ? "mt-1.5 text-sm leading-relaxed sm:text-[0.9375rem]" : "mt-2 text-[0.9375rem] leading-[1.78] sm:text-base sm:leading-[1.76]",
              (cta.title ?? "").trim() ? "" : compact ? "mt-2" : "mt-3",
            )}
          >
            {cta.body}
          </p>
        </div>
        <div
          className={cn(
            "flex w-full shrink-0 flex-col sm:flex-row sm:items-center lg:w-auto xl:flex-row xl:items-center",
            compact ? "gap-2.5 sm:gap-3" : "gap-3 sm:gap-4 lg:flex-col lg:items-stretch xl:gap-4",
          )}
        >
          <ButtonLink
            href={primaryHref}
            variant="primary"
            size={compact ? "sm" : "md"}
            className={cn("w-full justify-center sm:w-auto", compact ? "lg:min-w-[10rem]" : "lg:min-w-[11rem]")}
          >
            {primary}
          </ButtonLink>
          <ButtonLink
            href={secondaryHref}
            variant="secondary"
            size={compact ? "sm" : "md"}
            className={cn("w-full justify-center sm:w-auto", compact ? "lg:min-w-[10rem]" : "lg:min-w-[11rem]")}
          >
            {secondary}
          </ButtonLink>
          {!omitTertiary ? (
            <Link
              href={tertiaryHref}
              className={cn(
                "inline-flex justify-center text-center text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 transition-colors hover:text-[color:var(--brand-primary-hover)] hover:underline",
                compact ? "sm:self-center sm:px-1" : "sm:px-1 lg:w-full xl:w-auto",
              )}
            >
              {tertiary}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
