import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { withLocale } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

/**
 * "Feature articles". The landing page's selected-work section. Each card
 * is a newspaper feature column that links to the full case study at
 * /[locale]/work/[slug].
 */
const WorkTeaser = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale);
  const featured = getFeaturedProjects(locale, 3);

  return (
    <section
      id="work"
      aria-labelledby="work-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
        <div>
          <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
            {dict.work.sectionLabel}
          </p>
          <h2
            id="work-headline"
            className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-none mt-2"
          >
            {dict.work.heading}
          </h2>
        </div>
        <Link
          href={withLocale("/work", locale)}
          className="pirateOne text-base md:text-lg border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5 transition-colors"
        >
          {dict.work.seeArchive}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black/80">
        {featured.map((project, index) => (
          <article
            key={project.slug}
            className={[
              "flex flex-col p-6 lg:p-8 bg-white/40",
              index !== featured.length - 1
                ? "border-b-2 lg:border-b-0 lg:border-r-2 border-black/30"
                : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between mb-4 text-xs">
              <span className="pirateOne uppercase tracking-[0.2em] text-black/60">
                {project.kicker}
              </span>
              <span>{project.year}</span>
            </div>

            <Link
              href={withLocale(`/work/${project.slug}`, locale)}
              className="group block"
            >
              <div className="relative overflow-hidden border border-black/20 bg-black">
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="w-full grayscale-[90%] group-hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>
              <h3 className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-5 group-hover:text-red-500 transition-colors">
                {project.title}
              </h3>
            </Link>

            <p className="mt-3 text-base leading-relaxed flex-1">
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

            <div className="mt-6 pt-5 border-t border-black/20 flex items-center justify-between">
              <Link
                href={withLocale(`/work/${project.slug}`, locale)}
                className="pirateOne text-sm md:text-base border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5 transition-colors"
              >
                {dict.work.readCaseStudy}
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-black/60 hover:text-red-500"
                >
                  {dict.work.live}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkTeaser;
