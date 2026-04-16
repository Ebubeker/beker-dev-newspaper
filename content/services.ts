import type { Locale } from "@/i18n/config";

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

const servicesByLocale: Record<Locale, Service[]> = {
  en: [
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
  ],
  sq: [
    {
      slug: "landing-page-in-a-day",
      title: "Landing Page brenda një dite",
      headline: "Landing Page · E dorëzuar për 24 orë",
      delivery: "1 ditë · fushë e fiksuar",
      pitch:
        "Një landing page e gatshme për prodhim, e dizajnuar, e ndërtuar dhe e publikuar brenda një dite të vetme pune.",
      inclusions: [
        "Një landing page responsive, e ndërtuar tërësisht në Next.js",
        "Bashkëpunim për tekstin dhe strukturën e seksioneve",
        "Bazat e SEO: meta-të dhëna, OG, sitemap, schema",
        "E publikuar në domenin tënd po atë ditë",
        "Një raund rishikimesh i përfshirë",
      ],
      bestFor:
        "Themelues që duhet të ndalojnë humbjen e hovit dhe të kenë diçka të publikuar këtë javë.",
      edge: "Dorëzim i njëjtë ditë. Pa frksionet e agjencive.",
    },
    {
      slug: "mvp-sprint",
      title: "MVP Sprint",
      headline: "MVP · Brenda një jave",
      delivery: "3–5 ditë · varet nga fusha",
      pitch:
        "Një produkt minimum i realizueshëm, i ndërtuar nga fillimi në fund brenda një sprinti të ngjeshur njëjavor.",
      inclusions: [
        "Telefonatë përkufizimi dhe një brief produkti i ngjeshur",
        "Ndërtim full-stack me Next.js + Supabase / Postgres",
        "Autentikim, bazë të dhënash dhe rrjedha kryesore të përdoruesit",
        "Panel i thjeshtë admin për ekipin tënd",
        "Publikim + dorëzim me dokumentacion",
      ],
      bestFor:
        "Themelues që duhet të kenë një produkt të vërtetë në duart e përdoruesve para takimit të ardhshëm me investitorë.",
      edge: "Një zhvillues, një javë, një MVP i dorëzuar.",
    },
    {
      slug: "web-app-development",
      title: "Zhvillim i Aplikacioneve Web",
      headline: "Aplikacione Web · Ndërtuar për të qëndruar",
      delivery: "I bazuar në projekt · çmim fiks ose sprint",
      pitch:
        "Aplikacione web më të gjata dhe më ambicioze, të ndërtuara me arkitekturë të cilësisë së prodhimit.",
      inclusions: [
        "Zbulim, përkufizim dhe dizajn teknik",
        "Ndërtim full-stack me React, Next.js, TypeScript",
        "Dizajn i bazës së të dhënave, API, integrime",
        "Optimizim performance dhe SEO të integruar",
        "Dorëzim ose mbështetje e vazhdueshme pas lançimit",
      ],
      bestFor:
        "Ekipe dhe themelues me një ide serioze produkti që kërkon një ndërtim serioz.",
    },
    {
      slug: "dev-partnership",
      title: "Partneritet Zhvillimi",
      headline: "Retainer · Zhvillim i vazhdueshëm",
      delivery: "Retainer mujor",
      pitch:
        "Një palë duarsh të besueshme për produktin tënd ekzistues, që mbulon funksionalitete, rregullime dhe infrastrukturë muaj pas muaji.",
      inclusions: [
        "Kapacitet zhvillimi i dedikuar javor",
        "Punë për funksionalitete, rregullime, refaktorim",
        "Përmirësime performance dhe SEO",
        "Komunikim asinkron në Slack / email",
        "Muaj pas muaji, anulim kurdoherë",
      ],
      bestFor:
        "Pronarë produktesh që kanë nevojë për një zhvillues në dispozicion pa kostot e një punësimi të plotë.",
    },
  ],
  de: [
    {
      slug: "landing-page-in-a-day",
      title: "Landing Page an einem Tag",
      headline: "Landing Page · In 24h ausgeliefert",
      delivery: "1 Tag · fester Scope",
      pitch:
        "Eine produktionsreife Landing Page, entworfen, gebaut und deployed an einem einzigen Arbeitstag.",
      inclusions: [
        "Eine responsive Landing Page, vollständig in Next.js gebaut",
        "Zusammenarbeit bei Texten und Abschnittsstruktur",
        "SEO-Basis: Metadaten, OG, Sitemap, Schema",
        "Am selben Tag auf Ihre Domain deployed",
        "Eine Revisionsrunde inklusive",
      ],
      bestFor:
        "Gründer, die keinen Schwung mehr verlieren wollen und diese Woche etwas Live bekommen müssen.",
      edge: "Lieferung am selben Tag. Keine Agentur-Reibung.",
    },
    {
      slug: "mvp-sprint",
      title: "MVP Sprint",
      headline: "MVP · In einer Woche",
      delivery: "3–5 Tage · scope-abhängig",
      pitch:
        "Ein Minimum Viable Product, in einem komprimierten Ein-Wochen-Sprint Ende-zu-Ende gebaut.",
      inclusions: [
        "Scoping-Call und schlankes Produkt-Brief",
        "Full-Stack-Build mit Next.js + Supabase / Postgres",
        "Auth, Datenbank und zentrale User-Flows",
        "Einfaches Admin-Surface für Ihr Team",
        "Deploy + Übergabe mit Dokumentation",
      ],
      bestFor:
        "Gründer, die vor dem nächsten Investorentreffen ein echtes Produkt in Nutzerhand brauchen.",
      edge: "Ein Entwickler, eine Woche, ein ausgeliefertes MVP.",
    },
    {
      slug: "web-app-development",
      title: "Web-App-Entwicklung",
      headline: "Web-Apps · Gebaut, um zu bleiben",
      delivery: "Projektbasiert · fester oder Sprint-Preis",
      pitch:
        "Längere, ambitioniertere Web-Anwendungen, gebaut mit Architektur auf Produktionsniveau.",
      inclusions: [
        "Discovery, Scoping und technisches Design",
        "Full-Stack-Build mit React, Next.js, TypeScript",
        "Datenbankdesign, APIs, Integrationen",
        "Performance-Tuning und SEO von Anfang an",
        "Übergabe oder laufender Support nach dem Launch",
      ],
      bestFor:
        "Teams und Gründer mit einer ernsthaften Produktidee, die einen ernsthaften Build braucht.",
    },
    {
      slug: "dev-partnership",
      title: "Dev-Partnerschaft",
      headline: "Retainer · Laufende Entwicklung",
      delivery: "Monatlicher Retainer",
      pitch:
        "Ein zuverlässiges Paar Hände für Ihr bestehendes Produkt, das Monat für Monat Features, Fixes und Infrastruktur abdeckt.",
      inclusions: [
        "Dediziertes wöchentliches Entwicklungs-Kontingent",
        "Feature-Arbeit, Bugfixes, Refactors",
        "Performance- und SEO-Verbesserungen",
        "Asynchrone Kommunikation über Slack / E-Mail",
        "Monatsweise, jederzeit kündbar",
      ],
      bestFor:
        "Product Owner, die einen Entwickler auf Abruf brauchen, ohne den Overhead einer Vollzeitstelle.",
    },
  ],
  fr: [
    {
      slug: "landing-page-in-a-day",
      title: "Landing Page en un jour",
      headline: "Landing Page · Livrée en 24 h",
      delivery: "1 jour · périmètre fixe",
      pitch:
        "Une landing page prête pour la production, conçue, construite et déployée en une seule journée de travail.",
      inclusions: [
        "Une landing page responsive, entièrement construite en Next.js",
        "Collaboration sur le texte et la structure des sections",
        "Base SEO : métadonnées, OG, sitemap, schema",
        "Déployée sur votre domaine le jour même",
        "Une série de retouches incluse",
      ],
      bestFor:
        "Les fondateurs qui doivent arrêter de perdre leur élan et mettre quelque chose en ligne cette semaine.",
      edge: "Livraison le jour même. Aucun frottement d'agence.",
    },
    {
      slug: "mvp-sprint",
      title: "MVP Sprint",
      headline: "MVP · En une semaine",
      delivery: "3–5 jours · selon périmètre",
      pitch:
        "Un produit minimum viable, construit de bout en bout dans un sprint compressé d'une semaine.",
      inclusions: [
        "Appel de cadrage et brief produit resserré",
        "Build full-stack avec Next.js + Supabase / Postgres",
        "Auth, base de données et parcours utilisateur principaux",
        "Interface d'administration simple pour votre équipe",
        "Déploiement + passation avec documentation",
      ],
      bestFor:
        "Les fondateurs qui ont besoin d'un vrai produit entre les mains d'utilisateurs avant leur prochain rendez-vous investisseurs.",
      edge: "Un développeur, une semaine, un MVP livré.",
    },
    {
      slug: "web-app-development",
      title: "Développement d'applications web",
      headline: "Applis web · Conçues pour durer",
      delivery: "Au projet · prix fixe ou sprint",
      pitch:
        "Des applications web plus longues et plus ambitieuses, construites avec une architecture de qualité production.",
      inclusions: [
        "Découverte, cadrage et conception technique",
        "Build full-stack avec React, Next.js, TypeScript",
        "Conception de base de données, API, intégrations",
        "Optimisation des performances et SEO intégré",
        "Passation ou accompagnement continu après le lancement",
      ],
      bestFor:
        "Équipes et fondateurs ayant une idée de produit sérieuse qui mérite un vrai build.",
    },
    {
      slug: "dev-partnership",
      title: "Partenariat Dev",
      headline: "Forfait · Dev continu",
      delivery: "Forfait mensuel",
      pitch:
        "Une paire de mains fiable pour votre produit existant, qui couvre features, correctifs et infrastructure mois après mois.",
      inclusions: [
        "Capacité de développement dédiée chaque semaine",
        "Développement de features, corrections, refactors",
        "Améliorations de performance et SEO",
        "Communication asynchrone sur Slack / e-mail",
        "Au mois, résiliable à tout moment",
      ],
      bestFor:
        "Product owners qui ont besoin d'un développeur sous la main sans le coût d'une embauche.",
    },
  ],
};

export function getServices(locale: Locale): Service[] {
  return servicesByLocale[locale];
}

export function getServiceBySlug(
  slug: string,
  locale: Locale,
): Service | undefined {
  return servicesByLocale[locale].find((s) => s.slug === slug);
}
