import { permanentRedirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function ServicesLegacyRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = isLocale(locale) ? (locale as Locale) : "en";
  permanentRedirect(`/${l}/verification-services`);
}

