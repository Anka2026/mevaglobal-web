import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { CbamFlagshipView } from "@/components/cbam/CbamFlagshipView";
import { getCbamFlagshipCopy } from "@/content/cbamFlagship";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCbamFlagshipCopy(locale as Locale);
  const dict = await getDictionary(locale as Locale);
  const languages = {
    en: "/en/cbam-solutions",
    tr: "/tr/cbam-solutions",
    nl: "/nl/cbam-solutions",
  } as const;

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical: `/${locale}/cbam-solutions`, languages },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `/${locale}/cbam-solutions`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function CbamSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <CbamFlagshipView locale={locale as Locale} />;
}
