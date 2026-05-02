import Image from "next/image";
import { publicFileExists } from "@/lib/publicFileExists";
import { resolvePageHeaderVisual } from "@/lib/resolvePublicImage";
import { editorialPhotoShellClass, visualImageInnerClipClass } from "@/lib/visualImage";
import { cn } from "@/lib/cn";

const DEFAULT_HERO_SRC = "/page-visuals/contact-hero.png";

/**
 * Premium image frame for the contact page hero (right column).
 * Place the asset at `public/page-visuals/contact-hero.png` (or pass `src`).
 */
export function ContactHeroFrame({
  alt,
  src = DEFAULT_HERO_SRC,
}: {
  alt: string;
  src?: string;
}) {
  const resolved = resolvePageHeaderVisual(src, ["/page-visuals/contact.png"]);
  const hasImage = publicFileExists(resolved);

  return (
    <div
      className={cn(
        editorialPhotoShellClass,
        "aspect-[16/10] max-h-[min(17rem,38vh)] w-full sm:max-h-[min(18rem,40vh)] lg:max-h-[min(16.5rem,36vh)]",
      )}
    >
      {hasImage ? (
        <div className={visualImageInnerClipClass}>
          <Image
            src={resolved}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width:1024px) 100vw, 36vw"
            priority
          />
        </div>
      ) : (
        <div
          className={cn(
            visualImageInnerClipClass,
            "bg-[radial-gradient(100%_100%_at_15%_10%,color-mix(in_oklab,var(--brand-accent)_12%,transparent),transparent_55%),radial-gradient(90%_80%_at_90%_85%,color-mix(in_oklab,var(--brand-primary)_10%,transparent),transparent_50%),linear-gradient(165deg,color-mix(in_oklab,var(--brand-accent-soft)_90%,white),color-mix(in_oklab,var(--brand-accent-soft)_22%,white))]",
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
