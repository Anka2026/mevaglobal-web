import Image from "next/image";
import { editorialPhotoShellClass } from "@/lib/visualImage";
import { cn } from "@/lib/cn";

const DEFAULT_SRC = "/assets/page-visuals/documents-hero.png";

/** Documents listing hero — full-bleed cover, single rounded shell. */
export function DocumentsHeroFrame({ alt, src = DEFAULT_SRC }: { alt: string; src?: string }) {
  return (
    <div
      className={cn(
        editorialPhotoShellClass,
        "aspect-[16/10] max-h-[min(17rem,38vh)] w-full sm:max-h-[min(18rem,40vh)] lg:max-h-[min(16.5rem,36vh)]",
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width:1024px) 100vw, 36vw"
        priority
      />
    </div>
  );
}
