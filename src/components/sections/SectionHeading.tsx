import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
  descriptionVariant = "default",
  /** Page-level marketing heroes should use `h1`; in-section headings stay `h2`. */
  titleAs = "h2",
}: {
  title: string;
  eyebrow?: string;
  description?: string | string[];
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  /** First paragraph stronger, following paragraphs lighter (e.g. services hero). */
  descriptionVariant?: "default" | "lead-support";
  titleAs?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "max-w-[56rem]",
        align === "center" ? "mx-auto" : "",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)]">
          {eyebrow}
        </p>
      ) : null}
      {titleAs === "h1" ? (
        <h1
          className={cn(
            "mt-2 text-[1.6rem] font-semibold leading-[1.15] tracking-tight text-[color:var(--ink-dark)] sm:text-[2rem]",
            titleClassName,
          )}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={cn(
            "mt-2 text-[1.6rem] font-semibold leading-[1.15] tracking-tight text-[color:var(--ink-dark)] sm:text-[2rem]",
            titleClassName,
          )}
        >
          {title}
        </h2>
      )}
      {description ? (
        <div
          className={cn(
            "mt-3 space-y-3",
            descriptionVariant === "lead-support" && "space-y-3.5 sm:space-y-4",
            descriptionVariant !== "lead-support" && "text-sm leading-7 text-[color:var(--text-muted)] sm:text-[1.05rem]",
            descriptionClassName,
          )}
        >
          {(Array.isArray(description) ? description : [description])
            .filter((p): p is string => typeof p === "string" && p.length > 0)
            .map((p, i) => (
            <p
              key={`${i}-${p.slice(0, 40)}`}
              className={cn(
                descriptionVariant === "lead-support" &&
                  (i === 0
                    ? "text-[0.9375rem] leading-[1.72] text-[color:var(--ink-dark)]/88 sm:text-[1.0625rem]"
                    : "text-sm leading-relaxed text-[color:var(--text-muted)]"),
              )}
            >
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

