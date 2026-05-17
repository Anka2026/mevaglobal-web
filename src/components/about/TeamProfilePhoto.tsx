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
      ? "aspect-[3/4] max-h-[17.5rem] sm:max-h-[18.5rem] lg:max-h-[19rem]"
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
        className="object-cover object-[50%_18%]"
        sizes="(max-width: 1024px) 80vw, 280px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
