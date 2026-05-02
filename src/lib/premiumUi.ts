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
  "bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_40%,white)]";

export const premiumSectionWhite = "bg-white";

export const premiumCard =
  "rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_14%,var(--border-soft))] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.035] sm:p-7";

export const premiumCardMuted =
  "rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_12%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] p-6 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] sm:p-7";

export const premiumInstitutionalPanel =
  "rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_18%,var(--border-soft))] border-l-[3px] border-l-[color:var(--brand-primary)] bg-[color:color-mix(in_oklab,var(--brand-primary)_5.5%,white)] p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04] sm:p-8";

export const premiumTrustChip =
  "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_20%,var(--border-soft))] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-primary)] shadow-[var(--shadow-card)] sm:text-xs sm:tracking-[0.12em]";
