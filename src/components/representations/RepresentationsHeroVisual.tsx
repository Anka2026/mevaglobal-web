import Image from "next/image";
import { cn } from "@/lib/cn";
import { editorialPhotoShellClass } from "@/lib/visualImage";

export const REPRESENTATIONS_HERO_SRC = "/images/representations/representation-network-hero.png";

/** Landscape hero for Representations — full composition visible, no vertical crop. */
export function RepresentationsHeroVisual({
  alt,
  className,
}: {
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        editorialPhotoShellClass,
        "relative w-full aspect-[16/9] max-h-[min(13.5rem,52vw)] sm:max-h-[min(15rem,46vw)] lg:aspect-[16/9] lg:max-h-none",
        "bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] to-white",
        className,
      )}
    >
      <Image
        src={REPRESENTATIONS_HERO_SRC}
        alt={alt}
        fill
        priority
        className="object-contain object-center p-1.5 sm:p-2"
        sizes="(max-width: 1024px) 100vw, 640px"
      />
    </div>
  );
}
