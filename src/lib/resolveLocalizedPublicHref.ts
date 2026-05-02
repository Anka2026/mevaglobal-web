import type { Locale } from "@/i18n/locales";

/**
 * Resolves CMS-style hrefs for locale-prefixed routes and absolute URLs.
 * Knowledge Hub cards may use internal paths (`/documents/...`) or direct PDF URLs.
 */
export function resolveLocalizedPublicHref(href: string | undefined, locale: Locale, fallbackPath: string): string {
  if (!href || typeof href !== "string") return fallbackPath;
  const t = href.trim();
  if (!t) return fallbackPath;
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  if (t.startsWith("/")) return `/${locale}${t}`;
  return fallbackPath;
}
