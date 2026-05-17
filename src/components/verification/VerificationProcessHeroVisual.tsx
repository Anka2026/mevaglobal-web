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
        "aspect-[4/3] w-full min-h-[200px] max-h-[min(17.5rem,48vh)] bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] to-white sm:min-h-[220px] sm:max-h-[min(19rem,44vh)] lg:min-h-0 lg:max-h-[min(18rem,36vh)]",
        className,
      )}
    >
      <Image
        src={VERIFICATION_PROCESS_HERO_SRC}
        alt={alt}
        fill
        priority
        className="object-contain object-center p-1.5 sm:p-2"
        sizes="(max-width: 1024px) 100vw, 640px"
      />
    </div>
  );
}
