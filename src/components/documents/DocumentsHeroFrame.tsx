import Image from "next/image";
import { editorialPhotoShellClass, visualImageInnerClipClass } from "@/lib/visualImage";
import { cn } from "@/lib/cn";

const DEFAULT_SRC = "/assets/page-visuals/documents-hero.png";

/** Premium hero frame for the Resources / documents listing page. Asset: `public/assets/page-visuals/documents-hero.png`. */
export function DocumentsHeroFrame({ alt, src = DEFAULT_SRC }: { alt: string; src?: string }) {
  return (
    <div
      className={cn(
        editorialPhotoShellClass,
        "aspect-[16/10] max-h-[min(17rem,38vh)] w-full sm:max-h-[min(18rem,40vh)] lg:max-h-[min(16.5rem,36vh)]",
      )}
    >
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
    </div>
  );
}
