/**
 * Deterministic registry bisect (no dev server, no .env): simulates listing + TR detail merge
 * for progressively larger allowlists — same code paths as production.
 *
 * Run: npx --yes tsx scripts/bisect-verification-registry.ts
 */
import { getService, type Service } from "../src/data/services";
import { en } from "../src/i18n/messages/en";
import { tr } from "../src/i18n/messages/tr";
import type { Dictionary } from "../src/i18n/types";
import { mergeServiceDetailWithEnglishFallback } from "../src/lib/verification/mergeServiceDetailLocale";
import { prepareRenderableListingSections } from "../src/lib/verification/prepareVerificationListingRender";
import { buildVerificationListingSectionsForGroups } from "../src/lib/verification/verificationServiceCatalog";
import {
  filterFullVerificationGroupsByAllowedSlugs,
  getFullVerificationRegistrySlugSet,
  SERVICE_LISTING_ICON_KEY,
  getListingIconKey,
} from "../src/lib/verification/verificationServiceRegistry";
import { isKnownVerificationIconKey } from "../src/components/verification/VerificationServiceIcon";

type ServiceDetails = Dictionary["pages"]["serviceDetails"][Service["slug"]];

const MINIMAL = new Set<string>(["iso-14064-1", "iso-14067"]);

/** User priority order: add cumulatively after minimal baseline. */
const PRIORITY: Service["slug"][] = [
  "iso-14064-3-review-support",
  "iso-14068-readiness-review",
  "bio-based-content-verification",
  "indoor-air-quality-voc-review",
  "material-health-composition-review",
  "green-building-documentation-review",
  "epd-verification",
  "lca-review",
];

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

function trMergeOk(slug: Service["slug"]): string | null {
  const dictEn = en as Dictionary;
  const dict = tr as Dictionary;
  let merged: ServiceDetails | undefined;
  try {
    merged = mergeServiceDetailWithEnglishFallback(
      slug,
      dict.pages.serviceDetails[slug],
      dictEn.pages.serviceDetails[slug],
      "tr",
    );
  } catch (e) {
    return `merge threw: ${e instanceof Error ? e.message : String(e)}`;
  }
  if (!mergedRenderable(merged)) return "merged detail not renderable (title/intro/cta/covers)";
  return null;
}

function checklistListingRow(slug: Service["slug"]): string[] {
  const issues: string[] = [];
  const row = getService(slug);
  if (!row) {
    issues.push("no services.ts row");
    return issues;
  }
  if (row.slug !== slug) issues.push("row.slug mismatch");
  for (const loc of ["en", "tr", "nl"] as const) {
    const t = row.title[loc]?.trim();
    if (!t) issues.push(`title.${loc} empty`);
  }
  for (const loc of ["en", "tr", "nl"] as const) {
    const s = row.summary[loc]?.trim();
    if (!s) issues.push(`summary (listing copy).${loc} empty`);
  }
  return issues;
}

function runStep(label: string, allowed: Set<string>): { ok: boolean; detail?: string } {
  const fullListingSet = getFullVerificationRegistrySlugSet();
  const groups = filterFullVerificationGroupsByAllowedSlugs(allowed);
  const raw = buildVerificationListingSectionsForGroups("tr", groups);
  const dict = tr as Dictionary;
  const prep = prepareRenderableListingSections(raw, dict.pages.services.groups, "tr");

  const expected = [...allowed].filter((s) => fullListingSet.has(s)) as Service["slug"][];
  const prepSlugs = new Set(prep.flatMap((sec) => sec.cards.map((c) => c.slug)));

  for (const slug of expected) {
    if (!prepSlugs.has(slug)) {
      return {
        ok: false,
        detail: `[${label}] listing: slug "${slug}" missing after build+prepare (skipped or empty title).`,
      };
    }
    if (!(slug in SERVICE_LISTING_ICON_KEY)) {
      return { ok: false, detail: `[${label}] SERVICE_LISTING_ICON_KEY missing for "${slug}".` };
    }
    const ik = getListingIconKey(slug as Service["slug"]);
    if (!isKnownVerificationIconKey(ik)) {
      return { ok: false, detail: `[${label}] unknown listing iconKey for "${slug}": ${ik}` };
    }
    const href = `/tr/verification-services/${slug}`;
    if (!href.endsWith(`/${slug}`)) {
      return { ok: false, detail: `[${label}] href sanity failed for ${slug}` };
    }
    const rowIssues = checklistListingRow(slug as Service["slug"]);
    if (rowIssues.length) {
      return { ok: false, detail: `[${label}] services.ts ${slug}: ${rowIssues.join("; ")}` };
    }
    const mErr = trMergeOk(slug as Service["slug"]);
    if (mErr) {
      return { ok: false, detail: `[${label}] detail TR merge "${slug}": ${mErr}` };
    }
  }

  return { ok: true };
}

console.log("--- verification-services registry bisect (TR) ---\n");

let firstFail: string | undefined;

for (let n = 0; n <= PRIORITY.length; n++) {
  const allowed = new Set(MINIMAL);
  for (let i = 0; i < n; i++) {
    allowed.add(PRIORITY[i]);
  }
  const label =
    n === 0
      ? "minimal (iso-14064-1 + iso-14067 only)"
      : `minimal + priority[0..${n - 1}] (${PRIORITY.slice(0, n).join(", ")})`;
  const r = runStep(label, allowed);
  if (!r.ok) {
    console.log(`FAIL  ${r.detail}`);
    firstFail = r.detail;
    break;
  }
  console.log(`OK    ${label}`);
}

if (!firstFail) {
  const full = getFullVerificationRegistrySlugSet();
  const r = runStep("FULL production listing (25 slugs)", full);
  if (!r.ok) {
    console.log(`FAIL  ${r.detail}`);
    firstFail = r.detail;
  } else {
    console.log(`OK    FULL production listing (25 slugs)`);
  }
}

console.log("");
if (firstFail) {
  console.log("Bisect result: first failing step printed above.");
  process.exitCode = 1;
} else {
  console.log(
    "Bisect result: no failure — minimal → cumulative priority → full listing all produce TR listing + merge OK.",
  );
  console.log("If the app still breaks in dev, cause is likely outside this data pipeline (e.g. HMR/chunk).");
}
