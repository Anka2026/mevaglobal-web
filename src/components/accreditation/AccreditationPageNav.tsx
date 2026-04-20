"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";

export type AccreditationSectionId = "accreditation-hero" | "verification-process-section" | "corporate-documents";

const SECTION_IDS: AccreditationSectionId[] = [
  "accreditation-hero",
  "verification-process-section",
  "corporate-documents",
];

function isSectionId(id: string): id is AccreditationSectionId {
  return (SECTION_IDS as readonly string[]).includes(id);
}

export function AccreditationPageNav({ dict }: { dict: Dictionary }) {
  const nav = dict.pages.process.accreditationPageNav;
  const [active, setActive] = useState<AccreditationSectionId>("accreditation-hero");

  const syncFromHash = useCallback(() => {
    const raw = typeof window !== "undefined" ? window.location.hash : "";
    const id = raw.replace(/^#/, "");
    if (id && isSectionId(id)) setActive(id);
  }, []);

  useLayoutEffect(() => {
    syncFromHash();
  }, [syncFromHash]);

  useEffect(() => {
    const onHash = () => syncFromHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [syncFromHash]);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => n != null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.target.id)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible.length === 0) return;
        const top = visible[0]?.target.id;
        if (top && isSectionId(top)) setActive(top);
      },
      { root: null, rootMargin: "-10% 0px -42% 0px", threshold: [0.06, 0.12, 0.2, 0.35, 0.55] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items: { id: AccreditationSectionId; label: string }[] = [
    { id: "accreditation-hero", label: nav.accreditation },
    { id: "verification-process-section", label: nav.verificationProcess },
    { id: "corporate-documents", label: nav.documents },
  ];

  const scrollToSection = (id: AccreditationSectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url.toString());
    setActive(id);
  };

  return (
    <nav
      className="border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)]"
      aria-label={nav.navAriaLabel}
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 sm:py-3 lg:gap-2 lg:px-10 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-left text-[0.8125rem] font-semibold tracking-tight transition-colors sm:px-4 sm:text-sm",
                isActive
                  ? "bg-[color:var(--brand-primary)] text-white shadow-sm"
                  : "bg-white/80 text-[color:var(--ink-dark)]/88 ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_12%,var(--border-soft))] hover:bg-white hover:text-[color:var(--ink-dark)]",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
