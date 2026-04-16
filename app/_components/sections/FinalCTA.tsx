import Link from "next/link";
import { site, withLocale } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

/**
 * The "late-edition stop-press". The final conversion push before the
 * typographic footer. Big, declarative, one CTA.
 */
const FinalCTA = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale);

  return (
    <section
      aria-label={dict.finalCta.headlineLine1}
      className="py-20 md:py-28 border-b-2 border-black/20 text-center"
    >
      <p className="pirateOne uppercase tracking-[0.3em] text-xs md:text-sm text-red-500">
        {dict.finalCta.kicker}
      </p>
      <h2 className="unifrakturmaguntia text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mt-4 text-balance">
        {dict.finalCta.headlineLine1}
        <br />
        <span className="italic">{dict.finalCta.headlineLine2}</span>
      </h2>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-balance">
        {dict.finalCta.body}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href={withLocale("/contact", locale)}
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg md:text-xl pirateOne hover:bg-red-500 transition-colors"
        >
          {dict.finalCta.requestQuote}
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
