import Image from "next/image";
import { cn } from "@/lib/cn";
import { visualImageClipClass } from "@/lib/visualImage";

export function VisualAnchor({
  src,
  alt = "",
  icon,
  eyebrow,
  className,
  imageClassName,
  photoPresentation = false,
  detailEditorial = false,
  detailEditorialFit = "cover",
}: {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  eyebrow?: string;
  className?: string;
  imageClassName?: string;
  photoPresentation?: boolean;
  detailEditorial?: boolean;
  detailEditorialFit?: "cover" | "contain";
}) {
  const hasImage = Boolean(src);

  if (photoPresentation && hasImage) {
    return (
      <div
        className={cn(
          visualImageClipClass,
          "relative aspect-[4/3] w-full min-h-[200px] max-h-[min(26rem,50vh)] sm:min-h-[220px] sm:max-h-[min(28rem,48vh)] lg:aspect-auto lg:h-full lg:min-h-0 lg:max-h-[min(30rem,46vh)]",
          "flex min-h-0 min-w-0 flex-1 flex-col",
          className,
        )}
      >
        <Image
          src={src!}
          alt={alt}
          fill
          className={cn(imageClassName, "object-cover object-center")}
          sizes="(max-width: 1024px) 100vw, 520px"
          priority
        />
      </div>
    );
  }

  const frameHeights = detailEditorial
    ? "min-h-[320px] w-full flex-1 sm:min-h-[400px] lg:min-h-0 lg:h-full"
    : "h-[220px] sm:h-[260px] lg:h-[280px]";

  return (
    <div
      className={cn(
        visualImageClipClass,
        "relative w-full min-h-0 flex-1",
        frameHeights,
        detailEditorial && "flex flex-col",
        className,
      )}
    >
      {hasImage ? (
        <Image
          src={src!}
          alt={alt}
          fill
          className={cn(
            imageClassName,
            detailEditorialFit === "contain" ? "object-contain object-center" : "object-cover object-center",
          )}
          sizes={detailEditorial ? "(max-width: 1024px) 100vw, 560px" : "(max-width: 1024px) 100vw, 520px"}
          priority={detailEditorial}
        />
      ) : (
        <div
          className="absolute inset-0 bg-[color:var(--brand-accent-soft)] bg-[radial-gradient(90%_80%_at_10%_15%,rgba(15,74,109,0.10),transparent_55%),radial-gradient(80%_70%_at_90%_20%,rgba(54,136,170,0.10),transparent_50%)]"
          aria-hidden="true"
        />
      )}

      {!detailEditorial ? (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
          {eyebrow ? (
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]/85">
              {eyebrow}
            </p>
          ) : (
            <span />
          )}
          {icon ? (
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--visual-image-radius)] bg-white/85 text-[color:var(--brand-primary)] backdrop-blur">
              {icon}
            </div>
          ) : (
            <span />
          )}
        </div>
      ) : null}
    </div>
  );
}
