import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/** Navy icon well shared by homepage featured tiles, verification listing cards, and section headers. */
export const SERVICE_CARD_ICON_WELL_CLASSNAME =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#005691] text-white shadow-[var(--shadow-card)] ring-1 ring-black/10 [&_svg]:!size-[22px]";

export function ServiceCard({
  title,
  description,
  icon,
  href,
  linkLabel,
  className,
  variant = "default",
  listingTone = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  linkLabel?: string;
  className?: string;
  variant?: "default" | "featured";
  /** Dense listing layout (verification services grid); icon well matches homepage treatment. */
  listingTone?: boolean;
}) {
  const featured = variant === "featured";
  const content = (
    <Card
      className={cn(
        "group h-full min-w-0 transition-[border-color,box-shadow,transform] hover:-translate-y-[1px] hover:border-[color:var(--brand-accent)]/35 hover:shadow-[var(--shadow-soft)]",
        listingTone && "flex min-h-0 flex-col",
        featured
          ? "p-7 sm:p-8 ring-1 ring-black/[0.04]"
          : listingTone
            ? "p-6 sm:p-7"
            : "p-7 sm:p-8",
        className,
      )}
    >
      {listingTone ? (
        <>
          <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
            <div className={SERVICE_CARD_ICON_WELL_CLASSNAME} aria-hidden="true">
              {icon}
            </div>
            <h3 className="min-w-0 flex-1 pt-0.5 text-[15px] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base">
              {title}
            </h3>
          </div>
          <p className="mt-2.5 text-sm leading-[1.65] text-[color:var(--text-muted)]">{description}</p>
          {href ? (
            <div className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[color:var(--brand-primary)]">
              <span>{linkLabel ?? ""}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
            <div className={SERVICE_CARD_ICON_WELL_CLASSNAME} aria-hidden="true">
              {icon}
            </div>
            <h3
              className={cn(
                "min-w-0 flex-1 font-semibold tracking-tight text-[color:var(--ink-dark)]",
                featured ? "pt-0.5 text-base leading-snug sm:text-[1.0625rem]" : "pt-0.5 text-[15px] leading-6",
              )}
            >
              {title}
            </h3>
          </div>
          <p
            className={cn(
              "leading-7 text-[color:var(--text-muted)]",
              featured ? "mt-3 text-[0.9375rem] leading-6" : "mt-2.5 text-sm",
            )}
          >
            {description}
          </p>
          {href ? (
            <div
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)]",
                featured ? "mt-5" : "mt-5",
              )}
            >
              <span>{linkLabel ?? ""}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          ) : null}
        </>
      )}
    </Card>
  );

  if (!href) return content;
  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
