import type { Locale } from "@/i18n/locales";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Premium, non–plain-list fallback when the catalog yields zero renderable sections.
 * Uses inline layout tokens so the panel stays legible if global CSS chunks fail in dev.
 */
export function VerificationListingRecoverablePanel({
  locale,
  title,
  body,
  contactCta,
}: {
  locale: Locale;
  title: string;
  body: string;
  contactCta: string;
}) {
  return (
    <aside
      role="status"
      aria-live="polite"
      className="mt-10 rounded-2xl border border-[color:var(--border-soft)] bg-white p-7 shadow-[var(--shadow-card)] sm:p-8"
      style={{
        marginTop: "2.5rem",
        borderRadius: "1rem",
        border: "1px solid #d7e3ec",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 2px rgba(29, 37, 47, 0.06)",
        padding: "1.75rem",
      }}
    >
      <h2
        className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)]"
        style={{ color: "#1d252f", fontSize: "1.125rem", fontWeight: 600, margin: 0 }}
      >
        {title}
      </h2>
      <p
        className="mt-3 max-w-[52rem] text-sm leading-7 text-[color:var(--text-muted)]"
        style={{ marginTop: "0.75rem", color: "#6f8799", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: "52rem" }}
      >
        {body}
      </p>
      <div className="mt-6">
        <ButtonLink
          href={`/${locale}/contact`}
          variant="primary"
          size="md"
          className="inline-flex"
          style={{
            borderRadius: "1rem",
            backgroundColor: "#005691",
            color: "#ffffff",
            border: "1px solid transparent",
            padding: "0.5rem 1.25rem",
            fontWeight: 600,
            fontSize: "0.875rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {contactCta}
        </ButtonLink>
      </div>
    </aside>
  );
}
