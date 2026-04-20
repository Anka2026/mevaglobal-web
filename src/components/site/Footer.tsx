import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/nav";
import { offices } from "@/data/offices";
import { cn } from "@/lib/cn";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-8 border-t border-white/[0.07] bg-[color:var(--footer-deep)] text-white">
      <Container className="py-10 sm:py-11 lg:py-12">
        <div className="grid gap-9 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <div className="max-w-md">
              <Link
                href={`/${locale}`}
                className={cn(
                  "inline-flex w-fit max-w-full items-center pl-2",
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
                  className="block h-32 w-auto max-w-full rounded-[var(--visual-image-radius)] object-contain sm:h-36"
                  sizes="(max-width:1024px) 90vw, 704px"
                  aria-hidden
                />
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-white/75">{dict.footer.description}</p>
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
              {offices.map((o) => (
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
                  {o.email ? (
                    <p className="mt-4 min-w-0 text-[0.8125rem] leading-normal sm:text-sm">
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

        <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/55">
          © {new Date().getFullYear()} {dict.brand.legalName}. {dict.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
