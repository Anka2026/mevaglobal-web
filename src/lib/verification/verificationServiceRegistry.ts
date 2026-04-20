/**
 * Back-compat re-exports. Canonical listing registry lives in `./verificationServicesData`.
 */
export type {
  VerificationServicesListingGroupKey,
  VerificationServicesListingGroup,
  VerificationListingSlug,
} from "./verificationServicesData";
export {
  FULL_VERIFICATION_SERVICES_LISTING_GROUPS,
  VERIFICATION_SERVICES_LISTING_GROUPS,
  filterFullVerificationGroupsByAllowedSlugs,
  getFullVerificationRegistrySlugSet,
  SERVICE_LISTING_ICON_KEY,
  GROUP_LISTING_ICON_KEY,
  getListingIconKey,
  verifyVerificationServiceListingRegistry,
  getVerificationRegistrySlugsInOrder,
  verifyListingIconKeysMatchGroups,
} from "./verificationServicesData";
