import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumAboutMotif,
  premiumCard,
  premiumCardMuted,
  premiumGoldTopLine,
  premiumSectionSlate,
} from "@/lib/premiumUi";

export type AboutCorporateCopy = {
  eyebrow: string;
  title: string;
  narrativeTitle: string;
  narrativeLead: string;
  narrativeSupport: string;
  pillars: readonly [{ title: string; body: string }, { title: string; body: string }];
};

export function AboutCorporateSection({ copy }: { copy: AboutCorporateCopy }) {
  return (
    <section className={cn("relative border-b border-[color:var(--border-soft)] py-12 sm:py-14", premiumSectionSlate)}>
      <div className={premiumAboutMotif} aria-hidden />
      <Container className="relative">
        <div className="mx-auto max-w-[76rem]">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            className="max-w-[44rem]"
            titleClassName="text-[1.75rem] sm:text-[2rem]"
          />
          <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-8">
            <article className={cn(premiumCard, "relative p-7 sm:p-8 lg:p-9")}>
              <div className={premiumGoldTopLine} aria-hidden />
              <h3 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                {copy.narrativeTitle}
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.76] text-[color:var(--ink-dark)]/92 sm:text-base sm:leading-[1.72]">
                {copy.narrativeLead}
              </p>
              {copy.narrativeSupport.trim() ? (
                <p className="mt-4 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                  {copy.narrativeSupport}
                </p>
              ) : null}
            </article>
            <div className="flex flex-col gap-5 sm:gap-6">
              {copy.pillars.map((pillar) => (
                <article key={pillar.title} className={cn(premiumCardMuted, "relative flex-1 p-6 sm:p-7")}>
                  <div className={premiumGoldTopLine} aria-hidden />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.68] text-[color:var(--ink-dark)]/88 sm:text-[0.9375rem]">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
