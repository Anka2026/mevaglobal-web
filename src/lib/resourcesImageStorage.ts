export const RESOURCES_IMAGE_STORAGE_KEY = "meva-resources-hero-v1";

export const RESOURCES_IMAGE_CHANGED_EVENT = "meva-resources-image-changed";

export function dispatchResourcesImageChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(RESOURCES_IMAGE_CHANGED_EVENT));
}
