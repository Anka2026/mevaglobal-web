import "server-only";

import type { Service } from "@/data/services";

/** Shared raster fallbacks when a page-specific hero asset is not wired to a dedicated file. */
export const SHARED_MARKETING_PAGE_VISUAL_FALLBACKS: readonly string[] = [
  "/assets/page-visuals/representations-hero.png",
  "/assets/page-visuals/statement-search-hero.png",
];

/**
 * Deterministic hero URL: first candidate wins.
 * No filesystem or extension probing — stable on Cloudflare and other static hosts.
 */
export function resolveHeroWithSharedFallbacks(candidates: readonly string[]): string {
  const first = candidates[0];
  if (first) return first;
  return SHARED_MARKETING_PAGE_VISUAL_FALLBACKS[0];
}

/** Primary visual path for page headers — returns `stated` only (callers pass the canonical `/assets/...` URL). */
export function resolvePageHeaderVisual(
  stated: string,
  _shortNameCandidates: readonly string[],
  alternates: readonly string[] = [],
): string {
  void _shortNameCandidates;
  void alternates;
  return stated;
}

/** Partner logo URL from data — no runtime resolution. */
export function resolvePartnerLogoPath(organizationId: string, statedLogoSrc: string): string {
  void organizationId;
  return statedLogoSrc;
}

/** Service hero URL from registry — no runtime resolution. */
export function resolveServiceHeroFileSrc(registered: string, slug: Service["slug"]): string {
  void slug;
  return registered;
}
