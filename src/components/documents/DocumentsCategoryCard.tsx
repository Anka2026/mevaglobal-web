import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { premiumCardInteractive, premiumGoldTopLine, premiumIconWellSoft } from "@/lib/premiumUi";

export function DocumentsCategoryCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <article className={cn(premiumCardInteractive, "group flex h-full flex-col p-6 sm:p-7")}>
      <div className={premiumGoldTopLine} aria-hidden />
      <div className={premiumIconWellSoft}>
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-5 text-[0.9375rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base">
        {title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-[1.68] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
        {body}
      </p>
    </article>
  );
}
