"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function CbamFaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[color:var(--border-soft)] border border-[color:var(--border-soft)] bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--brand-primary)] sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold leading-snug text-[color:var(--ink-dark)] sm:text-[0.975rem]">
                {item.q}
              </span>
              <span className="mt-0.5 text-[color:var(--brand-primary)]" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div className={cn("px-5 pb-4 sm:px-6", isOpen ? "block" : "hidden")}>
              <p className="max-w-[52rem] text-sm leading-[1.75] text-[color:var(--text-muted)]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
