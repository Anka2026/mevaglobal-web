"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ACCREDITATION_IMAGE_CHANGED_EVENT,
  ACCREDITATION_IMAGE_STORAGE_KEY,
} from "@/lib/accreditationImageStorage";
import { cn } from "@/lib/cn";
import { visualImageClipClass } from "@/lib/visualImage";

const DEFAULT_SRC = "/assets/page-visuals/accreditation-hero.png";

type Props = {
  alt: string;
};

/** Footer accreditation strip — same upload key as hero; single rounded full-bleed shell. */
export function FooterAccreditationImage({ alt }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [defaultFailed, setDefaultFailed] = useState(false);

  const readStored = useCallback(() => {
    try {
      const s = localStorage.getItem(ACCREDITATION_IMAGE_STORAGE_KEY);
      setDataUrl(s && s.startsWith("data:image/") ? s : null);
    } catch {
      setDataUrl(null);
    }
  }, []);

  useEffect(() => {
    readStored();
    const onChange = () => readStored();
    window.addEventListener(ACCREDITATION_IMAGE_CHANGED_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(ACCREDITATION_IMAGE_CHANGED_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [readStored]);

  const showDefault = !dataUrl && !defaultFailed;
  const displaySrc = dataUrl ?? (showDefault ? DEFAULT_SRC : null);

  if (!displaySrc && !showDefault) return null;

  return (
    <div className={cn(visualImageClipClass, "relative mt-6 h-36 w-full max-w-[640px] sm:h-40")}>
      {displaySrc ? (
        <Image
          src={displaySrc}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover object-center"
          unoptimized={displaySrc.startsWith("data:")}
          onError={() => {
            if (displaySrc === DEFAULT_SRC) setDefaultFailed(true);
          }}
        />
      ) : null}
    </div>
  );
}
