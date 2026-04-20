import { services } from "@/data/services";
import { en } from "@/i18n/messages/en";
import { runVerificationGraphValidation } from "@/lib/verification/verificationGraphValidation";

let didRunDataPlaneCheck = false;

/**
 * One-time server checks: full listing graph + every `Service` row has English `serviceDetails`.
 * Does not throw — logs only. Shares graph validation with `instrumentation.ts`.
 */
export function verifyVerificationServicesDataPlane(): void {
  if (didRunDataPlaneCheck) return;
  didRunDataPlaneCheck = true;

  runVerificationGraphValidation();

  const details = en.pages.serviceDetails as Record<string, unknown>;
  for (const s of services) {
    if (!(s.slug in details) || details[s.slug] == null) {
      console.error(
        `[verification-services][integrity] English dictionary missing pages.serviceDetails["${s.slug}"]. ` +
          `Add the block in src/i18n/messages/en.ts (and mirror TR/NL).`,
      );
    }
  }
}
