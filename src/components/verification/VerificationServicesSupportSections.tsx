import { FileCheck2, Flag, Landmark, LayoutGrid, ScanSearch } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const whyIcons = [Landmark, LayoutGrid, ScanSearch, Flag] as const;

const whyIconFrame =
  "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--brand-accent-soft)] via-white to-[color:var(--brand-accent-soft)]/45 text-[color:var(--brand-primary)] shadow-[0_8px_22px_-8px_rgba(37,99,235,0.16)] ring-1 ring-[color:var(--border-soft)]/80 [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.85)]";

/** Lucide icons isolated from the main listing route module (smaller webpack chunk for `/verification-services`). */
export function VerificationServicesWhySection({
  servicesCopy,
}: {
  servicesCopy: Dictionary["pages"]["services"];
}) {
  const s = servicesCopy;
  const whyItems = s.whyIndependent?.items ?? [];
  const whyTitle = s.whyIndependent?.title ?? "";

  return (
    <section className="border-b border-[color:var(--border-soft)] pb-10 lg:pb-11">
      <SectionHeading title={whyTitle} className="max-w-[40rem]" titleClassName="sm:text-[1.75rem]" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyItems.map((item, idx) => {
          const Icon = whyIcons[idx] ?? FileCheck2;
          return (
            <Card key={`${item.title}-${idx}`} className="p-6 sm:p-7">
              <div className={whyIconFrame}>
                <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-[color:var(--text-muted)]">{item.description}</p>
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
    <section className="mt-10 border-t border-[color:var(--border-soft)] pt-10 lg:mt-11 lg:pt-11">
      <SectionHeading
        title={howTitle}
        description={howIntro}
        className="max-w-[48rem]"
        titleClassName="sm:text-[1.65rem]"
      />
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {howSteps.map((step, idx) => (
          <Card key={`${step.title}-${idx}`} className="relative p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-xs font-bold text-white">
                {idx + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.65] text-[color:var(--text-muted)]">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
