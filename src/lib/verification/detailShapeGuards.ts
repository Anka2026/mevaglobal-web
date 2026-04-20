import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

export type EditorialDetail = Extract<ServiceDetails, { variant: "editorial" }>;
export type StandardDetail = Extract<ServiceDetails, { covers: unknown }>;

function hasString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export function isEditorialDetail(content: ServiceDetails | undefined): content is EditorialDetail {
  if (!content || typeof content !== "object") return false;
  return "variant" in content && (content as EditorialDetail).variant === "editorial";
}

function isValidBulletSection(section: { title?: unknown; bullets?: unknown } | undefined): boolean {
  if (!section) return false;
  if (!hasString(section.title)) return false;
  return Array.isArray(section.bullets) && section.bullets.length > 0;
}

/** Four premium bullet cards (2×2) + CTA; no “for who” block (e.g. EPD verification). */
export function isPremiumFourCardDetail(content: ServiceDetails | undefined): content is StandardDetail {
  if (!content || typeof content !== "object") return false;
  const c = content as Record<string, unknown>;
  if ("variant" in c && c.variant === "editorial") return false;
  if (c.forWho) return false;
  if (!hasString(c.title) || !hasString(c.intro)) return false;
  const covers = c.covers as { title?: unknown; bullets?: unknown } | undefined;
  const typicalScope = c.typicalScope as { title?: unknown; bullets?: unknown } | undefined;
  const whyMatters = c.whyMatters as { title?: unknown; bullets?: unknown } | undefined;
  const approach = c.approach as { title?: unknown; bullets?: unknown } | undefined;
  const cta = c.cta as { body?: unknown } | undefined;
  if (!covers || !typicalScope || !whyMatters || !approach || !cta) return false;
  if (!hasString(cta.body)) return false;
  for (const section of [covers, typicalScope, whyMatters, approach]) {
    if (!isValidBulletSection(section)) return false;
  }
  return true;
}

/** Premium five-card + optional heroEyebrow (ISO 14067 family). */
export function isPremiumFiveCardDetail(content: ServiceDetails | undefined): content is StandardDetail {
  if (!content || typeof content !== "object") return false;
  const c = content as Record<string, unknown>;
  if ("variant" in c && c.variant === "editorial") return false;
  if (!hasString(c.title) || !hasString(c.intro)) return false;
  const covers = c.covers as { title?: unknown; bullets?: unknown } | undefined;
  const forWho = c.forWho as { title?: unknown; bullets?: unknown } | undefined;
  const typicalScope = c.typicalScope as { title?: unknown; bullets?: unknown } | undefined;
  const whyMatters = c.whyMatters as { title?: unknown; bullets?: unknown } | undefined;
  const approach = c.approach as { title?: unknown; bullets?: unknown } | undefined;
  const cta = c.cta as { body?: unknown } | undefined;
  if (!covers || !forWho || !typicalScope || !whyMatters || !approach || !cta) return false;
  if (!hasString(cta.body)) return false;
  for (const section of [covers, forWho, typicalScope, whyMatters, approach]) {
    if (!isValidBulletSection(section)) return false;
  }
  return true;
}

export function isStandardPageHeaderDetail(content: ServiceDetails | undefined): content is StandardDetail {
  return isPremiumFourCardDetail(content) || isPremiumFiveCardDetail(content);
}
