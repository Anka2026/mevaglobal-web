import type { Service } from "@/data/services";
import type { VerificationIconKey } from "@/components/verification/VerificationServiceIcon";
import { logVerificationIssue } from "@/lib/verification/log";

/**
 * Serializable hero visual config (no React / lucide in this module — avoids vendor-chunk resolution failures).
 */
export type ServiceHeroVisual = {
  iconKey: VerificationIconKey;
  src?: string;
  imageClassName?: string;
  editorialFit?: "cover" | "contain";
};

const HERO_VISUAL_BY_SLUG = {
  "iso-14064-1": {
    src: "/assets/page-visuals/services/iso-14064-1.png",
    iconKey: "factory",
  },
  "iso-14064-2": {
    src: "/assets/page-visuals/services/iso-14064-2.png",
    iconKey: "leaf",
    imageClassName: "object-[50%_48%]",
  },
  "iso-14068-readiness-review": {
    src: "/assets/page-visuals/services/iso-14068.png",
    iconKey: "badgeCheck",
    imageClassName: "object-[50%_48%]",
  },
  "ghg-protocol-review-support": {
    src: "/assets/page-visuals/services/ghg-protocol.png",
    iconKey: "fileCheck",
    imageClassName: "object-[52%_48%] sm:object-[50%_46%] lg:object-[48%_44%]",
  },
  "iso-14067": {
    src: "/assets/page-visuals/services/iso-14067.png",
    iconKey: "package",
    imageClassName: "object-[62%_46%] sm:object-[60%_45%]",
  },
  "iso-14046": {
    src: "/assets/page-visuals/services/iso-14046.png",
    iconKey: "droplets",
    imageClassName: "object-[48%_50%] sm:object-[46%_48%] lg:object-[44%_46%]",
  },
  "lca-review": {
    src: "/assets/page-visuals/services/lca-review.png",
    iconKey: "workflow",
    imageClassName: "object-[50%_48%] sm:object-[49%_46%] lg:object-[48%_45%]",
  },
  "epd-verification": {
    src: "/assets/page-visuals/services/epd-verification.png",
    iconKey: "fileSpreadsheet",
    imageClassName: "object-[54%_46%] sm:object-[52%_45%] lg:object-[50%_44%]",
  },
  "cbam-verification-support": {
    src: "/assets/page-visuals/services/cbam-verification-support.png",
    iconKey: "badgeCheck",
    imageClassName: "object-[68%_48%] sm:object-[66%_46%]",
  },
  "eu-ets-verification-review": {
    src: "/assets/page-visuals/services/eu-ets-verification-review.png",
    iconKey: "footprints",
    /** EU ETS labels centre–upper; harbour skyline lower; avoid tight cover crop. */
    imageClassName: "object-[58%_50%] sm:object-[57%_49%] lg:object-[56%_48%]",
  },
  "f-gases-verification-review": {
    src: "/assets/page-visuals/services/f-gases-verification-review.png",
    iconKey: "fileSpreadsheet",
    /** F-Gases label + cylinders + runway scene; gentle centre bias to preserve label and equipment. */
    imageClassName: "object-[52%_48%] sm:object-[51%_47%] lg:object-[50%_46%]",
  },
  "maritime-mrv-verification-review": {
    src: "/assets/page-visuals/services/maritime-mrv-verification-review.png",
    iconKey: "anchor",
    /** Ship left, Maritime MRV document right; slight right-centre bias for headline + harbour context. */
    imageClassName: "object-[54%_48%] sm:object-[53%_47%] lg:object-[52%_46%]",
  },
  "eu-ets-mrv-assurance-support": {
    iconKey: "factory",
  },
  "shipping-emissions-mrv-review": {
    iconKey: "anchor",
  },
  "aviation-emissions-readiness-review": {
    iconKey: "plane",
  },
  "verification-readiness-gap-analysis": {
    iconKey: "clipboardList",
  },
  "data-evidence-readiness-review": {
    iconKey: "database",
  },
  "dpp-readiness-preverification": {
    iconKey: "cpu",
  },
  "sustainability-reporting-evidence-review": {
    iconKey: "bookOpen",
  },
  "f-gases-reporting-review": {
    iconKey: "wind",
  },
  "mock-verification-review": {
    iconKey: "fileSearch",
  },
  "asi-readiness-review": {
    src: "/assets/page-visuals/services/asi-readiness-review.png",
    iconKey: "building2",
    /** ASI binder + industrial scene; bias right-centre to keep “ASI Verification” label and desk legible. */
    imageClassName: "object-[58%_50%] sm:object-[56%_49%] lg:object-[54%_48%]",
  },
  "custom-verification": {
    src: "/assets/page-visuals/services/custom-verification.png",
    iconKey: "scale",
    imageClassName: "object-[55%_45%]",
  },
  "buyer-value-chain-review": {
    iconKey: "users",
  },
  "green-claim-review": {
    iconKey: "badgeCheck",
  },
  "iso-14064-3-review-support": {
    src: "/assets/page-visuals/services/iso-14064-3-review-support.png",
    iconKey: "fileCheck",
    imageClassName: "object-[50%_48%] sm:object-[49%_46%] lg:object-[48%_45%]",
  },
  "net-zero-sbti-technical-review": {
    src: "/assets/page-visuals/services/net-zero-sbti-technical-review.png",
    iconKey: "target",
    imageClassName: "object-[52%_46%] sm:object-[50%_44%] lg:object-[48%_42%]",
  },
  "recycled-content-verification": {
    src: "/assets/page-visuals/services/recycled-content-verification.png",
    iconKey: "recycle",
    imageClassName: "object-center sm:object-[50%_48%]",
  },
  "bio-based-content-verification": {
    src: "/assets/page-visuals/services/bio-based-content-verification.png",
    iconKey: "sprout",
    /** Foreground document + crops; bias slightly right-centre to preserve title block. */
    imageClassName: "object-[56%_48%] sm:object-[54%_46%] lg:object-[52%_45%]",
  },
  "product-carbon-footprint-review": {
    iconKey: "package",
  },
  "indoor-air-quality-voc-review": {
    src: "/assets/page-visuals/services/indoor-air-quality-voc-review.png",
    iconKey: "wind",
    /** Title block centre-right; keep lab + document readable without heavy crop. */
    imageClassName: "object-[54%_48%] sm:object-[52%_46%] lg:object-[50%_45%]",
  },
  "hpd-review": {
    src: "/assets/page-visuals/services/hpd-review.png",
    iconKey: "fileText",
    /** Central HPD document + lab scene; gentle centre bias to preserve title block and transparency row. */
    imageClassName: "object-[52%_48%] sm:object-[51%_46%] lg:object-[50%_45%]",
  },
  "material-health-composition-review": {
    src: "/assets/page-visuals/services/material-health-composition-review.png",
    iconKey: "flaskConical",
    /** Document + lab scene; gentle centre-right bias—avoid heavy crop of title block. */
    imageClassName: "object-[54%_48%] sm:object-[52%_46%] lg:object-[50%_45%]",
  },
  "green-building-documentation-review": {
    src: "/assets/page-visuals/services/green-building-documentation-review.png",
    iconKey: "building2",
    /** Desk + certification marks; bias slightly right-centre to keep title block and seals readable. */
    imageClassName: "object-[55%_48%] sm:object-[53%_46%] lg:object-[51%_45%]",
  },
  "fsc-pefc-eudr-readiness": {
    src: "/assets/page-visuals/services/fsc-pefc-eudr-readiness.png",
    iconKey: "leaf",
    /** Central folder label + forest scene; gentle centre bias to keep headline text legible in wide heroes. */
    imageClassName: "object-[50%_48%] sm:object-[50%_47%] lg:object-[49%_46%]",
  },
  "responsible-mining-irma-readiness": {
    iconKey: "factory",
  },
  "textile-traceability-recycled-review": {
    iconKey: "workflow",
  },
  "zero-waste-review": {
    iconKey: "clipboardList",
  },
  "gri-esrs-data-assurance": {
    src: "/assets/page-visuals/services/gri-esrs-data-assurance.png",
    iconKey: "bookOpen",
    /** Central document stack + charts; slight upper-centre bias keeps title block readable. */
    imageClassName: "object-[52%_46%] sm:object-[51%_45%] lg:object-[50%_44%]",
  },
  "sustainability-kpi-evidence-review": {
    src: "/assets/page-visuals/services/sustainability-kpi-evidence-review.png",
    iconKey: "fileSpreadsheet",
    /** Desk + checklist + central document title; gentle centre bias for hero crop. */
    imageClassName: "object-[51%_47%] sm:object-[50%_46%] lg:object-[49%_45%]",
  },
  "limited-assurance-readiness": {
    src: "/assets/page-visuals/services/limited-assurance-readiness.png",
    iconKey: "clipboardList",
    /** Central readiness title + desk tools; slight centre bias for checklist and headline. */
    imageClassName: "object-[50%_47%] sm:object-[49%_46%] lg:object-[48%_45%]",
  },
  "non-financial-data-control-review": {
    src: "/assets/page-visuals/services/non-financial-data-control-review.png",
    iconKey: "database",
    /** Central scales + checklist; gentle centre bias for title and verification checklist. */
    imageClassName: "object-[51%_46%] sm:object-[50%_45%] lg:object-[49%_44%]",
  },
} satisfies Record<Service["slug"], ServiceHeroVisual>;

export function getServiceHeroVisual(slug: Service["slug"]): ServiceHeroVisual {
  const v = HERO_VISUAL_BY_SLUG[slug];
  if (v) return v;
  logVerificationIssue("missing-visual", slug, "No hero visual registry entry; using placeholder icon.");
  return { iconKey: "fileCheck2" };
}
