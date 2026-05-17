import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/nav";
import { offices } from "@/data/offices";
import { MEVA_KVK_NUMBER } from "@/data/companyRegistry";
import { cn } from "@/lib/cn";

const FOOTER_LINKEDIN_URL =
  "https://www.linkedin.com/company/meva-global-certification/?viewAsMember=true";

/** Stable NL then TR so both jurisdictions read consistently in the footer. */
const OFFICE_ORDER: Record<(typeof offices)[number]["id"], number> = { nl: 0, tr: 1 };

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const orderedOffices = [...offices].sort((a, b) => OFFICE_ORDER[a.id] - OFFICE_ORDER[b.id]);

  return (
    <footer className="mt-8 border-t border-white/[0.07] bg-[color:var(--footer-deep)] text-white">
      <Container className="py-10 sm:py-11 lg:py-12">
        <div className="grid gap-9 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <div className="max-w-md">
              <Link
                href={`/${locale}`}
                className={cn(
                  "inline-flex w-fit max-w-full items-center",
                  "transition-opacity duration-200 hover:opacity-90",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
                )}
                aria-label={dict.brand.legalName}
              >
                <Image
                  src="/assets/meva-logo.jpeg"
                  alt=""
                  width={704}
                  height={224}
                  className="block h-[7.25rem] w-auto max-w-full rounded-[var(--visual-image-radius)] object-contain sm:h-[8rem]"
                  sizes="(max-width:1024px) 90vw, 704px"
                  aria-hidden
                />
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-white/75">{dict.footer.description}</p>
              <p className="mt-4">
                <a
                  href={FOOTER_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/70 underline-offset-[3px] transition-colors hover:text-white/95 hover:underline"
                >
                  {dict.footer.linkedInLabel}
                </a>
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/85">{dict.footer.quickLinks}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-snug text-white/78">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link className="transition-colors hover:text-white" href={`/${locale}${item.href}`}>
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{dict.footer.offices}</h3>
            <div className="mt-3 grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
              {orderedOffices.map((o) => (
                <div key={o.id} className="min-w-0 rounded-xl border border-white/[0.09] bg-white/[0.03] px-5 py-5 sm:px-6 sm:py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                    {o.id === "tr" ? dict.shared.offices.turkey : dict.shared.offices.netherlands}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-white/95">{o.name}</p>
                  <div className="mt-3 text-sm leading-relaxed text-white/72">
                    {o.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {o.id === "nl" ? (
                    <p className="mt-3 break-words text-sm leading-relaxed text-white/72">
                      {dict.footer.registryKvKLabel}: {MEVA_KVK_NUMBER}
                    </p>
                  ) : null}
                  {o.email ? (
                    <p className="mt-3 min-w-0 text-[0.8125rem] leading-normal sm:text-sm">
                      <a
                        className="whitespace-nowrap text-white/88 transition-colors hover:text-white"
                        href={`mailto:${o.email}`}
                      >
                        {o.email}
                      </a>
                    </p>
                  ) : null}
                  {o.phone ? (
                    <p className="mt-2 text-sm">
                      <a className="text-white/82 transition-colors hover:text-white" href={`tel:${o.phone.replace(/\s+/g, "")}`}>
                        {o.phone}
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <p className="max-w-2xl text-xs leading-relaxed text-white/60">{dict.footer.trustFootnote}</p>
            <Link
              href={`/${locale}/contact`}
              className="shrink-0 text-xs font-semibold text-white/78 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {dict.footer.contactTitle} →
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            © {new Date().getFullYear()} {dict.brand.legalName}. {dict.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
