import { verifyVerificationServicesDataPlane } from "@/lib/verification/verificationIntegrity";

/**
 * Server bootstrap hook: validate verification-services graph once per Node process.
 * Static import avoids an extra async webpack chunk during dev bootstrap (fewer moving parts in the module graph).
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return;
  }
  try {
    verifyVerificationServicesDataPlane();
  } catch (e) {
    console.error("[instrumentation] verification-services bootstrap validation failed", e);
  }
}
