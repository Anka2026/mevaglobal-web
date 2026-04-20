import { getService, services, type Service } from "@/data/services";
import type { Locale } from "@/i18n/locales";
import { localizedServiceSummary, localizedServiceTitle } from "@/lib/serviceListing";
import {
  VERIFICATION_SERVICES_LISTING_GROUPS,
  getVerificationRegistrySlugsInOrder,
  type VerificationServicesListingGroup,
  type VerificationServicesListingGroupKey,
} from "@/lib/verification/verificationServiceRegistry";
import { logVerificationIssue } from "@/lib/verification/log";
import { verificationDebug } from "@/lib/verification/verificationDebug";

/**
 * Normalized listing row: single shape used by `/verification-services` (title + description + slug).
 * Built from `services.ts` + group registry; invalid slugs are skipped (never thrown).
 */
export type VerificationListingCardModel = {
  slug: Service["slug"];
  groupKey: VerificationServicesListingGroupKey;
  orderInGroup: number;
  title: string;
  description: string;
};

export type VerificationListingSectionModel = {
  groupKey: VerificationServicesListingGroupKey;
  cards: VerificationListingCardModel[];
};

/**
 * Same as `buildVerificationListingSections`, but uses an explicit group list (tests / bisect without env).
 */
export function buildVerificationListingSectionsForGroups(
  locale: Locale,
  groups: readonly VerificationServicesListingGroup[],
): VerificationListingSectionModel[] {
  try {
    const sections: VerificationListingSectionModel[] = [];

    for (const g of groups) {
      const cards: VerificationListingCardModel[] = [];
      g.slugs.forEach((slug, orderInGroup) => {
        const svc = getService(slug as Service["slug"]);
        if (!svc) {
          verificationDebug("listing-skip", { slug, group: g.key });
          logVerificationIssue(
            "listing-skip",
            String(slug),
            `Catalog group "${g.key}" references unknown slug; sync src/data/services.ts with verificationServiceRegistry.`,
          );
          return;
        }
        const title = localizedServiceTitle(svc, locale).trim();
        const description = localizedServiceSummary(svc, locale);
        if (!title) {
          logVerificationIssue("listing-skip", svc.slug, `Empty title after localization (locale ${locale}).`);
          return;
        }
        cards.push({
          slug: svc.slug,
          groupKey: g.key,
          orderInGroup,
          title,
          description,
        });
      });

      if (cards.length === 0) {
        logVerificationIssue("integrity", g.key, `Listing group "${g.key}" has no resolvable services; section hidden.`);
        continue;
      }
      sections.push({ groupKey: g.key, cards });
    }

    return sections;
  } catch (e) {
    console.error("[verification-services] buildVerificationListingSectionsForGroups failed", e);
    logVerificationIssue("integrity", "listing", "Unexpected error building verification listing; returning empty sections.");
    return [];
  }
}

/** Deterministic pipeline: registry groups → resolve `Service` row → normalize strings → skip + log bad rows. */
export function buildVerificationListingSections(locale: Locale): VerificationListingSectionModel[] {
  return buildVerificationListingSectionsForGroups(locale, VERIFICATION_SERVICES_LISTING_GROUPS);
}

/** All slugs that appear in the verification listing (same order as page sections). */
export function getVerificationListingSlugsInOrder(): Service["slug"][] {
  return getVerificationRegistrySlugsInOrder();
}

/** Canonical slug set from `services.ts` (detail routes, sitemap, forms). */
export function getAllVerificationServiceSlugs(): readonly Service["slug"][] {
  return services.map((s) => s.slug);
}
