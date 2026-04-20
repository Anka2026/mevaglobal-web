import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { VisualAnchor } from "@/components/visual/VisualAnchor";
import {
  PremiumFourCardServiceDetail,
  type PremiumFourCardServiceDetailContent,
} from "@/components/sections/PremiumFourCardServiceDetail";
import {
  PremiumFiveCardServiceDetail,
  type PremiumFiveCardServiceDetailContent,
} from "@/components/sections/PremiumFiveCardServiceDetail";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";
import {
  isEditorialDetail,
  isPremiumFourCardDetail,
  isPremiumFiveCardDetail,
  type EditorialDetail,
  type StandardDetail,
} from "@/lib/verification/detailShapeGuards";
import { isPremiumFiveCardSlug } from "@/lib/verification/registry";
import { VerificationServiceIcon } from "@/components/verification/VerificationServiceIcon";

type MergedServiceDetail = Dictionary["pages"]["serviceDetails"][Service["slug"]];

/** Returns true when one of the supported layouts applies (otherwise the route should 404). */
export function isVerificationDetailRenderable(content: MergedServiceDetail): boolean {
  if (isEditorialDetail(content)) return true;
  if (isPremiumFourCardDetail(content)) return true;
  if (isPremiumFiveCardDetail(content)) return true;
  return false;
}

/**
 * Single shared tree for `/verification-services/[slug]` — same premium shells as before, no alternate raw layouts.
 */
export function VerificationServiceDetailPage({
  locale: l,
  slug,
  dict,
  content,
  visual,
}: {
  locale: Locale;
  slug: Service["slug"];
  dict: Dictionary;
  content: MergedServiceDetail;
  visual: ServiceHeroVisual;
}) {
  if (isEditorialDetail(content)) {
    return (
      <EditorialServiceDetail
        l={l}
        content={content}
        visual={visual}
        backLabel={dict.serviceDetail.backToServices}
        processLinkLabel={dict.nav.process}
      />
    );
  }

  if (isPremiumFourCardDetail(content)) {
    return (
      <PremiumFourCardServiceDetail
        l={l}
        content={content as PremiumFourCardServiceDetailContent}
        visual={visual}
        backLabel={dict.serviceDetail.backToServices}
        eyebrowFallback={dict.nav.services}
        ctas={dict.ctas}
        taglineTopBar={dict.brand.taglineTopBar}
      />
    );
  }

  if (isPremiumFiveCardDetail(content)) {
    const standard = content as StandardDetail;
    if (isPremiumFiveCardSlug(slug)) {
      return (
        <PremiumFiveCardServiceDetail
          l={l}
          content={standard as PremiumFiveCardServiceDetailContent}
          visual={visual}
          backLabel={dict.serviceDetail.backToServices}
          eyebrowFallback={dict.nav.services}
          ctas={dict.ctas}
          taglineTopBar={dict.brand.taglineTopBar}
        />
      );
    }
    return <StandardServiceDetailLayout l={l} dict={dict} content={standard} visual={visual} />;
  }

  return null; // unreachable when used after `isVerificationDetailRenderable` in the route
}

function StandardServiceDetailLayout({
  l,
  dict,
  content,
  visual,
}: {
  l: Locale;
  dict: Dictionary;
  content: StandardDetail;
  visual: ServiceHeroVisual;
}) {
  return (
    <>
      <PageHeader
        title={content.title}
        description={content.intro}
        visual={
          <VisualAnchor
            src={visual.src}
            icon={<VerificationServiceIcon name={visual.iconKey} className="h-6 w-6" />}
            eyebrow={dict.nav.services}
            imageClassName={visual.imageClassName}
            detailEditorial
            detailEditorialFit={visual.editorialFit ?? "cover"}
          />
        }
      />
      <Container className="py-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${l}/verification-services`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {dict.serviceDetail.backToServices}
          </Link>
          <ButtonLink href={`/${l}/contact`} variant="primary" size="sm">
            {dict.ctas.requestQuote}
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Card className="col-span-12 min-w-0 p-7 sm:p-8 lg:col-span-4">
            <Section title={content.covers.title} items={content.covers.bullets} />
          </Card>
          <Card className="col-span-12 min-w-0 p-7 sm:p-8 lg:col-span-4">
            <Section title={content.forWho!.title} items={content.forWho!.bullets} />
          </Card>
          <Card className="col-span-12 min-w-0 p-7 sm:p-8 lg:col-span-4">
            <Section title={content.typicalScope.title} items={content.typicalScope.bullets} />
          </Card>
          <Card className="col-span-12 min-w-0 p-7 sm:p-8 lg:col-span-6">
            <Section title={content.whyMatters.title} items={content.whyMatters.bullets} />
          </Card>
          <Card className="col-span-12 min-w-0 p-7 sm:p-8 lg:col-span-6">
            <Section title={content.approach.title} items={content.approach.bullets} />
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)] p-7 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-9">
              <p className="text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]">{content.cta.title}</p>
              <p className="mt-2 max-w-[52rem] text-sm leading-7 text-[color:var(--text-muted)]">{content.cta.body}</p>
            </div>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:col-span-3 lg:flex-col lg:justify-end">
              <ButtonLink href={`/${l}/contact`} variant="primary" size="md" className="w-full sm:w-auto lg:w-full">
                {dict.ctas.requestQuote}
              </ButtonLink>
              <ButtonLink
                href={`/${l}/verification-process`}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto lg:w-full"
              >
                {dict.nav.process}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function EditorialServiceDetail({
  l,
  content,
  visual,
  backLabel,
  processLinkLabel,
}: {
  l: Locale;
  content: EditorialDetail;
  visual: ServiceHeroVisual;
  backLabel: string;
  processLinkLabel: string;
}) {
  return (
    <>
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="pb-8 pt-5 sm:pb-9 sm:pt-6 lg:pb-10 lg:pt-7">
          <Link
            href={`/${l}/verification-services`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            {backLabel}
          </Link>

          <div className="mt-5 grid items-stretch gap-6 lg:mt-5 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="flex min-w-0 flex-col gap-2.5 sm:gap-3 lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-xs">
                {content.eyebrow}
              </p>
              <h1 className="text-[1.75rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.125rem] lg:text-[2.35rem]">
                {content.title}
              </h1>
              <p className="max-w-[44rem] text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.74]">
                {content.intro}
              </p>
            </div>

            <div
              className={cn(
                "relative flex h-full min-w-0 flex-col lg:col-span-5 lg:min-h-0",
                visual.editorialFit === "contain"
                  ? "min-h-[280px] sm:min-h-[320px] lg:min-h-0"
                  : "min-h-[260px] sm:min-h-[300px] lg:min-h-0",
              )}
            >
              <VisualAnchor
                src={visual.src}
                alt={content.title}
                imageClassName={visual.imageClassName}
                detailEditorial
                detailEditorialFit={visual.editorialFit ?? "cover"}
                className="w-full min-h-0 flex-1"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-7 sm:py-8 lg:py-9">
        <div className="mx-auto max-w-[50rem] space-y-7 lg:space-y-8">
          {content.sections.map((sec) => (
            <section
              key={sec.title}
              className="border-b border-[color:var(--border-soft)] pb-7 last:border-0 last:pb-0 lg:pb-8"
            >
              <h2 className="text-[1.0625rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-lg">
                {sec.title}
              </h2>
              <p className="mt-2.5 max-w-[46rem] text-sm leading-[1.72] text-[color:var(--text-muted)] sm:mt-3 sm:text-[1.05rem] sm:leading-[1.68]">
                {sec.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[50rem] border-t border-[color:var(--border-soft)] pt-6 lg:mt-9 lg:pt-7">
          <p className="max-w-[46rem] text-sm leading-[1.7] text-[color:var(--text-muted)]">{content.bottomCta}</p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-3">
            <ButtonLink href={`/${l}/contact`} variant="primary" size="md">
              {content.primaryButton}
            </ButtonLink>
            <ButtonLink href={`/${l}/verification-services`} variant="secondary" size="md">
              {content.secondaryButton}
            </ButtonLink>
            <Link
              href={`/${l}/verification-process`}
              className="inline-flex items-center text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 hover:underline sm:pl-0.5"
            >
              {processLinkLabel}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <h2 className="text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-dark)]/80">
        {items.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
            <span className="min-w-0 leading-7">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
