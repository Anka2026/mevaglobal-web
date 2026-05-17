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
      width={176}
      height={50}
      className={cn("h-9 w-auto max-h-[3.4rem] sm:h-[2.6rem] lg:h-[3.4rem]", visualImageRoundedClass)}
      style={{
        maxHeight: "3.4rem",
        maxWidth: "176px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        display: "block",
        verticalAlign: "middle",
      }}
      sizes="(max-width: 1024px) 144px, 176px"
      priority={priority}
    />
  );
}
