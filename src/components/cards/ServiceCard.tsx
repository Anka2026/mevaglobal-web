import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { premiumGoldTopLine, premiumIconWell } from "@/lib/premiumUi";

/** Navy icon well shared by homepage featured tiles, verification listing cards, and section headers. */
export const SERVICE_CARD_ICON_WELL_CLASSNAME = premiumIconWell;

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
  listingTone?: boolean;
}) {
  const featured = variant === "featured";
  const content = (
    <Card
      className={cn(
        "group relative h-full min-w-0 overflow-hidden",
        listingTone && "flex min-h-0 flex-col",
        featured ? "p-7 sm:p-8" : listingTone ? "p-6 sm:p-7" : "p-7 sm:p-8",
        className,
      )}
    >
      <div className={premiumGoldTopLine} aria-hidden />
      {listingTone ? (
        <>
          <div className="flex min-w-0 items-start gap-3.5 sm:gap-4">
            <div className={SERVICE_CARD_ICON_WELL_CLASSNAME} aria-hidden="true">
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.68] text-[color:var(--text-muted)]">{description}</p>
            </div>
          </div>
          {href ? (
            <div className="mt-auto inline-flex items-center gap-2 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_22%,var(--border-soft))] pt-5 text-sm font-semibold text-[color:var(--brand-primary)]">
              <span>{linkLabel ?? ""}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="flex min-w-0 items-start gap-3.5 sm:gap-4">
            <div className={SERVICE_CARD_ICON_WELL_CLASSNAME} aria-hidden="true">
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3
                className={cn(
                  "font-semibold tracking-tight text-[color:var(--ink-dark)]",
                  featured ? "text-base leading-snug sm:text-[1.0625rem]" : "text-[15px] leading-snug",
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  "text-[color:var(--text-muted)]",
                  featured ? "mt-3 text-[0.9375rem] leading-[1.68]" : "mt-2.5 text-sm leading-relaxed",
                )}
              >
                {description}
              </p>
            </div>
          </div>
          {href ? (
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)]">
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
