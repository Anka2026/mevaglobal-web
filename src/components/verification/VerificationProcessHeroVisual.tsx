import Image from "next/image";
import { cn } from "@/lib/cn";
import { editorialPhotoShellClass } from "@/lib/visualImage";

export const VERIFICATION_PROCESS_HERO_SRC = "/images/verification-process/verification-process-hero.png";

/** Premium hero photography for Verification Process — full graphic visible via contain. */
export function VerificationProcessHeroVisual({
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
        "min-h-[320px] w-full bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] to-white sm:min-h-[420px] lg:min-h-[min(32rem,60vh)]",
        className,
      )}
    >
      <Image
        src={VERIFICATION_PROCESS_HERO_SRC}
        alt={alt}
        fill
        priority
        className="object-contain object-center p-1 sm:p-1.5"
        sizes="(max-width: 1024px) 100vw, 52vw"
      />
    </div>
  );
}
