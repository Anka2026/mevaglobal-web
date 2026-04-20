import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TopInfoBar } from "@/components/site/TopInfoBar";
import { MainNavigation } from "@/components/site/MainNavigation";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { MobileNavigation } from "@/components/site/MobileNavigation";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="relative z-10 bg-white">
      <TopInfoBar dict={dict} />
      <div className="border-b border-[color:var(--border-soft)] bg-white shadow-[0_1px_0_rgba(29,37,47,0.06)]">
        <Container className="flex w-full max-w-6xl min-h-[5rem] items-center justify-between gap-3 py-5 sm:min-h-[5.25rem] sm:py-5 sm:gap-4 lg:min-h-[5.75rem] lg:gap-5 lg:py-6">
          <div className="flex min-w-0 shrink-0 items-center pr-2 sm:pr-2.5 lg:pr-3">
            <Link
              href={`/${locale}`}
              className="group flex max-w-[220px] shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-primary)]"
              style={{ maxWidth: "220px" }}
            >
              <BrandLogo alt={dict.brand.legalName} priority />
            </Link>
          </div>

          {/* Main nav (no Contact — single Contact on the right) */}
          <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-start lg:flex">
            <div className="min-w-0 max-w-full overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <MainNavigation locale={locale} dict={dict} />
            </div>
          </div>

          {/* Right: calm utility strip — desktop: optional contact + language */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex lg:gap-3 lg:border-l lg:border-[color:var(--border-soft)] lg:pl-5">
            <ButtonLink
              href={`/${locale}/contact`}
              variant="ghost"
              size="sm"
              className="h-9 px-3 text-[0.9375rem] font-semibold text-[color:var(--ink-dark)]/80 hover:text-[color:var(--ink-dark)]"
            >
              {dict.ctas.contact}
            </ButtonLink>
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile: language + drawer */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <MobileNavigation locale={locale} dict={dict} />
          </div>
        </Container>
      </div>
    </header>
  );
}

