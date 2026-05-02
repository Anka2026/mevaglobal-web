import Image from "next/image";
import { cn } from "@/lib/cn";
import { visualImageClipClass } from "@/lib/visualImage";

/**
 * Hero photography: single rounded shell, full-bleed cover — no matte, shadow, or inner padding.
 */
export function PremiumHeroCoverImage({
  src,
  alt,
  priority,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        visualImageClipClass,
        "h-full min-h-[220px] w-full sm:min-h-[260px] lg:min-h-0",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover object-center", imageClassName)}
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
    </div>
  );
}
