"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { headerNavItems, type NavItem } from "@/lib/nav";
import { sectionMenus, type SectionMenus } from "@/content/sectionMenus";
import { cn } from "@/lib/cn";

const MENU_KEYS = new Set<keyof SectionMenus>(["services", "cbam", "process"]);

export function MainNavigation({
  locale,
  dict,
  className,
}: {
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  const menus = sectionMenus[locale];

  return (
    <nav
      className={cn(
        "flex w-max flex-nowrap items-center justify-start gap-x-3 sm:gap-x-3.5 lg:gap-x-4",
        className,
      )}
      aria-label="Main"
    >
      {headerNavItems.map((item) =>
        MENU_KEYS.has(item.key as keyof SectionMenus) ? (
          <DesktopMenu
            key={item.key}
            locale={locale}
            item={item}
            label={dict.nav[item.key]}
            links={menus[item.key as keyof SectionMenus]}
          />
        ) : (
          <Link
            key={item.key}
            href={`/${locale}${item.href}`}
            className="inline-flex shrink-0 items-center whitespace-nowrap text-[0.875rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]/88 transition-colors hover:text-[color:var(--ink-dark)] sm:text-[0.90625rem] lg:text-[0.9375rem]"
          >
            {dict.nav[item.key]}
          </Link>
        ),
      )}
    </nav>
  );
}

function DesktopMenu({
  locale,
  item,
  label,
  links,
}: {
  locale: Locale;
  item: NavItem;
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group relative shrink-0">
      <Link
        href={`/${locale}${item.href}`}
        className="inline-flex items-center gap-1 whitespace-nowrap text-[0.875rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]/88 transition-colors hover:text-[color:var(--ink-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-primary)] sm:text-[0.90625rem] lg:text-[0.9375rem]"
        aria-haspopup="true"
      >
        {label}
        <span className="text-[0.65rem] text-[color:var(--text-muted)]" aria-hidden>
          ▾
        </span>
      </Link>
      <div className="invisible absolute left-0 top-full z-50 min-w-[17.5rem] pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="border border-[color:var(--border-soft)] bg-white py-2 shadow-[var(--shadow-card)]">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={`/${locale}${link.href}`}
                className="block px-4 py-2.5 text-sm font-medium leading-snug text-[color:var(--ink-dark)] hover:bg-[color:var(--brand-accent-soft)] focus-visible:bg-[color:var(--brand-accent-soft)] focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
