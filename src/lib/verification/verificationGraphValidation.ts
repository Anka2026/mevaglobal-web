import { getService, type Service } from "@/data/services";
import { en } from "@/i18n/messages/en";
import { logVerificationIssue } from "@/lib/verification/log";
import {
  FULL_VERIFICATION_SERVICES_LISTING_GROUPS,
  SERVICE_LISTING_ICON_KEY,
  VERIFICATION_SERVICES_LISTING_GROUPS,
  verifyListingIconKeysMatchGroups,
  verifyVerificationServiceListingRegistry,
} from "@/lib/verification/verificationServiceRegistry";
import { validateEnglishServiceDetailBlock } from "@/lib/verification/verificationEnglishDetailShape";

let didValidateGraph = false;

/**
 * Full graph check for verification-services: listing registry ↔ services.ts ↔ English `serviceDetails`.
 * Never throws. Runs once per Node server process (instrumentation + data-plane hook share this guard).
 */
export function runVerificationGraphValidation(): void {
  if (didValidateGraph) return;
  didValidateGraph = true;

  verifyVerificationServiceListingRegistry();
  verifyListingIconKeysMatchGroups();

  const details = en.pages.serviceDetails as Record<string, unknown>;

  for (const g of VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const slug of g.slugs) {
      if (!(slug in SERVICE_LISTING_ICON_KEY)) {
        logVerificationIssue("integrity", slug, `Listing slug has no SERVICE_LISTING_ICON_KEY entry (group ${g.key}).`);
      }
      if (!getService(slug as Service["slug"])) {
        logVerificationIssue("listing-skip", slug, `Listing references unknown service row (group ${g.key}).`);
      }
      const block = details[slug];
      if (block == null) {
        logVerificationIssue("missing-dictionary", slug, "English serviceDetails block missing for listing slug.");
      }
    }
  }

  /** Validate English `serviceDetails` shape for every slug in the full group list. */
  for (const g of FULL_VERIFICATION_SERVICES_LISTING_GROUPS) {
    for (const slug of g.slugs) {
      const block = details[slug];
      const shapeErrors = validateEnglishServiceDetailBlock(slug, block);
      if (shapeErrors.length > 0) {
        console.error(
          `[verification-services][shape] slug=${slug} en.serviceDetails: ${shapeErrors.join(" | ")}`,
        );
      }
    }
  }
}
