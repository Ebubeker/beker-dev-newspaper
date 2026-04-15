import { processSteps } from "@/content/process";

const Process = () => {
  return (
    <section
      id="process"
      aria-labelledby="process-headline"
      className="py-16 border-b-2 border-black/20"
    >
      <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
        <div>
          <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
            Section C · The Masthead
          </p>
          <h2
            id="process-headline"
            className="unifrakturmaguntia text-5xl md:text-6xl lg:text-7xl leading-none mt-2"
          >
            How an issue goes to press.
          </h2>
        </div>
        <p className="max-w-md text-base md:text-lg text-balance">
          Every BekerDev project runs through the same four steps. Fast,
          transparent, and with no middle management between you and the code.
        </p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-2 border-black/80">
        {processSteps.map((step, index) => (
          <li
            key={step.number}
            className={[
              "p-6 lg:p-8 bg-white/40",
              index !== processSteps.length - 1
                ? "border-b-2 md:border-b-2 md:[&:nth-last-child(-n+2)]:md:border-b-2 xl:[&:nth-last-child(-n+4)]:xl:border-b-0"
                : "",
              "md:border-r-2 md:[&:nth-child(2n)]:md:border-r-0 xl:[&:nth-child(2n)]:xl:border-r-2 xl:[&:nth-child(4n)]:xl:border-r-0 border-black/30",
            ].join(" ")}
          >
            <p className="unifrakturmaguntia text-6xl text-red-500 leading-none">
              {step.number}
            </p>
            <h3 className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-3">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-black/80">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;
