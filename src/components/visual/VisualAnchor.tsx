import Image from "next/image";
import { cn } from "@/lib/cn";
import { heroEditorialMatteBgClass, visualImageClipClass } from "@/lib/visualImage";

/**
 * Global image treatment: rounded corners on the photo itself (single clip layer).
 * No outer “faux card”: no gradient panel, border, ring, or inset shadow around the bitmap.
 */
const imageClip = visualImageClipClass;
/** Depth on photo-presentation heroes only — service/editorial detail heroes stay frame-free (no lifted card read). */
const editorialShadow = "shadow-[var(--shadow-soft)]";

export function VisualAnchor({
  src,
  alt = "",
  icon,
  eyebrow,
  className,
  imageClassName,
  /** Full-bleed photo: no grid, gradients, eyebrow or icon overlay—use for approved hero photography. */
  photoPresentation = false,
  /** Large, image-led panel for service detail pages (cleaner chrome, taller frame). */
  detailEditorial = false,
  /** Default `contain` keeps in-image text/labels visible on verification and marketing heroes. */
  detailEditorialFit = "contain",
}: {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  eyebrow?: string;
  className?: string;
  imageClassName?: string;
  photoPresentation?: boolean;
  detailEditorial?: boolean;
  detailEditorialFit?: "cover" | "contain";
}) {
  const hasImage = Boolean(src);

  if (photoPresentation && hasImage) {
    return (
      <div className={cn(imageClip, editorialShadow, "isolate flex min-h-0 min-w-0 flex-1 flex-col", className)}>
        <div className="relative aspect-[4/3] w-full min-h-[200px] max-h-[min(26rem,50vh)] overflow-hidden rounded-[var(--visual-image-radius)] sm:min-h-[220px] sm:max-h-[min(28rem,48vh)] lg:aspect-auto lg:h-full lg:min-h-0 lg:max-h-[min(30rem,46vh)]">
          <Image
            src={src!}
            alt={alt}
            fill
            className={cn(imageClassName, "object-cover object-center")}
            sizes="(max-width: 1024px) 100vw, 520px"
            priority
          />
        </div>
      </div>
    );
  }

  const frameHeights = detailEditorial
    ? "min-h-[280px] w-full flex-1 sm:min-h-[300px] lg:min-h-0 lg:h-full"
    : "h-[220px] sm:h-[260px] lg:h-[280px]";

  return (
    <div
      className={cn(
        imageClip,
        /* Single authoritative clip + stacking context for `/verification-services/[slug]` heroes — avoids subpixel square corners from nested duplicate radii. */
        detailEditorial && "isolate flex h-full min-h-0 min-w-0 flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full min-h-0 flex-1 overflow-hidden rounded-[var(--visual-image-radius)]",
          detailEditorial && heroEditorialMatteBgClass,
          frameHeights,
        )}
      >
        {hasImage ? (
          <Image
            src={src!}
            alt={alt}
            fill
            className={cn(
              imageClassName,
              detailEditorial && detailEditorialFit === "contain"
                ? "object-contain object-center"
                : "object-cover object-center",
            )}
            sizes={detailEditorial ? "(max-width: 1024px) 100vw, 560px" : "(max-width: 1024px) 100vw, 520px"}
            priority={detailEditorial}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 overflow-hidden rounded-[var(--visual-image-radius)] bg-[color:var(--brand-accent-soft)]",
              "bg-[radial-gradient(90%_80%_at_10%_15%,rgba(15,74,109,0.10),transparent_55%),radial-gradient(80%_70%_at_90%_20%,rgba(54,136,170,0.10),transparent_50%)]",
            )}
            aria-hidden="true"
          />
        )}

        {!detailEditorial ? (
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
            {eyebrow ? (
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]/85">
                {eyebrow}
              </p>
            ) : (
              <span />
            )}
            {icon ? (
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/85 text-[color:var(--brand-primary)] backdrop-blur">
                {icon}
              </div>
            ) : (
              <span />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
