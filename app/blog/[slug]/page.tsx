import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/app/_components/JsonLd";
import { getAdjacentPosts, getPostBySlug, posts } from "@/content/posts";
import { site } from "@/content/site";
import PostBody from "../_components/PostBody";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Not found",
      robots: { index: false, follow: false },
    };
  }

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: site.name,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [site.founder.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(post.slug);
  const url = `${site.url}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url,
    author: {
      "@type": "Person",
      name: site.founder.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: `${site.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <main className="py-10">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pirateOne uppercase tracking-[0.2em] text-xs md:text-sm border-b-2 border-black/20 pb-3 mb-8 flex gap-3 flex-wrap"
      >
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link href="/blog" className="hover:text-red-500">
          Journal
        </Link>
        <span aria-hidden>/</span>
        <span className="text-black/60">{post.title}</span>
      </nav>

      {/* Article header */}
      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm pirateOne uppercase tracking-[0.2em] text-black/60 mb-5">
          <span>{post.kicker}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="unifrakturmaguntia text-5xl md:text-7xl lg:text-[88px] leading-[0.95] text-balance">
          {post.title}
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl leading-relaxed text-balance">
          {post.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="pirateOne uppercase tracking-widest text-black/60 text-xs">
            By
          </span>
          <span className="font-semibold">{site.founder.name}</span>
          <span aria-hidden className="text-black/40">
            ·
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs md:text-sm font-semibold text-red-500">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Body */}
      <article className="mb-16">
        <PostBody blocks={post.body} />
      </article>

      {/* Prev / Next */}
      <nav
        aria-label="More posts"
        className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black/80 mb-16"
      >
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              ← Previous post
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 md:border-r-2 border-black/30 max-md:border-b-2 opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              Front page
            </p>
          </div>
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="p-6 lg:p-8 text-right hover:bg-black hover:text-white transition-colors group"
          >
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-black/60 group-hover:text-white/70">
              Next post →
            </p>
            <p className="unifrakturmaguntia text-3xl md:text-4xl leading-tight mt-2">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="p-6 lg:p-8 text-right opacity-40">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs">
              Back page
            </p>
          </div>
        )}
      </nav>

      {/* CTA */}
      <section className="border-t-2 border-black/80 pt-12 text-center pb-10">
        <h2 className="unifrakturmaguntia text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Want to work together?
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg pirateOne hover:bg-red-500 transition-colors"
          >
            Request a quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
