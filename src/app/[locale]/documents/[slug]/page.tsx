import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { RESOURCE_ARTICLE_SLUGS, type ResourceArticleSlug } from "@/data/resourceArticleSlugs";
import { ResourceArticleView } from "@/components/documents/ResourceArticleView";

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
  const doc = dict.pages.documents;
  const article = doc.resourceArticles[slug];
  if (!article) notFound();

  return (
    <ResourceArticleView
      locale={l}
      article={article}
      ui={doc.ui}
      bottomCta={doc.bottomCta}
    />
  );
}
