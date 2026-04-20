import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/locales";

/** Props normalized for `ServiceCard` on the verification-services index (always strings). */
export type VerificationListingCardModel = {
  slug: Service["slug"];
  title: string;
  description: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/** Safe title for service cards — never throws if a locale field is missing. */
export function localizedServiceTitle(svc: Service, l: Locale): string {
  const t = svc.title?.[l] ?? svc.title?.en ?? svc.title?.tr ?? svc.title?.nl;
  if (typeof t === "string" && t.trim().length > 0) return t;
  console.warn(
    `[service-listing] Missing title for slug "${svc.slug}" (locale ${l}); using slug as fallback.`,
  );
  return svc.slug;
}

/** Safe summary for service cards — never throws if a locale field is missing. */
export function localizedServiceSummary(svc: Service, l: Locale): string {
  const s = svc.summary?.[l] ?? svc.summary?.en ?? svc.summary?.tr ?? svc.summary?.nl;
  if (typeof s === "string") return s;
  console.warn(
    `[service-listing] Missing summary for slug "${svc.slug}" (locale ${l}); using empty string.`,
  );
  return "";
}

/**
 * Normalizes a `Service` row into safe card props before render (avoids undefined/null leaking to UI).
 */
export function toVerificationListingCardModel(svc: Service, l: Locale): VerificationListingCardModel | null {
  if (!svc || !isNonEmptyString(svc.slug)) {
    console.warn("[service-listing] Skipping invalid service row (missing slug).");
    return null;
  }
  return {
    slug: svc.slug,
    title: localizedServiceTitle(svc, l).trim() || svc.slug,
    description: localizedServiceSummary(svc, l),
  };
}

/**
 * Maps resolved services to listing card models, dropping any row that fails normalization.
 */
export function mapServicesToListingCardModels(
  items: readonly Service[],
  l: Locale,
): VerificationListingCardModel[] {
  const out: VerificationListingCardModel[] = [];
  for (const svc of items) {
    const row = toVerificationListingCardModel(svc, l);
    if (row) out.push(row);
  }
  return out;
}

/**
 * Resolves configured slugs to `Service` rows. Unknown slugs are skipped and logged
 * so one bad registry entry cannot take down the whole listing page.
 */
export function resolveServicesForGroupSlugs(
  slugs: readonly string[],
  groupKey: string,
  allServices: readonly Service[],
): Service[] {
  const out: Service[] = [];
  for (const slug of slugs) {
    const svc = allServices.find((s) => s.slug === slug);
    if (!svc) {
      console.warn(
        `[verification-services] Unknown slug "${slug}" in group "${groupKey}" — skipped. Sync src/data/services.ts with src/lib/verification/verificationServiceRegistry.ts.`,
      );
      continue;
    }
    if (!isNonEmptyString(svc.slug)) {
      console.warn(`[verification-services] Skipping service row with empty slug in group "${groupKey}".`);
      continue;
    }
    out.push(svc);
  }
  return out;
}
