"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeShortLabels,
  type Locale,
  isLocale,
} from "@/i18n/config";

/**
 * Compact locale picker rendered in the masthead. Uses pathname math to
 * preserve the current page when switching locales.
 *
 * Note: for non-localized paths (the blog), this falls back to pointing at
 * the target locale's home page, because the blog is English-only and there
 * is nothing to map to.
 */
export default function LanguageSwitcher({
  ariaLabel,
  currentLocale,
}: {
  ariaLabel: string;
  currentLocale: Locale;
}) {
  const pathname = usePathname() ?? "/";

  function hrefFor(locale: Locale): string {
    // Localized path: swap out the first segment.
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = locale;
      return "/" + segments.join("/");
    }
    // Blog or other unlocalized path: take the user back to the locale home.
    return `/${locale}`;
  }

  return (
    <nav
      aria-label={ariaLabel}
      className="flex items-center gap-2 text-xs md:text-sm"
    >
      {locales.map((l, i) => {
        const isActive = l === currentLocale;
        return (
          <span key={l} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-black/30">
                ·
              </span>
            )}
            {isActive ? (
              <span
                aria-current="true"
                className="pirateOne uppercase tracking-widest text-red-500"
              >
                {localeShortLabels[l]}
              </span>
            ) : (
              <Link
                href={hrefFor(l)}
                className="pirateOne uppercase tracking-widest text-black/60 hover:text-red-500 transition-colors"
              >
                {localeShortLabels[l]}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
