import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteMeta, site, withLocale } from "@/content/site";
import {
  defaultLocale,
  isLocale,
  locales,
  localeOgLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import Header from "../_components/Header";
import MegaFooter from "../_components/sections/MegaFooter";
import SiteJsonLd from "../_components/SiteJsonLd";

type LayoutParams = { locale: string };

export function generateStaticParams(): LayoutParams[] {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: LayoutParams;
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const meta = getSiteMeta(locale);
  const canonicalPath = withLocale("/", locale);
  const canonicalUrl = `${site.url}${canonicalPath}`;

  const languageAlternates: Record<string, string> = {};
  for (const l of locales) {
    languageAlternates[l] = `${site.url}${withLocale("/", l)}`;
  }
  languageAlternates["x-default"] = `${site.url}${withLocale("/", defaultLocale)}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} · ${meta.shortTagline}`,
      template: `%s · ${site.name}`,
    },
    description: meta.description,
    keywords: [
      "web development",
      "app development",
      "landing page",
      "MVP development",
      "Next.js developer",
      "React developer",
      "freelance developer",
      "solo developer",
      "BekerDev",
      "Ebubeker Rexha",
    ],
    authors: [{ name: site.founder.name, url: site.social.linkedin }],
    creator: site.founder.name,
    publisher: site.name,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      title: `${site.name} · ${meta.shortTagline}`,
      description: meta.description,
      url: canonicalUrl,
      siteName: site.name,
      locale: localeOgLocale[locale],
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} · ${meta.shortTagline}`,
      description: meta.description,
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "technology",
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <SiteJsonLd locale={locale} />
      <div className="antialiased px-4">
        <Header locale={locale} dict={dict} />
        {children}
      </div>
      <MegaFooter locale={locale} dict={dict} />
    </>
  );
}
