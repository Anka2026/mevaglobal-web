import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { premiumGoldTopLine, premiumNavyStatement } from "@/lib/premiumUi";

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
  const primary = ctas.contact;
  const secondary = ctas.exploreServices;
  const tertiary = cta.detailLink ?? ctas.learnMore;

  const primaryHref = hrefOverrides?.primary ?? `/${locale}/contact`;
  const secondaryHref = hrefOverrides?.secondary ?? `/${locale}/verification-services`;
  const tertiaryHref = hrefOverrides?.tertiary ?? `/${locale}/verification-process`;

  const firstLine = eyebrowOverride?.trim() ? eyebrowOverride : taglineTopBar;

  return (
    <div
      className={cn(
        premiumNavyStatement,
        "relative w-full",
        compact ? "mt-0" : "mt-12 sm:mt-14 lg:mt-16",
        compact ? "p-5 sm:p-6 lg:px-8 lg:py-6" : "p-6 sm:p-8 lg:px-11 lg:py-10",
      )}
    >
      <div className={premiumGoldTopLine} aria-hidden />
      <div
        className={cn(
          "relative z-[1] flex flex-col lg:flex-row lg:items-center lg:justify-between",
          compact ? "gap-4 lg:gap-8" : "gap-6 lg:items-start lg:gap-12",
        )}
      >
        <div className={cn("min-w-0", compact ? "max-w-2xl lg:max-w-[38rem]" : "max-w-2xl lg:max-w-[40rem]")}>
          <p className={cn("font-semibold uppercase tracking-[0.16em] text-white/75", compact ? "text-[11px]" : "text-xs")}>
            {firstLine}
          </p>
          {(cta.title ?? "").trim() ? (
            <p
              className={cn(
                "font-semibold tracking-tight text-white",
                compact ? "mt-1.5 text-base sm:text-[1.0625rem]" : "mt-2 text-lg sm:text-xl",
              )}
            >
              {cta.title}
            </p>
          ) : null}
          <p
            className={cn(
              "text-white/82 antialiased",
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
            variant="secondary"
            size={compact ? "sm" : "md"}
            className={cn(
              "w-full justify-center border-transparent bg-white !text-[color:var(--brand-primary)] shadow-sm hover:bg-white/95 sm:w-auto",
              compact ? "lg:min-w-[10rem]" : "lg:min-w-[11rem]",
            )}
          >
            {primary}
          </ButtonLink>
          <ButtonLink
            href={secondaryHref}
            variant="secondary"
            size={compact ? "sm" : "md"}
            className={cn(
              "w-full justify-center border-white/35 bg-transparent !text-white shadow-none hover:bg-white/10 sm:w-auto",
              compact ? "lg:min-w-[10rem]" : "lg:min-w-[11rem]",
            )}
          >
            {secondary}
          </ButtonLink>
          {!omitTertiary ? (
            <Link
              href={tertiaryHref}
              className={cn(
                "inline-flex justify-center text-center text-sm font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline",
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
