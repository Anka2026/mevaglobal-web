import Image from "next/image";
import { publicFileExists } from "@/lib/publicFileExists";
import { editorialPhotoShellClass, visualImageInnerClipClass } from "@/lib/visualImage";
import { cn } from "@/lib/cn";

const DEFAULT_SRC = "/page-visuals/documents-hero.png";

/** Premium hero frame for the Resources / documents listing page. Asset: `public/page-visuals/documents-hero.png`. */
export function DocumentsHeroFrame({ alt, src = DEFAULT_SRC }: { alt: string; src?: string }) {
  const hasImage = publicFileExists(src);

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
            src={src}
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
