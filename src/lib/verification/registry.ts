import type { Service } from "@/data/services";

/**
 * Single registry for “premium” hero + five-card detail layout (ISO 14064 / 14067 family).
 * Must stay aligned with dictionary `serviceDetails` shape (standard variant with five sections).
 */
export const PREMIUM_FIVE_CARD_SLUGS = [
  "iso-14067",
  "iso-14064-1",
  "iso-14064-2",
  "iso-14046",
  "lca-review",
  "epd-verification",
  "recycled-content-verification",
  "bio-based-content-verification",
  "hpd-review",
  "asi-readiness-review",
  "fsc-pefc-eudr-readiness",
  "gri-esrs-data-assurance",
  "sustainability-kpi-evidence-review",
  "limited-assurance-readiness",
  "non-financial-data-control-review",
  "material-health-composition-review",
  "green-building-documentation-review",
  "indoor-air-quality-voc-review",
  "iso-14064-3-review-support",
  "iso-14068-readiness-review",
  "cbam-verification-support",
  "eu-ets-verification-review",
  "f-gases-verification-review",
  "maritime-mrv-verification-review",
  "net-zero-sbti-technical-review",
] as const satisfies readonly Service["slug"][];

export type PremiumFiveCardSlug = (typeof PREMIUM_FIVE_CARD_SLUGS)[number];

export function isPremiumFiveCardSlug(slug: string): slug is PremiumFiveCardSlug {
  return (PREMIUM_FIVE_CARD_SLUGS as readonly string[]).includes(slug);
}
