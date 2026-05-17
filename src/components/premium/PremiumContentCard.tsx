import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { premiumCardElevated, premiumGoldTopLine, premiumIconWellSoft } from "@/lib/premiumUi";

export function PremiumContentCard({
  icon: Icon,
  title,
  body,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <article className={cn(premiumCardElevated, "flex h-full flex-col p-6 sm:p-7", className)}>
      <div className={premiumGoldTopLine} aria-hidden />
      {Icon ? (
        <div className={premiumIconWellSoft}>
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      ) : null}
      <h3
        className={cn(
          "text-[0.9375rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base",
          Icon && "mt-4",
        )}
      >
        {title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
        {body}
      </p>
    </article>
  );
}
