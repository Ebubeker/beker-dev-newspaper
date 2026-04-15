import { experience } from "@/content/experience";

/**
 * "Distributed by" strip. In the newspaper metaphor, a masthead banner that
 * lists who the paper is syndicated through. Here, companies worked with.
 */
const TrustStrip = () => {
  return (
    <section
      aria-label="Companies worked with"
      className="py-6 border-b-2 border-black/20"
    >
      <div className="flex items-center gap-6 overflow-hidden">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm whitespace-nowrap border-r border-black/30 pr-6">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-base md:text-lg">
          {experience.map((item) => (
            <span
              key={item.company}
              className="pirateOne font-semibold tracking-tight"
            >
              {item.company}
            </span>
          ))}
          <span className="pirateOne font-semibold tracking-tight opacity-60">
            + independent founders
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
