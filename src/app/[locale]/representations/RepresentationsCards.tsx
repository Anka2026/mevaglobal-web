"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export type OrganizationEntity = {
  id: string;
  name: string;
  logoSrc: string;
  cardSummary: string;
  modalSummary: string;
  corporateProfile: string;
  serviceAreas: string[];
  accreditationAndCompetence?: string;
  geographicScope?: string;
  corporateScale?: string;
  milestones?: string[];
  referenceWorks?: string;
  sectorExperience?: string;
  corporateStructure?: string;
};

export type RepresentationsUiCopy = {
  viewDetails: string;
  close: string;
  summaryHeading: string;
  corporateProfile: string;
  serviceAndCompetenceAreas: string;
  accreditationAndCompetence: string;
  geographicScope: string;
  corporateScale: string;
  milestones: string;
  referenceWorks: string;
  sectorExperience: string;
  corporateStructure: string;
};

function hasText(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7 border-t border-[color:var(--border-soft)] pt-7 first:mt-0 first:border-t-0 first:pt-0">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">{title}</h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function DetailModal({
  open,
  entity,
  ui,
  onClose,
}: {
  open: boolean;
  entity: OrganizationEntity | null;
  ui: RepresentationsUiCopy;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const root = panelRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (!active || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    lastActiveRef.current?.focus?.();
  }, [open]);

  if (!open || !entity) return null;

  const ariaTitle = entity.name;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-3 py-6 backdrop-blur-[2px] sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={cn(
          "relative flex max-h-[min(88vh,52rem)] w-full max-w-[52rem] flex-col overflow-hidden rounded-[1.125rem] bg-white",
          "border border-[color:color-mix(in_oklab,var(--brand-accent)_20%,var(--border-soft))]",
          "shadow-[0_18px_44px_-26px_rgba(29,37,47,0.22)]",
          "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_8%,transparent)]",
        )}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[color:var(--border-soft)] px-5 py-4 sm:px-7 sm:py-4">
          <p id={titleId} className="min-w-0 text-base font-semibold tracking-tight text-[color:var(--ink-dark)]">
            {ariaTitle}
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className={cn(
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl",
              "border border-[color:var(--border-soft)] bg-white text-[color:var(--ink-dark)]",
              "transition-colors hover:border-[color:color-mix(in_oklab,var(--brand-accent)_28%,var(--border-soft))] hover:bg-[color:var(--brand-accent-soft)]",
            )}
            aria-label={ui.close}
            title={ui.close}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7 sm:py-7">
          <div className="mx-auto max-w-[46rem]">
            <div
              className={cn(
                "flex items-center justify-center rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_10%,var(--border-soft))] bg-white px-6 py-5",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
              )}
            >
              <div className="relative h-[4.5rem] w-full max-w-[18rem] sm:h-[5rem]">
                <Image
                  src={entity.logoSrc}
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 72vw, 288px"
                />
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">
              {ui.summaryHeading}
            </p>
            <p className="mt-2 text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-[1.76]">
              {entity.modalSummary}
            </p>

            <SectionBlock title={ui.corporateProfile}>
              <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                {entity.corporateProfile}
              </p>
            </SectionBlock>

            {entity.serviceAreas.length > 0 ? (
              <SectionBlock title={ui.serviceAndCompetenceAreas}>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[color:var(--ink-dark)]/90 marker:text-[color:var(--brand-primary)]">
                  {entity.serviceAreas.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </SectionBlock>
            ) : null}

            {hasText(entity.accreditationAndCompetence) ? (
              <SectionBlock title={ui.accreditationAndCompetence}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.accreditationAndCompetence}
                </p>
              </SectionBlock>
            ) : null}

            {hasText(entity.geographicScope) ? (
              <SectionBlock title={ui.geographicScope}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.geographicScope}
                </p>
              </SectionBlock>
            ) : null}

            {hasText(entity.corporateScale) ? (
              <SectionBlock title={ui.corporateScale}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.corporateScale}
                </p>
              </SectionBlock>
            ) : null}

            {entity.milestones && entity.milestones.length > 0 ? (
              <SectionBlock title={ui.milestones}>
                <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[color:var(--ink-dark)]/90 marker:text-[color:var(--brand-primary)]">
                  {entity.milestones.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </SectionBlock>
            ) : null}

            {hasText(entity.referenceWorks) ? (
              <SectionBlock title={ui.referenceWorks}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.referenceWorks}
                </p>
              </SectionBlock>
            ) : null}

            {hasText(entity.sectorExperience) ? (
              <SectionBlock title={ui.sectorExperience}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.sectorExperience}
                </p>
              </SectionBlock>
            ) : null}

            {hasText(entity.corporateStructure) ? (
              <SectionBlock title={ui.corporateStructure}>
                <p className="text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-[1.76]">
                  {entity.corporateStructure}
                </p>
              </SectionBlock>
            ) : null}

            <div className="mt-8 border-t border-[color:var(--border-soft)] pt-6">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex h-10 min-w-[7.5rem] items-center justify-center rounded-2xl px-5 text-sm font-semibold",
                  "border border-[color:var(--border-soft)] bg-white text-[color:var(--ink-dark)]",
                  "shadow-[var(--shadow-card)] transition-colors hover:border-[color:color-mix(in_oklab,var(--brand-accent)_28%,var(--border-soft))] hover:bg-[color:var(--brand-accent-soft)]",
                )}
              >
                {ui.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RepresentationsCards({
  title,
  body,
  items,
  ui,
  layout = "twoColumn",
}: {
  title: string;
  body: string;
  items: OrganizationEntity[];
  ui: RepresentationsUiCopy;
  layout?: "twoColumn" | "singleWide";
}) {
  const [active, setActive] = useState<OrganizationEntity | null>(null);

  const cardClass = useMemo(
    () =>
      cn(
        "relative flex min-h-0 flex-col overflow-hidden rounded-[1.0625rem]",
        "border border-[color:color-mix(in_oklab,var(--brand-accent)_18%,var(--border-soft))]",
        "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc]",
        "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_7%,transparent)]",
        "sm:p-7",
        "transition-[box-shadow,transform] duration-200 hover:shadow-[0_14px_36px_-28px_rgba(29,37,47,0.18)]",
      ),
    [],
  );

  const gridClass =
    layout === "singleWide"
      ? "grid w-full max-w-[42rem] grid-cols-1 gap-5 lg:max-w-[44rem]"
      : "grid gap-5 sm:grid-cols-2 lg:gap-6";

  const open = (entity: OrganizationEntity) => setActive(entity);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-7">
        <div className="min-w-0 lg:col-span-4">
          <h2 className="text-[1.35rem] font-semibold leading-[1.2] tracking-tight text-[color:var(--ink-dark)] sm:text-[1.5rem]">
            {title}
          </h2>
          <p className="mt-3.5 text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.74]">
            {body}
          </p>
        </div>
        <div className={cn("min-w-0 lg:col-span-8", layout === "singleWide" && "flex justify-start")}>
          <div className={gridClass}>
            {items.map((r) => (
              <article key={r.id} className={cardClass}>
                <button
                  type="button"
                  onClick={() => open(r)}
                  className={cn(
                    "flex w-full items-center justify-center rounded-[var(--visual-image-radius)] bg-white p-3.5",
                    "border border-[color:color-mix(in_oklab,var(--brand-primary)_10%,var(--border-soft))]",
                    "transition-colors hover:bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)]",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
                  )}
                  aria-label={`${ui.viewDetails}: ${r.name}`}
                >
                  <div className="relative h-[3.75rem] w-full sm:h-16">
                    <Image
                      src={r.logoSrc}
                      alt=""
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 85vw, 360px"
                    />
                  </div>
                </button>

                <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                  {r.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">{r.cardSummary}</p>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => open(r)}
                    className="text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 transition-colors hover:underline"
                  >
                    {ui.viewDetails}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <DetailModal open={active != null} entity={active} ui={ui} onClose={() => setActive(null)} />
    </>
  );
}
