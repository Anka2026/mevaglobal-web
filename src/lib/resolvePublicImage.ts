import "server-only";

import { publicFileExists } from "@/lib/publicFileExists";
import type { Service } from "@/data/services";

/** First path under `public/` that exists, or `null` if none. */
export function firstExistingPublicPath(candidates: readonly string[]): string | null {
  for (const c of candidates) {
    if (c?.startsWith("/") && publicFileExists(c)) return c;
  }
  return null;
}

/** Shared raster fallbacks when a page-specific marketing asset is not yet in `/public`. */
export const SHARED_MARKETING_PAGE_VISUAL_FALLBACKS: readonly string[] = [
  "/page-visuals/representations-hero.png",
  "/page-visuals/statement-search-hero.png",
];

/** Tries each candidate, then {@link SHARED_MARKETING_PAGE_VISUAL_FALLBACKS}. */
export function resolveHeroWithSharedFallbacks(candidates: readonly string[]): string | null {
  return firstExistingPublicPath([...candidates, ...SHARED_MARKETING_PAGE_VISUAL_FALLBACKS]);
}

const RASTER_EXTS = [".png", ".webp", ".jpg", ".jpeg"] as const;

/** Same path with other common raster extensions (if basename already has an extension, swap it). */
function sameBaseAlternateExtensions(absolutePath: string): string[] {
  const out: string[] = [absolutePath];
  const m = absolutePath.match(/^(.*)(\.(png|webp|jpe?g))$/i);
  if (!m) {
    for (const ext of RASTER_EXTS) {
      out.push(`${absolutePath}${ext}`);
    }
    return out;
  }
  const base = m[1];
  for (const ext of RASTER_EXTS) {
    out.push(base + ext);
  }
  return [...new Set(out)];
}

/**
 * Tries the stated marketing path, then the short names from PLACE_IMAGES_HERE.txt, then `alternates`.
 * Falls back to `stated` when nothing is on disk (keeps a stable URL for assets added later or CDN-only deploys).
 */
export function resolvePageHeaderVisual(
  stated: string,
  shortNameCandidates: readonly string[],
  alternates: readonly string[] = [],
): string {
  const cands: string[] = [
    ...sameBaseAlternateExtensions(stated),
    ...shortNameCandidates.flatMap((p) => sameBaseAlternateExtensions(p)),
    ...alternates.flatMap((p) => sameBaseAlternateExtensions(p)),
  ];
  return firstExistingPublicPath(cands) ?? stated;
}

const PARTNER_TYPO_CETIZION = "/partner-logos/cetizion.png";

/** Tries the configured path, extension variants, id-based `partner-logos` filenames, and a known filename typo. */
export function resolvePartnerLogoPath(organizationId: string, statedLogoSrc: string): string {
  const cands: string[] = [
    ...sameBaseAlternateExtensions(statedLogoSrc),
    ...sameBaseAlternateExtensions(`/partner-logos/${organizationId}.png`),
    ...sameBaseAlternateExtensions(`/page-visuals/${organizationId}.png`),
  ];
  if (organizationId === "cetizion-verifica" && !cands.includes(PARTNER_TYPO_CETIZION)) {
    cands.push(PARTNER_TYPO_CETIZION, ...sameBaseAlternateExtensions(PARTNER_TYPO_CETIZION));
  }
  return firstExistingPublicPath(cands) ?? statedLogoSrc;
}

/** Tries the registered service hero, extension variants, and a slug-based `page-visuals/services` path. */
export function resolveServiceHeroFileSrc(registered: string, slug: Service["slug"]): string {
  const cands: string[] = [
    ...sameBaseAlternateExtensions(registered),
    ...sameBaseAlternateExtensions(`/page-visuals/services/${slug}.png`),
  ];
  return firstExistingPublicPath(cands) ?? registered;
}
