import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { TeamProfilePhoto } from "@/components/about/TeamProfilePhoto";
import { cn } from "@/lib/cn";
import { premiumCard, premiumSectionWhite } from "@/lib/premiumUi";

const LEADERSHIP_PHOTO_SRC = "/images/team/dilan-arslan.png";

const focusPillClass =
  "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_16%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] px-3 py-1.5 text-[0.6875rem] font-medium leading-snug text-[color:var(--ink-dark)]/88 sm:text-xs";

type Props = {
  leadership: Dictionary["aboutLeadership"];
};

export function AboutLeadershipSection({ leadership }: Props) {
  const sectionLabelClass =
    "text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)] sm:text-xs sm:tracking-[0.18em]";

  return (
    <section className={cn("border-b border-[color:var(--border-soft)] py-11 sm:py-12", premiumSectionWhite)}>
      <Container>
        <div className="mx-auto max-w-7xl">
          <h2 className={sectionLabelClass}>{leadership.title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-[0.9375rem] sm:leading-relaxed">
            {leadership.intro}
          </p>
          <article
            className={cn(
              premiumCard,
              "mt-8 flex flex-col gap-8 p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(13.5rem,17.5rem)_minmax(0,1fr)] lg:items-stretch lg:gap-10",
            )}
          >
            <div className="mx-auto w-full max-w-[17.5rem] shrink-0 lg:mx-0 lg:max-w-none lg:self-stretch">
              <TeamProfilePhoto
                src={LEADERSHIP_PHOTO_SRC}
                alt={leadership.photoAlt}
                fillColumn
                className="h-full w-full"
              />
            </div>
            <div className="flex min-h-0 flex-col gap-6 lg:min-h-full lg:justify-between lg:gap-8">
              <div className="min-w-0">
                <p className="text-xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.35rem]">
                  {leadership.name}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">{leadership.role}</p>
                <p className="mt-4 max-w-[42rem] text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-[1.76]">
                  {leadership.bio}
                </p>
              </div>
              <ul className="flex list-none flex-wrap gap-2 p-0 lg:mt-auto" aria-label={leadership.role}>
                {leadership.focusAreas.map((area) => (
                  <li key={area}>
                    <span className={focusPillClass}>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
