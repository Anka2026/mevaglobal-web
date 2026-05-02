import "server-only";

import type { Service } from "@/data/services";
import { getService } from "@/data/services";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { mergeServiceDetailWithEnglishFallback } from "@/lib/verification/mergeServiceDetailLocale";
import { resolveServiceHeroVisual } from "@/lib/verification/resolveServiceHeroVisual";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

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
 * Lives in a `server-only` module so `node:fs` (asset resolution) is never pulled into the client graph.
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
    visual: resolveServiceHeroVisual(row.slug),
  };
}
