import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";
import {
  VerificationServiceDetailVisual,
  verificationServiceDetailMediaColumnClassName,
} from "@/components/verification/VerificationServiceDetailVisual";
import { premiumHeroBackdrop } from "@/lib/premiumUi";

/**
 * Canonical hero shell for every `/verification-services/[slug]` layout:
 * premium four-card, premium five-card, editorial, and standard detail branches all render here
 * so backdrop, grid rhythm, media column sizing, and `VerificationServiceDetailVisual` wiring stay identical (all locales).
 */
export function VerificationServiceDetailHero({
  locale,
  backLabel,
  eyebrow,
  title,
  intro,
  visual,
  /** When true, hides the services back link (e.g. top-level marketing pages that reuse this hero chrome). */
  omitBackLink,
  /** Optional alt for the hero image; defaults to the page title. */
  imageAlt,
}: {
  locale: Locale;
  backLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  visual: ServiceHeroVisual;
  omitBackLink?: boolean;
  imageAlt?: string;
}) {
  return (
    <section className={cn("border-b border-[color:var(--border-soft)]", premiumHeroBackdrop)}>
      <Container className={omitBackLink ? "pb-8 pt-7 sm:pb-9 sm:pt-8 lg:pb-10 lg:pt-9" : "pb-8 pt-5 sm:pb-9 sm:pt-6 lg:pb-10 lg:pt-7"}>
        {omitBackLink ? null : (
          <Link
            href={`/${locale}/verification-services`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            {backLabel}
          </Link>
        )}

        <div className={omitBackLink ? "grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10" : "mt-5 grid items-stretch gap-6 lg:mt-5 lg:grid-cols-12 lg:gap-8 xl:gap-10"}>
          <div className="flex min-w-0 flex-col gap-2.5 sm:gap-3 lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-xs">
              {eyebrow}
            </p>
            <h1 className="text-[1.75rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.125rem] lg:text-[2.35rem]">
              {title}
            </h1>
            <p
              className={cn(
                "max-w-[44rem] text-sm leading-[1.72] sm:text-[1.0625rem] sm:leading-[1.74]",
                "text-[color:var(--ink-dark)]/88 sm:max-w-[46rem]",
              )}
            >
              {intro}
            </p>
          </div>

          <div className={verificationServiceDetailMediaColumnClassName(visual)}>
            <VerificationServiceDetailVisual visual={visual} title={title} imageAlt={imageAlt} />
          </div>
        </div>
      </Container>
    </section>
  );
}
