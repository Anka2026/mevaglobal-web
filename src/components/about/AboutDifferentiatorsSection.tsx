import { Scale, FileText, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumCard,
  premiumGoldTopLine,
  premiumIconWellSoft,
  premiumNavyStatement,
  premiumSectionMuted,
} from "@/lib/premiumUi";

const icons = [Scale, FileText, Shield] as const;

export type AboutDifferentiatorsCopy = {
  eyebrow: string;
  title: string;
  statementTitle: string;
  statementBody: string;
  statementNote?: string;
  principles: readonly [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
};

export function AboutDifferentiatorsSection({ copy }: { copy: AboutDifferentiatorsCopy }) {
  return (
    <section className={cn("border-b border-[color:var(--border-soft)] py-12 sm:py-14", premiumSectionMuted)}>
      <Container>
        <div className="mx-auto max-w-[76rem]">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            className="max-w-[40rem]"
            titleClassName="text-[1.65rem] sm:text-[1.85rem]"
          />
          <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-8">
            <article className={cn(premiumNavyStatement, "relative flex flex-col justify-center")}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--brand-gold)] to-transparent"
                aria-hidden
              />
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{copy.statementTitle}</h3>
              <p className="mt-4 text-sm leading-[1.72] text-white/88 sm:text-[0.9375rem]">{copy.statementBody}</p>
              {copy.statementNote ? (
                <p className="mt-4 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/72 sm:text-sm">
                  {copy.statementNote}
                </p>
              ) : null}
            </article>
            <div className="grid gap-4 sm:gap-5">
              {copy.principles.map((principle, idx) => {
                const Icon = icons[idx] ?? Shield;
                return (
                  <article key={principle.title} className={cn(premiumCard, "relative flex gap-4 p-5 sm:p-6")}>
                    <div className={premiumGoldTopLine} aria-hidden />
                    <div className={premiumIconWellSoft}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[0.9375rem]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.65] text-[color:var(--text-muted)]">{principle.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
