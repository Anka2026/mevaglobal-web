"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  premiumEyebrowRule,
  premiumEyebrowRow,
  premiumGoldTopLine,
  premiumSectionStatement,
} from "@/lib/premiumUi";

const VIDEO_SRC = "/videos/emicert-cbam-accreditation.mp4";
const LOGO_SRC = "/partner-logos/emicert.png";

export function HomeEmicertCbamAnnouncement({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["home"]["emicertCbamAnnouncement"];
}) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn("relative overflow-hidden py-12 sm:py-14 lg:py-16", premiumSectionStatement)}
      aria-labelledby="emicert-cbam-announcement-title"
    >
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-[1.25rem]",
            "border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))]",
            "bg-white shadow-[0_24px_56px_-28px_rgba(29,37,47,0.28)]",
            "ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_16%,transparent)]",
          )}
        >
          <div className={premiumGoldTopLine} aria-hidden />
          {/* Executive navy rail */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[3px] bg-gradient-to-b from-[color:var(--brand-gold)] via-[color:var(--brand-primary)] to-[color:var(--brand-primary)] lg:block"
            aria-hidden
          />

          <div className="grid items-center gap-0 lg:grid-cols-12">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 px-6 py-8 sm:px-8 sm:py-10 lg:col-span-6 lg:px-10 lg:py-12 xl:px-12"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="relative h-10 w-[7.25rem] sm:h-11 sm:w-36">
                  <Image
                    src={LOGO_SRC}
                    alt="EmiCert"
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
                <div className="hidden h-8 w-px bg-[color:var(--border-soft)] sm:block" aria-hidden />
                <div className={premiumEyebrowRow}>
                  <span className={premiumEyebrowRule} aria-hidden />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                    {copy.eyebrow}
                  </p>
                </div>
              </div>

              <div className="mt-7 inline-flex items-center gap-2.5 border-l-2 border-[color:var(--brand-gold)] pl-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">
                  {copy.badge}
                </span>
              </div>

              <h2
                id="emicert-cbam-announcement-title"
                className="mt-4 max-w-[34rem] text-balance text-[1.7rem] font-semibold leading-[1.14] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.05rem] sm:leading-[1.12] lg:text-[2.2rem]"
              >
                {copy.title}
              </h2>

              <p className="mt-4 max-w-[36rem] text-[0.9375rem] leading-relaxed text-[color:var(--text-muted)] sm:text-base sm:leading-[1.7]">
                {copy.body}
              </p>

              <div className="mt-7 border border-[color:color-mix(in_oklab,var(--brand-primary)_12%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] px-5 py-4 sm:px-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                  {copy.mevaLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-[color:var(--ink-dark)] sm:text-[0.9375rem]">
                  {copy.mevaLine}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink
                  href={`/${locale}/cbam-solutions`}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto sm:min-w-[12rem]"
                >
                  {copy.primaryCta}
                </ButtonLink>
                <ButtonLink
                  href={`/${locale}/representations`}
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto sm:min-w-[12rem]"
                >
                  {copy.secondaryCta}
                </ButtonLink>
              </div>
            </motion.div>

            <div
              className="relative min-w-0 border-t border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--footer-deep)_94%,#0a1220)] lg:col-span-6 lg:border-l lg:border-t-0"
              style={{ perspective: "1400px" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:2.5rem_2.5rem]"
                aria-hidden
              />
              <div className="relative px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-10">
                <motion.div
                  initial={
                    reducedMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -160,
                          x: 36,
                          scale: 0.82,
                          rotateX: 22,
                          rotateZ: -6,
                          filter: "blur(6px)",
                        }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          scale: 1,
                          rotateX: 0,
                          rotateZ: 0,
                          filter: "blur(0px)",
                        }
                  }
                  viewport={{ once: true, amount: 0.25 }}
                  transition={
                    reducedMotion
                      ? undefined
                      : {
                          type: "spring",
                          stiffness: 58,
                          damping: 18,
                          mass: 1.35,
                          delay: 0.18,
                        }
                  }
                  className="relative origin-top"
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                >
                  <div className="overflow-hidden rounded-[0.875rem] border border-white/12 bg-black shadow-[0_28px_64px_-20px_rgba(0,0,0,0.55)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_32%,transparent)]">
                    <video
                      className="aspect-video w-full bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={copy.videoLabel}
                    >
                      <source src={VIDEO_SRC} type="video/mp4" />
                    </video>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
