import Image from "next/image";
import { cn } from "@/lib/cn";
import { visualImageRoundedClass } from "@/lib/visualImage";

/**
 * Site mark: Tailwind + explicit dimensions. Inline max bounds keep the mark readable even when
 * global CSS fails to load (dev chunk/HMR edge) — avoids full-intrinsic “giant logo” flash.
 */
export function BrandLogo({ alt, priority = false }: { alt: string; priority?: boolean }) {
  return (
    <Image
      src="/assets/meva-logo.jpeg"
      alt={alt}
      width={220}
      height={62}
      className={cn("h-11 w-auto max-h-[4.25rem] sm:h-[3.25rem] lg:h-[4.25rem]", visualImageRoundedClass)}
      style={{
        maxHeight: "4.25rem",
        maxWidth: "220px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        display: "block",
        verticalAlign: "middle",
      }}
      sizes="(max-width: 1024px) 180px, 220px"
      priority={priority}
    />
  );
}
