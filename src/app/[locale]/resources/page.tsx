import { permanentRedirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function ResourcesLegacyRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = isLocale(locale) ? (locale as Locale) : "en";
  permanentRedirect(`/${l}/documents`);
}

