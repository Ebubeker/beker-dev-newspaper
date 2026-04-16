import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import EbubekerPortrait from "@/assets/images/ebubeker02.png";
import { site, withLocale } from "@/content/site";
import { interpolate, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

/**
 * The "Editor's letter". A founder-level trust signal that flips the
 * solo-dev objection ("but it's just one guy") into the brand promise.
 */
const About = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale);

  const portraitAlt = interpolate(dict.about.founderAlt, {
    founder: site.founder.name,
    site: site.name,
  });

  // paragraph2 uses {plan4better} / {niza} / {subdivide} tokens that we render
  // as red spans rather than plain text, so we split manually rather than
  // relying on the string-based interpolate().
  const paragraph2Tokens: Record<string, string> = {
    plan4better: "Plan4Better",
    niza: "Niza Global",
    subdivide: "Subdivide",
  };
  const paragraph2Parts = dict.about.paragraph2.split(/\{(\w+)\}/g);

  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">
        <div className="border-2 border-black/80 bg-white p-3 max-w-[380px] w-full">
          <div className="relative overflow-hidden bg-black">
            <Image
              src={EbubekerPortrait}
              alt={portraitAlt}
              className="w-full grayscale-[80%]"
            />
          </div>
          <div className="border-t border-black/30 mt-2 pt-2 flex items-center justify-between text-xs">
            <span className="pirateOne uppercase tracking-widest">
              {dict.about.editorLabel}
            </span>
            <span>{site.founder.name}</span>
          </div>
        </div>

        <div>
          <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
            {dict.about.kicker}
          </p>
          <h2
            id="about-headline"
            className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-2 text-balance"
          >
            {dict.about.heading}
          </h2>

          <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed max-w-2xl">
            <p>{dict.about.paragraph1}</p>
            <p>
              {paragraph2Parts.map((part, idx) => {
                // Even indices are literal text, odd indices are token names
                // (due to the capturing group in the split regex).
                if (idx % 2 === 0) {
                  return <Fragment key={idx}>{part}</Fragment>;
                }
                const value = paragraph2Tokens[part];
                if (!value) {
                  return <Fragment key={idx}>{`{${part}}`}</Fragment>;
                }
                return (
                  <span
                    key={idx}
                    className="text-red-500 font-semibold"
                  >
                    {value}
                  </span>
                );
              })}
            </p>
            <p>{dict.about.paragraph3}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={withLocale("/contact", locale)}
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 text-base md:text-lg pirateOne hover:bg-red-500 transition-colors"
            >
              {dict.about.startProject}
            </Link>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-1 pirateOne text-base md:text-lg transition-colors"
            >
              {dict.about.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
