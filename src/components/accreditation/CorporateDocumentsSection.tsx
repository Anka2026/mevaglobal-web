import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { CORPORATE_PDF_DOCUMENTS, formatDocDate } from "@/data/corporatePdfDocuments";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { premiumCardElevated, premiumGoldTopLine, premiumSectionMuted } from "@/lib/premiumUi";

export function CorporateDocumentsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = dict.pages.process.corporateDocumentsSection;
  const documents = CORPORATE_PDF_DOCUMENTS;

  return (
    <section
      id="corporate-documents"
      className={cn(
        "scroll-mt-[5.75rem] border-t border-[color:var(--border-soft)] py-10 sm:py-12 lg:py-14",
        premiumSectionMuted,
      )}
    >
      <Container>
        <div className="mx-auto min-h-[min(28rem,50vh)] max-w-[76rem]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.65rem] lg:text-[1.75rem]">
              {copy.title}
            </h2>
            <p className="mx-auto mt-4 text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.74]">
              {copy.intro}
            </p>
          </div>

          {documents.length > 0 ? (
            <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {documents.map((doc) => {
                const title = doc.title[locale];
                const desc = doc.shortDescription[locale];
                const type = doc.typeLabel[locale];
                const dateStr = formatDocDate(doc.firstPublished, locale);
                const pdfUrl = doc.pdfUrl;

                return (
                  <article key={doc.id} className={cn("relative flex h-full min-h-0 flex-col p-6 sm:p-7", premiumCardElevated)}>
                    <div className={premiumGoldTopLine} aria-hidden />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_55%,white)] px-2.5 py-0.5 text-[11px] font-bold tabular-nums tracking-wide text-[color:var(--brand-primary)]">
                        {copy.labels.documentCode}: {doc.code}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                        {type}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                      {title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ink-dark)]/82">{desc}</p>

                    <dl className="mt-4 space-y-2 border-t border-[color:color-mix(in_oklab,var(--border-soft)_80%,transparent)] pt-4 text-[11px] sm:text-xs">
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                          {copy.labels.scopeLanguage}
                        </dt>
                        <dd className="text-[color:var(--ink-dark)]/90">{copy.languageValue}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                          {copy.labels.publicationStatus}
                        </dt>
                        <dd className="text-[color:var(--ink-dark)]/90">{copy.publiclyAvailable}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                          {copy.labels.firstPublished}
                        </dt>
                        <dd className="tabular-nums text-[color:var(--ink-dark)]/90">{dateStr}</dd>
                      </div>
                    </dl>

                    <div className="mt-5">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[color:var(--brand-primary-hover)] sm:w-auto"
                      >
                        {copy.labels.view}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <article className={cn("relative mx-auto mt-9 max-w-2xl p-7 sm:p-8", premiumCardElevated)}>
              <div className={premiumGoldTopLine} aria-hidden />
              <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{copy.emptyState}</p>
              <Link
                href={`/${locale}/contact`}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]"
              >
                {copy.labels.contactForDocument}
              </Link>
            </article>
          )}
        </div>
      </Container>
    </section>
  );
}
