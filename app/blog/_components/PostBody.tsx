import type { PostBlock } from "@/content/posts";

/**
 * Renders a post body as typed blocks. Keeps prose styling consistent with
 * the newspaper aesthetic (serif body, large display headings).
 */
export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                className="unifrakturmaguntia text-4xl md:text-5xl leading-[1.05] pt-6 text-balance"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={key}
                className="pirateOne uppercase tracking-[0.1em] text-lg md:text-xl pt-3 text-black/80"
              >
                {block.text}
              </h3>
            );
          case "p":
            return <p key={key}>{block.text}</p>;
          case "ul":
            return (
              <ul key={key} className="space-y-2 pl-0">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-red-500 mt-[0.3em]" aria-hidden>
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="space-y-2 pl-0 list-decimal list-inside">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={key}
                className="border-l-[6px] border-black pl-6 md:pl-8 my-4"
              >
                <p className="unifrakturmaguntia text-3xl md:text-4xl leading-[1.1] text-balance">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.attribution && (
                  <footer className="mt-3 pirateOne text-sm text-black/60">
                    {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
