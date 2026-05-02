import Image from "next/image";
import { cn } from "@/lib/cn";
import { heroEditorialMatteBgClass, visualImageClipClass, visualImageInnerClipClass } from "@/lib/visualImage";

/**
 * Hero photography: site-wide `--visual-image-radius`, optional cover vs contain (registry-style),
 * no border or outer white frame. Shadow optional for a flatter editorial look.
 */
export function PremiumHeroCoverImage({
  src,
  alt,
  priority,
  className,
  presentation = "cover",
  showShadow = true,
  /** Matte panel behind letterboxed `contain` imagery; set false for full-bleed cover heroes (e.g. statement search). */
  editorialMatte,
  /** Padding inside clip when using `contain`; ignored for `cover`. */
  containPadding,
  /** Extra classes on `<Image>` (e.g. `object-[50%_18%]` for focal bias). */
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** `contain` keeps the full frame visible (balanced registry/interface art); `cover` fills the clip. */
  presentation?: "cover" | "contain";
  showShadow?: boolean;
  editorialMatte?: boolean;
  containPadding?: boolean;
  imageClassName?: string;
}) {
  const contain = presentation === "contain";
  const showMatte = editorialMatte ?? contain;
  const padContain = containPadding ?? contain;

  return (
    <div
      className={cn(
        visualImageClipClass,
        "h-full min-h-[220px] w-full sm:min-h-[260px] lg:min-h-0",
        showShadow && "shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div
        className={cn(
          visualImageInnerClipClass,
          showMatte ? heroEditorialMatteBgClass : "bg-transparent",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            contain
              ? cn("object-contain object-center", padContain && "p-3 sm:p-5")
              : "object-cover",
            imageClassName,
          )}
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
      </div>
    </div>
  );
}
