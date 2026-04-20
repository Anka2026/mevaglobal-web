/**
 * Single premium visual language for photography, illustration, and logo bitmaps.
 * Radius token: `--visual-image-radius` in `src/app/globals.css`.
 *
 * Pattern: one `overflow-hidden` + radius wrapper; `Image` fills inside — no outer white “frame” ring.
 */
export const visualImageClipClass =
  "relative overflow-hidden rounded-[var(--visual-image-radius)]";

/** Direct on `<Image>` when not using a clip wrapper (e.g. intrinsic-sized header logo). */
export const visualImageRoundedClass = "rounded-[var(--visual-image-radius)]";

/** Optional depth for large hero/editorial photos — keeps shadow on the bitmap clip, not a faux card. */
export const visualImageHeroShadowClass = "shadow-[var(--shadow-soft)]";
