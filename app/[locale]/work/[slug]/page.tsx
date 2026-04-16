import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/app/_components/JsonLd";
import {
  getAdjacentProjects,
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects";
import { site, withLocale } from "@/content/site";
import {
  defaultLocale,
  isLocale,
  locales,
  localeOgLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type Params = { locale: string; slug: string };

export function generateStaticParams(): Params[] {
  const slugs = getAllProjectSlugs();
  const params: Params[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const project = getProjectBySlug(params.slug, locale);
  if (!project) {
    return {
      title: "Not found",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = withLocale(`/work/${project.slug}`, locale);
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const description = project.summary;

  const languageAlternates: Record<string, string> = {};
  for (const l of locales) {
    languageAlternates[l] = `${site.url}${withLocale(`/work/${project.slug}`, l)}`;
  }
  languageAlternates["x-default"] = `${site.url}${withLocale(`/work/${project.slug}`, defaultLocale)}`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      title: project.title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: localeOgLocale[locale],
      type: "article",
      images: [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height,
          alt: project.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [project.image.src],
    },
  };
}

export default function WorkSlugPage({ params }: { params: Params }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const project = getProjectBySlug(params.slug, locale);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug, locale);
  const url = `${site.url}${withLocale(`/work/${project.slug}`, locale)}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    url,
    author: {
      "@type": "Person",
      name: site.founder.name,
    },
    creator: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    dateCreated: project.year,
    image: `${site.url}${project.image.src}`,
    keywords: project.stack.join(", "),
    inLanguage: locale,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.work.breadcrumbHome,
        item: `${site.url}${withLocale("/", locale)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.work.breadcrumbWork,
        item: `${site.url}${withLocale("/work", locale)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  };

  return (
    <main className="py-10">
      <JsonLd data={[creativeWorkJsonLd, breadcrumbJsonLd]} />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pirateOne uppercase tracking-[0.2em] text-xs md:text-sm border-b-2 border-black/20 pb-3 mb-8 flex gap-3 flex-wrap"
      >
        <Link href={withLocale("/", locale)} className="hover:text-red-500">
          {dict.work.breadcrumbHome}
        </Link>
        <span aria-hidden>/</span>
        <Link href={withLocale("/work", locale)} className="hover:text-red-500">
          {dict.work.breadcrumbWork}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-black/60">{project.title}</span>
      </nav>

      {/* Article header */}
      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm pirateOne uppercase tracking-[0.2em] text-black/60 mb-5">
          <span>{project.kicker}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.client}</span>
        </div>
        <h1 className="unifrakturmaguntia text-5xl md:text-7xl lg:text-[104px] leading-[0.95] text-balance">
          {project.title}
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl leading-relaxed text-balance">
          {project.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm md:text-base">
          <span className="pirateOne uppercase tracking-widest text-black/60">
            {dict.work.stack}
          </span>
          {project.stack.map((tech) => (
            <span key={tech} className="font-semibold text-red-500">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="pirateOne border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5"
            >
              {dict.work.visitSite}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pirateOne border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5"
            >
              {dict.work.source}
            </a>
          )}
        </div>
      </header>

      {/* Hero image */}
      <div className="border-2 border-black/80 bg-black mb-12">
        <Image
          src={project.image}
          alt={project.alt}
          className="w-full grayscale-[80%]"
          priority
        />
      </div>

      {/* Body grid */}
      <article className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-14 mb-16">
        <div className="space-y-12">
          <section>
            <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-2">
              {dict.work.problemKicker}
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              {dict.work.problemHeading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.problem}
            </p>
          </section>

          <section>
            <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-2">
              {dict.work.approachKicker}
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              {dict.work.approachHeading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.approach}
            </p>
          </section>

          <section>
            <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-2">
              {dict.work.outcomeKicker}
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              {dict.work.outcomeHeading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.outcome}
            </p>
          </section>
        </div>

        {/* Sidebar: project facts */}
        <aside className="border-2 border-black/80 p-6 h-fit bg-white/50">
          <p className="pirateOne uppercase tracking-[0.25em] text-xs text-black/60 mb-4">
            {dict.work.projectFile}
          </p>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.work.clientLabel}
              </dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.work.roleLabel}
              </dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.work.yearLabel}
              </dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                {dict.work.highlightsLabel}
              </dt>
              <dd className="mt-2">
                <ul className="space-y-2">
                  {project.body.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-red-500" aria-hidden>
                        ·
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </article>

      {/* Prev / Next */}
      <nav
        aria-label="More case studies"
        className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black/80 mb-16"
      >
        {prev ? (
          <Link
            href={withLocale(`/work/${prev.slug}`, locale)}
            className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              {dict.work.previousStory}
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              {dict.work.endOfArchive}
            </p>
          </div>
        )}
        {next ? (
          <Link
            href={withLocale(`/work/${next.slug}`, locale)}
            className="p-6 lg:p-8 text-right hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              {dict.work.nextStory}
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 text-right opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              {dict.work.endOfArchive}
            </p>
          </div>
        )}
      </nav>

      {/* CTA */}
      <section className="border-t-2 border-black/80 pt-12 text-center pb-10">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          {dict.work.wantOneForProduct}
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href={withLocale("/contact", locale)}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            {dict.hero.requestQuote} →
          </Link>
        </div>
      </section>
    </main>
  );
}
