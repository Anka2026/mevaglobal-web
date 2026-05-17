/**
 * Shared institutional “premium” surfaces — verification-body aesthetic, not startup flash.
 * Use with existing brand tokens from `globals.css`.
 */

export const premiumHeroBackdrop =
  "bg-gradient-to-b from-white via-[color:color-mix(in_oklab,var(--brand-accent-soft)_22%,white)] to-[color:color-mix(in_oklab,var(--brand-accent-soft)_48%,white)]";

/** Editorial heroes — cool neutral tint, no stark white; pairs with rounded imagery without a card frame. */
export const premiumEditorialHeroSurface =
  "bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_72%,var(--background-main))] via-[color:color-mix(in_oklab,var(--brand-accent-soft)_44%,var(--background-main))] to-[color:color-mix(in_oklab,var(--brand-primary)_7%,var(--background-main))]";

export const premiumSectionMuted =
  "bg-gradient-to-b from-[color:color-mix(in_oklab,var(--brand-accent-soft)_48%,white)] to-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)]";

export const premiumSectionSlate =
  "bg-gradient-to-b from-[color:color-mix(in_oklab,var(--footer-deep)_5%,white)] via-[color:color-mix(in_oklab,var(--brand-accent-soft)_32%,white)] to-white";

export const premiumSectionWhite = "bg-white";

/** Trust / assurance bands — very light cool wash */
export const premiumSectionTrust =
  "border-b border-[color:var(--border-soft)] bg-gradient-to-b from-[color:color-mix(in_oklab,var(--footer-deep)_4%,white)] via-white to-[color:color-mix(in_oklab,var(--brand-accent-soft)_38%,white)]";

/** Statement lookup / registry features */
export const premiumSectionStatement =
  "border-b border-[color:var(--border-soft)] bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_42%,white)] via-white to-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)]";

export const premiumCard =
  "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_16%,var(--border-soft))] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_12%,transparent)] sm:p-7";

export const premiumCardMuted =
  "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_12%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] p-6 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] sm:p-7";

export const premiumCardInteractive =
  "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_16%,var(--border-soft))] bg-white shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_14%,transparent)] transition-[border-color,box-shadow,transform] duration-250 motion-safe:hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--brand-gold)_42%,var(--border-soft))] hover:shadow-[var(--shadow-premium-hover)]";

export const premiumCardElevated =
  "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_16%,var(--border-soft))] bg-white shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_16%,transparent)] transition-[border-color,box-shadow,transform] duration-250 motion-safe:hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--brand-gold)_38%,var(--border-soft))] hover:shadow-[var(--shadow-premium-hover)]";

export const premiumInstitutionalPanel =
  "rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_18%,var(--border-soft))] border-l-[3px] border-l-[color:var(--brand-primary)] bg-[color:color-mix(in_oklab,var(--brand-primary)_5.5%,white)] p-7 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_12%,transparent)] sm:p-8";

export const premiumTrustChip =
  "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_55%,white)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-primary)] shadow-[var(--shadow-card)] sm:text-xs sm:tracking-[0.12em]";

export const premiumFocusPill =
  "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_85%,white)] px-3 py-1.5 text-[0.6875rem] font-medium leading-snug text-[color:var(--ink-dark)]/88 sm:text-xs";

export const premiumNavPill =
  "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))] bg-white px-3.5 py-1.5 text-sm font-semibold text-[color:var(--brand-primary)] shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_10%,transparent)] transition-[border-color,background-color,box-shadow] hover:border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border-soft))] hover:bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_55%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]";

/** 2px visible gold accent — card tops (always on). */
export const premiumGoldTopLine =
  "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[color:color-mix(in_oklab,var(--brand-gold)_8%,transparent)] via-[color:var(--brand-gold)] to-[color:color-mix(in_oklab,var(--brand-gold)_8%,transparent)]";

/** Hover-only subtle line (legacy / optional overlays). */
export const premiumGoldTopLineHover =
  "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--brand-gold)] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100";

/** Left accent before section titles. */
export const premiumTitleAccent =
  "mb-3.5 h-0.5 w-10 rounded-full bg-gradient-to-r from-[color:var(--brand-gold)] to-[color:color-mix(in_oklab,var(--brand-gold)_25%,transparent)]";

/** Eyebrow row with gold rule. */
export const premiumEyebrowRow =
  "flex items-center gap-3";

export const premiumEyebrowRule =
  "h-0.5 w-8 shrink-0 rounded-full bg-[color:var(--brand-gold)]";

/** Primary icon well — navy, for service / feature cards */
export const premiumIconWell =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-primary)] text-white shadow-[var(--shadow-card)] ring-2 ring-[color:color-mix(in_oklab,var(--brand-gold)_35%,transparent)] [&_svg]:!size-[1.375rem]";

/** Soft icon well — trust highlights, secondary features */
export const premiumIconWellSoft =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-[color:color-mix(in_oklab,var(--brand-gold-soft)_90%,white)] text-[color:var(--brand-primary)] ring-2 ring-[color:color-mix(in_oklab,var(--brand-gold)_32%,var(--border-soft))] [&_svg]:size-5";

/** Process step index badge */
export const premiumStepBadge =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_80%,white)] text-sm font-semibold tabular-nums text-[color:var(--brand-primary)] ring-2 ring-[color:color-mix(in_oklab,var(--brand-gold)_30%,var(--border-soft))]";

export const premiumEyebrow =
  "text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)]";

export const premiumSectionHeading =
  "text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[color:var(--ink-dark)] sm:text-[2rem] sm:leading-[1.1]";

/** Integrated group header panel for verification-services listing sections. */
export const premiumListingSectionHeader =
  "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_14%,var(--border-soft))] bg-gradient-to-br from-white via-white to-[color:color-mix(in_oklab,var(--brand-gold-soft)_45%,white)] p-5 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_14%,transparent)] sm:p-6 lg:p-7";

export const premiumGroupBadgePanel =
  "flex shrink-0 items-center gap-3 rounded-xl border border-[color:color-mix(in_oklab,var(--brand-gold)_32%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_70%,white)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_18%,transparent)]";

export const premiumGoldDivider =
  "h-px w-full bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--brand-gold)_55%,var(--border-soft))] to-transparent";

/** About page — subtle verification grid (very light, non-decorative). */
export const premiumAboutMotif =
  "pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,var(--brand-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-primary)_1px,transparent_1px)] [background-size:2.75rem_2.75rem]";

/** Large navy statement panel for institutional claims. */
export const premiumNavyStatement =
  "relative overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_22%,transparent)] bg-gradient-to-br from-[color:var(--brand-primary)] via-[color:color-mix(in_oklab,var(--brand-primary)_92%,#0d2840)] to-[color:color-mix(in_oklab,var(--footer-deep)_88%,var(--brand-primary))] p-7 text-white shadow-[var(--shadow-soft)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_18%,transparent)] sm:p-8 lg:p-9";

export const premiumHeroVisualPanel =
  "relative overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_22%,var(--border-soft))] bg-white shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_12%,transparent)]";
