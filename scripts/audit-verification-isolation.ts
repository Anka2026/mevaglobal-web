/**
 * One-shot audit: no dev server. Run: npx --yes tsx scripts/audit-verification-isolation.ts
 * Uses the same validators as bootstrap (EN shape) + TR/NL key presence + merge smoke + public hero image.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";

import { services } from "../src/data/services";
import { en } from "../src/i18n/messages/en";
import { tr } from "../src/i18n/messages/tr";
import { nl } from "../src/i18n/messages/nl";
import { mergeServiceDetailWithEnglishFallback } from "../src/lib/verification/mergeServiceDetailLocale";
import {
  FULL_VERIFICATION_SERVICES_LISTING_GROUPS,
  SERVICE_LISTING_ICON_KEY,
} from "../src/lib/verification/verificationServiceRegistry";
import { validateEnglishServiceDetailBlock } from "../src/lib/verification/verificationEnglishDetailShape";
import { getServiceHeroVisual } from "../src/lib/verification/serviceHeroVisuals";
import type { Service } from "../src/data/services";
import type { Locale } from "../src/i18n/locales";
import type { Dictionary } from "../src/i18n/types";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

function mergedRenderable(merged: ServiceDetails | undefined): boolean {
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

function auditLocaleMerge(slug: Service["slug"], locale: Locale): string | null {
  const dictEn = en as Dictionary;
  const dict = (locale === "tr" ? tr : nl) as Dictionary;
  let merged: ServiceDetails | undefined;
  try {
    merged = mergeServiceDetailWithEnglishFallback(
      slug,
      dict.pages.serviceDetails[slug],
      dictEn.pages.serviceDetails[slug],
      locale,
    );
  } catch (e) {
    return `merge threw: ${e instanceof Error ? e.message : String(e)}`;
  }
  if (!mergedRenderable(merged)) {
    return "merged detail failed renderability (title/intro/cta/covers)";
  }
  return null;
}

const listingSlugs: string[] = [];
for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
  for (const s of g.slugs) listingSlugs.push(s);
}

const allServiceSlugs = services.map((s) => s.slug);
/** Full catalog: every detail route from `services.ts` (SSG generates all). */
const auditSlugs = [...new Set([...allServiceSlugs])].sort();

console.log("--- verification-services isolation audit ---\n");
console.log(`Listing registry: ${listingSlugs.length} slugs | services.ts: ${allServiceSlugs.length} rows\n`);
let failures = 0;

for (const slug of auditSlugs) {
  const issues: string[] = [];

  const row = services.find((s) => s.slug === slug);
  if (!row) issues.push(`services.ts: no row for registry slug`);

  const enBlock = (en.pages.serviceDetails as Record<string, unknown>)[slug];
  const shapeErrors = validateEnglishServiceDetailBlock(slug, enBlock);
  if (shapeErrors.length) issues.push(`EN shape: ${shapeErrors.join(" | ")}`);

  if (!(slug in (tr.pages.serviceDetails as object))) issues.push("TR: serviceDetails key missing");
  if (!(slug in (nl.pages.serviceDetails as object))) issues.push("NL: serviceDetails key missing");

  const trErr = auditLocaleMerge(slug as Service["slug"], "tr");
  if (trErr) issues.push(`TR merge: ${trErr}`);
  const nlErr = auditLocaleMerge(slug as Service["slug"], "nl");
  if (nlErr) issues.push(`NL merge: ${nlErr}`);

  if (listingSlugs.includes(slug) && !(slug in SERVICE_LISTING_ICON_KEY)) {
    issues.push("SERVICE_LISTING_ICON_KEY missing (listing slug)");
  }

  const visual = getServiceHeroVisual(slug as Service["slug"]);
  if (visual.src) {
    const rel = visual.src.replace(/^\/+/, "");
    const disk = join(PUBLIC, rel);
    if (!existsSync(disk)) issues.push(`hero image missing on disk: public/${rel}`);
  }

  if (issues.length) {
    failures++;
    console.log(`FAIL  ${slug}`);
    for (const i of issues) console.log(`       - ${i}`);
    console.log("");
  }
}

if (failures === 0) {
  console.log(
    `OK    all ${auditSlugs.length} service slugs passed EN shape, TR/NL keys, merge, listing icon (where listed), hero file.`,
  );
} else {
  console.log(`\nTotal failing slugs: ${failures} / ${auditSlugs.length}`);
  process.exitCode = 1;
}
