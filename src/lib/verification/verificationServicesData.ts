/**
 * Single deterministic entry point for `/verification-services` listing + detail routes.
 * Listing group order, slug order, and icon keys live here — pages import only this module.
 */
import type { Service } from "@/data/services";
import { getService, services } from "@/data/services";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import type { VerificationIconKey } from "@/components/verification/VerificationServiceIcon";
import { mergeServiceDetailWithEnglishFallback } from "@/lib/verification/mergeServiceDetailLocale";
import { getServiceHeroVisual, type ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";

// --- Listing registry (canonical; verificationServiceRegistry re-exports for legacy imports) ---

export type VerificationServicesListingGroupKey =
  | "climateAndCarbonAssurance"
  | "productAndEnvironmentalClaims"
  | "builtEnvironmentAndMaterialHealth"
  | "responsibleSupplyChainsAndSectorSchemes"
  | "esgAndReportingAssurance";

export type VerificationServicesListingGroup = {
  key: VerificationServicesListingGroupKey;
  slugs: readonly Service["slug"][];
};

/** Canonical group order + slug order for the verification-services index. */
export const FULL_VERIFICATION_SERVICES_LISTING_GROUPS: readonly VerificationServicesListingGroup[] = [
  {
    key: "climateAndCarbonAssurance",
    slugs: [
      "iso-14064-1",
      "iso-14064-2",
      "iso-14046",
      "iso-14067",
      "cbam-verification-support",
      "eu-ets-verification-review",
      "f-gases-verification-review",
      "maritime-mrv-verification-review",
      "iso-14064-3-review-support",
      "net-zero-sbti-technical-review",
      "iso-14068-readiness-review",
    ],
  },
  {
    key: "productAndEnvironmentalClaims",
    slugs: ["lca-review", "epd-verification", "recycled-content-verification", "bio-based-content-verification"],
  },
  {
    key: "builtEnvironmentAndMaterialHealth",
    slugs: [
      "indoor-air-quality-voc-review",
      "hpd-review",
      "material-health-composition-review",
      "green-building-documentation-review",
    ],
  },
  {
    key: "responsibleSupplyChainsAndSectorSchemes",
    slugs: [
      "asi-readiness-review",
      "fsc-pefc-eudr-readiness",
      "responsible-mining-irma-readiness",
      "textile-traceability-recycled-review",
      "zero-waste-review",
    ],
  },
  {
    key: "esgAndReportingAssurance",
    slugs: [
      "gri-esrs-data-assurance",
      "sustainability-kpi-evidence-review",
      "limited-assurance-readiness",
      "non-financial-data-control-review",
    ],
  },
];

export const VERIFICATION_SERVICES_LISTING_GROUPS: readonly VerificationServicesListingGroup[] =
  FULL_VERIFICATION_SERVICES_LISTING_GROUPS;

export function filterFullVerificationGroupsByAllowedSlugs(
  allowedSlugs: ReadonlySet<string>,
): VerificationServicesListingGroup[] {
  const out: VerificationServicesListingGroup[] = [];
  for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
    const slugs = g.slugs.filter((s) => allowedSlugs.has(s));
    if (slugs.length > 0) {
      out.push({ key: g.key, slugs });
    }
  }
  return out;
}

export function getFullVerificationRegistrySlugSet(): Set<string> {
  const set = new Set<string>();
  for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const s of g.slugs) {
      set.add(s);
    }
  }
  return set;
}

export const SERVICE_LISTING_ICON_KEY = {
  "iso-14064-1": "factory",
  "iso-14064-2": "leaf",
  "iso-14046": "droplets",
  "iso-14067": "package",
  "cbam-verification-support": "globe2",
  "eu-ets-verification-review": "footprints",
  "f-gases-verification-review": "fileSpreadsheet",
  "maritime-mrv-verification-review": "anchor",
  "iso-14064-3-review-support": "fileCheck2",
  "net-zero-sbti-technical-review": "target",
  "iso-14068-readiness-review": "badgeCheck",
  "lca-review": "atom",
  "epd-verification": "layers",
  "recycled-content-verification": "recycle",
  "bio-based-content-verification": "sprout",
  "indoor-air-quality-voc-review": "wind",
  "hpd-review": "fileText",
  "material-health-composition-review": "flaskConical",
  "green-building-documentation-review": "building2",
  "asi-readiness-review": "factory",
  "fsc-pefc-eudr-readiness": "treePine",
  "responsible-mining-irma-readiness": "mountain",
  "textile-traceability-recycled-review": "shirt",
  "zero-waste-review": "scanSearch",
  "gri-esrs-data-assurance": "chartColumn",
  "sustainability-kpi-evidence-review": "lineChart",
  "limited-assurance-readiness": "clipboardCheck",
  "non-financial-data-control-review": "scale",
} as const satisfies Record<string, VerificationIconKey>;

export type VerificationListingSlug = keyof typeof SERVICE_LISTING_ICON_KEY;

export const GROUP_LISTING_ICON_KEY: Record<VerificationServicesListingGroupKey, VerificationIconKey> = {
  climateAndCarbonAssurance: "orbit",
  productAndEnvironmentalClaims: "layers",
  builtEnvironmentAndMaterialHealth: "building2",
  responsibleSupplyChainsAndSectorSchemes: "route",
  esgAndReportingAssurance: "chartColumn",
};

export function getListingIconKey(slug: Service["slug"]): VerificationIconKey {
  return (SERVICE_LISTING_ICON_KEY as Record<string, VerificationIconKey>)[slug] ?? "fileCheck2";
}

const SERVICE_SLUG_REGISTRY = new Set<Service["slug"]>(services.map((s) => s.slug));

let didRunListingRegistryCheck = false;

export function verifyVerificationServiceListingRegistry(): void {
  if (didRunListingRegistryCheck) return;
  didRunListingRegistryCheck = true;

  for (const g of VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const slug of g.slugs) {
      if (!SERVICE_SLUG_REGISTRY.has(slug)) {
        console.error(
          `[verification-services] Listing group "${g.key}" references unknown slug "${String(slug)}". ` +
            `Add the service in src/data/services.ts or fix verificationServicesData.ts.`,
        );
      }
    }
  }
}

export function getVerificationRegistrySlugsInOrder(): Service["slug"][] {
  const slugs: Service["slug"][] = [];
  for (const g of VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const s of g.slugs) {
      slugs.push(s as Service["slug"]);
    }
  }
  return slugs;
}

export function verifyListingIconKeysMatchGroups(): void {
  const fromGroups = new Set<string>();
  for (const g of VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const s of g.slugs) {
      if (fromGroups.has(s)) {
        console.error(`[verification-services] Duplicate listing slug in groups: "${s}"`);
      }
      fromGroups.add(s);
    }
  }

  const iconSlugs = new Set(Object.keys(SERVICE_LISTING_ICON_KEY));

  for (const slug of fromGroups) {
    if (!iconSlugs.has(slug)) {
      console.error(
        `[verification-services] Slug "${slug}" is in VERIFICATION_SERVICES_LISTING_GROUPS but missing from SERVICE_LISTING_ICON_KEY.`,
      );
    }
  }
  for (const slug of iconSlugs) {
    if (!fromGroups.has(slug)) {
      console.error(
        `[verification-services] Slug "${slug}" is in SERVICE_LISTING_ICON_KEY but not in any listing group — remove stale entry.`,
      );
    }
  }
}

// --- Listing + detail payloads for routes ---

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

export type VerificationListingCardModel = {
  slug: Service["slug"];
  groupKey: VerificationServicesListingGroupKey;
  orderInGroup: number;
  iconKey: VerificationIconKey;
  title: string;
  description: string;
};

export type VerificationListingSectionModel = {
  groupKey: VerificationServicesListingGroupKey;
  cards: VerificationListingCardModel[];
};

function isRenderableDetail(d: ServiceDetails | undefined): boolean {
  if (!d || typeof d !== "object") return false;
  if ("variant" in d && (d as { variant?: string }).variant === "editorial") {
    const e = d as { title?: unknown; intro?: unknown };
    return (
      typeof e.title === "string" &&
      e.title.trim().length > 0 &&
      typeof e.intro === "string" &&
      e.intro.trim().length > 0
    );
  }
  const m = d as { title?: unknown; intro?: unknown; covers?: unknown; cta?: { body?: unknown } };
  if (typeof m.title !== "string" || !m.title.trim()) return false;
  if (typeof m.intro !== "string" || !m.intro.trim()) return false;
  if (!m.covers) return false;
  const body = m.cta && typeof m.cta.body === "string" ? m.cta.body.trim() : "";
  if (!body) return false;
  return true;
}

/**
 * Build listing sections: one pass, no env modes, no diagnostics.
 * Drops individual cards that fail silently (dev-only log).
 */
export function getVerificationListingSections(locale: Locale): VerificationListingSectionModel[] {
  const sections: VerificationListingSectionModel[] = [];

  for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
    const cards: VerificationListingCardModel[] = [];
    g.slugs.forEach((slug, orderInGroup) => {
      const svc = getService(slug as Service["slug"]);
      if (!svc) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`[verification-services] unknown slug in registry: ${String(slug)}`);
        }
        return;
      }
      const title = svc.title[locale]?.trim() ?? svc.title.en?.trim() ?? "";
      const description = svc.summary[locale] ?? svc.summary.en ?? "";
      if (!title) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`[verification-services] empty title for ${svc.slug} (${locale})`);
        }
        return;
      }
      const iconKey = (SERVICE_LISTING_ICON_KEY as Record<string, VerificationIconKey>)[slug] ?? "fileCheck2";
      cards.push({
        slug: svc.slug,
        groupKey: g.key,
        orderInGroup,
        iconKey,
        title,
        description,
      });
    });
    if (cards.length > 0) {
      sections.push({ groupKey: g.key, cards });
    }
  }
  return sections;
}

/** Group header icon (listing section), stable default. */
export function getVerificationGroupIconKey(groupKey: VerificationServicesListingGroupKey): VerificationIconKey {
  return GROUP_LISTING_ICON_KEY[groupKey] ?? "fileCheck2";
}

export type VerificationDetailPayload =
  | {
      ok: true;
      slug: Service["slug"];
      merged: ServiceDetails;
      visual: ServiceHeroVisual;
    }
  | { ok: false };

/**
 * Single merge path for detail routes (same inputs as before, without extra wrappers).
 */
export function getVerificationDetailPayload(
  slug: string,
  locale: Locale,
  dict: Dictionary,
  dictEn: Dictionary,
): VerificationDetailPayload {
  const row = getService(slug as Service["slug"]);
  if (!row) return { ok: false };

  let merged: ServiceDetails | undefined;
  try {
    merged = mergeServiceDetailWithEnglishFallback(
      row.slug,
      dict.pages.serviceDetails[row.slug],
      dictEn.pages.serviceDetails[row.slug],
      locale,
    );
  } catch {
    return { ok: false };
  }

  if (!merged || !isRenderableDetail(merged)) return { ok: false };

  return {
    ok: true,
    slug: row.slug,
    merged,
    visual: getServiceHeroVisual(row.slug),
  };
}

/** Slugs that produce `/verification-services/[slug]` — same order as the listing registry. */
export function getAllVerificationServiceSlugs(): Service["slug"][] {
  return getVerificationRegistrySlugsInOrder();
}

/**
 * Drops sections when group copy is missing and trims empty cards — single pass, no extra modules.
 */
export function getRenderableVerificationListingSections(
  locale: Locale,
  groups: Dictionary["pages"]["services"]["groups"],
): VerificationListingSectionModel[] {
  const raw = getVerificationListingSections(locale);
  const out: VerificationListingSectionModel[] = [];
  for (const section of raw) {
    const g = groups[section.groupKey];
    if (!g?.title || g.intro == null) continue;
    const cards = section.cards.filter((c) => c.slug && c.title.trim());
    if (cards.length === 0) continue;
    out.push(cards.length === section.cards.length ? section : { ...section, cards });
  }
  return out;
}
