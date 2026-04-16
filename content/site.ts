/**
 * Single source of truth for site-wide metadata and brand facts.
 * Edit values here instead of hunting them down across components.
 *
 * The top-level `site` export holds locale-invariant data (URLs, identity,
 * contact, nav structure). Anything that varies by locale lives in
 * `getSiteMeta(locale)` and is keyed off the shared `Locale` type.
 */
import type { Locale } from "@/i18n/config";

export const site = {
  name: "BekerDev",
  brand: "BEKERDEV",
  url: "https://beker.dev",
  ogImage: "/assets/home.png",
  since: 2022,
  location: {
    city: "Shkodër",
    country: "Albania",
    countryCode: "AL",
    timezone: "Europe/Tirane",
  },
  founder: {
    name: "Ebubeker Rexha",
  },
  contact: {
    email: "hello@beker.dev",
    /** Path without locale prefix. Wrap with `withLocale(locale)` when rendering. */
    inquiries: "/contact",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ebubeker-rexha-3528bb1a2/",
    github: "https://github.com/Ebubeker",
  },
  /**
   * Navigation items. `key` maps to the `nav` section of the Dictionary.
   * `localized: true` means the href should be prefixed with `/${locale}`.
   * `localized: false` means the href is shared across locales (used for blog,
   * which stays English-only by product decision).
   */
  nav: [
    { key: "work", href: "/work", localized: true },
    { key: "services", href: "/#services", localized: true },
    { key: "journal", href: "/blog", localized: false },
    { key: "contact", href: "/contact", localized: true },
  ],
} as const;

export type Site = typeof site;

/**
 * Per-locale prose: taglines, SEO description, and role label.
 * Kept separate from the invariant data so translations don't fight the
 * TypeScript narrow-literal types on the main `site` export.
 */
type SiteMeta = {
  tagline: string;
  shortTagline: string;
  description: string;
  founderRole: string;
};

const siteMetaByLocale: Record<Locale, SiteMeta> = {
  en: {
    tagline:
      "Your landing page in a day. Your MVP in a week. Built by one developer. No team, no delays.",
    shortTagline: "Websites and web apps, shipped by one developer.",
    description:
      "BekerDev is a one-person web and app development studio. Landing pages in a day, MVPs in a week, and long-form web apps built end-to-end in modern React, Next.js and TypeScript.",
    founderRole: "Founder & Lead Developer",
  },
  sq: {
    tagline:
      "Landing page-i yt brenda një dite. MVP-ja jote brenda një jave. Ndërtuar nga një zhvillues i vetëm. Pa ekip, pa vonesa.",
    shortTagline: "Faqe dhe aplikacione web, të dorëzuara nga një zhvillues.",
    description:
      "BekerDev është një studio një-personëshe për zhvillim web dhe aplikacionesh. Landing page brenda një dite, MVP brenda një jave, dhe aplikacione web afatgjata të ndërtuara nga fillimi në fund me React, Next.js dhe TypeScript.",
    founderRole: "Themelues dhe Zhvillues Kryesor",
  },
  de: {
    tagline:
      "Ihre Landing Page an einem Tag. Ihr MVP in einer Woche. Gebaut von einem Entwickler. Kein Team, keine Verzögerungen.",
    shortTagline: "Webseiten und Web-Apps, ausgeliefert von einem Entwickler.",
    description:
      "BekerDev ist ein Ein-Personen-Studio für Web- und App-Entwicklung. Landing Pages an einem Tag, MVPs in einer Woche und umfangreiche Web-Apps, Ende-zu-Ende gebaut mit modernem React, Next.js und TypeScript.",
    founderRole: "Gründer & Lead Developer",
  },
  fr: {
    tagline:
      "Votre landing page en un jour. Votre MVP en une semaine. Construit par un seul développeur. Aucune équipe, aucun retard.",
    shortTagline: "Sites web et applications web, livrés par un seul développeur.",
    description:
      "BekerDev est un studio de développement web et d'applications en solo. Landing pages en un jour, MVP en une semaine et applications web ambitieuses construites de bout en bout en React, Next.js et TypeScript modernes.",
    founderRole: "Fondateur & Développeur principal",
  },
};

export function getSiteMeta(locale: Locale): SiteMeta {
  return siteMetaByLocale[locale];
}

/** Prefix a site path with the locale segment. Pass-through for external URLs. */
export function withLocale(path: string, locale: Locale): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("#")) return `/${locale}/${path}`;
  if (path.startsWith("/#")) return `/${locale}${path}`;
  return `/${locale}${path}`;
}
