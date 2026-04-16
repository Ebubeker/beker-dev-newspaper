import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

/**
 * Paths that must NOT be locale-prefixed.
 *
 * Blog stays English-only at /blog/*, per product decision.
 * Static/infra paths and files with extensions bypass locale routing entirely.
 */
const PASS_THROUGH_PREFIXES = [
  "/blog",
  "/api",
  "/_next",
  "/_vercel",
  "/assets",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/manifest.webmanifest",
];

function isPassThrough(pathname: string): boolean {
  if (PASS_THROUGH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return true;
  }
  // Anything with a file extension (e.g. /og-image.png, /foo.ico)
  const lastSegment = pathname.split("/").pop() ?? "";
  if (lastSegment.includes(".")) {
    return true;
  }
  return false;
}

function pathnameLocale(pathname: string): Locale | null {
  const first = pathname.split("/")[1];
  if (!first) return null;
  return (locales as readonly string[]).includes(first) ? (first as Locale) : null;
}

function detectLocaleFromRequest(req: NextRequest): Locale {
  // 1. Cookie preference wins.
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }

  // 2. Accept-Language header, pick first matching locale.
  const acceptLang = req.headers.get("accept-language");
  if (acceptLang) {
    const parts = acceptLang
      .split(",")
      .map((chunk) => chunk.split(";")[0].trim().toLowerCase());
    for (const part of parts) {
      const short = part.split("-")[0];
      if ((locales as readonly string[]).includes(short)) {
        return short as Locale;
      }
    }
  }

  return defaultLocale;
}

/**
 * Always forward the resolved locale and the raw pathname on request headers.
 * `x-locale` and `x-url-path` are read by the root layout to set `<html lang>`
 * and by any server component that needs to know where the user is without
 * a dynamic segment (e.g. blog pages, which are English by default).
 */
function attachLocaleHeaders(req: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-url-path", req.nextUrl.pathname);
  return requestHeaders;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (isPassThrough(pathname)) {
    // Blog and infra: pass through with English (blog) or default.
    const locale = pathname.startsWith("/blog") ? "en" : defaultLocale;
    return NextResponse.next({
      request: { headers: attachLocaleHeaders(req, locale) },
    });
  }

  const existing = pathnameLocale(pathname);
  if (existing) {
    return NextResponse.next({
      request: { headers: attachLocaleHeaders(req, existing) },
    });
  }

  const locale = detectLocaleFromRequest(req);
  const redirectUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${search}`,
    req.url,
  );
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // Run on everything except Next internals and static asset file paths.
  // The middleware itself still re-checks; this matcher just keeps the
  // invocation count down.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
