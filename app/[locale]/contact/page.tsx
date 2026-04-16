import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { site, withLocale } from "@/content/site";
import {
  defaultLocale,
  interpolate,
  isLocale,
  locales,
  localeOgLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import ContactForm from "./ContactForm";

type Params = { locale: string };

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const dict = getDictionary(locale);
  const canonicalPath = withLocale("/contact", locale);
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const description = dict.contact.subheading;

  const languageAlternates: Record<string, string> = {};
  for (const l of locales) {
    languageAlternates[l] = `${site.url}${withLocale("/contact", l)}`;
  }
  languageAlternates["x-default"] = `${site.url}${withLocale("/contact", defaultLocale)}`;

  return {
    title: dict.nav.contact,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      title: `${dict.nav.contact} · ${site.name}`,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: localeOgLocale[locale],
      type: "website",
    },
  };
}

export default function ContactPage({ params }: { params: Params }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  const timezoneLine = interpolate(dict.contact.timezoneValue, {
    tz: site.location.timezone,
  });

  return (
    <main className="py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pirateOne uppercase tracking-[0.2em] text-xs md:text-sm border-b-2 border-black/20 pb-3 mb-8 flex gap-3"
      >
        <Link href={withLocale("/", locale)} className="hover:text-red-500">
          {dict.work.breadcrumbHome}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-black/60">{dict.contact.breadcrumbContact}</span>
      </nav>

      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          {dict.contact.kicker}
        </p>
        <h1 className="unifrakturmaguntia text-6xl md:text-8xl lg:text-[120px] leading-[0.95] mt-3 text-balance">
          {dict.contact.heading}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
          {dict.contact.subheading}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 mb-16">
        <ContactForm locale={locale} />

        <aside className="border-2 border-black/80 p-6 lg:p-8 h-fit bg-white/50">
          <p className="pirateOne uppercase tracking-[0.25em] text-xs text-black/60 mb-4">
            {dict.contact.orDirectly}
          </p>
          <div className="space-y-5 text-sm md:text-base">
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.contact.emailLabel}
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-1 inline-block hover:text-red-500 border-b border-black/30 hover:border-red-500 transition-colors"
              >
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.contact.linkedinLabel}
              </p>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block hover:text-red-500 border-b border-black/30 hover:border-red-500 transition-colors"
              >
                {dict.contact.linkedinHandle}
              </a>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.contact.responseTimeLabel}
              </p>
              <p className="mt-1">{dict.contact.responseTimeValue}</p>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.contact.timezoneLabel}
              </p>
              <p className="mt-1">{timezoneLine}</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
