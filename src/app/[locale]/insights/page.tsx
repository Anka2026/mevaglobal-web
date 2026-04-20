import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { insights } from "@/data/insights";
import { VisualAnchor } from "@/components/visual/VisualAnchor";
import { BookOpen } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/insights",
    tr: "/tr/insights",
    nl: "/nl/insights",
  } as const;

  return {
    title: dict.meta.pages.insights.title,
    description: dict.meta.pages.insights.description,
    alternates: { canonical: `/${locale}/insights`, languages },
    openGraph: {
      title: dict.meta.pages.insights.title,
      description: dict.meta.pages.insights.description,
      url: `/${locale}/insights`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      <PageHeader
        title={dict.pages.insights.title}
        description={dict.pages.insights.intro}
        visual={
          <VisualAnchor
            src="/page-visuals/insights.png"
            icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
            eyebrow={dict.nav.insights}
          />
        }
      />
      <Container className="py-14">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {(Array.isArray(insights) ? insights : []).map((p) => (
            <Card key={p.slug} className="min-w-0 p-7 sm:p-8" id={p.slug}>
              <div className="flex items-center justify-between gap-4">
                <p className="min-w-0 text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">
                  {p.tag[l] ?? p.tag.en ?? ""}
                </p>
                <p className="shrink-0 text-xs text-[color:var(--text-muted)]">{p.date}</p>
              </div>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-[color:var(--ink-dark)]">
                {p.title[l] ?? p.title.en ?? ""}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                {p.excerpt[l] ?? p.excerpt.en ?? ""}
              </p>
              <div className="mt-5">
                <Link
                  href={`/${l}/insights#${p.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] hover:underline"
                >
                  {dict.pages.insights.readMore}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

