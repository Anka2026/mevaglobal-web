"use client";

import Image from "next/image";
import type { Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CbamProposalForm } from "@/components/cbam/CbamProposalForm";
import {
  CBAM_SCOPE_GROUPS,
  EMICERT_CBAM_URL,
  EMICERT_SCOPE_PDF,
  HERO_SRC,
  VIDEO_SRC,
  getCbamFlagshipCopy,
} from "@/content/cbamFlagship";
import { cn } from "@/lib/cn";
import { ExecutiveFlyIn } from "@/components/motion/ExecutiveFlyIn";
import { premiumGoldTopLine, premiumSectionMuted } from "@/lib/premiumUi";

const CONTACT_EMAIL = "info@mevaglobalcertification.com";
const EMICERT_LOGO = "/brand/emicert-cti.png";

export function CbamFlagshipView({ locale }: { locale: Locale }) {
  const copy = getCbamFlagshipCopy(locale);

  return (
    <>
      <section id="overview" className="relative scroll-mt-28 overflow-hidden border-b border-[color:var(--border-soft)] bg-white">
        <div className="executive-glow pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_55%,transparent)] blur-3xl" aria-hidden />
        <div className="executive-glow pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand-accent)_40%,transparent)] blur-3xl" aria-hidden />
        <Container className="relative py-12 sm:py-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                <span className="executive-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-gold)] shadow-[0_0_12px_var(--brand-gold)]" aria-hidden />
                {copy.eyebrow}
              </p>
              <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.45rem] lg:text-[2.7rem]">
                {copy.title}
              </h1>
              <p className="mt-4 text-lg font-medium leading-snug text-[color:var(--brand-primary)] sm:text-xl">
                {copy.titleSecondary}
              </p>
              <p className="mt-4 text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]/80">{copy.identity}</p>
              <p className="mt-4 max-w-[40rem] text-[0.975rem] leading-[1.75] text-[color:var(--text-muted)] sm:text-base">
                {copy.description}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {copy.indicators.map((item, index) => (
                  <li
                    key={item}
                    className="executive-heartbeat border border-[color:color-mix(in_oklab,var(--brand-gold)_55%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_70%,white)] px-3 py-3 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-[color:var(--brand-primary)]"
                    style={{ animationDelay: `${index * 0.35}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href={`/${locale}/cbam-solutions#proposal`} variant="primary" size="md">
                  {copy.primaryCta}
                </ButtonLink>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-11 items-center justify-center border border-[color:var(--brand-primary)] bg-white px-5 text-sm font-semibold text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-accent-soft)]"
                >
                  {CONTACT_EMAIL}
                </a>
                <ButtonLink href={`/${locale}/verification-process#emicert-cbam`} variant="secondary" size="md">
                  {copy.secondaryCta}
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-6" style={{ perspective: "1400px" }}>
              <ExecutiveFlyIn delay={0.08}>
                <div className="relative">
                  <div className="executive-glow pointer-events-none absolute -inset-4 rounded-[1.5rem] bg-[color:color-mix(in_oklab,var(--brand-gold)_40%,transparent)] blur-2xl" aria-hidden />
                  <div className="relative overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border-soft))] bg-[color:var(--brand-accent-soft)] shadow-[0_24px_50px_-24px_rgba(0,86,145,0.45)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_30%,transparent)]">
                    <div className={premiumGoldTopLine} aria-hidden />
                    <Image
                      src={HERO_SRC}
                      alt=""
                      width={1200}
                      height={800}
                      priority
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </ExecutiveFlyIn>
            </div>
          </div>
          <p className="mt-8 max-w-[62rem] border-l-2 border-[color:var(--brand-gold)] pl-4 text-sm leading-[1.75] text-[color:var(--ink-dark)]/85">
            {copy.statement}
          </p>
        </Container>
      </section>

      <section id="emicert" className={cn("scroll-mt-28 border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-12 sm:py-14">
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border-soft))] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <div className={premiumGoldTopLine} aria-hidden />
              <a href={EMICERT_CBAM_URL} target="_blank" rel="noreferrer" className="inline-flex w-fit">
                <Image src={EMICERT_LOGO} alt="EmiCert, member of CTI Group" width={1024} height={341} className="h-14 w-auto sm:h-16" />
              </a>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                {copy.milestoneEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.85rem]">
                {copy.milestoneTitle}
              </h2>
              <p className="mt-4 text-sm leading-[1.75] text-[color:var(--text-muted)] sm:text-[0.975rem]">{copy.milestoneBody}</p>
              <dl className="mt-6 grid flex-1 content-start gap-3 sm:grid-cols-2">
                {copy.facts.map((fact) => (
                  <div key={fact.label} className="border border-[color:var(--border-soft)] px-4 py-3 last:sm:col-span-2">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[color:var(--ink-dark)]">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-col gap-3 border-t border-[color:var(--border-soft)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-11 items-center justify-center bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]"
                >
                  {CONTACT_EMAIL}
                </a>
                <a className="text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 hover:underline" href="#documentation">
                  {copy.scopeLink}
                </a>
              </div>
            </article>
            <div className="h-full" style={{ perspective: "1400px" }}>
              <ExecutiveFlyIn delay={0.2} className="flex h-full flex-col">
                <div className="relative flex h-full min-h-[22rem] flex-col">
                  <div className="executive-glow pointer-events-none absolute -inset-3 rounded-[1.4rem] bg-[color:color-mix(in_oklab,var(--brand-gold)_45%,transparent)] blur-xl" aria-hidden />
                  <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_50%,white)] bg-black shadow-[0_28px_60px_-20px_rgba(0,0,0,0.45)]">
                    <div className="relative min-h-[16rem] flex-1">
                      <video className="absolute inset-0 h-full w-full bg-black object-contain" controls playsInline preload="metadata" aria-label={copy.videoLabel}>
                        <source src={VIDEO_SRC} type="video/mp4" />
                      </video>
                    </div>
                    <p className="executive-heartbeat flex items-center justify-center bg-white px-4 py-3 text-xs font-semibold tracking-wide text-[color:var(--brand-primary)]">
                      ESYD · EmiCert S.A. · No. 874-9
                    </p>
                  </div>
                </div>
              </ExecutiveFlyIn>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-[color:var(--border-soft)] bg-[color:var(--brand-primary)] text-white">
        <div className="executive-glow pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_50%,transparent)] blur-3xl" aria-hidden />
        <Container className="relative py-14 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-gold)]">
                <span className="executive-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-gold)]" aria-hidden />
                {locale === "tr" ? "CBAM doğrulama" : locale === "nl" ? "CBAM-verificatie" : "CBAM verification"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {locale === "tr"
                  ? "Tam kapsamda, tesisiniz için."
                  : locale === "nl"
                    ? "Volledige scope, voor uw installatie."
                    : "Full scope, for your installation."}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-white/80 sm:text-base">
                {locale === "tr"
                  ? "Çimento, demir ve çelik, alüminyum, gübre, elektrik ve hidrojen. Doğrulama, gömülü emisyon verisinin doğruluğunu, tamlığını ve güvenilirliğini inceler."
                  : locale === "nl"
                    ? "Cement, ijzer en staal, aluminium, meststoffen, elektriciteit en waterstof. Verificatie beoordeelt de nauwkeurigheid, volledigheid en betrouwbaarheid van de ingebedde emissies."
                    : "Cement, iron and steel, aluminium, fertilisers, electricity and hydrogen. Verification examines the accuracy, completeness and reliability of embedded-emissions data."}
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex h-12 shrink-0 items-center justify-center bg-[color:var(--brand-gold)] px-6 text-sm font-semibold text-[color:var(--ink-dark)] hover:brightness-105"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(locale === "tr"
              ? [
                  "Avrupa Birliği’ne CBAM malı ithal eden kuruluşlar",
                  "Yetkilendirilmiş CBAM beyan sahipleri",
                  "Üçüncü ülkelerdeki tesis işletmecileri",
                  "Üreticiler ve tedarik zinciri",
                  "Gömülü emisyon verisi isteyen AB alıcıları",
                ]
              : locale === "nl"
                ? [
                    "Importeurs van CBAM-goederen in de Europese Unie",
                    "Toegelaten CBAM-aangevers",
                    "Exploitanten in derde landen",
                    "Producenten en de toeleveringsketen",
                    "EU-afnemers die leveranciersgegevens nodig hebben",
                  ]
                : [
                    "Importers of CBAM goods into the European Union",
                    "Authorised CBAM declarants",
                    "Operators of installations in third countries",
                    "Producers and the supply chain",
                    "EU buyers who require supplier data",
                  ]
            ).map((line) => (
              <li key={line} className="border border-white/15 bg-white/5 px-4 py-4 text-sm font-medium leading-snug">
                {line}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="sectors" className="relative scroll-mt-28 overflow-hidden border-b border-[color:var(--border-soft)] bg-white">
        <div className="executive-glow pointer-events-none absolute right-0 top-10 h-56 w-56 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_40%,transparent)] blur-3xl" aria-hidden />
        <Container className="relative py-14 sm:py-16">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
            <span className="executive-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-gold)]" aria-hidden />
            {copy.sectorsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-4xl">{copy.sectorsTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {copy.sectors.map((sector, index) => (
              <article key={sector.id} className="group relative min-h-[18rem] overflow-hidden rounded-[1.05rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_35%,var(--border-soft))] shadow-[var(--shadow-card)]">
                <Image src={sector.image} alt={sector.imageAlt} fill className="object-cover transition duration-700 motion-safe:group-hover:scale-105" sizes="(min-width:1280px) 380px, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-primary)] via-[color:color-mix(in_oklab,var(--brand-primary)_55%,transparent)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold tabular-nums tracking-[0.18em] text-[color:var(--brand-gold)]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{sector.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="assessed" className="scroll-mt-28 border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_40%,white)]">
        <Container className="py-14 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">{copy.assessedEyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-4xl">{copy.assessedTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.75] text-[color:var(--text-muted)] sm:text-base">{copy.assessedNote}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.assessed.map((block, index) => (
              <article key={block.title} className="border border-[color:color-mix(in_oklab,var(--brand-gold)_30%,var(--border-soft))] bg-white p-6 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(200,162,74,0.45)]">
                <p className="text-2xl font-semibold tabular-nums tracking-tight text-[color:var(--brand-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--ink-dark)]">{block.title}</h3>
                <p className="mt-2 text-sm leading-[1.75] text-[color:var(--text-muted)]">{block.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-28 border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-14 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">{copy.processEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-4xl">{copy.processTitle}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.process.map((step, index) => (
              <li key={step.title} className="border-l-2 border-[color:var(--brand-gold)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_45%,white)] p-5">
                <p className="text-[11px] font-semibold tabular-nums tracking-[0.18em] text-[color:var(--brand-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--ink-dark)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-[color:var(--text-muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="why" className="relative scroll-mt-28 overflow-hidden border-b border-[color:var(--border-soft)] bg-[color:var(--brand-primary)] text-white">
        <div className="executive-glow pointer-events-none absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_45%,transparent)] blur-3xl" aria-hidden />
        <Container className="relative py-14 sm:py-16">
          <h2 className="max-w-none text-3xl font-semibold tracking-tight sm:text-4xl">{copy.whyTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {copy.why.map((item) => (
              <article key={item.title} className="border border-white/15 bg-white/5 p-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-white/75">{item.body}</p>
              </article>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-flex h-12 items-center justify-center bg-[color:var(--brand-gold)] px-6 text-sm font-semibold text-[color:var(--ink-dark)] hover:brightness-105"
          >
            {CONTACT_EMAIL}
          </a>
        </Container>
      </section>

      <section id="documentation" className={cn("scroll-mt-28 border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-12 sm:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">{copy.docsEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink-dark)]">{copy.docsTitle}</h2>
          <p className="mt-3 text-sm leading-[1.75] text-[color:var(--text-muted)]">{copy.docsNote}</p>
          <div className="mt-8">
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {copy.docs.map((row) => (
                <div key={row.label} className="bg-white px-4 py-4 ring-1 ring-[color:var(--border-soft)]">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">{row.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[color:var(--ink-dark)]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-[color:var(--ink-dark)]">{copy.scopeHeading}</h3>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {CBAM_SCOPE_GROUPS.map((group) => (
                <li key={group.no} className="flex gap-3 bg-white px-4 py-3 ring-1 ring-[color:var(--border-soft)]">
                  <span className="w-8 shrink-0 text-[11px] font-semibold tabular-nums tracking-[0.14em] text-[color:var(--brand-primary)]">{group.no}</span>
                  <span className="text-sm font-medium leading-snug text-[color:var(--ink-dark)]">{group.name}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-[color:var(--text-muted)]">{copy.scopeSource}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex h-11 items-center justify-center bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]"
              href={EMICERT_SCOPE_PDF}
              download
            >
              {copy.certificateLink}
            </a>
            <a className="text-sm font-semibold text-[color:var(--brand-primary)] underline-offset-4 hover:underline" href={EMICERT_CBAM_URL} target="_blank" rel="noreferrer">
              {copy.officialLink}
            </a>
          </div>
        </Container>
      </section>

      <section id="proposal" className="scroll-mt-28 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border-soft))] bg-white">
        <Container className="py-12 sm:py-14">
          <div className="relative overflow-hidden rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-gold)_45%,var(--border-soft))] bg-white p-5 shadow-[0_24px_50px_-28px_rgba(0,86,145,0.45)] sm:p-8">
            <div className={premiumGoldTopLine} aria-hidden />
            <div className="flex flex-col gap-4 border-b border-[color:var(--border-soft)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-3xl">{copy.proposal.heading}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-[1.7] text-[color:var(--text-muted)]">{copy.proposal.intro}</p>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-11 shrink-0 items-center justify-center bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white hover:bg-[color:var(--brand-primary-hover)]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="pt-6">
              <CbamProposalForm copy={copy.proposal} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
