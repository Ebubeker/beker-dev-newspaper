/**
 * Single source of truth for site-wide metadata and brand facts.
 * Edit values here instead of hunting them down across components.
 */
export const site = {
  name: "BekerDev",
  brand: "BEKERDEV",
  tagline:
    "Your landing page in a day. Your MVP in a week. Built by one developer. No team, no delays.",
  shortTagline: "Websites and web apps, shipped by one developer.",
  description:
    "BekerDev is a one-person web and app development studio. Landing pages in a day, MVPs in a week, and long-form web apps built end-to-end in modern React, Next.js and TypeScript.",
  url: "https://beker.dev",
  ogImage: "/assets/home.png",
  since: 2022,
  locale: "en_US",
  location: {
    city: "Shkodër",
    country: "Albania",
    countryCode: "AL",
    timezone: "Europe/Tirane",
  },
  founder: {
    name: "Ebubeker Rexha",
    role: "Founder & Lead Developer",
  },
  contact: {
    email: "hello@beker.dev",
    inquiries: "/contact",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ebubeker-rexha-3528bb1a2/",
    github: "https://github.com/Ebubeker",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
