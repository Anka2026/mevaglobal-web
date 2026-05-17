import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FileSearch, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  premiumEyebrowRow,
  premiumEyebrowRule,
  premiumGoldDivider,
  premiumGoldTopLine,
  premiumIconWellSoft,
  premiumSectionStatement,
} from "@/lib/premiumUi";

export function HomePublicStatementCta({
  locale,
  copy,
  ctaLabel,
}: {
  locale: Locale;
  copy: Dictionary["home"]["publicStatementLookup"];
  ctaLabel: string;
}) {
  return (
    <section className={cn("py-10 sm:py-12", premiumSectionStatement)}>
      <Container>
        <div
          className={cn(
            "relative mx-auto max-w-[76rem] overflow-hidden rounded-[1.125rem]",
            "border border-[color:color-mix(in_oklab,var(--brand-primary)_16%,var(--border-soft))]",
            "bg-white shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_7%,transparent)]",
          )}
        >
          <div className={premiumGoldTopLine} aria-hidden />
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 lg:p-9">
            <div className="min-w-0">
              <div className="flex items-start gap-4">
                <div className={premiumIconWellSoft} aria-hidden>
                  <FileSearch className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className={premiumEyebrowRow}>
                    <span className={premiumEyebrowRule} aria-hidden />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                      {copy.previewHint}
                    </p>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                    {copy.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                    {copy.body}
                  </p>
                </div>
              </div>
              <ButtonLink
                href={`/${locale}/statement-search`}
                variant="primary"
                size="md"
                className="mt-6 w-full sm:mt-7 sm:w-auto sm:min-w-[12rem]"
              >
                {ctaLabel}
              </ButtonLink>
            </div>

            <div className="relative hidden min-w-0 border-l border-[color:color-mix(in_oklab,var(--brand-gold)_35%,var(--border-soft))] pl-6 sm:block" aria-hidden>
              <div className={cn(premiumGoldDivider, "mb-4 lg:hidden")} />
              <div
                className={cn(
                  "rounded-xl border border-[color:color-mix(in_oklab,var(--brand-accent)_18%,var(--border-soft))]",
                  "bg-gradient-to-br from-white to-[color:color-mix(in_oklab,var(--brand-accent-soft)_45%,white)]",
                  "p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-black/[0.03]",
                )}
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[color:color-mix(in_oklab,var(--brand-gold)_70%,var(--brand-primary))]" />
                  <span>{copy.previewFieldLabel}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <div
                    className={cn(
                      "min-w-0 flex-1 rounded-lg border border-[color:var(--border-soft)] bg-white px-3 py-2.5",
                      "font-mono text-[13px] tracking-tight text-[color:var(--ink-dark)]/75",
                    )}
                  >
                    {copy.previewFieldExample}
                  </div>
                  <span className="inline-flex shrink-0 items-center rounded-lg bg-[color:var(--brand-primary)] px-3.5 py-2.5 text-xs font-semibold text-white">
                    {ctaLabel}
                  </span>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-[color:var(--text-muted)]">{copy.previewHint}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
