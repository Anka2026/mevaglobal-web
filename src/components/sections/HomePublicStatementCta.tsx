import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FileSearch } from "lucide-react";
import { cn } from "@/lib/cn";

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
    <section className="border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_42%,white)] py-8 sm:py-10">
      <Container>
        <div
          className={cn(
            "mx-auto flex max-w-[76rem] flex-col gap-6 rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))]",
            "bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_6%,transparent)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8",
          )}
        >
          <div className="flex min-w-0 items-start gap-4">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]/60">
              <FileSearch className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="text-base font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-lg">{copy.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">{copy.body}</p>
            </div>
          </div>
          <ButtonLink
            href={`/${locale}/statement-search`}
            variant="primary"
            size="sm"
            className="h-auto min-h-10 w-full shrink-0 whitespace-normal px-5 py-2.5 text-center leading-snug sm:w-auto sm:min-w-[11.5rem]"
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
