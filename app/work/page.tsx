import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The BekerDev archive of selected case studies, covering web and app work shipped by Ebubeker Rexha.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work · ${site.name}`,
    description:
      "The BekerDev archive of selected case studies, covering web and app work shipped by Ebubeker Rexha.",
    url: `${site.url}/work`,
    type: "website",
  },
};

export default function WorkIndexPage() {
  return (
    <main className="py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pirateOne uppercase tracking-[0.2em] text-xs md:text-sm border-b-2 border-black/20 pb-3 mb-8 flex gap-3"
      >
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-black/60">Work</span>
      </nav>

      {/* Masthead */}
      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          The Archive
        </p>
        <h1 className="unifrakturmaguntia text-6xl md:text-8xl lg:text-[120px] leading-[0.95] mt-3 text-balance">
          Selected work, in full.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
          Every story shipped by BekerDev. Click through for the full case
          study: problem, approach, outcome.
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
              href={`/work/${project.slug}`}
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
                <span>No. 0{index + 1}</span>
                <span aria-hidden>·</span>
                <span>{project.kicker}</span>
                <span aria-hidden>·</span>
                <span>{project.year}</span>
              </div>
              <Link href={`/work/${project.slug}`} className="group">
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
                  href={`/work/${project.slug}`}
                  className="pirateOne text-base md:text-lg border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5 transition-colors"
                >
                  Read case study →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center py-16">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight text-balance">
          Your project could be next.
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            Request a quote →
          </Link>
        </div>
      </div>
    </main>
  );
}
