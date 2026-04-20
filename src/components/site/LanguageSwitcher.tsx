"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";
import { cn } from "@/lib/cn";

const labels: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  nl: "NL",
};

const flagSrc: Record<Locale, string> = {
  en: "/flags/en.png",
  tr: "/flags/tr.png",
  nl: "/flags/nl.png",
};

function replaceLocale(pathname: string, nextLocale: Locale) {
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return `/${nextLocale}`;
  segs[0] = nextLocale;
  return `/${segs.join("/")}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const options = useMemo(
    () =>
      locales.map((l) => ({
        value: l,
        label: labels[l],
        href: replaceLocale(pathname, l),
      })),
    [pathname],
  );

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const root = detailsRef.current;
      if (!root) return;
      if (!root.open) return;
      if (e.target instanceof Node && root.contains(e.target)) return;
      root.open = false;
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <details ref={detailsRef} className="group relative">
      <summary
        aria-label="Language"
        className={cn(
          "flex h-10 list-none items-center gap-2 rounded-2xl border border-[color:var(--border-soft)] bg-white px-2.5 text-xs font-semibold tracking-wide text-[color:var(--ink-dark)] shadow-sm outline-none",
          "cursor-pointer select-none transition-[background-color,border-color,box-shadow]",
          "hover:border-[color:var(--brand-accent)]/35 hover:bg-[color:var(--brand-accent-soft)] hover:shadow-[var(--shadow-soft)]",
          "focus-visible:border-[color:var(--brand-accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        <span className="relative h-4 w-5 overflow-hidden rounded-sm bg-white ring-1 ring-black/5">
          <Image src={flagSrc[locale]} alt="" fill sizes="40px" className="object-contain object-center" />
        </span>
        <span className="pr-0.5">{labels[locale]}</span>
        <ChevronDown
          className="h-4 w-4 text-[color:var(--text-muted)] transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>

      <div className="absolute right-0 z-50 mt-2 w-[168px] overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-white p-1 shadow-[var(--shadow-float)]">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className={cn(
              "flex w-full items-center gap-2 rounded-xl px-2 py-2 text-left text-xs font-semibold tracking-wide text-[color:var(--ink-dark)]",
              "transition-colors hover:bg-[color:var(--brand-accent-soft)]",
              o.value === locale ? "bg-[color:var(--brand-accent-soft)]" : "",
            )}
            onClick={() => {
              router.push(o.href);
              if (detailsRef.current) detailsRef.current.open = false;
            }}
          >
            <span className="relative h-4 w-5 overflow-hidden rounded-sm bg-white ring-1 ring-black/5">
              <Image src={flagSrc[o.value]} alt="" fill sizes="40px" className="object-contain object-center" />
            </span>
            <span>{o.label}</span>
          </button>
        ))}
      </div>
    </details>
  );
}

