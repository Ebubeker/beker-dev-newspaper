/**
 * Locale configuration for the BekerDev agency site.
 * Blog posts live outside this surface and stay English-only.
 */

export const locales = ["en", "sq", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  sq: "Shqip",
  de: "Deutsch",
  fr: "Français",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  sq: "SQ",
  de: "DE",
  fr: "FR",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  sq: "sq",
  de: "de",
  fr: "fr",
};

/** For OpenGraph locale field (xx_YY). */
export const localeOgLocale: Record<Locale, string> = {
  en: "en_US",
  sq: "sq_AL",
  de: "de_DE",
  fr: "fr_FR",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Interpolates `{key}` tokens inside a string against a vars map. */
export function interpolate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => {
    const v = vars[k];
    return v === undefined ? `{${k}}` : String(v);
  });
}
