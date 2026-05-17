"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { headerNavItems } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { BrandLogo } from "@/components/site/BrandLogo";

/** Avoid false active states from pathname prefix collisions (e.g. services detail paths vs other top-level routes). */
function isMainNavItemActive(pathname: string | null, fullHref: string, itemHref: string): boolean {
  if (!pathname) return false;
  if (pathname === fullHref) return true;
  if (itemHref === "/verification-services") {
    return pathname.startsWith(`${fullHref}/`);
  }
  return false;
}

export function MobileNavigation({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="relative z-[60] shrink-0 lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border-soft)] bg-white text-[color:var(--ink-dark)] shadow-[var(--shadow-card)] transition-[background-color,border-color,box-shadow] hover:border-[color:var(--brand-accent)]/35 hover:bg-[color:var(--brand-accent-soft)] hover:shadow-[var(--shadow-soft)]"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-black/35 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[min(420px,92vw)] bg-white shadow-[var(--shadow-float)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[color:var(--border-soft)] px-5 py-4">
              <Link
                href={`/${locale}`}
                className="flex max-w-[176px] shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-primary)]"
                onClick={() => setOpen(false)}
              >
                <BrandLogo alt={dict.brand.legalName} />
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border-soft)] bg-white text-[color:var(--ink-dark)] shadow-[var(--shadow-card)] transition-[background-color,border-color,box-shadow] hover:border-[color:var(--brand-accent)]/35 hover:bg-[color:var(--brand-accent-soft)] hover:shadow-[var(--shadow-soft)]"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)] p-4">
                <ButtonLink
                  href={`/${locale}/statement-search`}
                  variant="secondary"
                  size="sm"
                  className="h-auto min-h-10 w-full whitespace-normal px-3 py-2 text-center leading-snug"
                  onClick={() => setOpen(false)}
                >
                  {dict.ctas.verifyStatement}
                </ButtonLink>
              </div>
              <nav className="mt-7 flex flex-col gap-1" aria-label="Main">
                {headerNavItems.map((item) => {
                  const href = `/${locale}${item.href}`;
                  const active = isMainNavItemActive(pathname, href, item.href);
                  return (
                    <Link
                      key={item.key}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-semibold tracking-tight transition-colors",
                        active
                          ? "bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)]"
                          : "text-[color:var(--ink-dark)] hover:bg-[color:var(--brand-accent-soft)]",
                      )}
                    >
                      {dict.nav[item.key]}
                    </Link>
                  );
                })}
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "mt-1 rounded-2xl px-4 py-3 text-sm font-semibold tracking-tight transition-colors",
                    pathname === `/${locale}/contact`
                      ? "bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)]"
                      : "text-[color:var(--ink-dark)] hover:bg-[color:var(--brand-accent-soft)]",
                  )}
                >
                  {dict.nav.contact}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

