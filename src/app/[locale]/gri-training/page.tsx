import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { premiumCardElevated, premiumGoldTopLine, premiumIconWellSoft } from "@/lib/premiumUi";
import {
  GRI_TRAINING_MARK_SRC,
  GRI_TRAINING_PAGE_COPY,
  GRI_TRAINING_PDFS,
} from "./gri-training-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = GRI_TRAINING_PAGE_COPY[locale as Locale];
  const languages = {
    en: "/en/gri-training",
    tr: "/tr/gri-egitimleri",
    nl: "/nl/gri-training",
  } as const;

  return {
    title: copy.title,
    description: copy.intro[0],
    robots: { index: false, follow: true },
    alternates: { canonical: locale === "tr" ? "/tr/gri-egitimleri" : `/${locale}/gri-training`, languages },
  };
}

export default async function GriTrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const copy = GRI_TRAINING_PAGE_COPY[l];

  return (
    <>
      <PageHeader
        denseHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={[...copy.intro]}
        descriptionVariant="lead-support"
        wideIntro
        visual={
          <div className="flex h-full items-center justify-center lg:justify-end">
            <Image
              src={GRI_TRAINING_MARK_SRC}
              alt={copy.markAlt}
              width={640}
              height={320}
              className="h-auto w-full max-w-[16.5rem] sm:max-w-[18rem]"
              sizes="(max-width: 1023px) 288px, 22vw"
              priority
            />
          </div>
        }
      />

      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[76rem]">
          <h2 className="text-[1.45rem] font-semibold leading-[1.18] tracking-tight text-[color:var(--ink-dark)] sm:text-[1.6rem]">
            {copy.materialsHeading}
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:mt-8 md:grid-cols-2 md:gap-6">
            {GRI_TRAINING_PDFS.map((doc) => (
              <article key={doc.id} className={cn("flex h-full min-h-0 flex-col p-6 sm:p-7", premiumCardElevated)}>
                <div className={premiumGoldTopLine} aria-hidden />
                <div className="flex items-start gap-3">
                  <div className={premiumIconWellSoft}>
                    <FileText className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                      {doc.typeLabel[l]}
                      <span className="tabular-nums"> · {doc.year}</span>
                    </p>
                    <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                      {doc.title[l]}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--ink-dark)]/82 sm:text-[0.9375rem] sm:leading-[1.7]">
                  {doc.description[l]}
                </p>
                <div className="mt-5">
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[color:var(--brand-primary-hover)] sm:w-auto"
                  >
                    {copy.viewPdf}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div
            className={cn(
              "mt-10 rounded-[1.0625rem] border border-[color:var(--border-soft)] bg-white p-7 shadow-[var(--shadow-card)] sm:mt-12 sm:p-8 lg:p-9",
              "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_6%,transparent)]",
            )}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <h2 className="text-[1.0625rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-lg">
                  {copy.contactTitle}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                  {copy.contactBody}
                </p>
              </div>
              <ButtonLink href={`/${l}/contact`} variant="primary" size="md" className="w-full justify-center sm:w-auto lg:min-w-[10.5rem]">
                {dict.ctas.contact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
