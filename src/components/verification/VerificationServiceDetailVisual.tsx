import { VisualAnchor } from "@/components/visual/VisualAnchor";
import { cn } from "@/lib/cn";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";

/**
 * Canonical hero/detail image for `/verification-services/[slug]`.
 * All layouts (editorial, premium 4/5-card, standard PageHeader) must render through this
 * so rounding, clipping, and frame-free presentation stay identical across locales and slugs.
 */
export function VerificationServiceDetailVisual({
  visual,
  title,
  imageAlt,
  className,
}: {
  visual: ServiceHeroVisual;
  title: string;
  imageAlt?: string;
  className?: string;
}) {
  const alt = (imageAlt ?? title).trim() || title;
  return (
    <VisualAnchor
      src={visual.src}
      alt={alt}
      imageClassName={visual.imageClassName}
      detailEditorial
      detailEditorialFit={visual.editorialFit ?? "cover"}
      className={cn("w-full min-h-0 flex-1", className)}
    />
  );
}

/** Shared right-column shell for the hero image — same min-heights everywhere contain vs cover is used. */
export function verificationServiceDetailMediaColumnClassName(visual: ServiceHeroVisual) {
  return cn(
    "relative flex h-full min-w-0 flex-col lg:col-span-7 lg:min-h-0",
    visual.editorialFit === "contain"
      ? "min-h-[320px] sm:min-h-[400px] lg:min-h-0"
      : "min-h-[300px] sm:min-h-[380px] lg:min-h-0",
  );
}
