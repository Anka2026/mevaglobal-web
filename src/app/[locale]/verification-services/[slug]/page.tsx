import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/locales";
import type { Service } from "@/data/services";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  getVerificationDetailPayload,
  getAllVerificationServiceSlugs,
} from "@/lib/verification/verificationServicesData";
import {
  VerificationServiceDetailPage,
  isVerificationDetailRenderable,
} from "@/components/verification/VerificationServiceDetailPage";

export async function generateStaticParams() {
  return getAllVerificationServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: Service["slug"] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const dictEn = await getDictionary("en");
  const payload = getVerificationDetailPayload(slug, l, dict, dictEn);

  if (!payload.ok) {
    return {
      title: dict.meta.pages.services.title,
      description: dict.meta.pages.services.description,
    };
  }

  const merged = payload.merged;
  const title =
    typeof merged.title === "string" && merged.title.trim().length > 0 ? merged.title : dict.meta.pages.services.title;
  const description =
    "intro" in merged && typeof merged.intro === "string" && merged.intro.trim().length > 0
      ? merged.intro
      : dict.meta.pages.services.description;

  const languages = {
    en: `/en/verification-services/${slug}`,
    tr: `/tr/verification-services/${slug}`,
    nl: `/nl/verification-services/${slug}`,
  } as const;

  return {
    title,
    description,
    alternates: { canonical: `/${l}/verification-services/${slug}`, languages },
    openGraph: {
      title,
      description,
      url: `/${l}/verification-services/${slug}`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: Service["slug"] }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const dict = await getDictionary(l);
  const dictEn = await getDictionary("en");
  const payload = getVerificationDetailPayload(slug, l, dict, dictEn);
  if (!payload.ok) notFound();

  if (!isVerificationDetailRenderable(payload.merged)) notFound();

  return (
    <VerificationServiceDetailPage
      locale={l}
      slug={payload.slug}
      dict={dict}
      content={payload.merged}
      visual={payload.visual}
    />
  );
}
