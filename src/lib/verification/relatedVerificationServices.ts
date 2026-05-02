import type { Service } from "@/data/services";
import { services } from "@/data/services";
import {
  FULL_VERIFICATION_SERVICES_LISTING_GROUPS,
  getVerificationRegistrySlugsInOrder,
} from "@/lib/verification/verificationServicesData";

/** Cross-sell depth on detail pages (matches “3 cards desktop”). */
const MAX_RELATED = 3;

function listingGroupSlugsFor(slug: Service["slug"]): Service["slug"][] {
  for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
    if ((g.slugs as readonly string[]).includes(slug)) {
      return [...g.slugs] as Service["slug"][];
    }
  }
  return [];
}

/**
 * Curated cross-sell targets only — every slug must exist in `services.ts`.
 * Slugs without an entry fall back to same listing group, then registry order.
 */
const RELATED_VERIFICATION_SERVICE_SLUGS: Partial<Record<Service["slug"], readonly Service["slug"][]>> = {
  "iso-14064-1": ["iso-14064-3-review-support", "gri-esrs-data-assurance", "cbam-verification-support"],
  "iso-14064-2": ["iso-14064-1", "iso-14064-3-review-support", "iso-14067"],
  "iso-14046": ["iso-14067", "lca-review", "epd-verification"],
  "iso-14067": ["iso-14046", "lca-review", "cbam-verification-support"],
  "cbam-verification-support": ["iso-14064-1", "iso-14067", "data-evidence-readiness-review"],
  "eu-ets-verification-review": ["cbam-verification-support", "iso-14064-1", "maritime-mrv-verification-review"],
  "f-gases-verification-review": ["eu-ets-verification-review", "iso-14064-1", "maritime-mrv-verification-review"],
  "maritime-mrv-verification-review": ["eu-ets-verification-review", "f-gases-verification-review", "iso-14064-2"],
  "iso-14064-3-review-support": ["iso-14064-1", "iso-14064-2", "limited-assurance-readiness"],
  "net-zero-sbti-technical-review": ["iso-14068-readiness-review", "iso-14064-1", "gri-esrs-data-assurance"],
  "iso-14068-readiness-review": ["net-zero-sbti-technical-review", "iso-14067", "iso-14064-1"],
  "lca-review": ["epd-verification", "iso-14067", "product-carbon-footprint-review"],
  "epd-verification": ["lca-review", "product-carbon-footprint-review", "recycled-content-verification"],
  "recycled-content-verification": ["epd-verification", "bio-based-content-verification", "textile-traceability-recycled-review"],
  "bio-based-content-verification": ["recycled-content-verification", "epd-verification", "lca-review"],
  "indoor-air-quality-voc-review": ["material-health-composition-review", "hpd-review", "green-building-documentation-review"],
  "hpd-review": ["material-health-composition-review", "indoor-air-quality-voc-review", "green-building-documentation-review"],
  "material-health-composition-review": ["hpd-review", "indoor-air-quality-voc-review", "green-building-documentation-review"],
  "green-building-documentation-review": ["indoor-air-quality-voc-review", "hpd-review", "material-health-composition-review"],
  "asi-readiness-review": ["fsc-pefc-eudr-readiness", "recycled-content-verification", "textile-traceability-recycled-review"],
  "fsc-pefc-eudr-readiness": ["asi-readiness-review", "textile-traceability-recycled-review", "zero-waste-review"],
  "responsible-mining-irma-readiness": ["asi-readiness-review", "fsc-pefc-eudr-readiness", "gri-esrs-data-assurance"],
  "textile-traceability-recycled-review": ["recycled-content-verification", "fsc-pefc-eudr-readiness", "asi-readiness-review"],
  "zero-waste-review": ["textile-traceability-recycled-review", "recycled-content-verification", "epd-verification"],
  "gri-esrs-data-assurance": ["sustainability-kpi-evidence-review", "limited-assurance-readiness", "iso-14064-1"],
  "sustainability-kpi-evidence-review": ["gri-esrs-data-assurance", "limited-assurance-readiness", "non-financial-data-control-review"],
  "limited-assurance-readiness": ["gri-esrs-data-assurance", "iso-14064-3-review-support", "non-financial-data-control-review"],
  "non-financial-data-control-review": ["gri-esrs-data-assurance", "sustainability-kpi-evidence-review", "limited-assurance-readiness"],
};

export function getRelatedVerificationServiceSlugs(current: Service["slug"]): Service["slug"][] {
  const catalog = new Set<Service["slug"]>(services.map((s) => s.slug));
  const out: Service["slug"][] = [];

  const push = (s: Service["slug"]) => {
    if (out.length >= MAX_RELATED) return;
    if (s === current || !catalog.has(s) || out.includes(s)) return;
    out.push(s);
  };

  const preferred = RELATED_VERIFICATION_SERVICE_SLUGS[current];
  if (preferred) {
    for (const s of preferred) push(s);
  }

  for (const s of listingGroupSlugsFor(current)) push(s);

  for (const s of getVerificationRegistrySlugsInOrder()) push(s);

  return out;
}
