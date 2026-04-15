import type { Metadata } from "next";
import Link from "next/link";

import { posts } from "@/content/posts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The BekerDev journal. Notes on shipping landing pages in a day, picking between freelancers and agencies, and the things founders actually need before launch.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Journal · ${site.name}`,
    description:
      "The BekerDev journal. Notes on shipping landing pages, MVPs, and web apps as a solo developer.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <main className="py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pirateOne uppercase tracking-[0.2em] text-xs md:text-sm border-b-2 border-black/20 pb-3 mb-8 flex gap-3"
      >
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-black/60">Journal</span>
      </nav>

      {/* Masthead */}
      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          The Journal
        </p>
        <h1 className="unifrakturmaguntia text-6xl md:text-8xl lg:text-[120px] leading-[0.95] mt-3 text-balance">
          Notes from the press.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
          Opinions, frameworks, and field notes from shipping landing pages,
          MVPs, and web apps as a one-person studio. No hot takes for the sake
          of hot takes.
        </p>
      </header>

      {/* Post list */}
      <div className="space-y-0 border-2 border-black/80">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className={[
              "p-6 lg:p-10",
              index !== posts.length - 1
                ? "border-b-2 border-black/20"
                : "",
            ].join(" ")}
          >
            <div className="flex items-center gap-3 text-xs pirateOne uppercase tracking-[0.2em] text-black/60 mb-3 flex-wrap">
              <span>No. 0{index + 1}</span>
              <span aria-hidden>·</span>
              <span>{post.kicker}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="unifrakturmaguntia text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance group-hover:text-red-500 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm font-semibold text-red-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="pirateOne text-base md:text-lg border-b-2 border-black hover:border-red-500 hover:text-red-500 pb-0.5 transition-colors"
              >
                Read the full piece →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl leading-tight text-balance">
          Have a project in mind?
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            Request a quote →
          </Link>
        </div>
      </div>
    </main>
  );
}
