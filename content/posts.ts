/**
 * Blog posts. Hand-authored, typed, rendered by `app/blog/_components/PostBody`.
 * Order matters: newest first. Each post is one entry in `posts`.
 *
 * To publish a new post:
 *   1. Add an object to the top of the array.
 *   2. Use a unique slug. The URL will be /blog/<slug>.
 *   3. Write the body as an array of blocks (see PostBlock union).
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type Post = {
  slug: string;
  title: string;
  /** Short kicker line above the headline, newspaper-style. */
  kicker: string;
  excerpt: string;
  /** ISO 8601 publish date. */
  publishedAt: string;
  /** Estimated reading time, e.g. "6 min read". */
  readTime: string;
  tags: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "mvp-cost-2026",
    title: "How much does an MVP cost in 2026?",
    kicker: "Pricing",
    excerpt:
      "A straight-talking breakdown of what an MVP actually costs to build in 2026, why quotes vary by a factor of ten, and how to get to a shippable product without lighting money on fire.",
    publishedAt: "2026-04-14",
    readTime: "8 min read",
    tags: ["Pricing", "MVP", "Launching"],
    body: [
      {
        type: "p",
        text: "Every founder who has ever opened a spreadsheet to estimate an MVP has had the same uncomfortable experience. You type a number in, your hands hover, and then you multiply it by three and hope that covers it. The reason the guess never feels safe is that the real cost of an MVP depends less on your idea and more on the shape of the team you end up hiring.",
      },
      {
        type: "p",
        text: "So here is a grounded look at what an MVP actually costs in 2026, the four tiers you will run into when you start asking for quotes, and the moves that quietly halve the bill if you make them early.",
      },
      { type: "h2", text: "What an MVP actually is, for pricing purposes" },
      {
        type: "p",
        text: "An MVP is the smallest working product that can deliver real value to one specific user. That means auth, one core flow, a database, a hosting environment, and enough polish that a real person will use it twice. It does not mean a full feature list, an admin panel, or a billing system. The second you add 'and billing' to the brief, you are not quoting an MVP anymore, you are quoting a product.",
      },
      { type: "h2", text: "The four realistic tiers in 2026" },
      { type: "h3", text: "Tier 1: $0 to $3,000. No-code stacks." },
      {
        type: "p",
        text: "Bubble, Softr, Glide, Supabase plus a front end from a template. You do the building yourself, maybe with a consultant for a few hours. You can ship something usable in a week if the idea fits the tool. The ceiling is low: the moment you need real integrations or a custom UI, you start fighting the platform and the cost goes up fast.",
      },
      { type: "h3", text: "Tier 2: $4,000 to $12,000. A solo developer on a short sprint." },
      {
        type: "p",
        text: "A fixed-scope sprint with one experienced developer, running three to five working days. This is where my MVP Sprint service sits. You get auth, database, core flow, deployment, and a clean front end built in real code you can keep and extend. The scope has to be honest, but the price is fixed and the turnaround is fast.",
      },
      { type: "h3", text: "Tier 3: $15,000 to $40,000. A small studio or contract team." },
      {
        type: "p",
        text: "Two to four weeks of work from two or three people: a developer, a designer, maybe a part-time product manager. Good for founders who already have traction and need something more polished than a sprint MVP but do not yet need a full product team. Watch for bloat in the scope document.",
      },
      { type: "h3", text: "Tier 4: $60,000 and up. Dev shops and agencies." },
      {
        type: "p",
        text: "Multi-week engagements with project management overhead, internal handoffs, and formal QA. This is where you end up if your first move is to talk to three agencies on LinkedIn. For most first-time founders, it is a category error: you are buying process maturity you do not yet need.",
      },
      { type: "h2", text: "The decisions that quietly change the price" },
      {
        type: "p",
        text: "Two quotes for 'a simple MVP' can be ten times apart. The variable is almost never the idea. It is these five things:",
      },
      {
        type: "ul",
        items: [
          "Whether your auth is a paid provider or something custom",
          "Whether your database has one clean schema or three messy ones",
          "Whether you need an admin panel on day one or can use the database GUI",
          "Whether payments are part of the MVP or deferred to v2",
          "Whether you already wrote the copy and supplied the brand, or the builder has to",
        ],
      },
      {
        type: "p",
        text: "If you can answer yes to the simpler option on four of those, you can ship an MVP in a one-week sprint for a fixed price. If you answer no to all five, you are no longer asking for an MVP, you are asking for a product.",
      },
      { type: "h2", text: "What I would do with a $10,000 budget" },
      {
        type: "p",
        text: "Spend $7,500 on a one-week MVP sprint with a solo developer you can actually talk to. Keep the remaining $2,500 in reserve for the inevitable second pass after real users have touched it. Do not spend it upfront on features you imagined you needed. The MVP's job is to teach you which features matter, and you cannot know which ones those are before it ships.",
      },
      {
        type: "quote",
        text: "The most expensive MVP is the one that was built with features you guessed at, not the one that was built small and shipped fast.",
      },
      {
        type: "p",
        text: "If you are sitting on an idea and want a fixed-price sprint quote, the contact form is the shortest path. Tell me the one flow that has to work on day one. I will tell you whether it fits a sprint, and whether the number you have in mind is enough.",
      },
    ],
  },
  {
    slug: "landing-page-cost-2026",
    title: "How much does a landing page cost in 2026?",
    kicker: "Pricing",
    excerpt:
      "A straight answer, the four price tiers you'll actually encounter, and why a fixed one-day landing page is usually the right call for a first launch.",
    publishedAt: "2026-04-12",
    readTime: "7 min read",
    tags: ["Pricing", "Landing pages", "Launching"],
    body: [
      {
        type: "p",
        text: "Every first-time founder I talk to asks the same question in the first email, and I don't blame them: how much is this actually going to cost me? The answer is frustrating because it depends, but not on the things you'd expect. It depends on who you hire, not on how many pages you want or how complicated your idea is.",
      },
      {
        type: "p",
        text: "So let's skip the consulting dance. Here are the four tiers of landing page pricing you'll run into in 2026, what you actually get at each one, and how I'd personally pick.",
      },
      { type: "h2", text: "The four tiers, honestly" },
      { type: "h3", text: "Tier 1: Free to $50. DIY on Squarespace, Wix, Carrd, Framer." },
      {
        type: "p",
        text: "You are the designer, the copywriter, the SEO person, and the support team. For a validation experiment where you just need to describe an idea and collect emails, this is a perfectly reasonable choice. You'll spend a weekend on it and you'll get something that looks like every other template on the internet.",
      },
      {
        type: "p",
        text: "Where it breaks down: the moment you want custom design, strong copy, real SEO, or any kind of integration beyond the platform's built-ins, you start fighting the tool. You can tell a DIY landing page from across the room, and so can your customers.",
      },
      { type: "h3", text: "Tier 2: $200 to $800. Freelancer marketplaces." },
      {
        type: "p",
        text: "Fiverr, Upwork, random Twitter DMs. You can find a competent template customiser for under a thousand dollars. A few will even deliver something clean. The catch: you're usually buying time against a template, not design against your brief, and the brief itself is often the thing that was missing.",
      },
      {
        type: "p",
        text: "If you have a sharp brief and you know exactly what you want to copy-paste, this tier can work. If you don't, you'll go through two or three rounds and end up with something generic, and still owe yourself a real page.",
      },
      { type: "h3", text: "Tier 3: $1,500 to $5,000. Solo developers and boutique studios." },
      {
        type: "p",
        text: "This is the sweet spot for most first launches. You're paying for one person who can design, write, build, and deploy, and who will actually read your brief. Turnaround is fast, scope is clear, and the site looks like it belongs to your company, not to the template marketplace.",
      },
      {
        type: "p",
        text: "This is where I sit. My Landing Page in a Day service is a fixed-price, one-day build: design, copy, build, deploy, done before you go to bed. Fixed scope keeps it honest, and one person owning every layer is why it ships in a day.",
      },
      { type: "h3", text: "Tier 4: $8,000 and up. Agencies." },
      {
        type: "p",
        text: "Agencies earn their keep on big, multi-stakeholder projects: enterprise marketing sites, migrations, brand refreshes tied to a product launch. For a founder building their first landing page, an agency is almost always overkill. You pay for account management, creative directors, junior developers, and slide decks, none of which make your page ship faster.",
      },
      { type: "h2", text: "What actually drives the price" },
      {
        type: "p",
        text: "If you want a mental model for why two quotes for the same page can be ten times different, these are the real cost drivers:",
      },
      {
        type: "ul",
        items: [
          "Whether the design is custom or a template swap",
          "Whether copywriting is included or just placeholder text",
          "Whether it includes integrations (contact form, CRM, analytics, booking)",
          "Whether SEO basics are done properly (metadata, structured data, sitemap)",
          "How many rounds of revisions you get, and whether the scope is fixed",
          "Whether one person owns the whole thing, or it passes through three different hands",
        ],
      },
      {
        type: "p",
        text: "A $300 landing page and a $3,000 landing page can look similar in a screenshot. They are not similar when you try to send real traffic at them.",
      },
      { type: "h2", text: "Why a fixed one-day price works" },
      {
        type: "p",
        text: "I ship landing pages for a fixed day rate because the math is simple for both sides. You know the price before you start. I know the scope before I start. Nobody is trying to pad hours, and the incentive is to ship something good fast, not to drag the timeline out for margin.",
      },
      {
        type: "quote",
        text: "You shouldn't have to choose between a Fiverr template and an agency invoice to put a real page on the internet.",
      },
      {
        type: "p",
        text: "If you want the fixed price, fixed scope version, my contact form is the best place to start. If you're still deciding between tiers, use the list above as your filter. The worst thing you can do is pay agency prices for an undifferentiated result, or pay Fiverr prices and wonder why your page doesn't convert.",
      },
    ],
  },
  {
    slug: "how-long-landing-page-takes",
    title: "How long does it take to build a landing page? An honest timeline",
    kicker: "Timeline",
    excerpt:
      "The real answer is: anywhere from one day to six weeks. Here's what drives the difference, and how to get to the shorter end of that range without cutting corners.",
    publishedAt: "2026-04-11",
    readTime: "6 min read",
    tags: ["Timeline", "Landing pages", "Process"],
    body: [
      {
        type: "p",
        text: "When someone asks me how long a landing page takes, I already know they have talked to two other people and gotten two wildly different answers. One person said a week. The other person said six. Both of them were probably telling the truth. The question is which answer applies to your specific project.",
      },
      {
        type: "p",
        text: "Here is the honest version, with the real drivers pulled apart.",
      },
      { type: "h2", text: "The pure build time" },
      {
        type: "p",
        text: "If you hand a competent developer a finished design, finished copy, and the final images, the actual build is one day. Sometimes less. Modern tooling has made the mechanical part of shipping a landing page almost a solved problem. Next.js, Tailwind, Vercel, Resend for email, native SEO metadata. The first draft of the code is ready in a handful of hours.",
      },
      {
        type: "p",
        text: "The build is not the part that takes time. The build is the part that takes the least time.",
      },
      { type: "h2", text: "Where the real days go" },
      {
        type: "p",
        text: "The things that actually drive a landing page timeline, in the order they usually consume the calendar:",
      },
      {
        type: "ol",
        items: [
          "Deciding what the page is supposed to do and who it is for",
          "Writing copy that earns the click, not just describes the product",
          "Finding or taking real photography, or deciding you do not need any",
          "Agreeing on a design direction without a full brand system",
          "Reviewing the preview, making small requests, and signing off",
        ],
      },
      {
        type: "p",
        text: "Every one of those can be a day of work, or a week of stalled messages. The project does not live in the code, it lives in the handoffs between those steps.",
      },
      { type: "h2", text: "The three realistic timelines" },
      { type: "h3", text: "One day: you already have a tight brief" },
      {
        type: "p",
        text: "You know your audience, you have a one-line pitch you can defend, you can describe your three best features in plain language, and you have photos or a clear opinion on what visual direction you want. Design, copy, build, deploy, all in a single working day. This is exactly what my Landing Page in a Day service is built for.",
      },
      { type: "h3", text: "One week: you have the idea but not the words" },
      {
        type: "p",
        text: "You know the business but you have not written the copy yet. The first two days are spent getting the positioning sharp. The next two or three are design and build. The last day is review and launch. Still fast, still achievable, but not a fixed-day product.",
      },
      { type: "h3", text: "Four to six weeks: you are still figuring out the product" },
      {
        type: "p",
        text: "You are changing the offering while you build the page. You want two rounds of design mockups before anyone writes code. You have three stakeholders who need to agree. There is nothing wrong with this, but it is a different project, and it should cost and feel different from a one-day build.",
      },
      { type: "h2", text: "How to compress your own timeline" },
      {
        type: "ul",
        items: [
          "Write your hero line before you book the build, not during it",
          "Decide on your one primary call to action before the first design pass",
          "Lock in your brand colours (even if you pick them on the spot) before design starts",
          "Gather photos in one folder before day one, not during it",
          "Pick one decision-maker. Every committee is a week.",
        ],
      },
      {
        type: "quote",
        text: "A landing page takes as long as the decisions behind it. The code is the fastest part.",
      },
      {
        type: "p",
        text: "If you can get your brief down to one page and your decision-maker down to one person, a landing page can ship in one day. If you cannot, that is a signal worth listening to, and the right response is to spend a week on positioning before anyone touches a component file.",
      },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-startup",
    title: "Next.js vs WordPress for a startup marketing site",
    kicker: "Stack",
    excerpt:
      "WordPress still powers half the internet. So why does every serious startup site in 2026 look like it was built in Next.js? Here's the real trade-off.",
    publishedAt: "2026-04-10",
    readTime: "7 min read",
    tags: ["Stack", "Next.js", "WordPress"],
    body: [
      {
        type: "p",
        text: "There is a version of this article that is a cheap dunk on WordPress. That is not the one I wanted to write. WordPress is a remarkable piece of software, and for a small business website where the owner updates the menu twice a year and the blog three times, it is still a perfectly sensible choice.",
      },
      {
        type: "p",
        text: "But this is a post about startup marketing sites, and the honest answer is that Next.js has quietly become the default for a reason. Here is the trade-off, with no team loyalty involved.",
      },
      { type: "h2", text: "What WordPress is still great at" },
      {
        type: "ul",
        items: [
          "A non-technical owner editing copy without calling a developer",
          "A mature plugin ecosystem for forms, SEO, and commerce",
          "Hosting that costs fifteen dollars a month and still works",
          "Decades of tutorials and stack overflow answers",
          "A content-heavy site that will ship dozens of blog posts per year",
        ],
      },
      {
        type: "p",
        text: "If your site is going to be mostly edited by you, and your business is not trying to look like it lives on the frontier, WordPress is the adult answer. I have no argument against it in that context.",
      },
      { type: "h2", text: "Where WordPress starts to hurt a startup" },
      {
        type: "p",
        text: "Most early-stage startups do not actually need a content management system. They need a tight marketing site that changes slowly, and a product that moves fast. The moment you start trying to make a WordPress site feel custom, you pay in three different currencies.",
      },
      { type: "h3", text: "Performance" },
      {
        type: "p",
        text: "A plugin-heavy WordPress site is, by default, a loading spinner. You can tune it, you can cache it, you can pay for premium hosting. You can get it fast. You cannot get it as fast as a statically rendered Next.js page without serious effort, and that matters for Core Web Vitals, which matter for SEO.",
      },
      { type: "h3", text: "Design fidelity" },
      {
        type: "p",
        text: "Custom WordPress themes are a specialty of their own. To get a design that looks like a modern SaaS site, you either buy a theme that looks like everyone else's, or you hire a theme developer, at which point the cost advantage is gone.",
      },
      { type: "h3", text: "Developer ergonomics" },
      {
        type: "p",
        text: "Most developers under thirty have never seriously written PHP. They have written React. When you hire, the WordPress world is a smaller and more specialised pool, and the cost per hour reflects that in the wrong direction.",
      },
      { type: "h2", text: "What Next.js gives you, in one paragraph" },
      {
        type: "p",
        text: "Typed, component-based pages. Hosted on the edge. Instant deploys from a git push. Native metadata and sitemap APIs. Image optimisation included. A React ecosystem of components that match whatever you can imagine. No plugin bloat, no database to maintain, no CMS surface to secure. If you want a content editor for a non-technical teammate, you add a headless CMS on the side when you need it.",
      },
      { type: "h2", text: "A simple decision rule" },
      {
        type: "quote",
        text: "If your site updates more often than your product, pick WordPress. If your product updates more often than your site, pick Next.js.",
      },
      {
        type: "p",
        text: "Most startups sit squarely in the second camp. Their marketing site changes maybe monthly, their product changes weekly, and the people writing the code are the same people building the product. Next.js makes that one unified workflow. WordPress fights it.",
      },
      {
        type: "p",
        text: "I build every BekerDev project on Next.js for exactly that reason. I do not think WordPress is bad. I think it is built for a different job, and I would rather use the tool that matches the job than the tool that matches the habit.",
      },
    ],
  },
  {
    slug: "landing-page-vs-mvp",
    title: "Landing page vs MVP: what do you actually need to launch?",
    kicker: "Strategy",
    excerpt:
      "Not every idea needs a working product to validate. Here's how to tell whether you need a landing page, an MVP, or both, and in which order.",
    publishedAt: "2026-04-08",
    readTime: "6 min read",
    tags: ["Launching", "MVP", "Strategy"],
    body: [
      {
        type: "p",
        text: "One of the most expensive mistakes a first-time founder can make is picking the wrong first artifact. Spending three months building an MVP for an idea that nobody wants is a painful lesson. Spending three weeks tuning a landing page for an idea that people already want, instead of just building it, is a painful lesson too.",
      },
      {
        type: "p",
        text: "The mistake is not usually in the execution. It's in the choice between a landing page and an MVP. Here is the way I think about it, and it's the same framework I use when a founder messages me on a Tuesday asking which one I should build for them first.",
      },
      { type: "h2", text: "What a landing page actually validates" },
      {
        type: "p",
        text: "A landing page is a test of demand. It answers one question: given a clear pitch, how many people in your target audience will raise their hand? That's it. A landing page with a waitlist or a pre-order button gives you a number you can defend with a screenshot.",
      },
      {
        type: "p",
        text: "A landing page does not validate whether your product will actually solve the problem. It does not validate willingness to pay at scale. It does not validate retention. It tests whether your positioning makes someone curious enough to click.",
      },
      { type: "h2", text: "What an MVP actually validates" },
      {
        type: "p",
        text: "An MVP is a test of usage. It answers a different question: given a working version of your product, will anyone actually use it more than once? That's a harder question, and it's the one that kills most early-stage products.",
      },
      {
        type: "p",
        text: "An MVP does not validate your marketing. It does not validate whether you can get traffic. It tests whether the thing you made is the thing someone needed.",
      },
      { type: "h2", text: "A simple rule of thumb" },
      {
        type: "quote",
        text: "Build the artifact that tests the thing you're most unsure about.",
      },
      {
        type: "p",
        text: "If you're not sure anyone cares, ship a landing page. If you're sure they care but not sure the solution works, ship an MVP. If you're not sure about either, start with a landing page, because it's faster and the signal arrives sooner.",
      },
      { type: "h2", text: "Three scenarios I see constantly" },
      { type: "h3", text: "You're selling to a niche audience" },
      {
        type: "p",
        text: "You know your audience (indie game devs, real-estate investors in one city, second-career nurses). You just don't know if they'll buy your specific angle. Landing page first. You can reach this audience directly and you don't need a working product to start a conversation.",
      },
      { type: "h3", text: "You're selling a workflow tool" },
      {
        type: "p",
        text: "Your pitch is 'this replaces the spreadsheet you fight with every Monday.' Landing pages convert poorly here, because the product is the pitch. MVP first. Ship something that works for one workflow and see if anyone keeps using it.",
      },
      { type: "h3", text: "You're selling to enterprise" },
      {
        type: "p",
        text: "Your first customers will need an NDA before they read your about page. A landing page is for marketing hygiene, not validation. Skip the landing page for now and have direct conversations. Build the MVP against a pilot customer.",
      },
      { type: "h2", text: "When to do both, and in what order" },
      {
        type: "p",
        text: "Most consumer products benefit from a landing page before the MVP. Most B2B products benefit from an MVP before a serious marketing site. The exception is if you're already getting inbound interest, in which case you should ship the landing page today and the MVP as soon as you can.",
      },
      {
        type: "p",
        text: "The wrong order is always the same wrong order: spending months on an MVP nobody asked for, then trying to retrofit a landing page onto it at launch. That's how good ideas die quietly.",
      },
      { type: "h2", text: "The honest answer" },
      {
        type: "p",
        text: "If you're reading this post and you still don't know, the answer is landing page first. You can ship it in a day, you'll learn something real, and the MVP you build next will be aimed at an audience you already know wants it.",
      },
    ],
  },
  {
    slug: "pre-ship-checklist",
    title: "The one-page pre-ship checklist I run before every launch",
    kicker: "Process",
    excerpt:
      "The exact checklist I run in the last thirty minutes before a site goes live. It has never failed to catch at least one real issue.",
    publishedAt: "2026-04-06",
    readTime: "5 min read",
    tags: ["Process", "Checklist", "Launching"],
    body: [
      {
        type: "p",
        text: "Every site I ship ends the same way. Thirty minutes before it goes live, I close every tab that is not the preview, pour a glass of water, and run the same checklist from top to bottom. The checklist has grown over the years, and every item on it earned its place by being the thing I forgot on some other day.",
      },
      {
        type: "p",
        text: "Here is the current version, unedited, exactly as I run it. If you ship a site without going through something like this, you are going to have a bad first hour of uptime.",
      },
      { type: "h2", text: "Content" },
      {
        type: "ul",
        items: [
          "Every heading reads as a standalone sentence",
          "No placeholder lorem ipsum anywhere, including alt text",
          "Business name, address, and hours match the real ones",
          "Every phone number is a real, clickable tel: link",
          "Every email address is a real, clickable mailto: link",
          "Every external link opens correctly and has the right target",
        ],
      },
      { type: "h2", text: "SEO and metadata" },
      {
        type: "ul",
        items: [
          "Title tag is unique and under sixty characters",
          "Meta description is unique and under one hundred and sixty characters",
          "Canonical URL points at the live domain, not the preview",
          "Open Graph image exists and is 1200 by 630",
          "Favicon exists in every size the platform expects",
          "Sitemap is generated and reachable at /sitemap.xml",
          "Robots file is present and not accidentally blocking the site",
          "Structured data validates with no errors",
        ],
      },
      { type: "h2", text: "Forms and email" },
      {
        type: "ul",
        items: [
          "Contact form sends a test submission end to end",
          "The test submission lands in the correct inbox",
          "The form shows a real success state, not just a redirect",
          "The form shows a real error state if something fails",
          "Spam protection is on (honeypot or similar)",
        ],
      },
      { type: "h2", text: "Performance and accessibility" },
      {
        type: "ul",
        items: [
          "Lighthouse score is above ninety on the key pages",
          "Largest contentful paint image is preloaded",
          "Every image has an alt attribute",
          "Color contrast on text and CTAs passes WCAG AA",
          "The site is usable by keyboard alone",
        ],
      },
      { type: "h2", text: "Mobile" },
      {
        type: "ul",
        items: [
          "The hero fits a 375 pixel wide viewport without awkward wrapping",
          "The primary CTA is reachable with one thumb",
          "The navigation works on a small screen",
          "Tap targets are at least 44 pixels tall",
        ],
      },
      { type: "h2", text: "Analytics and tracking" },
      {
        type: "ul",
        items: [
          "Analytics is installed and firing on the live domain",
          "No test events are polluting production counts",
          "Any conversion events you care about actually fire",
        ],
      },
      { type: "h2", text: "DNS and hosting" },
      {
        type: "ul",
        items: [
          "The apex domain and the www subdomain both resolve",
          "SSL is valid and not expiring in the next month",
          "The old host has been pointed at the new one, if there was one",
          "Redirects from old URLs to new ones are in place",
        ],
      },
      { type: "h2", text: "One final pass" },
      {
        type: "p",
        text: "Close the laptop. Open the site on your phone, over cellular, not wifi. Read the hero. Tap the CTA. Submit the form. If any of those feel wrong, you have time to fix them right now. If all three feel right, ship it.",
      },
      {
        type: "quote",
        text: "Every item on this list got here because I forgot it on some other day. Nobody ships a clean launch on memory.",
      },
    ],
  },
  {
    slug: "how-to-ship-a-landing-page-in-a-day",
    title: "How I ship production landing pages in one working day",
    kicker: "Process",
    excerpt:
      "Not a template swap, not a bedroom demo. A real production landing page, copy to deploy, in a single working day. Here's the process, the stack, and where corners don't get cut.",
    publishedAt: "2026-04-04",
    readTime: "8 min read",
    tags: ["Process", "Landing pages", "Workflow"],
    body: [
      {
        type: "p",
        text: "There's a trend right now of 'build a landing page in an hour' videos: someone picks a template, swaps the copy, drags in a few images, and hits publish. That's not what I mean when I say I ship landing pages in a day.",
      },
      {
        type: "p",
        text: "What I mean is: custom design, real copy, production stack, real SEO basics, real analytics, real contact flow, deployed to a real domain, done between 9am and 9pm. The scope is fixed. The price is fixed. The quality isn't the thing that gets compressed.",
      },
      {
        type: "p",
        text: "Here is how the day actually runs.",
      },
      { type: "h2", text: "Before the day starts: the brief" },
      {
        type: "p",
        text: "The day itself is tight. The brief is what makes it possible. Before I start the clock, I have a short async exchange with the client to lock down three things: who the page is for, what the single most important action is, and whether they have photography or I need to source it. If any of those are unclear at 9am, the day doesn't start.",
      },
      {
        type: "p",
        text: "The exchange is usually just email or WhatsApp. No meetings. A good brief is one screen long.",
      },
      { type: "h2", text: "The morning: structure and copy together" },
      {
        type: "p",
        text: "I don't design first and write copy afterwards. The two happen in the same pass. A landing page is a sequence of arguments, so the order of sections is the outline of the argument, and the copy is the argument itself. You can't design the argument before you know what you're arguing.",
      },
      {
        type: "p",
        text: "By lunch, I have: one hero line that can stand alone, three to five sections that each earn their place, and a single primary CTA repeated where it matters. Everything is in plain text, not in Figma, so the client can sanity check it before I touch the design.",
      },
      { type: "h2", text: "The middle of the day: design and build at the same time" },
      {
        type: "p",
        text: "Here is the unglamorous part. I design in the browser. I don't ship a Figma mock and then rebuild it. The site is already in Next.js by 1pm, with the real typography, the real spacing, and the real components from the brief. Every design decision is made against the real grid, on real devices.",
      },
      {
        type: "p",
        text: "My default stack is boring on purpose: Next.js, TypeScript, Tailwind, deployed on Vercel. Contact forms go through Resend for transactional email. Analytics is Vercel Analytics for traffic and Speed Insights for Core Web Vitals. SEO is native Next metadata, a sitemap, a robots file, and JSON-LD. None of this is configurable at one-day speed, and all of it has to be right.",
      },
      { type: "h2", text: "The afternoon: content, images, polish" },
      {
        type: "p",
        text: "This is the longest stretch of the day and the part that makes or breaks the result. Image treatment, photography crops, hero positioning, mobile behaviour, copy tightening, loading states, edge cases. The difference between a one-day landing page that looks cheap and one that looks professional is two uninterrupted hours spent here.",
      },
      { type: "h2", text: "The evening: ship, review, iterate" },
      {
        type: "p",
        text: "By 6pm or 7pm, the site is on a preview URL. I send it to the client with a short checklist of things I'd like them to sanity check: is your phone number right, is the email going to the right inbox, does the menu link to the right PDF. Twenty minutes of review, one or two tweaks, and then it goes live on the real domain.",
      },
      {
        type: "p",
        text: "Total elapsed time: ten to twelve hours of focused work. Total meetings: zero.",
      },
      { type: "h2", text: "What does not fit in a day" },
      {
        type: "ul",
        items: [
          "Multi-language setups with real translation (not machine-translated)",
          "Custom CMS integrations for the client to edit themselves",
          "Custom illustration or original photography",
          "Complex animations or scroll-jacking experiences",
          "More than one page (this is a landing page, not a marketing site)",
        ],
      },
      {
        type: "p",
        text: "If you need any of those, you don't need a Landing Page in a Day. You need a small project. That's a different service and a different conversation.",
      },
      { type: "h2", text: "Why this works as a product" },
      {
        type: "p",
        text: "The one-day constraint is the feature, not the compromise. It forces the scope to be honest, forces the copy to be tight, and forces the client and me to agree before anything starts. I've shipped landing pages this way for restaurants, fintechs, and solo founders, and the ones that worked all had the same thing in common: a sharp brief at 9am, and no second-guessing at 8pm.",
      },
      {
        type: "p",
        text: "If you want a page like that, the contact form is where we start. Tell me who it's for, what the one action is, and whether you have photos. I'll take it from there.",
      },
    ],
  },
  {
    slug: "stopped-using-figma-landing-pages",
    title: "Why I stopped designing landing pages in Figma",
    kicker: "Workflow",
    excerpt:
      "Figma is the best design tool of this decade. But for a one-day landing page, opening it has become a trap. Here is why I now design directly in the browser.",
    publishedAt: "2026-04-02",
    readTime: "6 min read",
    tags: ["Workflow", "Design", "Landing pages"],
    body: [
      {
        type: "p",
        text: "For the first few years I took on design work, the pipeline was obvious. Figma first, code second. Every single landing page started as a set of frames: desktop, tablet, mobile. The client reviewed the frames. We iterated. Then I coded them. Then everyone realised the code did not look quite like the frames. Then we iterated again.",
      },
      {
        type: "p",
        text: "That pipeline is not broken. It is the industry standard for a reason. It works fine when the project is large, when the design system is mature, and when the developer is not the same person as the designer. It does not work when I am trying to ship a production landing page between 9am and 9pm for a fixed fee.",
      },
      { type: "h2", text: "The three hidden costs of Figma-first work" },
      { type: "h3", text: "1. Double rendering" },
      {
        type: "p",
        text: "Every design decision has to be made twice: once in Figma, where it is a rectangle, and once in the browser, where it is a real div with real type and real spacing. Those two things never agree on the first pass. The Figma version always looks a little tighter. The browser version always has the accurate line height. Reconciling them is a day of work that the client never sees.",
      },
      { type: "h3", text: "2. The illusion of precision" },
      {
        type: "p",
        text: "Figma lets me nudge a shadow by half a pixel, animate a microinteraction, and pick between three fonts that look identical at the preview zoom level. None of that matters on a production page served at a real resolution on a real phone. But it absorbs time, and time is the scarcest thing in a one-day build.",
      },
      { type: "h3", text: "3. Client review friction" },
      {
        type: "p",
        text: "A client looking at a Figma frame is not looking at the site. They are looking at an image of the site, at two hundred percent zoom, on desktop, with no mobile truth, no scroll behaviour, no real fonts in some cases. Every decision the client makes against that image is a decision they are going to revise when they see the real thing.",
      },
      { type: "h2", text: "What I do instead" },
      {
        type: "p",
        text: "The new workflow is simple. I write the copy in a plain text file. I sketch the section order as a short outline. Then I open the codebase and build the page directly in Next.js, section by section, in the browser.",
      },
      {
        type: "p",
        text: "The client gets a preview URL about two hours in. That preview is the real thing: real type, real spacing, real images, real mobile behaviour, real scroll. Every decision they make is a decision against the artifact that will actually ship, not a picture of it.",
      },
      {
        type: "p",
        text: "I still use Figma occasionally. For a logo exploration, for a quick mood board, for an icon I am designing from scratch. But the page itself is built in the browser, because the browser is where it lives.",
      },
      { type: "h2", text: "When Figma is still the right call" },
      {
        type: "ul",
        items: [
          "You are designing for a team that will build the code weeks later",
          "You need many rounds of stakeholder review with markup and comments",
          "You are exploring brand direction, not shipping a specific page",
          "You are working on a design system with many reusable components",
        ],
      },
      {
        type: "quote",
        text: "Designing in Figma is like rehearsing a concert on a toy piano. Useful, but not the instrument.",
      },
      {
        type: "p",
        text: "For a fixed-scope, one-day landing page, the browser is faster, cheaper, and more honest. The client sees the real thing sooner. I ship the real thing sooner. Nobody has to reconcile a Figma frame with production code at six in the evening. It has been the single biggest improvement to my delivery speed in the last two years.",
      },
    ],
  },
  {
    slug: "restaurant-landing-page-essentials",
    title: "The 9 things every restaurant landing page actually needs",
    kicker: "Hospitality",
    excerpt:
      "After shipping landing pages for several Tirana and Shkodër restaurants, here's what I'd fight for on every restaurant site, and what I'd cut.",
    publishedAt: "2026-03-30",
    readTime: "7 min read",
    tags: ["Hospitality", "Landing pages", "Checklist"],
    body: [
      {
        type: "p",
        text: "I've shipped landing pages for a handful of Albanian restaurants recently: Jarna in Tiranë, Trattoria Venezia in Shkodër, Eja, ATY, Gjeli i Pazarit. All of them in a single day each, all of them still live and still converting. The brief was slightly different every time, but the bones were the same.",
      },
      {
        type: "p",
        text: "Here is what I'd fight for on every restaurant landing page, based on what actually worked. And at the end, a short list of what I'd cut even if the client asks for it.",
      },
      { type: "h2", text: "1. One hero image that sells the room, not the food" },
      {
        type: "p",
        text: "The plate matters less than the atmosphere. When someone lands on your site, they're asking one question: would I want to sit in this room tonight? Use a wide photo of the interior during golden hour. Guests in soft focus. Warm light. Your food is not the hero, the room is.",
      },
      { type: "h2", text: "2. A hero line that's a promise, not a description" },
      {
        type: "p",
        text: "Do not write 'Italian restaurant in Shkodër.' Google already knows that. Write something your best regular would say about you. 'Fresh seafood, slow evenings.' 'Where art meets appetite.' One sentence that earns the click.",
      },
      { type: "h2", text: "3. Reservations that work in one tap" },
      {
        type: "p",
        text: "The single most important feature on a restaurant site is the reservation CTA. On mobile, it should be reachable with one thumb, from anywhere on the page. WhatsApp is usually the right default in Albania and southern Europe. Phone number as a tel: link. Booking form only if you actually staff it.",
      },
      { type: "h2", text: "4. Menu visible without opening a PDF" },
      {
        type: "p",
        text: "Nobody opens the PDF. Show your signature dishes directly on the page, with prices. You can still link to the full PDF for the completionists, but the visible menu should give a visitor enough to decide whether you're their kind of place.",
      },
      { type: "h2", text: "5. Hours, address, and a map above the fold on mobile" },
      {
        type: "p",
        text: "On desktop this can live at the bottom. On mobile, it should be one scroll away from the top. Seventy percent of restaurant site visits are people trying to decide if they can walk in right now, and they leave fast if they have to hunt for hours.",
      },
      { type: "h2", text: "6. Real social proof, not made-up quotes" },
      {
        type: "p",
        text: "Your Google rating is your social proof. Put it on the page. '4.9 · 601 reviews' is more persuasive than any testimonial you could write yourself. If you don't have a Google rating yet, use one or two real quotes with real names. Don't fabricate pull-quotes, people can smell them from the street.",
      },
      { type: "h2", text: "7. Photography from inside your actual room" },
      {
        type: "p",
        text: "Stock photos are the clearest signal to a visitor that you don't care enough about the site to show them what they're actually going to get. Even a phone photo of your real space beats a perfect stock image. Especially in Albania, where regional character is a real selling point that stock can't fake.",
      },
      { type: "h2", text: "8. A second language, if it matters for your guest mix" },
      {
        type: "p",
        text: "Tirana is bilingual enough that English on an Albanian restaurant site is a deliberate choice, not an obligation. If you get tourist walk-ins, a second language is worth the hour it costs to add. If you only serve locals, don't bother, spend the time on photography instead.",
      },
      { type: "h2", text: "9. SEO basics, the boring ones" },
      {
        type: "ul",
        items: [
          "A title tag that includes your restaurant name and city",
          "A meta description that reads like a one-line Instagram bio",
          "Open Graph image so WhatsApp shares look like a proper link preview",
          "LocalBusiness structured data (hours, address, phone, rating)",
          "A sitemap and a robots file, even if it's one page",
        ],
      },
      {
        type: "p",
        text: "You only need to do this once, and it's the difference between showing up in 'restaurants near me' and being invisible.",
      },
      { type: "h2", text: "What I'd cut, even if you ask for it" },
      {
        type: "ul",
        items: [
          "Autoplaying hero videos with sound",
          "An 'About Us' section longer than three sentences",
          "A full-screen intro animation",
          "A carousel of every dish on the menu",
          "A newsletter popup on mobile",
        ],
      },
      {
        type: "p",
        text: "None of these make anyone reserve a table. Most of them make people close the tab. The best restaurant landing pages feel like walking past the window and deciding to go in.",
      },
    ],
  },
  {
    slug: "saas-landing-page-sections",
    title: "SaaS landing page: the 7 sections that actually convert",
    kicker: "SaaS",
    excerpt:
      "A SaaS landing page is a sales argument in seven parts. Here is the section order I use, what each one is for, and the mistake to avoid in each.",
    publishedAt: "2026-03-28",
    readTime: "7 min read",
    tags: ["SaaS", "Landing pages", "CRO"],
    body: [
      {
        type: "p",
        text: "A SaaS landing page is not a brochure. It is a sales argument in seven parts, and the parts have to appear in the right order for the argument to work. You can deviate from this order, but you should know why you are doing it.",
      },
      {
        type: "p",
        text: "Here is the order I use for most SaaS landing pages, what each section is for, and the one mistake I see almost every time.",
      },
      { type: "h2", text: "1. Hero: one promise, one action" },
      {
        type: "p",
        text: "The hero is not your logo and a clever tagline. It is a single sentence that tells a specific person what they will get, and a single button that lets them start getting it. Nothing else. No carousel, no video background, no three competing CTAs.",
      },
      {
        type: "p",
        text: "Common mistake: trying to describe the product instead of the outcome. 'A collaborative task manager for modern teams' is a description. 'Stop losing Mondays to status updates' is an outcome. Lead with the outcome.",
      },
      { type: "h2", text: "2. Logo row or social proof strip" },
      {
        type: "p",
        text: "Directly under the hero, before any feature talk. Real customer logos, real review scores, or real usage numbers. If you do not have customer logos yet, use a number that is specific and true: 'Trusted by 312 teams in 14 countries.' Specificity is the signal.",
      },
      {
        type: "p",
        text: "Common mistake: putting generic five-star review widgets here. They look fake even when they are real.",
      },
      { type: "h2", text: "3. The problem you solve, named out loud" },
      {
        type: "p",
        text: "Before you talk about your features, tell the visitor that you understand the pain. Not in abstract terms. In their exact words. If your user says 'I'm drowning in Slack messages about the same three questions,' use that sentence. Let the visitor feel seen.",
      },
      {
        type: "p",
        text: "Common mistake: skipping this section because you think the visitor already knows they have the problem. They do. But they do not yet know that you know.",
      },
      { type: "h2", text: "4. The core feature block, usually three to five items" },
      {
        type: "p",
        text: "This is where most SaaS sites overload. Pick the three to five features that a first-time visitor needs to understand the value. Not the full feature list. Each one gets one sentence of outcome, one sentence of how it works, and one small visual.",
      },
      {
        type: "p",
        text: "Common mistake: listing fifteen features because you do not want to leave anything out. The full list belongs on a /features subpage.",
      },
      { type: "h2", text: "5. Proof, in detail" },
      {
        type: "p",
        text: "One case study with a specific, credible number. 'Acme cut their onboarding time from six days to forty minutes.' Followed by one real quote, with a real name, real title, real company. Not a carousel of anonymous pull-quotes.",
      },
      {
        type: "p",
        text: "Common mistake: using pull-quotes with no name. The quote is doing half the work of the proof. If the visitor cannot Google the author, the quote is worth nothing.",
      },
      { type: "h2", text: "6. Pricing, even if it is 'contact us'" },
      {
        type: "p",
        text: "The moment a visitor wonders 'how much is this?' is the moment they are ready to disqualify you. If you do not answer that question on the page, they leave and assume you are expensive. Show the plans. If you really cannot show a number, at least show a range, or the lowest plan, or a sentence like 'Starting at $49 per month, custom plans for teams over 50.'",
      },
      {
        type: "p",
        text: "Common mistake: hiding the pricing behind a demo call. Unless you are selling to the enterprise, this is leaving money on the table.",
      },
      { type: "h2", text: "7. The final CTA block, louder than the hero" },
      {
        type: "p",
        text: "The last thing on the page before the footer should not be a newsletter signup. It should be the same CTA as the hero, with slightly bigger type and slightly more urgency. The visitor has read the whole argument. Do not ask them for their email. Ask them to start the trial.",
      },
      {
        type: "quote",
        text: "Every section of a SaaS landing page is a door. If the visitor closes it, they are gone. Every door has to either move them forward or get out of the way.",
      },
    ],
  },
  {
    slug: "freelancer-vs-agency-first-website",
    title: "Freelancer vs agency for your first website: which actually ships?",
    kicker: "Hiring",
    excerpt:
      "The real difference between hiring a freelancer and hiring an agency isn't price. It's who owns the outcome. Here's how to pick.",
    publishedAt: "2026-03-25",
    readTime: "6 min read",
    tags: ["Strategy", "Hiring", "Landing pages"],
    body: [
      {
        type: "p",
        text: "When a founder asks me how to pick between a freelancer and an agency for their first website, I already know the conversation they just had before ours. They've talked to one agency that quoted them eight thousand dollars and two months, and one freelancer on a marketplace who quoted them three hundred and ten days. They're trying to figure out which one is lying.",
      },
      {
        type: "p",
        text: "Neither of them is lying. They're selling different things. Here's the actual difference.",
      },
      { type: "h2", text: "What an agency actually sells" },
      {
        type: "ul",
        items: [
          "A process that accommodates many stakeholders",
          "A team that can work on multiple deliverables in parallel",
          "Account management, so you're never talking directly to the person writing the code",
          "Legal, contracts, procurement hygiene, enterprise billing",
          "A brand name you can hide behind if something goes wrong",
        ],
      },
      {
        type: "p",
        text: "All of that has real value. None of that helps a founder ship a landing page faster.",
      },
      { type: "h2", text: "What a freelancer actually sells" },
      {
        type: "ul",
        items: [
          "One person who owns every layer of the work",
          "A calendar with room to start this week",
          "A conversation, not a procurement process",
          "A fixed scope and fixed price that you can hold them to",
          "No account manager between you and the person doing the work",
        ],
      },
      {
        type: "p",
        text: "All of that has real value too. None of it helps you build a two-hundred-page marketing site with three different stakeholders.",
      },
      { type: "h2", text: "The hidden cost of agencies on early-stage work" },
      {
        type: "p",
        text: "The thing founders underestimate is time. Agencies are optimised for throughput, not speed. Even an agency that quotes you six weeks will burn two of those weeks on discovery, kickoff, scope documents, and internal alignment before anyone writes CSS. That's not a flaw, that's the product.",
      },
      {
        type: "p",
        text: "If you have the time and the budget, and the project is big enough to need coordination, that process pays for itself. For a landing page, it's pure overhead.",
      },
      { type: "h2", text: "Three signs you should hire an agency anyway" },
      {
        type: "ul",
        items: [
          "Your project has five or more internal stakeholders who need to approve things",
          "You need procurement paperwork, security reviews, or a master service agreement",
          "You're doing a brand refresh across more than one product or channel at once",
        ],
      },
      { type: "h2", text: "Three signs you should hire a freelancer" },
      {
        type: "ul",
        items: [
          "You need the site up in under a month",
          "Your scope can be written on one page",
          "You want to talk directly to the person building it",
        ],
      },
      { type: "h2", text: "The category-of-one version" },
      {
        type: "p",
        text: "The reason I built BekerDev the way I did is that most first-time founders fall squarely in the freelancer column, but the freelancer marketplaces are a minefield, and most good freelancers are busy. A one-person studio with a clear service menu solves that gap: it's not an agency, it's not a Fiverr gig, it's one developer shipping production work on a fixed price.",
      },
      {
        type: "quote",
        text: "The right question isn't freelancer versus agency. It's who will still be answering your messages at 9pm on the day you launch.",
      },
      {
        type: "p",
        text: "If you're early, pick the person who owns the outcome. Pick whoever you can talk to on a Tuesday. Pick the scope you can hold in your head. And when the work gets bigger than one person can handle, that's a great day. Hire the agency then.",
      },
    ],
  },
  {
    slug: "supabase-vs-firebase-2026",
    title: "Supabase vs Firebase in 2026: which should you start with?",
    kicker: "Stack",
    excerpt:
      "Two great backends for solo founders, and two very different philosophies. Here is when each one is the right choice, based on shipping real products on both.",
    publishedAt: "2026-03-22",
    readTime: "7 min read",
    tags: ["Stack", "Supabase", "Firebase"],
    body: [
      {
        type: "p",
        text: "Supabase and Firebase are the two backends I see founders actually use in 2026. Both are free to start. Both handle auth, database, storage, and realtime. Both will get a first product to market in a weekend if you know what you are doing. But they are not interchangeable, and picking the wrong one for your specific product can cost you a rewrite six months in.",
      },
      {
        type: "p",
        text: "I have shipped real products on both. Here is how I decide which one to reach for.",
      },
      { type: "h2", text: "The one-line summary" },
      {
        type: "p",
        text: "Supabase is a Postgres database with batteries. Firebase is a document store with batteries. Everything downstream of that one choice is a consequence.",
      },
      { type: "h2", text: "When Supabase is the right call" },
      {
        type: "ul",
        items: [
          "Your data is relational (users, orders, teams, projects)",
          "You know SQL, or you want to",
          "You expect to need reports, analytics, or joins across tables",
          "You want your app to be portable later (Postgres runs everywhere)",
          "You want row-level security tied to auth, out of the box",
        ],
      },
      {
        type: "p",
        text: "Most products I build for clients fall into this bucket. A marketplace, a CRM, a booking tool, a dashboard, a B2B SaaS. They all have real relationships between entities, and SQL is the right language for those relationships.",
      },
      { type: "h2", text: "When Firebase is the right call" },
      {
        type: "ul",
        items: [
          "You are building a mobile-first app",
          "Your data is mostly documents (chat messages, user profiles, game state)",
          "You want the strongest offline-first story on the market",
          "You are comfortable with NoSQL and you do not need complex joins",
          "You already use other Google Cloud services",
        ],
      },
      {
        type: "p",
        text: "Firebase is still unmatched for chat apps, social feeds, simple mobile games, and anything where the data model is mostly flat. The offline sync and the realtime story are the best I have used.",
      },
      { type: "h2", text: "The three things people get wrong" },
      { type: "h3", text: "Assuming Firebase is cheaper at scale" },
      {
        type: "p",
        text: "Firebase is cheaper to start. At real scale, Firestore reads and writes add up fast, and the pricing model is hard to predict because it scales with query patterns, not just data size. Supabase runs on Postgres, which is cheaper per operation but more expensive at the very smallest tier. If cost is critical, model your actual read and write patterns before you choose.",
      },
      { type: "h3", text: "Assuming Supabase is harder for beginners" },
      {
        type: "p",
        text: "It is not. Supabase Studio is genuinely friendly, and you can get auth and a simple schema running in an afternoon. The only real friction is that you have to understand what a relation is. If you are building anything with users and data, you already needed to.",
      },
      { type: "h3", text: "Using Firebase for a relational product because 'it looked easier'" },
      {
        type: "p",
        text: "This is the one that costs a rewrite. If your product has joins and reports in its future, forcing them into Firestore is painful. The workaround is usually to denormalise every query, which means every data change becomes three writes, and consistency becomes your problem.",
      },
      { type: "h2", text: "My default for 2026" },
      {
        type: "quote",
        text: "If you do not already have a strong reason to pick Firebase, pick Supabase. SQL ages better than documents.",
      },
      {
        type: "p",
        text: "For the last two years, every web product I have started has been on Supabase. The combination of Postgres plus auth plus row-level security plus a real dashboard is hard to beat for a solo developer. I still reach for Firebase on mobile-first chat-heavy apps, and I still think it is a great tool. But the default has shifted.",
      },
    ],
  },
  {
    slug: "how-to-write-product-brief",
    title: "How to write a product brief your developer will actually read",
    kicker: "Hiring",
    excerpt:
      "Most founders send their developer a seven-page doc full of good intentions and no decisions. Here is the one-page brief I wish every client sent me on day one.",
    publishedAt: "2026-03-18",
    readTime: "6 min read",
    tags: ["Hiring", "Process", "Brief"],
    body: [
      {
        type: "p",
        text: "I read product briefs for a living, and most of them have the same problem: they are long, they are enthusiastic, and they are full of inspiration. They are not decisions. A developer cannot ship from inspiration. A developer can only ship from decisions.",
      },
      {
        type: "p",
        text: "Here is the one-page brief format I wish every new client sent me. It takes about an hour to fill in. If you cannot fill it in, the project is not ready to start, and the right move is to spend the week getting it ready before you pay anyone.",
      },
      { type: "h2", text: "Section 1: The one-line pitch" },
      {
        type: "p",
        text: "One sentence. Who it is for, what it does, and why it is better than doing nothing. Not better than the competition. Better than the status quo. Example: 'A booking tool for yoga studios that replaces the WhatsApp chaos they use today.'",
      },
      {
        type: "p",
        text: "If you cannot write this in one sentence, your developer is going to guess, and they will guess wrong.",
      },
      { type: "h2", text: "Section 2: The one user you are building for" },
      {
        type: "p",
        text: "Not three personas. One user. Name them if it helps. Describe them in one paragraph. What they do for a living, what tool they currently use, what they complain about on a bad Tuesday. Every design decision downstream will use this paragraph as its tiebreaker.",
      },
      { type: "h2", text: "Section 3: The one action that has to work on day one" },
      {
        type: "p",
        text: "If the user only does one thing on your product successfully, what is it? Reserve a table. Send a message. Publish a post. Book a slot. Make an offer. Whatever it is, write it down in five words. Everything else is secondary scaffolding around that one flow.",
      },
      {
        type: "p",
        text: "This is the single most useful line in the entire brief. Developers make a thousand small decisions in a sprint, and 'does this help the core action?' is the filter that lets most of those decisions get made quickly.",
      },
      { type: "h2", text: "Section 4: What is in scope, in plain language" },
      {
        type: "p",
        text: "A short bulleted list of features that must work at launch. Not 'nice to haves.' Not 'maybe version 2.' Just launch-critical. Fewer items is better. If you have more than seven, you are not shipping an MVP, you are shipping a product.",
      },
      { type: "h2", text: "Section 5: What is explicitly out of scope" },
      {
        type: "p",
        text: "The shortest section and the most valuable. A short list of things you considered and decided not to build in this phase. Having this list in writing prevents scope creep in the most reliable way I know: the client and the developer both remember agreeing on it.",
      },
      { type: "h2", text: "Section 6: Brand and tone, in two sentences" },
      {
        type: "p",
        text: "Not a brand guideline document. Two sentences. 'We sound like a Michelin-starred chef who owns a corner cafe.' 'Our visual direction is warm, unhurried, and not trying to look like a startup.' Two sentences will carry a developer further than twenty pages of Pinterest.",
      },
      { type: "h2", text: "Section 7: The deadline, and whether it is real" },
      {
        type: "p",
        text: "Every brief has a deadline. Most of them are soft. Tell your developer which kind yours is. 'We want to launch by April 20 for a press event, it cannot move' is useful information. 'Soonest' is not.",
      },
      {
        type: "quote",
        text: "A great brief is not a document. It is a decision made in public, so two people can point at it when they disagree.",
      },
      {
        type: "p",
        text: "If you fill out these seven sections on one page and send it, I promise you will get a faster, sharper, cheaper quote back than if you send a seven-page inspiration doc. Try it once. It is the single biggest change you can make to how you hire.",
      },
    ],
  },
  {
    slug: "tailwind-css-for-founders",
    title: "Tailwind CSS for founders: why your developer keeps recommending it",
    kicker: "Stack",
    excerpt:
      "If your developer has mentioned Tailwind three times this month, here is the plain-English version of why they will not stop, and why you should let them win this one.",
    publishedAt: "2026-03-14",
    readTime: "5 min read",
    tags: ["Stack", "Tailwind", "CSS"],
    body: [
      {
        type: "p",
        text: "If you are a non-technical founder, there is a very good chance your developer has mentioned Tailwind at least once in the last month. Maybe they put it in a quote. Maybe they said 'I was going to use Tailwind for this, is that OK?' and you nodded without really knowing what you were agreeing to.",
      },
      {
        type: "p",
        text: "This post is for you. Here is what Tailwind is, in plain language, and why picking a developer who uses it is a quietly good decision.",
      },
      { type: "h2", text: "What Tailwind actually is" },
      {
        type: "p",
        text: "Tailwind is a way of writing styles for a website that looks, at first glance, like your developer has gone insane. Instead of writing a separate file that says 'buttons are red,' they write 'red' directly next to every button. When you read the code, you see things like 'bg-red-500 text-white px-4 py-2 rounded.' That is Tailwind.",
      },
      {
        type: "p",
        text: "It looks ugly the first time you see it. It is not. It is the thing that made modern front-end development tolerable again.",
      },
      { type: "h2", text: "Why developers like it" },
      { type: "h3", text: "1. You never have to invent a class name" },
      {
        type: "p",
        text: "In traditional CSS, every time you style something, you invent a name for it. 'Hero-cta-button-primary.' 'Nav-link-active.' Naming things is one of the two hard problems in computer science for a reason. Tailwind skips the naming entirely. You describe what you want. The name is the description.",
      },
      { type: "h3", text: "2. Design decisions live next to the thing they affect" },
      {
        type: "p",
        text: "When you want to tweak a button, you do not open a stylesheet, scroll to find the right rule, and try to guess whether changing it will affect other buttons. You click on the button in your code and change the thing you see. It is the closest thing to touching the website directly.",
      },
      { type: "h3", text: "3. It is hard to make a Tailwind site look bad" },
      {
        type: "p",
        text: "Tailwind comes with a built-in design system. The spacing values, the colour palette, the typography scale, all of it is curated. A developer using Tailwind is borrowing a designer's taste for free. The result is that even a quickly built project has a consistent visual rhythm.",
      },
      { type: "h2", text: "What it means for you, the founder" },
      {
        type: "ul",
        items: [
          "Your developer can iterate faster on visual changes",
          "Your site is more likely to stay consistent across pages without a formal design system",
          "Your next developer will be able to pick up the project without learning someone else's CSS naming scheme",
          "Your build times and final bundle sizes will be smaller",
        ],
      },
      { type: "h2", text: "Is it a trend that will go away?" },
      {
        type: "p",
        text: "Tailwind has been mainstream for more than five years now. Every major front-end job posting in 2026 lists it as a required skill. It is not a trend in the way 'bootstrap jQuery plugins in 2013' was a trend. It is the default. If a developer is not using it, they should have a specific reason. 'I prefer writing old-school CSS' is not a reason that ages well.",
      },
      {
        type: "quote",
        text: "Tailwind is ugly to read and beautiful to ship. Both things are true, and the second one is what matters.",
      },
      {
        type: "p",
        text: "Every BekerDev project is built in Tailwind. It is not the reason a page ships in a day, but it is one of the reasons it can.",
      },
    ],
  },
  {
    slug: "real-cost-of-wix-site",
    title: "The real cost of a 'free' Wix site for your business",
    kicker: "Pricing",
    excerpt:
      "Wix looks free. It is not. Here is the real math, including the costs nobody mentions in the ad, and when the free tool is actually fine.",
    publishedAt: "2026-03-10",
    readTime: "6 min read",
    tags: ["Pricing", "WordPress", "Wix"],
    body: [
      {
        type: "p",
        text: "When a small business owner tells me they are thinking about just doing their site on Wix, I do not argue with them. Wix is a fine tool for the job it is built for. But I do want them to see the real math, because the word 'free' on the landing page is doing a lot of invisible work.",
      },
      {
        type: "p",
        text: "Here is the honest total cost of a business Wix site in 2026, including the costs that nobody mentions in the ad.",
      },
      { type: "h2", text: "The sticker price" },
      {
        type: "p",
        text: "Wix has a free tier. Nobody running a business uses it, because it puts Wix ads on your site. Every real business uses the paid plans. For a business site with a custom domain and basic features, the paid plan in 2026 sits between $17 and $36 per month, depending on features. Multiply by 12, and you are at $200 to $430 per year, every year, forever.",
      },
      { type: "h2", text: "The costs nobody advertises" },
      { type: "h3", text: "1. Your time" },
      {
        type: "p",
        text: "Wix is a drag-and-drop tool, but drag-and-drop is slower than people think. A business owner building their own site on Wix typically spends between 15 and 40 hours on the first version. If your hourly rate is $50 (low), that is $750 to $2,000 of your own time, which is exactly the range where you could have hired a professional to do it in a day.",
      },
      { type: "h3", text: "2. The generic look" },
      {
        type: "p",
        text: "Every Wix template looks like a Wix template. This is not snobbery, it is a real business cost. Customers can tell when a site is off-the-shelf, and for most service businesses, the site is the first impression. Generic first impression, generic price expectation.",
      },
      { type: "h3", text: "3. Lock-in" },
      {
        type: "p",
        text: "You cannot export a Wix site to another platform in any meaningful way. If you grow out of it in two years and want to move to a real custom site, you start from scratch. This is the cost that shows up quietly: you paid for something you cannot take with you.",
      },
      { type: "h3", text: "4. SEO ceiling" },
      {
        type: "p",
        text: "Wix has gotten better at SEO in the last few years, but it still underperforms a hand-built Next.js site on Core Web Vitals by a clear margin. For a service business that depends on ranking in local search, that gap is real money.",
      },
      { type: "h2", text: "The five-year math" },
      {
        type: "p",
        text: "Let us add it up. Wix plan for five years: roughly $1,500. Your time on the build and ongoing edits: another $1,000 to $2,500, conservatively. Missed revenue from a generic first impression and a slightly worse SEO profile: unknowable, but not zero. Total cost over five years: $2,500 to $4,000, plus whatever you are leaving on the table.",
      },
      {
        type: "p",
        text: "That is the same range as hiring a professional to build you a one-day custom landing page. The professional version does not charge you a monthly subscription and it does not look like everyone else's site.",
      },
      { type: "h2", text: "When Wix is still the right call" },
      {
        type: "ul",
        items: [
          "You are testing an idea and you genuinely do not know if the business will exist in six months",
          "You need a placeholder page up in thirty minutes and the brand does not matter yet",
          "You are a hobbyist, not a business, and the site is a side project",
        ],
      },
      {
        type: "p",
        text: "In those cases, do it. Free tools are free tools for a reason. They exist to get you moving quickly when speed is all that matters.",
      },
      { type: "h2", text: "When it is the wrong call" },
      {
        type: "quote",
        text: "If your business is going to depend on this site for more than a year, you cannot afford a free tool. You can only afford a real one.",
      },
      {
        type: "p",
        text: "For a restaurant, a law firm, a clinic, a studio, a coach, a consultant: your site is doing real sales work every day. A one-day custom landing page is the same total five-year cost, and it will look, feel, and rank like something built on purpose.",
      },
    ],
  },
  {
    slug: "albanian-restaurant-portfolio-lessons",
    title: "5 Albanian restaurant sites: the patterns that actually worked",
    kicker: "Case notes",
    excerpt:
      "After shipping five restaurant landing pages across Tirana and Shkodër in the last year, here are the patterns that showed up in every one, and the ones that did not matter at all.",
    publishedAt: "2026-03-05",
    readTime: "7 min read",
    tags: ["Hospitality", "Case study", "Albania"],
    body: [
      {
        type: "p",
        text: "In the last year I have shipped five restaurant landing pages in Albania: Jarna, Trattoria Venezia, Eja, ATY, and Gjeli i Pazarit. All of them one-day builds. All of them still live. Some of them I still walk past on weekends. Here is what the five projects taught me about what actually moves the needle on a restaurant site, and what does not.",
      },
      { type: "h2", text: "What mattered, every single time" },
      { type: "h3", text: "1. A hero photo of the room, not the food" },
      {
        type: "p",
        text: "This one is absolute. Every time I led with a warm, full-bleed photo of the actual interior, visitors stayed longer. Every time I led with a plated dish, bounce rates were higher. People are not buying the food sight unseen. They are buying the feeling of a place they would like to be in. The room is the product.",
      },
      { type: "h3", text: "2. A reservation CTA that works in one thumb" },
      {
        type: "p",
        text: "Every site had a visible WhatsApp or phone CTA within reach from anywhere on the page. For all five restaurants, this was the single most-clicked element. Most of the traffic was mobile, most of the mobile traffic was evening and weekend, and most of those people were deciding whether to walk in tonight.",
      },
      { type: "h3", text: "3. A short menu on the page, not a PDF" },
      {
        type: "p",
        text: "Every site had between four and eight signature dishes visible directly on the page with prices. The full menu was available as a PDF link for the completionists, but the visible version did the selling. The PDF was almost never opened.",
      },
      { type: "h3", text: "4. Google reviews as social proof" },
      {
        type: "p",
        text: "Four of the five restaurants already had a strong Google rating. Putting that number on the page, with the review count, was the best social proof in every case. 'Rated 4.9 from 600 reviews' outperformed any made-up testimonial I could have written.",
      },
      { type: "h3", text: "5. Photography from inside the real place" },
      {
        type: "p",
        text: "Across all five projects, I did not use a single stock photo. Some of the photos were taken by the owners on an iPhone. Some were taken by a friend with a decent camera. None of them were perfect. All of them beat stock. Stock photography on a restaurant site feels like a costume.",
      },
      { type: "h2", text: "What did not matter" },
      { type: "h3", text: "1. Elaborate animations" },
      {
        type: "p",
        text: "I shipped one site with a subtle hero fade and one without. No measurable difference in engagement or conversions. Motion for motion's sake is a rounding error in restaurant land.",
      },
      { type: "h3", text: "2. A full 'About' section" },
      {
        type: "p",
        text: "I tried short about sections (two sentences) and longer ones (a paragraph about the family history). The longer ones were not read. The shorter ones were skipped. Visitors are deciding whether to eat, not whether to adopt a backstory.",
      },
      { type: "h3", text: "3. An events calendar" },
      {
        type: "p",
        text: "Two of the five owners wanted a full events calendar on the page. In practice, the events were updated once and then abandoned. A simple 'Events: see our Instagram' link outperformed a calendar that was dated by the third week.",
      },
      { type: "h2", text: "The one surprise" },
      {
        type: "p",
        text: "I expected English-language versions to matter a lot in Tirana and less in Shkodër. The data was messier than that. At Trattoria Venezia in Shkodër, the English version drove real traffic from tourists in the summer. At ATY in Tirana, almost no visitors switched languages. The lesson: guess less, look at the actual audience, and spend the translation hour where it earns itself back.",
      },
      {
        type: "quote",
        text: "The things that worked on every restaurant site were not clever. They were obvious. The trick is that the obvious things are also the ones most people skip to save time.",
      },
      {
        type: "p",
        text: "If you run a restaurant in Albania and you are thinking about a new landing page, those five patterns are the checklist I would start from. The bones are the same. The personality is what makes yours different.",
      },
    ],
  },
  {
    slug: "when-you-need-a-real-website",
    title: "When a landing page isn't enough: 4 signs you need a real website",
    kicker: "Strategy",
    excerpt:
      "A landing page gets most early-stage businesses further than they think. But there are four specific moments when you outgrow it, and trying to push the landing page any further starts costing you money.",
    publishedAt: "2026-02-28",
    readTime: "6 min read",
    tags: ["Strategy", "Landing pages", "Web design"],
    body: [
      {
        type: "p",
        text: "Most early-stage businesses do not need a website. They need a landing page. I am on the record saying this in every founder conversation I have. But there is a moment in the life of most serious businesses where the landing page stops being enough, and trying to bolt more onto it starts costing you money.",
      },
      {
        type: "p",
        text: "Here are the four signs I watch for, and what to do when they show up.",
      },
      { type: "h2", text: "Sign 1: You have more than one audience" },
      {
        type: "p",
        text: "A landing page is a single argument aimed at a single audience. The moment you have two genuinely different kinds of customers, you cannot compress them onto the same page without hurting both of them. A restaurant that also does private events needs two pitches. A SaaS that sells to both individuals and teams needs two pricing stories. A studio that does both branding and development needs two case-study tracks.",
      },
      {
        type: "p",
        text: "The fix is not 'tabs on the landing page.' The fix is a second page, linked from the first, aimed entirely at the second audience.",
      },
      { type: "h2", text: "Sign 2: Your product is now more than one thing" },
      {
        type: "p",
        text: "Your landing page was for one feature. You have now added a second, different one, and the page is starting to read like a product brochure written by committee. This is the moment to split: a clean home page that positions the company, and dedicated product pages that sell the features.",
      },
      { type: "h2", text: "Sign 3: You have real content to publish" },
      {
        type: "p",
        text: "You are going to ship a blog, or case studies, or a learning hub, or a press page. Content is the clearest sign that the single-page model has outlived its purpose. Content lives in its own URL structure, its own sitemap, its own navigation. A blog at the bottom of a single-page site feels stuck in the wrong room.",
      },
      { type: "h2", text: "Sign 4: You are hiring" },
      {
        type: "p",
        text: "The moment you have a careers story to tell, you need a real site. A /careers page is not optional once you are hiring the first three people, and it has to live inside a site that communicates seriousness. A single landing page with a hidden careers link tells a candidate that the company is still a hobby.",
      },
      { type: "h2", text: "What a 'real website' actually means" },
      {
        type: "p",
        text: "Not thirty pages. Usually between five and ten. A home page, one or two product pages, an about or team page, a pricing page if you need one, a contact page, and a blog or journal index. That is enough to feel complete without becoming a maintenance burden.",
      },
      {
        type: "p",
        text: "You do not need a rebrand to get here. Most of the time, the existing landing page design can be extended into a small site, and the rest of the work is information architecture, content writing, and a new navigation.",
      },
      { type: "h2", text: "What to avoid when you make the jump" },
      {
        type: "ul",
        items: [
          "Trying to move to a CMS on the same day you add pages, unless you will actually edit content weekly",
          "Designing a brand system before you know what pages you need",
          "Adding pages for the sake of looking bigger",
          "Deleting the landing page entirely, instead of turning it into the new home page",
        ],
      },
      {
        type: "quote",
        text: "A landing page earns its keep by saying one thing well. A site earns its keep by saying several things well, in the right order.",
      },
      {
        type: "p",
        text: "If any of the four signs feels familiar, the next step is not to start over. The next step is a planning conversation about the three or four pages you actually need, and which parts of the current site get to keep their shape. That is usually a two-hour call, not a rebrand.",
      },
    ],
  },
  {
    slug: "validate-startup-idea-weekend",
    title: "How to validate a startup idea in one weekend (without writing code)",
    kicker: "Validation",
    excerpt:
      "You do not need a product to test a product idea. Here is the exact two-day process I use when a founder asks me whether their idea is worth building.",
    publishedAt: "2026-02-22",
    readTime: "6 min read",
    tags: ["Validation", "Strategy", "MVP"],
    body: [
      {
        type: "p",
        text: "Every other week, a founder messages me with a version of the same question. 'I have an idea. Should I build it?' And the answer I wish I could give every time is: I do not know, and neither do you, until you test it. Here is the exact two-day process I use when I want to find out whether an idea is worth building before I write a single line of code.",
      },
      { type: "h2", text: "Saturday morning: write the pitch" },
      {
        type: "p",
        text: "Before anything else, force yourself to write a one-sentence pitch. Who is it for, what does it do, why is it better than the current workaround. If the sentence is hard to write, the idea is not ready for validation yet. Go back to the idea and sharpen it.",
      },
      {
        type: "p",
        text: "Then write the three sentences that would follow that pitch if you were explaining it to a friend. The problem, the solution, the moment of magic. This is the raw material for everything else in the weekend.",
      },
      { type: "h2", text: "Saturday afternoon: build a fake landing page" },
      {
        type: "p",
        text: "Not a real one. A fake one. You can use Framer, Carrd, Notion, or Google Sites. The page has three things on it: the one-line pitch, two or three images or mockups, and an email capture that promises early access. Do not build a product. Do not even hint at a product. The whole page exists to see if anyone will give you their email in exchange for the promise.",
      },
      {
        type: "p",
        text: "The page should take you two or three hours. If it takes longer, you are overbuilding.",
      },
      { type: "h2", text: "Saturday evening: decide where to send people" },
      {
        type: "p",
        text: "This is the step most founders skip, and it is the step that matters most. A landing page with no traffic teaches you nothing. You need to know, before Sunday, where you are going to find ten to fifty real potential customers. A Reddit community. A WhatsApp group. Three DMs to people you already know fit the profile. A single small ad. It does not matter which channel, it matters that you have one.",
      },
      { type: "h2", text: "Sunday morning: send the traffic" },
      {
        type: "p",
        text: "Post in the community. DM the three people. Run the small ad. Do not write a dissertation. Share the link with one sentence of context and ask people to take a look. Nothing else. Then go make coffee.",
      },
      { type: "h2", text: "Sunday afternoon: read the signal" },
      {
        type: "p",
        text: "By Sunday afternoon, you will have one of three signals.",
      },
      { type: "h3", text: "Signal 1: Nobody clicked" },
      {
        type: "p",
        text: "You cannot reach this audience through the channel you picked, or the pitch does not stop the scroll. Either way, you do not know whether the idea is bad, you only know the package is not landing. Go back to the pitch.",
      },
      { type: "h3", text: "Signal 2: People clicked but nobody gave you their email" },
      {
        type: "p",
        text: "The pitch is interesting enough to click but not interesting enough to sign up. This is the hardest signal to read. It usually means the promise is too vague, or the audience does not yet trust that you will deliver it. Tighten the pitch. Try again.",
      },
      { type: "h3", text: "Signal 3: People gave you their email and asked follow-up questions" },
      {
        type: "p",
        text: "This is the signal you were looking for. People want the thing. Now you have a reason to build it, and you have a list of specific humans to build it for. Reply to every single email personally. Ask them what they are doing today to solve the problem. This is the most valuable information you will get for months.",
      },
      { type: "h2", text: "What to do on Monday" },
      {
        type: "quote",
        text: "If the weekend worked, you now have something most founders never have: a list of people who said yes to the promise, before the product existed.",
      },
      {
        type: "p",
        text: "If the weekend worked, talk to the first five people on the list. Then, and only then, think about building. If it did not work, do not take it personally. The weekend cost you two days and fifty dollars of ads. The alternative was building a product for three months based on a guess. You saved yourself the three months.",
      },
    ],
  },
  {
    slug: "high-converting-landing-page-anatomy",
    title: "The anatomy of a landing page that converts at 20%+",
    kicker: "CRO",
    excerpt:
      "A 20% conversion rate on a landing page is rare, not magic. Here is the anatomy of the ones I have shipped that hit it, and the five decisions that did the heavy lifting.",
    publishedAt: "2026-02-16",
    readTime: "7 min read",
    tags: ["CRO", "Landing pages", "Conversion"],
    body: [
      {
        type: "p",
        text: "A landing page that converts at 20 percent or higher is rare. Most pages convert between 2 and 5 percent. The pages I have seen hit 20 and beyond were not built by copywriting geniuses or lucky accidents. They were built by making the same five decisions correctly, every time. This post is the anatomy of those five decisions.",
      },
      { type: "h2", text: "Decision 1: A single, named audience" },
      {
        type: "p",
        text: "The most common reason a page converts poorly is that it was written for everyone. A page written for everyone is a page that speaks to no one. The pages that convert above 20 percent always name their audience in the first sentence. 'For yoga studio owners.' 'For solo developers building their first product.' 'For property managers with more than fifty units.' The moment a visitor thinks 'that is me,' the conversion fight is half won.",
      },
      { type: "h2", text: "Decision 2: A specific, concrete promise" },
      {
        type: "p",
        text: "Your hero is not a tagline, it is a promise. The promise has to be specific enough that the visitor can picture themselves getting it. 'Make your booking process effortless' is not specific. 'Replace the spreadsheet you use to track your 40 weekly classes' is specific. The specific version is always the one that converts.",
      },
      { type: "h2", text: "Decision 3: One action, repeated without apology" },
      {
        type: "p",
        text: "High-converting pages have one call to action, and they repeat it without getting clever. Three times. Four times. Sometimes five. Every new section ends with a version of the same button. This is not aggressive, it is respectful of the visitor's attention. If they decided to convert on section three, they do not need to scroll back to the hero to find the button.",
      },
      {
        type: "p",
        text: "Pages that try to be subtle about the CTA almost always leak conversions. Subtlety is a luxury the hero paragraph cannot afford.",
      },
      { type: "h2", text: "Decision 4: Proof that is unfakeable" },
      {
        type: "p",
        text: "Stock testimonials kill conversions because visitors can smell them. Proof that works looks different. It includes a specific number ('308 teams signed up in January'), a specific name with a real title, or a specific screenshot with real data. Every piece of proof should be something a skeptical visitor could, in theory, verify by Googling.",
      },
      {
        type: "p",
        text: "If you do not have real proof yet, do not invent it. Use what you have: 'Built by a team that has shipped over a hundred client projects.' 'Currently in private beta with thirty pilot customers.' Specific and true beats vague and impressive every time.",
      },
      { type: "h2", text: "Decision 5: No second paths" },
      {
        type: "p",
        text: "High-converting pages have no navigation. No top menu. No 'learn more' links that take you off the page. No secondary CTA asking people to follow you on Twitter or join the newsletter. The only exits from the page are the primary CTA and the back button. Every other link is a leak.",
      },
      {
        type: "p",
        text: "This feels aggressive when you first do it. Ship a version without a nav and watch your conversion rate. You will not miss the nav.",
      },
      { type: "h2", text: "The things that do not matter" },
      {
        type: "ul",
        items: [
          "Fancy animations",
          "Pop-ups that intercept the user on scroll",
          "A twelve-section feature comparison table",
          "A hero video",
          "Every feature of the product listed equally",
        ],
      },
      {
        type: "p",
        text: "I have seen pages with all of these convert beautifully, and pages with none of these flop. They are not the variable. The five decisions above are the variable.",
      },
      {
        type: "quote",
        text: "A 20 percent conversion rate is not the result of five hundred small optimisations. It is the result of five decisions, each made correctly and defended.",
      },
      {
        type: "p",
        text: "If your current landing page is converting under 5 percent, the right move is not a heatmap study or a color change. The right move is to audit those five decisions, find the one you did not make, and make it.",
      },
    ],
  },
  {
    slug: "contact-form-design",
    title: "Why your contact form should be the best-designed part of your site",
    kicker: "UX",
    excerpt:
      "The contact form is the last door a visitor walks through before you ever hear from them. And on most sites, it is the worst-designed part of the experience. Here is what it should look like instead.",
    publishedAt: "2026-02-10",
    readTime: "5 min read",
    tags: ["UX", "Forms", "Design"],
    body: [
      {
        type: "p",
        text: "On most sites, the contact form is an afterthought. It lives on /contact, it was the last page designed, it was built from a cheap form plugin, and the experience of submitting it is one of the worst parts of the site. Which is strange, because the contact form is the single most important conversion moment you have. Everything upstream of it is spent trying to get the visitor there, and the form is where they either convert or leave.",
      },
      {
        type: "p",
        text: "Here is what I think a contact form should look and feel like in 2026, and the small decisions that separate one that wastes leads from one that captures them.",
      },
      { type: "h2", text: "1. Fewer fields than you think you need" },
      {
        type: "p",
        text: "The most reliable conversion-rate improvement you can make to a contact form is to remove fields. Name, email, message. That is all most forms actually need on the first submission. You can ask for the phone number, the company name, and the budget in the reply email. A long form feels like work. A short form feels like a conversation.",
      },
      { type: "h2", text: "2. A real success state, not a redirect" },
      {
        type: "p",
        text: "When the visitor submits, they should see the message they just wrote replaced by a human, specific confirmation. 'Thanks, your message landed in my inbox. I will reply within one working day. Check spam if you do not see a reply tomorrow.' Not a popup. Not a redirect to /thank-you. A specific response that feels like it came from a person.",
      },
      { type: "h2", text: "3. A real error state, too" },
      {
        type: "p",
        text: "Forms fail. Network drops, server timeouts, validation errors, spam filters. The worst thing a failing form can do is reset and pretend nothing happened. Every error needs a clear message, and the form should preserve what the visitor already typed. Losing someone's half-written message is the fastest way to lose the lead entirely.",
      },
      { type: "h2", text: "4. Mobile-friendly by default, not as an afterthought" },
      {
        type: "p",
        text: "More than half of contact form submissions happen on mobile. That means the form should use the right input types (tel for phone, email for email), the labels should be readable without zoom, and the submit button should be as tall as a thumbprint. If you cannot fill out your own form on your phone while standing on a bus, it is not ready.",
      },
      { type: "h2", text: "5. Invisible spam protection" },
      {
        type: "p",
        text: "Captcha is a conversion killer. Every time you force a visitor to click pictures of traffic lights, some of them leave. Use a honeypot field, or Cloudflare Turnstile, or a timing-based filter. The visitor should never see your spam protection. Spammers should bounce off it without noticing.",
      },
      { type: "h2", text: "6. One sentence of reassurance under the submit button" },
      {
        type: "p",
        text: "One small line of text, directly under the button, that answers the visitor's quiet fear. 'No sales calls, I reply personally.' 'Free consultation, no commitment.' 'Usually replies same day.' One sentence. This is the cheapest, highest-leverage real estate on the entire page.",
      },
      { type: "h2", text: "7. The inbox it sends to is monitored" },
      {
        type: "p",
        text: "This is not a design decision, but it is a design failure. Half the contact forms on the internet send to an inbox that nobody checks. If you do not reply to contact form submissions within 24 hours, the form is worse than useless, because it creates an expectation and then betrays it. If you cannot commit to checking the inbox, take the form down and put a direct email link instead.",
      },
      {
        type: "quote",
        text: "The contact form is the last door. A visitor who reaches it is worth more than every visitor who scrolled past the hero. Design it like you mean it.",
      },
      {
        type: "p",
        text: "On every site I build, the contact form gets at least as much design attention as the hero. Not because I am obsessed with forms, but because forms are where interest turns into conversation, and conversation is where work turns into clients.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev: Post | null;
  next: Post | null;
} {
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}
