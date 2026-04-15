import { testimonials } from "@/content/testimonials";

const Testimonials = () => {
  // Empty-state: show a single placeholder pull-quote until real testimonials
  // are collected. Swap once you have 2+ quotes.
  if (testimonials.length === 0) {
    return (
      <section
        aria-label="Client testimonials"
        className="py-16 border-b-2 border-black/20"
      >
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60 mb-6">
          Section D · Letters to the Editor
        </p>
        <blockquote className="border-l-[6px] border-black pl-6 md:pl-10 max-w-4xl">
          <p className="unifrakturmaguntia text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            “Your testimonial goes here.”
          </p>
          <footer className="mt-5 pirateOne text-sm md:text-base text-black/70">
            A real client, coming soon.
          </footer>
        </blockquote>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="testimonials-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          Section D · Letters to the Editor
        </p>
        <h2
          id="testimonials-headline"
          className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-none mt-2"
        >
          What clients say.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black/80">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={`${testimonial.author}-${index}`}
            className={[
              "p-6 lg:p-8 bg-white/40",
              index % 2 === 0 ? "md:border-r-2 border-black/30" : "",
              index < testimonials.length - (testimonials.length % 2 === 0 ? 2 : 1)
                ? "border-b-2 border-black/30"
                : "",
            ].join(" ")}
          >
            <p className="text-lg md:text-xl leading-relaxed italic">
              “{testimonial.quote}”
            </p>
            <footer className="mt-4 pirateOne text-sm text-black/70">
              {testimonial.author},{" "}
              <span className="text-red-500">{testimonial.role}</span> at{" "}
              {testimonial.company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
