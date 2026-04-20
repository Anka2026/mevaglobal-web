/** Browser-only: persisted preview for accreditation / certificate imagery (hero + footer). */
export const ACCREDITATION_IMAGE_STORAGE_KEY = "meva-accreditation-hero-v1";

export const ACCREDITATION_IMAGE_CHANGED_EVENT = "meva-accreditation-image-changed";

export function dispatchAccreditationImageChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ACCREDITATION_IMAGE_CHANGED_EVENT));
}
