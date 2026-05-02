import { BadgeCheck, Globe2, FileCheck2, Layers } from "lucide-react";
import { SERVICE_CARD_ICON_WELL_CLASSNAME } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

/** Order matches `home.whyItems` in locale dictionaries (leadership → cross-border → documentation → contextual depth). */
const WHY_ICONS = [BadgeCheck, Globe2, FileCheck2, Layers] as const;

export function WhyMevaGlobalSection({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="bg-[color:var(--brand-accent-soft)] pt-10 pb-7 sm:pt-12 sm:pb-9">
      <Container>
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title={title}
            className="max-w-2xl"
            titleClassName="text-[1.75rem] sm:text-[2.125rem]"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
            {items.map((it, idx) => {
              const Icon = WHY_ICONS[idx] ?? BadgeCheck;
              return (
                <div
                  key={it.title}
                  className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] sm:p-8"
                >
                  <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
                    <div className={SERVICE_CARD_ICON_WELL_CLASSNAME} aria-hidden="true">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="min-w-0 flex-1 pt-0.5 text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                      {it.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-7 text-[color:var(--text-muted)]">
                    {it.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
