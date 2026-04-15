import type { StaticImageData } from "next/image";

import AtyImage from "@/assets/images/aty.png";
import EjaImage from "@/assets/images/eja.png";
import GjeliImage from "@/assets/images/gjeli-i-pazarit.png";
import JarnaImage from "@/assets/images/jarna.png";
import NizaImage from "@/assets/images/niza.png";
import TrattoriaImage from "@/assets/images/trattoria-venezia.png";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  /** Year or range displayed in the dateline. */
  year: string;
  /** Client name, or "Self-initiated" / "Co-founded". */
  client: string;
  /** Role Ebubeker played on the project. */
  role: string;
  stack: string[];
  image: StaticImageData;
  alt: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  /** Long-form case study body. Rendered on /work/[slug]. */
  body: {
    problem: string;
    approach: string;
    outcome: string;
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "jarna",
    title: "Jarna: traditional restaurant",
    kicker: "Hospitality · Landing in a day",
    summary:
      "A warm, editorial landing page for a traditional Albanian restaurant in Tiranë, built, copywritten, and deployed in a single working day.",
    year: "2026",
    client: "Jarna Traditional Restaurant",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: JarnaImage,
    alt: "Jarna traditional restaurant landing page",
    liveUrl: "https://n-gamma-blue.vercel.app/",
    featured: true,
    body: {
      problem:
        "Jarna needed a landing page that could carry the weight of a traditional Albanian kitchen on the web: warm, rooted, review-driven, and ready to take reservations from day one.",
      approach:
        "Designed and built the site in one working day. A single long-scroll page with hero, menu highlights, about, and contact, wired to WhatsApp reservations and anchored around a 4.9 Google rating as social proof.",
      outcome:
        "Shipped to production the same day. The kitchen got a site that feels like the room: calm, traditional, and confident, with a reserve flow that takes bookings straight into WhatsApp.",
      highlights: [
        "Editorial hero with a review pull-quote above the fold",
        "WhatsApp reservation flow, no form plumbing",
        "Bilingual-ready copy structure",
        "Deployed on Vercel the same day it was designed",
      ],
    },
  },
  {
    slug: "trattoria-venezia",
    title: "Trattoria Venezia: Italian seafood",
    kicker: "Hospitality · Landing in a day",
    summary:
      "A cinematic one-page site for an Italian seafood restaurant in Shkodër, designed, built, and launched in a single day.",
    year: "2026",
    client: "Trattoria Venezia",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: TrattoriaImage,
    alt: "Trattoria Venezia Italian restaurant landing page",
    liveUrl: "https://trattoria-venezia.vercel.app/",
    featured: true,
    body: {
      problem:
        "Trattoria Venezia needed a single, beautiful web destination that sold the room before the menu: Italian kitchen, fresh seafood, Shkodër setting, all on one page.",
      approach:
        "Built as a classic cinematic landing: full-bleed hero plate, quick navigation to menu and reservations, and a compact about section. One day, one scroll, one clear CTA.",
      outcome:
        "Went live the same afternoon on Vercel. Gives the restaurant a credible web presence with room to expand into multi-language and online ordering later.",
      highlights: [
        "Full-bleed cinematic hero with restaurant photography",
        "Menu, reservations, and contact in one scroll",
        "Mobile-first layout tuned for walk-in discovery",
        "Ready for Albanian and Italian locale expansion",
      ],
    },
  },
  {
    slug: "eja",
    title: "Eja: first Italian in Tirana",
    kicker: "Hospitality · Landing in a day",
    summary:
      "A green-and-gold landing page for Eja Restaurant, billed as the first Italian restaurant in Tirana, shipped end-to-end in a day.",
    year: "2026",
    client: "Eja Restaurant",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: EjaImage,
    alt: "Eja Restaurant landing page",
    liveUrl: "https://eja-five.vercel.app/",
    featured: true,
    body: {
      problem:
        "Eja wanted a web presence that made the pasta the hero. The brief was simple: one page, one promise, one booking flow, and it had to feel like stepping into the room.",
      approach:
        "Leaned into the existing interior photography and built a landing page around a single claim: The Best Pasta in Town. Handmade Belly. Mediterranean warmth. Reserve and order buttons above the fold, nothing extra.",
      outcome:
        "Shipped in a day. The site gives Eja a clean, confident online front door, with the restaurant's atmosphere doing most of the selling.",
      highlights: [
        "Single-claim hero with interior photography",
        "Reservation and Wolt ordering CTAs above the fold",
        "Journal and menu sections ready for future content",
        "Deployed to Vercel the same day",
      ],
    },
  },
  {
    slug: "aty",
    title: "ATY: rooftop, art, appetite",
    kicker: "Hospitality · Landing in a day",
    summary:
      "A dusky, gallery-inspired landing page for ATY Restaurant & Gallery, the rooftop next to the Pyramid of Tirana. Built in a day.",
    year: "2026",
    client: "ATY Restaurant & Gallery",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: AtyImage,
    alt: "ATY Restaurant & Gallery rooftop landing page",
    liveUrl: "https://aty-tau.vercel.app/",
    featured: true,
    body: {
      problem:
        "ATY is a rooftop venue that plays three roles at once: restaurant, gallery, and live-music room. The site had to carry all three without feeling cluttered.",
      approach:
        "Wrote a single hero line that hooks all three personas at once, and built a long-form page around it with menu, gallery, and booking. Muted, dusk-forward palette to match the rooftop mood.",
      outcome:
        "Designed and shipped in one day. Gives ATY one sentence the room can hang on, and a booking funnel that treats breakfast and late-night equally.",
      highlights: [
        "One-line hero positioning (where art meets appetite)",
        "Gallery, menu, and reservations on a single scroll",
        "Dusk-forward palette tuned to rooftop atmosphere",
        "Same-day deploy on Vercel",
      ],
    },
  },
  {
    slug: "gjeli-i-pazarit",
    title: "Gjeli i Pazarit: Albanian tavern",
    kicker: "Hospitality · Landing in a day",
    summary:
      "A traditional Albanian tavern in Tirana needed a landing page that felt like the room. Built, styled, and deployed in a day.",
    year: "2026",
    client: "Gjeli i Pazarit",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: GjeliImage,
    alt: "Gjeli i Pazarit Albanian tavern landing page",
    liveUrl: "https://gjelipazarit.vercel.app/",
    featured: true,
    body: {
      problem:
        "Gjeli i Pazarit wanted a landing page that matched the tavern: warm, honest, and clearly Albanian, with menu and reservations a single tap away.",
      approach:
        "Built a traditional-feeling layout around a signature hero plate, rating and hours as stat bars, and a menu-first navigation. No filler sections, no generic stock.",
      outcome:
        "Shipped the same day. The tavern gets a web home that carries its character, with a reservation flow that works from phones as well as laptops.",
      highlights: [
        "Signature dish hero photography",
        "Rating, partners, and hours as stat bars",
        "Menu-first navigation with reservation CTA",
        "Deployed on Vercel the day it was designed",
      ],
    },
  },
  {
    slug: "niza-global",
    title: "Niza Global: fintech landing",
    kicker: "Fintech · Landing in a day",
    summary:
      "A single-day landing refresh for Niza Global, a crypto platform with multi-language reach, tightening the conversion path above the fold.",
    year: "2026",
    client: "Niza Global",
    role: "Solo design and build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    image: NizaImage,
    alt: "Niza Global crypto platform landing page",
    liveUrl: "https://niza.io/en",
    featured: true,
    body: {
      problem:
        "Niza needed its landing to state a single, aggressive promise, More Profits, Lower Fees, without burying it under the rest of the product surface.",
      approach:
        "Rebuilt the hero section in a day: big bold headline, zero-fee hook, trust stats underneath, and a single primary CTA. Language toggle and download links kept close, everything else pushed down the page.",
      outcome:
        "A tighter above-the-fold that communicates the value in a single glance, localized for English while the rest of the site keeps its multi-language surface.",
      highlights: [
        "Single-claim hero (More Profits, Lower Fees)",
        "Trust stats (trading volume, users, market share) under the fold",
        "App Store and Google Play CTAs paired with email capture",
        "Multi-language ready, English as default",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter((p) => p.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
