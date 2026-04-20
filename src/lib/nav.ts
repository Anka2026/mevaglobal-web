import type { Dictionary } from "@/i18n/types";

export type NavItem = { key: keyof Dictionary["nav"]; href: string };

export const navItems: NavItem[] = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/verification-services" },
  { key: "cbam", href: "/cbam-solutions" },
  { key: "process", href: "/verification-process" },
  { key: "representations", href: "/representations" },
  { key: "statementSearch", href: "/statement-search" },
  { key: "documents", href: "/documents" },
  { key: "contact", href: "/contact" },
];

/** Header main row: Contact lives only in the right utility strip (desktop) / once in the drawer (mobile). */
export const headerNavItems: NavItem[] = navItems.filter(
  (item) => item.key !== "contact",
);

