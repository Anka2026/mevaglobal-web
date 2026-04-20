import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { VerificationServicesListingView } from "@/components/verification/VerificationServicesListingView";
import { getRenderableVerificationListingSections } from "@/lib/verification/verificationServicesData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/verification-services",
    tr: "/tr/verification-services",
    nl: "/nl/verification-services",
  } as const;

  return {
    title: dict.meta.pages.services.title,
    description: dict.meta.pages.services.description,
    alternates: { canonical: `/${locale}/verification-services`, languages },
    openGraph: {
      title: dict.meta.pages.services.title,
      description: dict.meta.pages.services.description,
      url: `/${locale}/verification-services`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function VerificationServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const s = dict.pages?.services;
  if (!s?.groups || !s.title) {
    notFound();
  }

  const listingSections = getRenderableVerificationListingSections(l, s.groups);

  return (
    <VerificationServicesListingView
      locale={l}
      servicesCopy={s}
      listingSections={listingSections}
      contactCta={dict.ctas.contact}
    />
  );
}
