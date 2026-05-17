import { FileCheck2, Flag, Landmark, LayoutGrid, ScanSearch } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Dictionary } from "@/i18n/types";
import {
  premiumGoldTopLine,
  premiumGoldDivider,
  premiumIconWellSoft,
  premiumStepBadge,
} from "@/lib/premiumUi";

const whyIcons = [Landmark, LayoutGrid, ScanSearch, Flag] as const;

export function VerificationServicesWhySection({
  servicesCopy,
}: {
  servicesCopy: Dictionary["pages"]["services"];
}) {
  const s = servicesCopy;
  const whyItems = s.whyIndependent?.items ?? [];
  const whyTitle = s.whyIndependent?.title ?? "";

  return (
    <section className="border-b border-[color:var(--border-soft)] pb-10 lg:pb-12">
      <SectionHeading
        title={whyTitle}
        className="max-w-[40rem]"
        titleClassName="sm:text-[1.75rem]"
        withTitleAccent
      />
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {whyItems.map((item, idx) => {
          const Icon = whyIcons[idx] ?? FileCheck2;
          return (
            <Card key={`${item.title}-${idx}`} className="group relative p-6 sm:p-7">
              <div className={premiumGoldTopLine} aria-hidden />
              <div className={premiumIconWellSoft}>
                <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.68] text-[color:var(--text-muted)]">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function VerificationServicesHowSection({
  servicesCopy,
}: {
  servicesCopy: Dictionary["pages"]["services"];
}) {
  const s = servicesCopy;
  const howSteps = s.howWeWork?.steps ?? [];
  const howTitle = s.howWeWork?.title ?? "";
  const howIntro = s.howWeWork?.intro ?? "";

  return (
    <section className="mt-11 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] pt-11 lg:mt-12 lg:pt-12">
      <div className={premiumGoldDivider} aria-hidden />
      <SectionHeading
        title={howTitle}
        description={howIntro}
        className="mt-7 max-w-[48rem]"
        titleClassName="sm:text-[1.65rem]"
        withTitleAccent
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {howSteps.map((step, idx) => (
          <Card key={`${step.title}-${idx}`} className="relative p-5 sm:p-6">
            <div className={premiumGoldTopLine} aria-hidden />
            <div className="flex items-start gap-3">
              <span className={premiumStepBadge}>{idx + 1}</span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.68] text-[color:var(--text-muted)]">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
