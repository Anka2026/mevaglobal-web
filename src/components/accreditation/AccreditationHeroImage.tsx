"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ACCREDITATION_IMAGE_CHANGED_EVENT,
  ACCREDITATION_IMAGE_STORAGE_KEY,
  dispatchAccreditationImageChanged,
} from "@/lib/accreditationImageStorage";
import { cn } from "@/lib/cn";
import { visualImageClipClass, visualImageHeroShadowClass } from "@/lib/visualImage";

const DEFAULT_SRC = "/page-visuals/accreditation-hero.png";

type Props = {
  alt: string;
  imageNote: string;
  uploadLabel: string;
};

export function AccreditationHeroImage({ alt, imageNote, uploadLabel }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [defaultFailed, setDefaultFailed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const onFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f?.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      try {
        localStorage.setItem(ACCREDITATION_IMAGE_STORAGE_KEY, url);
      } catch {
        /* quota */
      }
      setDataUrl(url);
      dispatchAccreditationImageChanged();
    };
    reader.readAsDataURL(f);
    e.target.value = "";
  }, []);

  const showDefault = !dataUrl && !defaultFailed;
  const displaySrc = dataUrl ?? (showDefault ? DEFAULT_SRC : null);

  return (
    <div className="flex min-h-0 w-full max-w-[520px] flex-col gap-3 lg:ml-auto">
      <div
        className={cn(
          visualImageClipClass,
          visualImageHeroShadowClass,
          "relative aspect-[4/3] w-full bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_88%,white)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_12%,transparent)]",
        )}
      >
        {displaySrc ? (
          <Image
            src={displaySrc}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-contain object-center p-4 sm:p-5"
            unoptimized={displaySrc.startsWith("data:")}
            onError={() => {
              if (displaySrc === DEFAULT_SRC) setDefaultFailed(true);
            }}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[color:var(--brand-accent-soft)] via-white to-[#eef5fa] p-6 text-center"
            aria-hidden
          >
            <span className="text-sm font-medium text-[color:var(--ink-dark)]/55">—</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={cn(
            "inline-flex w-full shrink-0 items-center justify-center rounded-xl border border-[color:color-mix(in_oklab,var(--brand-primary)_22%,var(--border-soft))]",
            "bg-white px-4 py-2.5 text-xs font-semibold tracking-tight text-[color:var(--brand-primary)] shadow-sm transition-colors",
            "hover:border-[color:color-mix(in_oklab,var(--brand-primary)_35%,var(--border-soft))] hover:bg-[color:var(--brand-accent-soft)]/80 sm:w-auto",
          )}
        >
          {uploadLabel}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={onFile}
        />
      </div>

      <p className="text-xs leading-relaxed text-[color:var(--text-muted)] sm:text-[0.8125rem] sm:leading-relaxed">
        {imageNote}
      </p>
    </div>
  );
}
