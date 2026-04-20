import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { headerNavItems } from "@/lib/nav";
import { cn } from "@/lib/cn";

export function MainNavigation({
  locale,
  dict,
  className,
}: {
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        // w-max: row keeps intrinsic width — parent overflow-x-auto scrolls instead of compressing/wrapping labels
        "flex w-max flex-nowrap items-center justify-start gap-x-3 sm:gap-x-3.5 lg:gap-x-4",
        className,
      )}
      aria-label="Main"
    >
      {headerNavItems.map((item) => (
        <Link
          key={item.key}
          href={`/${locale}${item.href}`}
          className="inline-flex shrink-0 items-center whitespace-nowrap text-[0.875rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]/88 transition-colors hover:text-[color:var(--ink-dark)] sm:text-[0.90625rem] lg:text-[0.9375rem]"
        >
          {dict.nav[item.key]}
        </Link>
      ))}
    </nav>
  );
}

