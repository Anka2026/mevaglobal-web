import { cache } from "react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";
import { getService } from "@/data/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { mergeServiceDetailWithEnglishFallback } from "@/lib/verification/mergeServiceDetailLocale";
import { getServiceHeroVisual, type ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";
import { logVerificationIssue } from "@/lib/verification/log";

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

/** Prevents partially merged or malformed dictionary shapes from reaching the page (avoids runtime throws → 500). */
function mergedServiceDetailHasRenderableContent(merged: ServiceDetails | undefined): merged is ServiceDetails {
  if (!merged || typeof merged !== "object") return false;
  if ("variant" in merged && (merged as { variant?: string }).variant === "editorial") {
    const e = merged as { title?: unknown; intro?: unknown };
    return (
      typeof e.title === "string" &&
      e.title.trim().length > 0 &&
      typeof e.intro === "string" &&
      e.intro.trim().length > 0
    );
  }
  const m = merged as {
    title?: unknown;
    intro?: unknown;
    covers?: unknown;
    cta?: { body?: unknown };
  };
  if (typeof m.title !== "string" || !m.title.trim()) return false;
  if (typeof m.intro !== "string" || !m.intro.trim()) return false;
  if (!m.covers) return false;
  const ctaBody = m.cta && typeof m.cta.body === "string" ? m.cta.body.trim() : "";
  if (!ctaBody) return false;
  return true;
}

export type VerificationServiceDetailContext = {
  dict: Dictionary;
  merged: ServiceDetails | undefined;
};

/**
 * Loads locale dictionary + merges `serviceDetails[slug]` with English fallback (TR/NL-safe).
 * Cached per request to avoid duplicate work between `generateMetadata` and the page.
 */
export const loadVerificationServiceDetailContext = cache(
  async (slug: Service["slug"], locale: Locale): Promise<VerificationServiceDetailContext> => {
    const dict = await getDictionary(locale);
    const dictEn = await getDictionary("en");
    let merged: ServiceDetails | undefined;
    try {
      merged = mergeServiceDetailWithEnglishFallback(
        slug,
        dict.pages.serviceDetails[slug],
        dictEn.pages.serviceDetails[slug],
        locale,
      );
    } catch (e) {
      console.error("[verification-services] mergeServiceDetailWithEnglishFallback threw", slug, e);
      merged = undefined;
    }
    if (merged && !mergedServiceDetailHasRenderableContent(merged)) {
      logVerificationIssue(
        "missing-dictionary",
        slug,
        "Merged serviceDetails failed renderability checks (title/intro/cta/covers); treating as missing.",
      );
      merged = undefined;
    }
    return { dict, merged };
  },
);

export type VerificationDetailSafeResult =
  | {
      ok: true;
      slug: Service["slug"];
      dict: Dictionary;
      merged: ServiceDetails;
      visual: ServiceHeroVisual;
    }
  | { ok: false; reason: "unknown-slug" | "missing-detail" | "load-error"; dict?: Dictionary };

/**
 * Defensive loader for detail pages: unknown slug, missing merge, or thrown errors never propagate as 500 —
 * callers use `notFound()` or fallbacks.
 */
export async function loadVerificationServiceDetailSafe(
  slug: string,
  locale: Locale,
): Promise<VerificationDetailSafeResult> {
  const row = getService(slug as Service["slug"]);
  if (!row) {
    logVerificationIssue("shape-mismatch", slug, "Detail route requested for unknown slug (not in services registry).");
    return { ok: false, reason: "unknown-slug" };
  }

  const canonical = row.slug;

  try {
    const { dict, merged } = await loadVerificationServiceDetailContext(canonical, locale);
    if (!merged) {
      logVerificationIssue("missing-dictionary", canonical, "Merged serviceDetails missing after EN fallback.");
      return { ok: false, reason: "missing-detail", dict };
    }
    return {
      ok: true,
      slug: canonical,
      dict,
      merged,
      visual: getServiceHeroVisual(canonical),
    };
  } catch (e) {
    console.error("[verification-services] loadVerificationServiceDetailSafe failed", canonical, e);
    logVerificationIssue("shape-mismatch", canonical, "Unexpected error loading verification service detail.");
    return { ok: false, reason: "load-error" };
  }
}
