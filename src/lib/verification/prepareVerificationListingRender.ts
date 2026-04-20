import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/locales";
import type { VerificationListingSectionModel } from "@/lib/verification/verificationServiceCatalog";
import { logVerificationIssue } from "@/lib/verification/log";

/**
 * Final gate before UI: drops sections with missing i18n group copy, empty card arrays, or invalid card rows.
 * Never throws — listing route always receives a safe array (possibly empty → recoverable panel in UI).
 */
export function prepareRenderableListingSections(
  sections: VerificationListingSectionModel[],
  groups: Dictionary["pages"]["services"]["groups"],
  locale: Locale,
): VerificationListingSectionModel[] {
  const out: VerificationListingSectionModel[] = [];

  for (const section of sections) {
    const g = groups[section.groupKey];
    if (!g?.title || g.intro == null) {
      logVerificationIssue(
        "listing-render",
        String(section.groupKey),
        `Skipping section: missing or invalid services.groups copy (locale ${locale}).`,
      );
      continue;
    }

    const cards = section.cards.filter((c) => {
      if (!c.slug || typeof c.slug !== "string" || !c.slug.trim()) {
        logVerificationIssue("listing-render", "card", "Skipping card: missing slug.");
        return false;
      }
      if (!c.title || !String(c.title).trim()) {
        logVerificationIssue("listing-render", c.slug, "Skipping card: empty title.");
        return false;
      }
      return true;
    });

    if (cards.length === 0) {
      logVerificationIssue(
        "listing-render",
        String(section.groupKey),
        "Skipping section: no valid cards after validation.",
      );
      continue;
    }

    out.push(cards.length === section.cards.length ? section : { ...section, cards });
  }

  return out;
}
