import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";
import { getService } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function VerificationRelatedServices({
  locale,
  slugs,
  dict,
}: {
  locale: Locale;
  slugs: readonly Service["slug"][];
  dict: Dictionary;
}) {
  if (slugs.length === 0) return null;

  return (
    <section className="border-t border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)]">
      <Container className="py-9 sm:py-10 lg:py-11">
        <h2 className="text-[1.125rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.25rem]">
          {dict.serviceDetail.relatedServicesTitle}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {slugs.map((slug) => {
            const svc = getService(slug);
            if (!svc) return null;
            return (
              <Card
                key={slug}
                className="flex min-h-0 flex-col border-[color:var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
              >
                <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base">
                  {svc.title[locale]}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {svc.summary[locale]}
                </p>
                <Link
                  href={`/${locale}/verification-services/${slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 transition-colors hover:underline"
                >
                  {dict.ctas.learnMore}
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
