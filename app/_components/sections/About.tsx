import Image from "next/image";
import Link from "next/link";
import EbubekerPortrait from "@/assets/images/ebubeker02.png";
import { site } from "@/content/site";

/**
 * The "Editor's letter". A founder-level trust signal that flips the
 * solo-dev objection ("but it's just one guy") into the brand promise.
 */
const About = () => {
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
              alt={`${site.founder.name}, founder of ${site.name}`}
              className="w-full grayscale-[80%]"
            />
          </div>
          <div className="border-t border-black/30 mt-2 pt-2 flex items-center justify-between text-xs">
            <span className="pirateOne uppercase tracking-widest">Editor</span>
            <span>{site.founder.name}</span>
          </div>
        </div>

        <div>
          <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
            Editor&rsquo;s letter
          </p>
          <h2
            id="about-headline"
            className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-2 text-balance"
          >
            One developer. On purpose.
          </h2>

          <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              I&rsquo;m Ebubeker. I run BekerDev as a one-person studio, not
              because I couldn&rsquo;t put together a team, but because most of
              the problems founders bring me don&rsquo;t need one. They need a
              working product, shipped fast, by someone who actually cares
              whether it works.
            </p>
            <p>
              Before this, I built front-ends at{" "}
              <span className="text-red-500 font-semibold">Plan4Better</span>{" "}
              and{" "}
              <span className="text-red-500 font-semibold">Niza Global</span>,
              and co-founded{" "}
              <span className="text-red-500 font-semibold">Subdivide</span>, a
              data-automation startup that got to top-5 at ACTI YOUTH in
              Albania. So &ldquo;solo&rdquo; doesn&rsquo;t mean &ldquo;new.&rdquo;
              It means no handoffs, no junior-dev surprises, and one person who
              owns the outcome.
            </p>
            <p>
              If that&rsquo;s the kind of partnership you want on your next
              build, that&rsquo;s the kind of partnership BekerDev sells.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 text-base md:text-lg pirateOne hover:bg-red-500 transition-colors"
            >
              Start a project →
            </Link>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-1 pirateOne text-base md:text-lg transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
