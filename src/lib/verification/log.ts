/** Structured logging for verification-services (easy to grep in server logs). */

export function logVerificationIssue(
  kind:
    | "missing-dictionary"
    | "shape-mismatch"
    | "missing-visual"
    | "locale-fallback"
    | "listing-skip"
    | "listing-render"
    | "integrity",
  slug: string,
  message: string,
  extra?: Record<string, string>,
): void {
  const suffix = extra
    ? ` ${Object.entries(extra)
        .map(([k, v]) => `${k}=${v}`)
        .join(" ")}`
    : "";
  console.warn(`[verification-services][${kind}] slug=${slug} ${message}${suffix}`);
}
