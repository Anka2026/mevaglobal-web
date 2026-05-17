"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Handshake, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { premiumCardInteractive, premiumGoldTopLine, premiumIconWellSoft } from "@/lib/premiumUi";

export type OrganizationEntity = {
  id: string;
  name: string;
  logoSrc: string;
  /** Set server-side when the resolved asset is a placeholder (no real logo on disk). */
  logoIsPlaceholder?: boolean;
  region: string;
  networkRole: string;
  technicalFocus: string;
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
  cooperationScopeLabel: string;
  localCoordinationLabel: string;
  documentCoordinationLabel: string;
  applicationRoutingLabel: string;
  verificationCoordinationLabel: string;
  localCoordinationScope: string;
  applicationRoutingNote: string;
  verificationCoordinationNote: string;
  judgementBoundaryNote: string;
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

function PartnerLogoArea({
  entity,
  variant = "default",
}: {
  entity: OrganizationEntity;
  variant?: "default" | "compact" | "featured";
}) {
  const compact = variant === "compact";
  const featured = variant === "featured";

  if (entity.logoIsPlaceholder) {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center overflow-hidden rounded-[var(--visual-image-radius)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_52%,white)] px-4",
          featured && "min-h-[8.75rem] py-7 sm:min-h-[10.25rem] sm:py-9 lg:min-h-[11rem]",
          compact && "min-h-[3.75rem] py-3 sm:min-h-16 sm:py-3.5",
          !featured && !compact && "min-h-[4.5rem] py-5 sm:min-h-[5rem]",
        )}
      >
        <p
          className={cn(
            "max-w-[20rem] text-center font-semibold tracking-tight text-[color:var(--ink-dark)]",
            featured && "text-[0.9375rem] leading-snug sm:text-base",
            compact && "text-[13px] leading-snug sm:text-sm",
            !featured && !compact && "text-sm leading-snug sm:text-[0.9375rem]",
          )}
        >
          {entity.name}
        </p>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--visual-image-radius)]",
        featured &&
          "mx-auto min-h-[8.75rem] h-[8.75rem] max-w-[15rem] sm:mx-0 sm:min-h-[10.25rem] sm:h-[10.25rem] sm:max-w-[17.5rem] lg:min-h-[11rem] lg:h-[11rem] lg:max-w-[18rem]",
        compact && "h-[3.75rem] sm:h-16",
        !featured && !compact && "h-[4.5rem] sm:h-[5rem]",
      )}
    >
      <Image
        src={entity.logoSrc}
        alt=""
        fill
        className="object-contain object-center"
        sizes={
          featured
            ? "(max-width: 640px) 60vw, 240px"
            : compact
              ? "(max-width: 768px) 85vw, 360px"
              : "(max-width: 640px) 72vw, 288px"
        }
      />
    </div>
  );
}

function LabeledLine({ label, text, className }: { label: string; text: string; className?: string }) {
  return (
    <div className={cn("text-sm leading-snug", className)}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">{label}</p>
      <p className="mt-1 leading-relaxed text-[color:var(--ink-dark)]/90">{text}</p>
    </div>
  );
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
                "overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_10%,var(--border-soft))] bg-white",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
              )}
            >
              <PartnerLogoArea entity={entity} variant="default" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <LabeledLine label={ui.cooperationScopeLabel} text={entity.networkRole} />
              <LabeledLine label={ui.localCoordinationLabel} text={ui.localCoordinationScope} />
              <LabeledLine label={ui.documentCoordinationLabel} text={entity.technicalFocus} />
              <LabeledLine label={ui.applicationRoutingLabel} text={ui.applicationRoutingNote} />
              <LabeledLine label={ui.verificationCoordinationLabel} text={ui.verificationCoordinationNote} />
            </div>

            <p className="mt-4 rounded-xl border border-[color:color-mix(in_oklab,var(--brand-primary)_12%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)] px-3.5 py-3 text-xs leading-relaxed text-[color:var(--ink-dark)]/88">
              {ui.judgementBoundaryNote}
            </p>

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
}: {
  title: string;
  body: string;
  items: OrganizationEntity[];
  ui: RepresentationsUiCopy;
}) {
  const [active, setActive] = useState<OrganizationEntity | null>(null);

  const cardClass = useMemo(
    () => cn(premiumCardInteractive, "scroll-mt-[5.5rem]"),
    [],
  );

  const open = (entity: OrganizationEntity) => setActive(entity);

  return (
    <>
      <div className="space-y-8 sm:space-y-10">
        <header className="max-w-[46rem]">
          <h2 className="text-[1.55rem] font-semibold leading-[1.15] tracking-tight text-[color:var(--ink-dark)] sm:text-[1.85rem]">
            {title}
          </h2>
          <p className="mt-3.5 max-w-[52rem] text-[0.9375rem] leading-[1.75] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.72]">
            {body}
          </p>
        </header>

        <div className="flex flex-col gap-9 sm:gap-11 lg:gap-12">
          {items.map((r) => (
            <article key={r.id} id={r.id} className={cardClass}>
              <div className={premiumGoldTopLine} aria-hidden />
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-9 sm:p-7 lg:gap-11 lg:p-9">
                <div className="flex shrink-0 justify-center sm:w-[min(100%,17.5rem)] lg:w-[18.5rem]">
                  <PartnerLogoArea entity={r} variant="featured" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-3">
                    <div className={premiumIconWellSoft}>
                      <Handshake className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="min-w-0 flex-1 text-[1.0625rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-lg">
                      {r.name}
                    </h3>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <LabeledLine label={ui.cooperationScopeLabel} text={r.networkRole} />
                    <LabeledLine label={ui.localCoordinationLabel} text={ui.localCoordinationScope} />
                    <LabeledLine label={ui.documentCoordinationLabel} text={r.technicalFocus} />
                    <LabeledLine label={ui.applicationRoutingLabel} text={ui.applicationRoutingNote} />
                    <LabeledLine
                      label={ui.verificationCoordinationLabel}
                      text={ui.verificationCoordinationNote}
                      className="sm:col-span-2"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-[1.72] text-[color:var(--ink-dark)]/92 sm:text-[0.9375rem] sm:leading-[1.74]">
                    {r.cardSummary}
                  </p>
                  <div className="mt-5 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_16%,var(--border-soft))] pt-5">
                    <button
                      type="button"
                      onClick={() => open(r)}
                      className={cn(
                        "group/cta inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))]",
                        "bg-white px-4 text-sm font-semibold text-[color:var(--brand-primary)]",
                        "shadow-[var(--shadow-card)] transition-[border-color,background-color,box-shadow]",
                        "hover:border-[color:var(--brand-gold)] hover:bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_60%,white)]",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
                      )}
                    >
                      <span>{ui.viewDetails}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition-transform group-hover/cta:translate-x-0.5"
                        aria-hidden
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DetailModal open={active != null} entity={active} ui={ui} onClose={() => setActive(null)} />
    </>
  );
}
