import { permanentRedirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function ServiceSlugLegacyRedirectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l = isLocale(locale) ? (locale as Locale) : "en";
  permanentRedirect(`/${l}/verification-services/${encodeURIComponent(slug)}`);
}

