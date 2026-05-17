import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { TeamProfilePhoto } from "@/components/about/TeamProfilePhoto";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumCardElevated,
  premiumFocusPill,
  premiumGoldTopLine,
  premiumSectionWhite,
} from "@/lib/premiumUi";

const LEADERSHIP_PHOTO_SRC = "/images/team/dilan-arslan.png";

type Props = {
  leadership: Dictionary["aboutLeadership"];
};

export function AboutLeadershipSection({ leadership }: Props) {
  return (
    <section className={cn("border-b border-[color:var(--border-soft)] py-12 sm:py-14", premiumSectionWhite)}>
      <Container>
        <div className="mx-auto max-w-[76rem]">
          <SectionHeading
            title={leadership.title}
            description={leadership.intro}
            className="max-w-[44rem]"
            titleClassName="text-[1.65rem] sm:text-[1.85rem]"
            descriptionClassName="text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]"
            withTitleAccent
          />
          <article
            className={cn(
              premiumCardElevated,
              "mt-8 p-6 sm:p-7 lg:grid lg:grid-cols-[minmax(10.5rem,13rem)_minmax(0,1fr)] lg:items-start lg:gap-8 lg:p-8",
            )}
          >
            <div className={premiumGoldTopLine} aria-hidden />
            <div className="mx-auto w-full max-w-[13rem] shrink-0 lg:mx-0">
              <TeamProfilePhoto
                src={LEADERSHIP_PHOTO_SRC}
                alt={leadership.photoAlt}
                compact
                className="w-full"
              />
            </div>
            <div className="mt-6 flex min-w-0 flex-col gap-5 lg:mt-0 lg:gap-6">
              <div>
                <p className="text-xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.3rem]">
                  {leadership.name}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">{leadership.role}</p>
                <p className="mt-4 max-w-[40rem] text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                  {leadership.bio}
                </p>
              </div>
              <ul className="flex list-none flex-wrap gap-2 p-0" aria-label={leadership.role}>
                {leadership.focusAreas.map((area) => (
                  <li key={area}>
                    <span className={premiumFocusPill}>{area}</span>
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
