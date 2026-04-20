/**
 * Back-compat re-exports for tooling/scripts. Active routes import from `verificationServicesData.ts` directly.
 */
export type { VerificationListingSectionModel } from "./verificationServicesData";
export {
  getRenderableVerificationListingSections,
  getVerificationListingSections,
} from "./verificationServicesData";
export { getVerificationRegistrySlugsInOrder as getVerificationListingSlugsInOrder } from "./verificationServicesData";
export { loadVerificationServiceDetailSafe } from "./loadServiceDetailContext";
