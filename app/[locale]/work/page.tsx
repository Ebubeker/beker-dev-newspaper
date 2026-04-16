import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjects } from "@/content/projects";
import { site, withLocale } from "@/content/site";
import {
  defaultLocale,
  isLocale,
  locales,
  localeOgLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

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
  const canonicalPath = withLocale("/work", locale);
  const canonicalUrl = `${site.url}${canonicalPath}`;

  const languageAlternates: Record<string, string> = {};
  for (const l of locales) {
    languageAlternates[l] = `${site.url}${withLocale("/work", l)}`;
  }
  languageAlternates["x-default"] = `${site.url}${withLocale("/work", defaultLocale)}`;

  const description = dict.work.archiveSubheading;

  return {
    title: dict.nav.work,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      title: `${dict.nav.work} · ${site.name}`,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: localeOgLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.nav.work} · ${site.name}`,
      description,
    },
  };
}

export default function WorkIndexPage({ params }: { params: Params }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);

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
        <span className="text-black/60">{dict.work.breadcrumbWork}</span>
      </nav>

      {/* Masthead */}
      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          {dict.work.archiveKicker}
        </p>
        <h1 className="unifrakturmaguntia text-6xl md:text-8xl lg:text-[120px] leading-[0.95] mt-3 text-balance">
          {dict.work.archiveHeading}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
          {dict.work.archiveSubheading}
        </p>
      </header>

      {/* Feature list */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 pb-12 border-b-2 border-black/20"
          >
            <Link
              href={withLocale(`/work/${project.slug}`, locale)}
              className="block relative overflow-hidden border-2 border-black/80 bg-black group"
            >
              <Image
                src={project.image}
                alt={project.alt}
                className="w-full grayscale-[90%] group-hover:grayscale-0 transition-[filter] duration-500"
              />
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-xs pirateOne uppercase tracking-[0.2em] text-black/60 mb-3">
                <span>
                  {dict.work.no} 0{index + 1}
                </span>
                <span aria-hidden>·</span>
                <span>{project.kicker}</span>
                <span aria-hidden>·</span>
                <span>{project.year}</span>
              </div>
              <Link
                href={withLocale(`/work/${project.slug}`, locale)}
                className="group"
              >
                <h2 className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance group-hover:text-red-500 transition-colors">
                  {project.title}
                </h2>
              </Link>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm font-semibold text-red-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href={withLocale(`/work/${project.slug}`, locale)}
                  className="pirateOne text-base md:text-lg border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5 transition-colors"
                >
                  {dict.work.readCaseStudy}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center py-16">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight text-balance">
          {dict.work.yourProjectNext}
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href={withLocale("/contact", locale)}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            {dict.hero.requestQuote} →
          </Link>
        </div>
      </div>
    </main>
  );
}
