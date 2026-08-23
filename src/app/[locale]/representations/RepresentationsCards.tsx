"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Handshake, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { premiumCardInteractive, premiumFocusPill, premiumGoldTopLine, premiumIconWellSoft } from "@/lib/premiumUi";

export type RepresentationCardField = {
  label: string;
  text: string;
};

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
  relationshipBadge?: string;
  highlightStrip?: string;
  detailsCtaLabel?: string;
  judgementBoundaryNote?: string;
  /** When set, replaces the shared cooperation-field labels/copy for this card and its detail modal. */
  cardFields?: {
    cooperationScope: RepresentationCardField;
    localCoordination: RepresentationCardField;
    documentCoordination: RepresentationCardField;
    applicationRouting: RepresentationCardField;
    verificationProcess: RepresentationCardField;
  };
  /** CETIZION Verifica only — GRI training via strategic partnership (CETIZION is the GRI CTP, not Meva). */
  griTraining?: {
    title: string;
    paragraphs: readonly [string, string, string];
    features: readonly [string, string, string];
    ctaLabel: string;
    ctaHref: string;
    markAlt: string;
  };
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

function resolveCardFields(entity: OrganizationEntity, ui: RepresentationsUiCopy) {
  return {
    cooperationScope: entity.cardFields?.cooperationScope ?? {
      label: ui.cooperationScopeLabel,
      text: entity.networkRole,
    },
    localCoordination: entity.cardFields?.localCoordination ?? {
      label: ui.localCoordinationLabel,
      text: ui.localCoordinationScope,
    },
    documentCoordination: entity.cardFields?.documentCoordination ?? {
      label: ui.documentCoordinationLabel,
      text: entity.technicalFocus,
    },
    applicationRouting: entity.cardFields?.applicationRouting ?? {
      label: ui.applicationRoutingLabel,
      text: ui.applicationRoutingNote,
    },
    verificationProcess: entity.cardFields?.verificationProcess ?? {
      label: ui.verificationCoordinationLabel,
      text: ui.verificationCoordinationNote,
    },
  };
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

const GRI_TRAINING_MARK_SRC = "/partner-logos/gri-certified-training-partner.png";

function GriTrainingModule({
  module,
}: {
  module: NonNullable<OrganizationEntity["griTraining"]>;
}) {
  return (
    <div className="mt-6 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_16%,var(--border-soft))] pt-6">
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex justify-center lg:col-span-3 lg:justify-start">
          <Image
            src={GRI_TRAINING_MARK_SRC}
            alt={module.markAlt}
            width={640}
            height={320}
            className="h-auto w-full max-w-[13.5rem] lg:max-w-none"
            sizes="(max-width: 1023px) 216px, 24vw"
          />
        </div>
        <div className="min-w-0 lg:col-span-9">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
            {module.title}
          </h4>
          <div className="mt-3 space-y-3 text-sm leading-[1.74] text-[color:var(--ink-dark)]/92 sm:text-[0.9375rem] sm:leading-[1.76]">
            {module.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
            {module.features.map((label) => (
              <li key={label} className={premiumFocusPill}>
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <ButtonLink
              href={module.ctaHref}
              variant="secondary"
              size="sm"
              className="group/gri inline-flex !text-[color:var(--brand-primary)]"
            >
              <span>{module.ctaLabel}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform group-hover/gri:translate-x-0.5"
                aria-hidden
              />
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewDetailsButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group/cta inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))]",
        "bg-white px-4 text-sm font-semibold text-[color:var(--brand-primary)]",
        "shadow-[var(--shadow-card)] transition-[border-color,background-color,box-shadow]",
        "hover:border-[color:var(--brand-gold)] hover:bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_60%,white)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
      )}
    >
      <span>{label}</span>
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform group-hover/cta:translate-x-0.5"
        aria-hidden
      />
    </button>
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
  const fields = resolveCardFields(entity, ui);
  const boundaryNote = entity.judgementBoundaryNote ?? ui.judgementBoundaryNote;

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
          <div className="min-w-0">
            <p id={titleId} className="text-base font-semibold tracking-tight text-[color:var(--ink-dark)]">
              {ariaTitle}
            </p>
            {entity.relationshipBadge ? (
              <p className={cn(premiumFocusPill, "mt-2")}>{entity.relationshipBadge}</p>
            ) : null}
          </div>
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
              <LabeledLine label={fields.cooperationScope.label} text={fields.cooperationScope.text} />
              <LabeledLine label={fields.localCoordination.label} text={fields.localCoordination.text} />
              <LabeledLine label={fields.documentCoordination.label} text={fields.documentCoordination.text} />
              <LabeledLine label={fields.applicationRouting.label} text={fields.applicationRouting.text} />
              <LabeledLine label={fields.verificationProcess.label} text={fields.verificationProcess.text} />
            </div>

            <p className="mt-4 rounded-xl border border-[color:color-mix(in_oklab,var(--brand-primary)_12%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)] px-3.5 py-3 text-xs leading-relaxed text-[color:var(--ink-dark)]/88">
              {boundaryNote}
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
          {items.map((r) => {
            const fields = resolveCardFields(r, ui);
            const detailsLabel = r.detailsCtaLabel ?? ui.viewDetails;
            return (
            <article key={r.id} id={r.id} className={cardClass}>
              <div className={premiumGoldTopLine} aria-hidden />
              <div
                className={cn(
                  "flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-9 sm:p-7 lg:gap-11 lg:p-9",
                  r.griTraining && "pb-2 sm:pb-2 lg:pb-2",
                )}
              >
                <div className="flex shrink-0 justify-center sm:w-[min(100%,17.5rem)] lg:w-[18.5rem]">
                  <PartnerLogoArea entity={r} variant="featured" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-3">
                    <div className={premiumIconWellSoft}>
                      <Handshake className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-lg">
                        {r.name}
                      </h3>
                      {r.relationshipBadge ? (
                        <p className={cn(premiumFocusPill, "mt-2")}>{r.relationshipBadge}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <LabeledLine label={fields.cooperationScope.label} text={fields.cooperationScope.text} />
                    <LabeledLine label={fields.localCoordination.label} text={fields.localCoordination.text} />
                    <LabeledLine label={fields.documentCoordination.label} text={fields.documentCoordination.text} />
                    <LabeledLine label={fields.applicationRouting.label} text={fields.applicationRouting.text} />
                    <LabeledLine
                      label={fields.verificationProcess.label}
                      text={fields.verificationProcess.text}
                      className="sm:col-span-2"
                    />
                  </div>
                  {r.highlightStrip ? (
                    <p className="mt-4 text-[0.8125rem] leading-relaxed text-[color:var(--brand-primary)] sm:text-sm">
                      {r.highlightStrip}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm leading-[1.72] text-[color:var(--ink-dark)]/92 sm:text-[0.9375rem] sm:leading-[1.74]">
                    {r.cardSummary}
                  </p>
                  {r.griTraining ? null : (
                    <div className="mt-5 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_16%,var(--border-soft))] pt-5">
                      <ViewDetailsButton label={detailsLabel} onClick={() => open(r)} />
                    </div>
                  )}
                </div>
              </div>
              {r.griTraining ? (
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 lg:px-9 lg:pb-9">
                  <GriTrainingModule module={r.griTraining} />
                  <div className="mt-5 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_16%,var(--border-soft))] pt-5">
                    <ViewDetailsButton label={detailsLabel} onClick={() => open(r)} />
                  </div>
                </div>
              ) : null}
            </article>
            );
          })}
        </div>
      </div>

      <DetailModal open={active != null} entity={active} ui={ui} onClose={() => setActive(null)} />
    </>
  );
}
