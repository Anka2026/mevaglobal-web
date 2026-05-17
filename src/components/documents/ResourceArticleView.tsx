import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary, ResourceArticleDetail } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ResourceArticleSectionCard } from "@/components/documents/ResourceArticleSectionCard";
import { cn } from "@/lib/cn";
import {
  premiumAboutMotif,
  premiumEditorialHeroSurface,
  premiumEyebrowRow,
  premiumEyebrowRule,
  premiumGoldDivider,
  premiumGoldTopLine,
  premiumNavyStatement,
  premiumSectionMuted,
} from "@/lib/premiumUi";

function estimateReadingMinutes(article: ResourceArticleDetail): number {
  const text = [article.intro, article.closing, ...article.sections.map((s) => `${s.title} ${s.body}`)].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.min(14, Math.ceil(words / 200)));
}

type Props = {
  locale: Locale;
  article: ResourceArticleDetail;
  ui: Dictionary["pages"]["documents"]["ui"];
  bottomCta: Dictionary["pages"]["documents"]["bottomCta"];
};

export function ResourceArticleView({ locale, article, ui, bottomCta }: Props) {
  const minutes = estimateReadingMinutes(article);
  const readingTime = ui.readingTime.replace("{minutes}", String(minutes));

  return (
    <>
      <section className={cn("relative border-b border-[color:var(--border-soft)]", premiumEditorialHeroSurface)}>
        <div className={premiumAboutMotif} aria-hidden />
        <Container className="relative py-10 sm:py-12 lg:py-14">
          <Link
            href={`/${locale}/documents`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] bg-white/90 px-3.5 py-1.5 text-sm font-semibold text-[color:var(--brand-primary)] shadow-[var(--shadow-card)] transition-colors hover:border-[color:color-mix(in_oklab,var(--brand-gold)_42%,var(--border-soft))] hover:bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_65%,white)]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            {ui.backToHub}
          </Link>

          <div className="mx-auto mt-8 max-w-[76rem]">
            <div className={premiumEyebrowRow}>
              <span className={premiumEyebrowRule} aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                {article.eyebrow}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
              <span className="inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-gold)_32%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_70%,white)] px-2.5 py-1 text-[color:var(--brand-primary)]">
                {article.category}
              </span>
              <span aria-hidden>·</span>
              <span>{ui.technicalNoteBadge}</span>
              <span aria-hidden>·</span>
              <time dateTime={article.date} className="tabular-nums">
                {article.date}
              </time>
              <span aria-hidden>·</span>
              <span>{readingTime}</span>
            </div>
            <h1 className="mt-5 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.15rem] lg:text-[2.35rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-[0.9375rem] leading-[1.78] text-[color:var(--ink-dark)]/92 sm:text-lg sm:leading-[1.72]">
              {article.intro}
            </p>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <div className="flex flex-col gap-8 sm:gap-9">
              {article.sections.map((sec) => (
                <ResourceArticleSectionCard key={sec.title} title={sec.title} body={sec.body} />
              ))}
            </div>

            <article className={cn(premiumNavyStatement, "relative mt-10 sm:mt-12")}>
              <div className={premiumGoldTopLine} aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">{ui.takeawayTitle}</p>
              <p className="mt-4 text-sm leading-[1.72] text-white/90 sm:text-[0.9375rem]">{article.closing}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 pt-10 sm:pb-16 sm:pt-12">
        <Container>
          <div className={cn(premiumNavyStatement, "relative mx-auto max-w-[76rem]")}>
            <div className={premiumGoldDivider} aria-hidden />
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-xl">
                <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{ui.articleClosingTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">{ui.articleClosingBody}</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
                <ButtonLink
                  href={`/${locale}/contact`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center border-transparent bg-white !text-[color:var(--brand-primary)] shadow-sm hover:bg-white/95 sm:min-w-[11rem]"
                >
                  {ui.requestTechnicalMeeting}
                </ButtonLink>
                <ButtonLink
                  href={`/${locale}/verification-services`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center border-white/35 bg-transparent !text-white shadow-none hover:bg-white/10 sm:min-w-[11rem]"
                >
                  {bottomCta.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
