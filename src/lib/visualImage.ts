/**
 * Single premium visual language for photography, illustration, and logo bitmaps.
 * Radius token: `--visual-image-radius` in `src/app/globals.css`.
 *
 * Pattern: `isolate` + one outer `overflow-hidden` + radius; inner fill layer repeats radius so
 * Next/Image `fill` bitmaps clip cleanly on all corners (no square leakage / faux white frame).
 */
export const visualImageClipClass =
  "relative isolate overflow-hidden rounded-[var(--visual-image-radius)]";

/**
 * Absolute fill layer inside a `relative` shell — use between outer clip and `<Image fill />`.
 */
export const visualImageInnerClipClass =
  "absolute inset-0 overflow-hidden rounded-[var(--visual-image-radius)]";

/** Matte behind `object-contain` heroes — soft tint, not a white card frame. */
export const heroEditorialMatteBgClass =
  "bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_32%,white)]";

/**
 * Editorial / hero photography — same treatment as Documents (Knowledge Hub) hero:
 * radius + shadow on the bitmap shell only; no border, ring, or outer white frame.
 */
export const editorialPhotoShellClass = `${visualImageClipClass} w-full shadow-[var(--shadow-soft)]`;

/** Direct on `<Image>` when not using a clip wrapper (e.g. intrinsic-sized header logo). */
export const visualImageRoundedClass = "rounded-[var(--visual-image-radius)]";

/** Optional depth for large hero/editorial photos — keeps shadow on the bitmap clip, not a faux card. */
export const visualImageHeroShadowClass = "shadow-[var(--shadow-soft)]";
