/**
 * Central dictionary loader.
 * Usage: `const t = getDictionary(locale);` then reference `t.hero.requestQuote` etc.
 *
 * All four locales are imported statically. At ~140 strings each, the total
 * payload is small enough that code-splitting per locale is not worth the
 * complexity for server components in a static-export-friendly site.
 */
import type { Locale } from "./config";
import en, { type Dictionary } from "./dictionaries/en";
import sq from "./dictionaries/sq";
import de from "./dictionaries/de";
import fr from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  sq,
  de,
  fr,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./dictionaries/en";
