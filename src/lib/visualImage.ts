/**
 * Site-wide media shell: one rounded clip, full-bleed `Image fill` — no matte, no shadow frame,
 * no inset padding on photography. Token: `--visual-image-radius` in `src/app/globals.css`.
 */
export const visualImageClipClass =
  "relative isolate overflow-hidden rounded-[var(--visual-image-radius)]";

/** Width-stretching hero/editorial column — same clip as {@link visualImageClipClass}. */
export const editorialPhotoShellClass = `${visualImageClipClass} w-full`;

/**
 * Only when an extra stacking layer is required (e.g. overlays). Prefer `<Image fill />` directly
 * inside {@link visualImageClipClass}.
 */
export const visualImageInnerClipClass = "absolute inset-0";

/** Intrinsic-sized logos/mark bitmaps without a fill shell. */
export const visualImageRoundedClass = "rounded-[var(--visual-image-radius)]";
