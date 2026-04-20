import Image from "next/image";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { visualImageClipClass, visualImageHeroShadowClass } from "@/lib/visualImage";

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-[color:var(--background-main)]">
      <Container className="py-14 sm:py-16 lg:py-[4.25rem]">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-8">
          <div className="min-w-0 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">
              {dict.home.hero.eyebrow}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[2.35rem] sm:leading-[1.12] lg:text-[2.5rem]">
              {dict.home.hero.title}
            </h1>
            <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-[color:var(--text-muted)] sm:text-lg sm:leading-relaxed">
              {dict.home.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={`/${locale}/contact`} variant="primary" size="sm" className="sm:w-auto">
                {dict.home.hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/verification-services`}
                variant="secondary"
                size="sm"
                className="sm:w-auto"
              >
                {dict.home.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:flex lg:h-full lg:items-stretch lg:pl-2">
            <div
              className={cn(
                visualImageClipClass,
                visualImageHeroShadowClass,
                "h-[260px] w-full sm:h-[320px] lg:h-full lg:min-h-[min(100%,28rem)]",
              )}
            >
              <Image
                src="/hero/meva-hero.png"
                alt={dict.home.hero.heroImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

