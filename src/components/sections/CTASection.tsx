import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CTASection({
  locale,
  dict,
  title,
  body,
  primary,
  secondary,
}: {
  locale: Locale;
  dict: Dictionary;
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const resolvedTitle = title ?? dict.home.ctaTitle;
  const resolvedBody = body ?? dict.home.ctaIntro;
  const resolvedPrimary = primary ?? { href: `/${locale}/contact`, label: dict.ctas.requestQuote };
  const resolvedSecondary =
    secondary ??
    ({ href: `/${locale}/verification-services`, label: dict.ctas.exploreServices } as const);

  return (
    <section className="py-16">
      <Container>
        <Card className="overflow-hidden">
          <div className="grid gap-8 bg-[color:var(--brand-accent-soft)] p-8 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
            <div className="min-w-0 lg:col-span-9">
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">
                {dict.brand.taglineTopBar}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink-dark)]">
                {resolvedTitle}
              </h3>
              <p className="mt-3 max-w-[52rem] text-sm leading-7 text-[color:var(--text-muted)] sm:text-base">
                {resolvedBody}
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-3 lg:col-span-3 lg:items-stretch lg:justify-center">
              <ButtonLink href={resolvedPrimary.href} variant="primary" size="sm" className="w-full sm:w-auto lg:w-full">
                {resolvedPrimary.label}
              </ButtonLink>
              <ButtonLink
                href={resolvedSecondary.href}
                variant="secondary"
                size="sm"
                className="h-auto min-h-10 w-full whitespace-normal px-4 py-2 text-center leading-snug sm:w-auto lg:w-full"
              >
                {resolvedSecondary.label}
              </ButtonLink>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

