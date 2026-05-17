import Image from "next/image";
import { cn } from "@/lib/cn";
import { premiumGoldTopLine, premiumHeroVisualPanel } from "@/lib/premiumUi";
import { visualImageClipClass } from "@/lib/visualImage";

const DEFAULT_SRC = "/assets/page-visuals/documents-hero.png";

/** Documents listing hero — refined technical publication visual. */
export function DocumentsHeroFrame({ alt, src = DEFAULT_SRC }: { alt: string; src?: string }) {
  return (
    <div
      className={cn(
        premiumHeroVisualPanel,
        visualImageClipClass,
        "relative aspect-[16/10] w-full max-h-[min(24rem,48vh)] sm:max-h-[min(26rem,50vh)] lg:max-h-[min(28rem,54vh)]",
      )}
    >
      <div className={premiumGoldTopLine} aria-hidden />
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
