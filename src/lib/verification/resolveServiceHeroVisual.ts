import "server-only";

import type { Service } from "@/data/services";
import { resolveServiceHeroFileSrc } from "@/lib/resolvePublicImage";
import { getServiceHeroVisual, type ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";

/** Server-only: returns registry hero visual with canonical `public/` URL (no filesystem probing). */
export function resolveServiceHeroVisual(slug: Service["slug"]): ServiceHeroVisual {
  const v = getServiceHeroVisual(slug);
  if (v.src) {
    return { ...v, src: resolveServiceHeroFileSrc(v.src, slug) };
  }
  return v;
}
