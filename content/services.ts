export type Service = {
  slug: string;
  title: string;
  /** Short, scannable label for cards and ads. Ideally 2–4 words. */
  headline: string;
  /** Delivery window, shown as the hook on cards. */
  delivery: string;
  /** One-sentence pitch. The thing a cold visitor reads first. */
  pitch: string;
  /** 3–5 bullet points covering what is included. */
  inclusions: string[];
  /** Who this service is for. */
  bestFor: string;
  /** Secondary stat or edge, optional. */
  edge?: string;
};

export const services: Service[] = [
  {
    slug: "landing-page-in-a-day",
    title: "Landing Page in a Day",
    headline: "Landing Page · Shipped in 24h",
    delivery: "1 day · fixed scope",
    pitch:
      "A production-ready landing page, designed, built, and deployed in a single working day.",
    inclusions: [
      "One responsive landing page, fully built in Next.js",
      "Copywriting collaboration and section structure",
      "SEO baseline: metadata, OG, sitemap, schema",
      "Deployed on your domain the same day",
      "One round of revisions included",
    ],
    bestFor:
      "Founders who need to stop losing momentum and get something live this week.",
    edge: "Same-day delivery. No agency friction.",
  },
  {
    slug: "mvp-sprint",
    title: "MVP Sprint",
    headline: "MVP · In a Week",
    delivery: "3–5 days · scope-dependent",
    pitch:
      "A minimum viable product, built end-to-end in a compressed one-week sprint.",
    inclusions: [
      "Scoping call and lean product brief",
      "Full-stack build in Next.js + Supabase / Postgres",
      "Auth, database, and core user flows",
      "Basic admin surface for your team",
      "Deploy + hand-off with documentation",
    ],
    bestFor:
      "Founders who need a real product in users' hands before their next investor meeting.",
    edge: "One developer, one week, one shipped MVP.",
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    headline: "Web Apps · Built to Last",
    delivery: "Project-based · fixed or sprint pricing",
    pitch:
      "Longer, more ambitious web applications built with production-quality architecture.",
    inclusions: [
      "Discovery, scoping, and technical design",
      "Full-stack build using React, Next.js, TypeScript",
      "Database design, APIs, integrations",
      "Performance tuning and SEO baked in",
      "Hand-off or ongoing support after launch",
    ],
    bestFor:
      "Teams and founders with a serious product idea that needs a serious build.",
  },
  {
    slug: "dev-partnership",
    title: "Dev Partnership",
    headline: "Retainer · Ongoing Dev",
    delivery: "Monthly retainer",
    pitch:
      "A reliable pair of hands for your existing product, covering features, fixes, and infrastructure month after month.",
    inclusions: [
      "Dedicated weekly development capacity",
      "Feature work, bug fixes, refactors",
      "Performance and SEO improvements",
      "Async communication on Slack / email",
      "Month-to-month, cancel any time",
    ],
    bestFor:
      "Product owners who need a developer on call without the overhead of a full hire.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
