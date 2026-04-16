/**
 * English dictionary. This is the canonical shape.
 * Every other locale must satisfy `Dictionary` (= typeof en).
 * Strings here are UI chrome only. Body copy lives in content/*.ts.
 */
const en = {
  header: {
    since: "Since",
    studioTop: "AGE",
    studioTopRed: "NCY",
    studioBottom: "SOLO WEB STUDIO",
    homeAriaLabel: "home",
  },
  nav: {
    primaryAriaLabel: "Primary",
    work: "Work",
    services: "Services",
    journal: "Journal",
    contact: "Contact",
    blogEnHint: "(EN)",
  },
  languageSwitcher: {
    ariaLabel: "Language",
  },
  hero: {
    kicker: "Vol. I · The BekerDev Herald · A One-Person Web Studio",
    headlineLine1: "Websites",
    headlineLine1Cont: "web apps,",
    headlineShipped: "shipped",
    headlineLine2: "by one developer.",
    requestQuote: "Request a quote",
    seeRecentWork: "See recent work",
    shkoderAlt: "Skyline of Shkodër, Albania, home of BekerDev",
    founderAlt: "{founder}, founder of {site}",
    founderLabel: "Founder",
  },
  trustStrip: {
    trustedBy: "Trusted by",
    independentFounders: "+ independent founders",
  },
  work: {
    sectionLabel: "Section A · Features",
    heading: "Selected work.",
    seeArchive: "See full archive →",
    readCaseStudy: "Read case study →",
    live: "Live ↗",
    archiveKicker: "The Archive",
    archiveHeading: "Selected work, in full.",
    archiveSubheading:
      "Every story shipped by BekerDev. Click through for the full case study: problem, approach, outcome.",
    yourProjectNext: "Your project could be next.",
    no: "No.",
    breadcrumbHome: "Home",
    breadcrumbWork: "Work",
    stack: "Stack:",
    visitSite: "Visit site ↗",
    source: "Source ↗",
    problemKicker: "The problem",
    problemHeading: "What needed solving.",
    approachKicker: "The approach",
    approachHeading: "How it got built.",
    outcomeKicker: "The outcome",
    outcomeHeading: "What shipped.",
    projectFile: "Project file",
    clientLabel: "Client",
    roleLabel: "Role",
    yearLabel: "Year",
    highlightsLabel: "Highlights",
    previousStory: "← Previous story",
    nextStory: "Next story →",
    endOfArchive: "End of archive",
    wantOneForProduct: "Want one of these for your product?",
  },
  services: {
    sectionLabel: "Section B · Classifieds",
    heading: "What I build.",
    intro:
      "Four ways to work together, all built, shipped, and supported by one developer.",
    numberPrefix: "No. 0",
    leadStory: "Lead story",
    bestForLabel: "Best for:",
    requestQuote: "Request a quote",
  },
  process: {
    sectionLabel: "Section C · The Masthead",
    heading: "How an issue goes to press.",
    intro:
      "Every BekerDev project runs through the same four steps. Fast, transparent, and with no middle management between you and the code.",
  },
  about: {
    kicker: "Editor's letter",
    heading: "One developer. On purpose.",
    paragraph1:
      "I'm Ebubeker. I run BekerDev as a one-person studio, not because I couldn't put together a team, but because most of the problems founders bring me don't need one. They need a working product, shipped fast, by someone who actually cares whether it works.",
    paragraph2:
      "Before this, I built front-ends at {plan4better} and {niza}, and co-founded {subdivide}, a data-automation startup that got to top-5 at ACTI YOUTH in Albania. So \"solo\" doesn't mean \"new.\" It means no handoffs, no junior-dev surprises, and one person who owns the outcome.",
    paragraph3:
      "If that's the kind of partnership you want on your next build, that's the kind of partnership BekerDev sells.",
    editorLabel: "Editor",
    founderAlt: "{founder}, founder of {site}",
    startProject: "Start a project →",
    linkedin: "LinkedIn ↗",
  },
  testimonials: {
    sectionLabel: "Section D · Letters to the Editor",
    placeholderQuote: "Your testimonial goes here.",
    placeholderAttribution: "A real client, coming soon.",
    heading: "What clients say.",
  },
  faq: {
    sectionLabel: "Section E · Q&A Column",
    heading: "Frequently asked.",
  },
  finalCta: {
    kicker: "Stop press · Late edition",
    headlineLine1: "Got a project?",
    headlineLine2: "Let's get it shipped.",
    body:
      "Tell me what you're building, when you need it, and I'll come back with a real quote within a day.",
    requestQuote: "Request a quote →",
  },
  footer: {
    sectionsLabel: "Sections",
    servicesLabel: "Services",
    elsewhereLabel: "Elsewhere",
    thePaperLabel: "The paper",
    basedIn: "Based in {city}, {country}",
    rightsReserved: "All rights reserved.",
    shippedByOne: "Shipped by one developer.",
  },
  contact: {
    kicker: "Letters to the editor",
    heading: "Start a project.",
    subheading:
      "Tell me what you're building, roughly when you need it, and anything that'd help me scope it. I'll come back with honest advice and a real quote, usually within 24 hours.",
    orDirectly: "Or, directly",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    linkedinHandle: "in/ebubeker-rexha ↗",
    responseTimeLabel: "Response time",
    responseTimeValue: "Within a day, every time.",
    timezoneLabel: "Timezone",
    timezoneValue: "{tz}, async-friendly",
    breadcrumbContact: "Contact",
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Jane Founder",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service…",
      serviceNotSure: "Not sure yet",
      budgetLabel: "Budget (optional)",
      budgetPlaceholder: "e.g. €2k–5k",
      messageLabel: "What are you building?",
      messagePlaceholder:
        "A sentence or two on what you need and when. I'll come back with honest advice and a real quote.",
      submit: "Send message →",
      sending: "Sending…",
      successDefault: "Thanks! Message received. I'll be back to you within a day.",
      errorMissingFields: "Please fill in your name, email, and a short message.",
      errorInvalidEmail: "That email address doesn't look valid. Mind double-checking?",
      errorSendFailed:
        "Something went wrong sending your message. Please try again or email me directly.",
      errorNotWiredUp:
        "The contact form isn't wired up yet. Please email me directly at {email}.",
    },
  },
};

export type Dictionary = typeof en;
export default en;
