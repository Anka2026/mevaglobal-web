/**
 * Re-exports the single verification listing registry (`verificationServiceRegistry.ts`).
 * Prefer importing from `@/lib/verification/verificationServiceRegistry` in new code.
 */
export {
  GROUP_LISTING_ICON_KEY,
  SERVICE_LISTING_ICON_KEY,
  VERIFICATION_SERVICES_LISTING_GROUPS,
  getListingIconKey,
  getVerificationRegistrySlugsInOrder,
  verifyListingIconKeysMatchGroups,
  verifyVerificationServiceListingRegistry,
  type VerificationListingSlug,
  type VerificationServicesListingGroup,
  type VerificationServicesListingGroupKey,
} from "./verification/verificationServiceRegistry";
