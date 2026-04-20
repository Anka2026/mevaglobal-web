import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { StatementSearchClient } from "./StatementSearchClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/statement-search",
    tr: "/tr/statement-search",
    nl: "/nl/statement-search",
  } as const;

  return {
    title: dict.meta.pages.statementSearch.title,
    description: dict.meta.pages.statementSearch.description,
    alternates: { canonical: `/${locale}/statement-search`, languages },
    openGraph: {
      title: dict.meta.pages.statementSearch.title,
      description: dict.meta.pages.statementSearch.description,
      url: `/${locale}/statement-search`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function StatementSearchPage({
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
        denseHero
        eyebrow={dict.nav.statementSearch}
        title={dict.pages.statementSearch.title}
        description={dict.pages.statementSearch.intro}
      />
      <Container className="py-8 sm:py-9 lg:py-10">
        <StatementSearchClient dict={dict} />
      </Container>
    </>
  );
}
