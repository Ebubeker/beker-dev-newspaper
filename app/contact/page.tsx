import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/content/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with BekerDev. Tell me what you're building and I'll come back with an honest quote within a day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description:
      "Start a project with BekerDev. Tell me what you're building and I'll come back with an honest quote within a day.",
    url: `${site.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
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
        <span className="text-black/60">Contact</span>
      </nav>

      <header className="border-b-2 border-black/80 pb-10 mb-10">
        <p className="pirateOne uppercase tracking-[0.25em] text-xs md:text-sm text-black/60">
          Letters to the editor
        </p>
        <h1 className="unifrakturmaguntia text-6xl md:text-8xl lg:text-[120px] leading-[0.95] mt-3 text-balance">
          Start a project.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-balance">
          Tell me what you&rsquo;re building, roughly when you need it, and
          anything that&rsquo;d help me scope it. I&rsquo;ll come back with
          honest advice and a real quote, usually within 24 hours.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 mb-16">
        <ContactForm />

        <aside className="border-2 border-black/80 p-6 lg:p-8 h-fit bg-white/50">
          <p className="pirateOne uppercase tracking-[0.25em] text-xs text-black/60 mb-4">
            Or, directly
          </p>
          <div className="space-y-5 text-sm md:text-base">
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Email
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-1 inline-block hover:text-red-500 border-b border-black/30 hover:border-red-500 transition-colors"
              >
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                LinkedIn
              </p>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block hover:text-red-500 border-b border-black/30 hover:border-red-500 transition-colors"
              >
                in/ebubeker-rexha ↗
              </a>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Response time
              </p>
              <p className="mt-1">Within a day, every time.</p>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-widest text-black/50 text-xs">
                Timezone
              </p>
              <p className="mt-1">
                {site.location.timezone}, async-friendly
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
