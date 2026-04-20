import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/locales";
import { logVerificationIssue } from "@/lib/verification/log";

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

function mergeBulletBlock(
  primary: { title: string; bullets: string[] } | undefined,
  fallback: { title: string; bullets: string[] } | undefined,
  slug: string,
  locale: Locale,
  block: string,
): { title: string; bullets: string[] } {
  const fb = fallback ?? { title: "", bullets: [] };
  if (!primary) {
    if (fallback) {
      logVerificationIssue("locale-fallback", slug, `Missing ${block} in locale ${locale}; using English.`);
    }
    return fb;
  }
  const title = primary.title?.trim() || fb.title;
  const bullets =
    Array.isArray(primary.bullets) && primary.bullets.some((b) => typeof b === "string" && b.trim().length > 0)
      ? primary.bullets
      : fb.bullets;
  if (title === fb.title && bullets === fb.bullets && locale !== "en") {
    /* only log when we actually took fallback for a non-English locale */
  }
  if (
    (!primary.title?.trim() || !primary.bullets?.length) &&
    locale !== "en" &&
    fallback
  ) {
    logVerificationIssue("locale-fallback", slug, `Partial ${block} in ${locale}; merged with English.`);
  }
  return { title, bullets };
}

/**
 * Deep-merge primary locale copy with English so missing/partial TR/NL fields never yield undefined access at render time.
 */
export function mergeServiceDetailWithEnglishFallback(
  slug: Service["slug"],
  primary: ServiceDetails | undefined,
  english: ServiceDetails | undefined,
  locale: Locale,
): ServiceDetails | undefined {
  if (!primary && !english) return undefined;
  if (!primary) {
    logVerificationIssue("missing-dictionary", slug, `No serviceDetails for locale ${locale}; using English only.`);
    return english;
  }
  if (!english || locale === "en") return primary;

  // Editorial
  if ("variant" in primary && primary.variant === "editorial") {
    const p = primary;
    const e = english && "variant" in english && english.variant === "editorial" ? english : null;
    if (!e) return p;
    return {
      ...e,
      ...p,
      eyebrow: p.eyebrow?.trim() || e.eyebrow,
      title: p.title?.trim() || e.title,
      intro: p.intro?.trim() || e.intro,
      sections:
        Array.isArray(p.sections) && p.sections.length > 0
          ? p.sections.map((sec, i) => ({
              title: sec.title?.trim() || e.sections[i]?.title || "",
              body: sec.body?.trim() || e.sections[i]?.body || "",
            }))
          : e.sections,
      bottomCta: p.bottomCta?.trim() || e.bottomCta,
      primaryButton: p.primaryButton?.trim() || e.primaryButton,
      secondaryButton: p.secondaryButton?.trim() || e.secondaryButton,
      detailLink: p.detailLink?.trim() || e.detailLink,
    };
  }

  // Standard / premium (same object shape)
  const p = primary as Extract<ServiceDetails, { covers: unknown }>;
  if (!english || ("variant" in english && english.variant === "editorial")) {
    return p;
  }
  const e = english as Extract<ServiceDetails, { covers: unknown }>;

  const merged: Extract<ServiceDetails, { covers: unknown }> = {
    ...e,
    ...p,
    heroEyebrow: p.heroEyebrow?.trim() || e.heroEyebrow,
    title: p.title?.trim() || e.title,
    intro: p.intro?.trim() || e.intro,
    covers: mergeBulletBlock(p.covers, e.covers, slug, locale, "covers"),
    typicalScope: mergeBulletBlock(p.typicalScope, e.typicalScope, slug, locale, "typicalScope"),
    whyMatters: mergeBulletBlock(p.whyMatters, e.whyMatters, slug, locale, "whyMatters"),
    approach: mergeBulletBlock(p.approach, e.approach, slug, locale, "approach"),
    cta: {
      ...e.cta,
      ...p.cta,
      title: (p.cta?.title ?? "").trim() || (e.cta?.title ?? ""),
      body: p.cta?.body?.trim() || e.cta?.body || "",
      primaryButton: p.cta?.primaryButton?.trim() || e.cta?.primaryButton,
      secondaryButton: p.cta?.secondaryButton?.trim() || e.cta?.secondaryButton,
      detailLink: p.cta?.detailLink?.trim() || e.cta?.detailLink,
    },
  };

  if (p.forWho != null || e.forWho != null) {
    merged.forWho = mergeBulletBlock(p.forWho, e.forWho, slug, locale, "forWho");
  } else {
    delete merged.forWho;
  }

  return merged;
}
