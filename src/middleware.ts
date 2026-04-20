import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "tr", "nl"] as const;
type Locale = (typeof locales)[number];

function getLocaleFromPathname(pathname: string): Locale | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (!seg) return null;
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : null;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip next internals and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPathname(pathname);
  if (locale) {
    const res = NextResponse.next();
    res.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    return res;
  }

  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};

