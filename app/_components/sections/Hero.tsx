import Link from "next/link";
import Image from "next/image";
import ShkoderBackground from "@/assets/images/download.png";
import EbubekerPerson from "@/assets/images/ebubeker.png";
import { getSiteMeta, site, withLocale } from "@/content/site";
import { interpolate, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

/**
 * The "front-page lead" section. Massive editorial headline plus photo
 * treatment, sitting directly under the Header masthead.
 */
const Hero = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale);
  const meta = getSiteMeta(locale);

  const founderAlt = interpolate(dict.hero.founderAlt, {
    founder: site.founder.name,
    site: site.name,
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-headline"
      className="py-10 border-b-2 border-black/20"
    >
      <div className="flex max-lg:flex-col gap-8 lg:gap-12 items-stretch">
        {/* Left column: giant headline */}
        <div className="lg:w-7/12 flex flex-col justify-between">
          <div>
            <p className="pirateOne uppercase tracking-[0.2em] text-xs lg:text-sm border-b border-black/30 pb-2 mb-6">
              {dict.hero.kicker}
            </p>
            <h1
              id="hero-headline"
              className="unifrakturmaguntia leading-[0.95] text-[54px] sm:text-[72px] md:text-[88px] lg:text-[96px] xl:text-[120px] text-balance"
            >
              {dict.hero.headlineLine1}{" "}
              <span className="italic text-red-500">&amp;</span>{" "}
              {dict.hero.headlineLine1Cont}{" "}
              <span className="italic">{dict.hero.headlineShipped}</span>{" "}
              {dict.hero.headlineLine2}
            </h1>
            <p className="mt-8 text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed text-balance">
              {meta.tagline}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={withLocale("/contact", locale)}
              className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3 text-base md:text-lg pirateOne hover:bg-red-500 transition-colors"
            >
              {dict.hero.requestQuote}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-1 pirateOne text-base md:text-lg transition-colors"
            >
              {dict.hero.seeRecentWork}
            </Link>
          </div>
        </div>

        {/* Right column: newspaper photo block */}
        <div className="lg:w-5/12 relative border-2 border-black/80 bg-white">
          <div className="p-2">
            <div className="relative overflow-hidden">
              <Image
                src={ShkoderBackground}
                alt={dict.hero.shkoderAlt}
                className="w-full grayscale-[95%]"
                priority
              />
              <Image
                src={EbubekerPerson}
                alt={founderAlt}
                className="absolute bottom-0 right-[80px] w-[140px] md:w-[180px] lg:w-[200px] xl:w-[260px] grayscale-[70%]"
                priority
              />
            </div>
            <div className="border-t border-black/30 mt-2 pt-2 flex justify-between text-xs">
              <span className="pirateOne uppercase tracking-widest">
                {dict.hero.founderLabel}
              </span>
              <span>{site.founder.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
