import Link from "next/link";
import { services } from "@/content/services";

/**
 * Services laid out like newspaper "classifieds". Bordered boxes, serif
 * headlines, clear delivery/scope labels, all CTAs pointing to /contact.
 */
const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
        <div>
          <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
            Section B · Classifieds
          </p>
          <h2
            id="services-headline"
            className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-none mt-2"
          >
            What I build.
          </h2>
        </div>
        <p className="max-w-md text-base md:text-lg text-balance">
          Four ways to work together, all built, shipped, and supported by one
          developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-2 border-black/80">
        {services.map((service, index) => {
          const isFirst = index === 0;
          return (
            <article
              key={service.slug}
              className={[
                "relative p-6 lg:p-8 flex flex-col",
                // Inner borders: right on all but last in row, bottom on all but last in column.
                "border-b-2 md:border-b-2 md:[&:nth-last-child(-n+2)]:md:border-b-2 xl:[&:nth-last-child(-n+4)]:xl:border-b-0",
                "md:border-r-2 md:[&:nth-child(2n)]:md:border-r-0 xl:[&:nth-child(2n)]:xl:border-r-2 xl:[&:nth-child(4n)]:xl:border-r-0",
                "border-black/30 bg-white/40",
                isFirst ? "md:bg-black md:text-white" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`pirateOne uppercase tracking-[0.2em] text-[10px] md:text-xs ${
                    isFirst ? "text-red-400" : "text-black/50"
                  }`}
                >
                  No. 0{index + 1}
                </span>
                {isFirst && (
                  <span className="pirateOne uppercase text-[10px] md:text-xs bg-red-500 text-white px-2 py-1 tracking-widest">
                    Lead story
                  </span>
                )}
              </div>

              <h3 className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-4">
                {service.title}
              </h3>
              <p
                className={`pirateOne text-sm md:text-base mt-2 ${
                  isFirst ? "text-white/80" : "text-black/60"
                }`}
              >
                {service.delivery}
              </p>

              <p className="mt-4 text-base leading-relaxed">{service.pitch}</p>

              <ul className="mt-5 space-y-1.5 text-sm">
                {service.inclusions.map((inclusion) => (
                  <li
                    key={inclusion}
                    className={`flex gap-2 ${
                      isFirst ? "text-white/90" : "text-black/80"
                    }`}
                  >
                    <span aria-hidden>·</span>
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p
                  className={`text-xs italic mb-4 ${
                    isFirst ? "text-white/70" : "text-black/60"
                  }`}
                >
                  Best for: {service.bestFor}
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 pirateOne text-base border-b-2 pb-0.5 transition-colors ${
                    isFirst
                      ? "border-white hover:border-red-400 hover:text-red-400"
                      : "border-black hover:border-red-500 hover:text-red-500"
                  }`}
                >
                  Request a quote
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
