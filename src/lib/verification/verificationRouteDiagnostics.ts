import type { Locale } from "@/i18n/locales";
import { getService } from "@/data/services";
import type { Service } from "@/data/services";
import { getServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";
import type { VerificationListingSectionModel } from "@/lib/verification/verificationServiceCatalog";
import { getListingIconKey } from "@/lib/verification/verificationServiceRegistry";
import { isKnownVerificationIconKey } from "@/components/verification/VerificationServiceIcon";

/**
 * Dev-only structured logs for isolating verification-services issues.
 * Enable with `VERIFICATION_ROUTE_DIAGNOSTICS=1` in `.env.local` (server / Next).
 */
export function shouldLogVerificationRouteDiagnostics(): boolean {
  return process.env.NODE_ENV === "development" && process.env.VERIFICATION_ROUTE_DIAGNOSTICS === "1";
}

export function logVerificationListingDiagnostics(
  locale: Locale,
  rawSectionCount: number,
  preparedSectionCount: number,
  slugsInOrder: string[],
): void {
  if (!shouldLogVerificationRouteDiagnostics()) return;
  console.info("[verification-services][diag] listing render", {
    locale,
    rawSections: rawSectionCount,
    preparedSections: preparedSectionCount,
    cardSlugs: slugsInOrder,
  });
}

/**
 * Compare catalog → prepareRenderableListingSections: which card slugs dropped (empty title, bad group copy, etc.).
 * Href is always `/${locale}/verification-services/${slug}` — if slug differs from `services.ts`, fix registry/builder.
 */
export function logVerificationListingPrepareDiff(
  locale: Locale,
  raw: VerificationListingSectionModel[],
  prepared: VerificationListingSectionModel[],
): void {
  if (!shouldLogVerificationRouteDiagnostics()) return;

  const rawSlugs = raw.flatMap((s) => s.cards.map((c) => c.slug));
  const prepSet = new Set(prepared.flatMap((s) => s.cards.map((c) => c.slug)));
  const skippedSlugs = rawSlugs.filter((slug) => !prepSet.has(slug));

  const unknownIconSlugs: string[] = [];
  for (const slug of prepSet) {
    const key = getListingIconKey(slug as Service["slug"]);
    if (!isKnownVerificationIconKey(key)) unknownIconSlugs.push(`${slug}→${key}`);
  }

  if (skippedSlugs.length > 0 || unknownIconSlugs.length > 0) {
    console.warn("[verification-services][diag] listing prepare diff", {
      locale,
      skippedSlugs,
      unknownIconSlugs,
      note: "skipped = dropped by prepareRenderableListingSections (see [listing-render] logs per slug)",
    });
  }
}

export function logVerificationDetailDiagnostics(
  locale: Locale,
  slug: string,
  ok: boolean,
  reason?: string,
): void {
  if (!shouldLogVerificationRouteDiagnostics()) return;
  const row = getService(slug as Service["slug"]);
  const visual = row ? getServiceHeroVisual(row.slug) : null;
  console.info("[verification-services][diag] detail render", {
    locale,
    slug,
    ok,
    reason: reason ?? null,
    hasServiceRow: Boolean(row),
    heroSrc: visual?.src ?? null,
    iconKey: visual?.iconKey ?? null,
  });
}
