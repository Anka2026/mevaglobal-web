import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { RESOURCE_ARTICLE_SLUGS, type ResourceArticleSlug } from "@/data/resourceArticleSlugs";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function isArticleSlug(s: string): s is ResourceArticleSlug {
  return (RESOURCE_ARTICLE_SLUGS as readonly string[]).includes(s);
}

export function generateStaticParams() {
  return RESOURCE_ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) return {};
  const dict = await getDictionary(locale as Locale);
  const article = dict.pages.documents.resourceArticles[slug];
  if (!article) return {};
  const base = dict.meta.pages.documents;
  return {
    title: `${article.title} | ${base.title}`,
    description: article.intro.slice(0, 160),
    alternates: {
      canonical: `/${locale}/documents/${slug}`,
      languages: {
        en: `/en/documents/${slug}`,
        tr: `/tr/documents/${slug}`,
        nl: `/nl/documents/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.intro.slice(0, 200),
      url: `/${locale}/documents/${slug}`,
      locale,
      siteName: dict.meta.siteName,
      type: "article",
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!isArticleSlug(slug)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const article = dict.pages.documents.resourceArticles[slug];
  if (!article) notFound();

  return (
    <>
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-10 sm:py-11 lg:py-12">
          <Link
            href={`/${l}/documents`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 transition-colors hover:underline"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            {dict.pages.documents.title}
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
            {article.eyebrow}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
            <span>{article.category}</span>
            <time dateTime={article.date} className="tabular-nums">
              {article.date}
            </time>
          </div>
          <h1 className="mt-4 max-w-[48rem] text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[color:var(--ink-dark)] sm:text-[2rem] lg:text-[2.15rem]">
            {article.title}
          </h1>
          <p className="mt-5 max-w-[44rem] text-sm leading-[1.82] text-[color:var(--ink-dark)]/92 sm:text-[1.0625rem] sm:leading-[1.78]">
            {article.intro}
          </p>
        </Container>
      </section>

      <section className="border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)]">
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            {article.sections.map((sec) => (
              <article
                key={sec.title}
                className={cn(
                  "rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_20%,var(--border-soft))]",
                  "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc]",
                  "p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_36px_-18px_rgba(29,37,47,0.1)] sm:p-8",
                  "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_8%,transparent)]",
                )}
              >
                <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{sec.title}</h2>
                <p className="mt-3 text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.76]">
                  {sec.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_12%,var(--border-soft))] bg-white/90 p-7 sm:p-8">
            <p className="text-sm font-medium leading-[1.78] text-[color:var(--ink-dark)]/95 sm:text-[1.0625rem] sm:leading-[1.76]">
              {article.closing}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 pt-10 sm:pb-16 sm:pt-12">
        <Container>
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_24%,var(--border-soft))]",
              "bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_92%,white)] via-white to-[#f3f8fb]",
              "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_18px_44px_-22px_rgba(29,37,47,0.14)] sm:p-8 lg:p-10",
              "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_11%,transparent)]",
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,color-mix(in_oklab,var(--brand-accent-soft)_55%,white)_0%,transparent_38%)] opacity-90" />
            <div className="relative z-[1] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem]">
                {dict.pages.documents.bottomCta.body}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
                <ButtonLink href={`/${l}/contact`} variant="primary" size="md" className="justify-center sm:min-w-[10.5rem]">
                  {dict.pages.documents.bottomCta.primary}
                </ButtonLink>
                <ButtonLink
                  href={`/${l}/verification-services`}
                  variant="secondary"
                  size="md"
                  className="justify-center sm:min-w-[10.5rem]"
                >
                  {dict.pages.documents.bottomCta.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
