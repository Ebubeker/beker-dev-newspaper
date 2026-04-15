import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/app/_components/JsonLd";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/content/projects";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Not found",
      robots: { index: false, follow: false },
    };
  }

  const url = `${site.url}/work/${project.slug}`;
  const description = project.summary;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description,
      url,
      siteName: site.name,
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
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);
  const url = `${site.url}/work/${project.slug}`;

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
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${site.url}/work`,
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
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link href="/work" className="hover:text-red-500">
          Work
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
            Stack:
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
              Visit site ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pirateOne border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5"
            >
              Source ↗
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
              The problem
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              What needed solving.
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.problem}
            </p>
          </section>

          <section>
            <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-2">
              The approach
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              How it got built.
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.approach}
            </p>
          </section>

          <section>
            <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-2">
              The outcome
            </p>
            <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight mb-5">
              What shipped.
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {project.body.outcome}
            </p>
          </section>
        </div>

        {/* Sidebar: project facts */}
        <aside className="border-2 border-black/80 p-6 h-fit bg-white/50">
          <p className="pirateOne uppercase tracking-[0.25em] text-xs text-black/60 mb-4">
            Project file
          </p>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Client
              </dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Role
              </dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Year
              </dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            <div>
              <dt className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Highlights
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
            href={`/work/${prev.slug}`}
            className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              ← Previous story
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              End of archive
            </p>
          </div>
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="p-6 lg:p-8 text-right hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              Next story →
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 text-right opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              End of archive
            </p>
          </div>
        )}
      </nav>

      {/* CTA */}
      <section className="border-t-2 border-black/80 pt-12 text-center pb-10">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Want one of these for your product?
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            Request a quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
