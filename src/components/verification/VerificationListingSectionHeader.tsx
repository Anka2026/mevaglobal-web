import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumGoldTopLine,
  premiumGroupBadgePanel,
  premiumListingSectionHeader,
} from "@/lib/premiumUi";

export function VerificationListingSectionHeader({
  title,
  description,
  icon,
  badgeLabel,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  /** Short group label shown in the badge panel (localized). */
  badgeLabel: string;
  className?: string;
}) {
  return (
    <header className={cn(premiumListingSectionHeader, className)}>
      <div className={premiumGoldTopLine} aria-hidden />
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <SectionHeading
          title={title}
          description={description}
          className="max-w-[48rem]"
          titleClassName="sm:text-[1.65rem] sm:leading-snug"
          withTitleAccent
        />
        <div className={premiumGroupBadgePanel} aria-hidden>
          <span className="max-w-[6.5rem] text-[10px] font-bold uppercase leading-snug tracking-[0.14em] text-[color:color-mix(in_oklab,var(--brand-gold)_85%,var(--brand-primary))]">
            {badgeLabel}
          </span>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[color:var(--brand-primary)] text-white ring-2 ring-[color:color-mix(in_oklab,var(--brand-gold)_40%,transparent)] [&_svg]:size-[1.375rem]">
            {icon}
          </span>
        </div>
      </div>
    </header>
  );
}
