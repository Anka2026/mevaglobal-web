"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Stretch to match adjacent column height on large screens. */
  fillColumn?: boolean;
  /** Smaller executive portrait for balanced leadership layout. */
  compact?: boolean;
};

export function TeamProfilePhoto({ src, alt, className, fillColumn = false, compact = false }: Props) {
  const [failed, setFailed] = useState(false);

  const shellClass = cn(
    "relative w-full overflow-hidden rounded-2xl border border-[color:color-mix(in_oklab,var(--brand-gold)_18%,var(--border-soft))] bg-[color:var(--brand-accent-soft)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)]",
    compact
      ? "aspect-[3/4] max-h-[12.75rem] sm:max-h-[13.5rem] lg:max-h-[14rem]"
      : fillColumn
        ? "aspect-[4/5] min-h-[15.5rem] lg:aspect-auto lg:h-full lg:min-h-[17.5rem]"
        : "aspect-[4/5]",
    className,
  );

  if (failed) {
    return (
      <div className={cn(shellClass, "flex items-center justify-center")} aria-hidden>
        <User className="h-14 w-14 text-[color:var(--brand-primary)]/35 sm:h-16 sm:w-16" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <div className={shellClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover",
          compact ? "object-[58%_22%] scale-[1.02]" : "object-[50%_18%]",
        )}
        sizes={compact ? "(max-width: 1024px) 40vw, 200px" : "(max-width: 1024px) 80vw, 260px"}
        onError={() => setFailed(true)}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:color-mix(in_oklab,var(--ink-dark)_18%,transparent)] via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}
