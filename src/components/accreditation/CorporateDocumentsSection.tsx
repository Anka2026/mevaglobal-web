import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { CORPORATE_PDF_DOCUMENTS, formatDocDate } from "@/data/corporatePdfDocuments";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function CorporateDocumentsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = dict.pages.process.corporateDocumentsSection;

  return (
    <section
      id="corporate-documents"
      className="scroll-mt-[4.5rem] border-t border-[color:var(--border-soft)] bg-white py-8 sm:py-9 lg:py-10"
    >
      <Container>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.65rem]">
            {copy.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[48rem] text-sm leading-[1.78] text-[color:var(--text-muted)] sm:mt-4 sm:text-[1.0625rem] sm:leading-[1.74]">
            {copy.intro}
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-7xl grid-cols-1 gap-5 sm:mt-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {CORPORATE_PDF_DOCUMENTS.map((doc) => {
            const title = doc.title[locale];
            const desc = doc.shortDescription[locale];
            const type = doc.typeLabel[locale];
            const dateStr = formatDocDate(doc.firstPublished, locale);
            const pdfUrl = doc.file;

            return (
              <article
                key={doc.id}
                className={cn(
                  "flex h-full min-h-0 flex-col overflow-hidden rounded-[1.0625rem]",
                  "border border-[color:color-mix(in_oklab,var(--brand-accent)_18%,var(--border-soft))]",
                  "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc]",
                  "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_7%,transparent)]",
                  "sm:p-7",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_15%,var(--border-soft))] bg-white/90 px-2.5 py-0.5 text-[11px] font-bold tabular-nums tracking-wide text-[color:var(--brand-primary)]">
                    {doc.code}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                    {type}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--text-muted)]">{desc}</p>

                <dl className="mt-4 space-y-1.5 border-t border-[color:color-mix(in_oklab,var(--border-soft)_80%,transparent)] pt-4 text-[11px] sm:text-xs">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                      {copy.labels.publicationStatus}
                    </dt>
                    <dd className="text-[color:var(--ink-dark)]/90">{copy.publicationStatusFirst}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                      {copy.labels.firstPublished}
                    </dt>
                    <dd className="tabular-nums text-[color:var(--ink-dark)]/90">{dateStr}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
                      {copy.labels.documentLanguage}
                    </dt>
                    <dd className="text-[color:var(--ink-dark)]/90">{copy.languageValue}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-semibold",
                      "bg-[color:var(--brand-primary)] text-white shadow-sm transition-colors hover:bg-[color:var(--brand-primary-hover)]",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
                    )}
                  >
                    {copy.labels.view}
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-2xl border border-[color:var(--border-soft)] bg-white px-4 text-sm font-semibold text-[color:var(--ink-dark)]",
                      "shadow-[var(--shadow-card)] transition-colors hover:border-[color:color-mix(in_oklab,var(--brand-accent)_28%,var(--border-soft))] hover:bg-[color:var(--brand-accent-soft)]",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
                    )}
                  >
                    {copy.labels.download}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
