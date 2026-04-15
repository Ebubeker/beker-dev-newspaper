import Link from "next/link";
import { site } from "@/content/site";

/**
 * The "late-edition stop-press". The final conversion push before the
 * typographic footer. Big, declarative, one CTA.
 */
const FinalCTA = () => {
  return (
    <section
      aria-label="Start a project"
      className="py-20 md:py-28 border-b-2 border-black/20 text-center"
    >
      <p className="pirateOne uppercase tracking-[0.3em] text-xs md:text-sm text-red-500">
        Stop press · Late edition
      </p>
      <h2 className="unifrakturmaguntia text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mt-4 text-balance">
        Got a project?
        <br />
        <span className="italic">Let&rsquo;s get it shipped.</span>
      </h2>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-balance">
        Tell me what you&rsquo;re building, when you need it, and I&rsquo;ll
        come back with a real quote within a day.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg md:text-xl pirateOne hover:bg-red-500 transition-colors"
        >
          Request a quote →
        </Link>
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center gap-2 border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-1 pirateOne text-lg md:text-xl transition-colors"
        >
          {site.contact.email}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
