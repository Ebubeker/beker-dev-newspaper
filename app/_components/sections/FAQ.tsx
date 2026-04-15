import { faqs } from "@/content/faqs";

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          Section E · Q&amp;A Column
        </p>
        <h2
          id="faq-headline"
          className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-none mt-2"
        >
          Frequently asked.
        </h2>
      </div>
      <div className="border-t-2 border-black/80">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b-2 border-black/20 py-5"
          >
            <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
              <h3 className="unifrakturmaguntia text-2xl md:text-3xl leading-tight text-balance">
                {faq.question}
              </h3>
              <span
                aria-hidden
                className="unifrakturmaguntia text-3xl md:text-4xl text-red-500 transition-transform group-open:rotate-45 shrink-0"
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-black/80 max-w-3xl">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
