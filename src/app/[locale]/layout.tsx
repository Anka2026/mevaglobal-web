import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LocaleMain } from "@/components/layout/LocaleMain";

const locales = ["en", "tr", "nl"] as const;

/** Pin locale segments so `[locale]/*` static generation stays stable (reduces chunk / route drift). */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`]),
  ) as Record<(typeof locales)[number], string>;

  return {
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.siteDescription,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title: dict.meta.siteName,
      description: dict.meta.siteDescription,
      locale,
      url: `/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-[100svh] flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Header locale={locale as Locale} dict={dict} />
      <LocaleMain>{children}</LocaleMain>
      <Footer locale={locale as Locale} dict={dict} />
    </div>
  );
}

