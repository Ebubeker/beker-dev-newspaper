import type { StaticImageData } from "next/image";

import AtyImage from "@/assets/images/aty.png";
import EjaImage from "@/assets/images/eja.png";
import GjeliImage from "@/assets/images/gjeli-i-pazarit.png";
import JarnaImage from "@/assets/images/jarna.png";
import NizaImage from "@/assets/images/niza.png";
import TrattoriaImage from "@/assets/images/trattoria-venezia.png";
import type { Locale } from "@/i18n/config";

/**
 * A project has two halves:
 * 1. Locale-invariant base data (slug, images, URLs, year, stack, featured).
 * 2. Locale-specific copy (title, kicker, summary, client, role, alt, body).
 *
 * At runtime we merge the two for the requested locale via `getProjects(locale)`.
 */

type ProjectBase = {
  slug: string;
  year: string;
  stack: string[];
  image: StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

type ProjectContent = {
  title: string;
  kicker: string;
  summary: string;
  client: string;
  role: string;
  alt: string;
  body: {
    problem: string;
    approach: string;
    outcome: string;
    highlights: string[];
  };
};

export type Project = ProjectBase & ProjectContent;

const projectBases: ProjectBase[] = [
  {
    slug: "jarna",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: JarnaImage,
    liveUrl: "https://n-gamma-blue.vercel.app/",
    featured: true,
  },
  {
    slug: "trattoria-venezia",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: TrattoriaImage,
    liveUrl: "https://trattoria-venezia.vercel.app/",
    featured: true,
  },
  {
    slug: "eja",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: EjaImage,
    liveUrl: "https://eja-five.vercel.app/",
    featured: true,
  },
  {
    slug: "aty",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: AtyImage,
    liveUrl: "https://aty-tau.vercel.app/",
    featured: true,
  },
  {
    slug: "gjeli-i-pazarit",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: GjeliImage,
    liveUrl: "https://gjelipazarit.vercel.app/",
    featured: true,
  },
  {
    slug: "niza-global",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    image: NizaImage,
    liveUrl: "https://niza.io/en",
    featured: true,
  },
];

type ProjectContentMap = Record<string, ProjectContent>;

const projectContent: Record<Locale, ProjectContentMap> = {
  en: {
    jarna: {
      title: "Jarna: traditional restaurant",
      kicker: "Hospitality · Landing in a day",
      summary:
        "A warm, editorial landing page for a traditional Albanian restaurant in Tiranë, built, copywritten, and deployed in a single working day.",
      client: "Jarna Traditional Restaurant",
      role: "Solo design and build",
      alt: "Jarna traditional restaurant landing page",
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
    "trattoria-venezia": {
      title: "Trattoria Venezia: Italian seafood",
      kicker: "Hospitality · Landing in a day",
      summary:
        "A cinematic one-page site for an Italian seafood restaurant in Shkodër, designed, built, and launched in a single day.",
      client: "Trattoria Venezia",
      role: "Solo design and build",
      alt: "Trattoria Venezia Italian restaurant landing page",
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
    eja: {
      title: "Eja: first Italian in Tirana",
      kicker: "Hospitality · Landing in a day",
      summary:
        "A green-and-gold landing page for Eja Restaurant, billed as the first Italian restaurant in Tirana, shipped end-to-end in a day.",
      client: "Eja Restaurant",
      role: "Solo design and build",
      alt: "Eja Restaurant landing page",
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
    aty: {
      title: "ATY: rooftop, art, appetite",
      kicker: "Hospitality · Landing in a day",
      summary:
        "A dusky, gallery-inspired landing page for ATY Restaurant & Gallery, the rooftop next to the Pyramid of Tirana. Built in a day.",
      client: "ATY Restaurant & Gallery",
      role: "Solo design and build",
      alt: "ATY Restaurant & Gallery rooftop landing page",
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
    "gjeli-i-pazarit": {
      title: "Gjeli i Pazarit: Albanian tavern",
      kicker: "Hospitality · Landing in a day",
      summary:
        "A traditional Albanian tavern in Tirana needed a landing page that felt like the room. Built, styled, and deployed in a day.",
      client: "Gjeli i Pazarit",
      role: "Solo design and build",
      alt: "Gjeli i Pazarit Albanian tavern landing page",
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
    "niza-global": {
      title: "Niza Global: fintech landing",
      kicker: "Fintech · Landing in a day",
      summary:
        "A single-day landing refresh for Niza Global, a crypto platform with multi-language reach, tightening the conversion path above the fold.",
      client: "Niza Global",
      role: "Solo design and build",
      alt: "Niza Global crypto platform landing page",
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
  },
  sq: {
    jarna: {
      title: "Jarna: restorant tradicional",
      kicker: "Hoteleri · Landing brenda një dite",
      summary:
        "Një landing page e ngrohtë dhe editoriale për një restorant tradicional shqiptar në Tiranë, e ndërtuar, e shkruar dhe e publikuar brenda një dite të vetme pune.",
      client: "Restoranti Tradicional Jarna",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e restorantit tradicional Jarna",
      body: {
        problem:
          "Jarna kishte nevojë për një landing page që të mbante peshën e një kuzhine tradicionale shqiptare në web: të ngrohtë, të rrënjosur, të drejtuar nga vlerësimet dhe gati për rezervime që nga dita e parë.",
        approach:
          "E dizajnova dhe e ndërtova faqen brenda një dite pune. Një faqe e vetme me scroll të gjatë me hero, pjesë të zgjedhura të menusë, rreth nesh dhe kontakt, e lidhur me rezervime në WhatsApp dhe e ankoruar rreth një vlerësimi 4.9 në Google si provë sociale.",
        outcome:
          "E dorëzuar në prodhim po atë ditë. Kuzhina mori një faqe që ndihet si salla: e qetë, tradicionale dhe e sigurt, me një rrjedhë rezervimi që i dërgon porositë drejt e në WhatsApp.",
        highlights: [
          "Hero editorial me një citim vlerësimi mbi palosjen",
          "Rrjedhë rezervimi në WhatsApp, pa formulare të ndërlikuara",
          "Strukturë tekstesh e gatshme për dygjuhësh",
          "E publikuar në Vercel po atë ditë që u dizajnua",
        ],
      },
    },
    "trattoria-venezia": {
      title: "Trattoria Venezia: peshk italian",
      kicker: "Hoteleri · Landing brenda një dite",
      summary:
        "Një faqe e vetme me ndjesi kinematografike për një restorant italian peshku në Shkodër, e dizajnuar, e ndërtuar dhe e lançuar brenda një dite.",
      client: "Trattoria Venezia",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e restorantit italian Trattoria Venezia",
      body: {
        problem:
          "Trattoria Venezia kishte nevojë për një destinacion të vetëm dhe të bukur në web që ta shiste sallën para menusë: kuzhinë italiane, peshk i freskët, mjedisi i Shkodrës, gjithçka në një faqe.",
        approach:
          "E ndërtova si një landing klasike kinematografike: hero me pjatë full-bleed, navigim i shpejtë drejt menusë dhe rezervimeve, dhe një seksion kompakt rreth nesh. Një ditë, një scroll, një CTA e qartë.",
        outcome:
          "U publikua po atë pasdite në Vercel. I jep restorantit një prezencë të besueshme në web me hapësirë për t'u zgjeruar më vonë në shumë gjuhë dhe porositje online.",
        highlights: [
          "Hero kinematografik full-bleed me fotografi të restorantit",
          "Menu, rezervime dhe kontakt në një scroll të vetëm",
          "Layout mobile-first i rregulluar për zbulimin e rastësishëm",
          "Gati për zgjerim në shqip dhe italisht",
        ],
      },
    },
    eja: {
      title: "Eja: i pari italian në Tiranë",
      kicker: "Hoteleri · Landing brenda një dite",
      summary:
        "Një landing page e gjelbër dhe e artë për Restorant Eja, i prezantuar si restoranti i parë italian në Tiranë, i dorëzuar nga fillimi në fund brenda një dite.",
      client: "Restorant Eja",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e Restorant Eja",
      body: {
        problem:
          "Eja donte një prezencë web që ta bënte makaronën heroinën. Briefi ishte i thjeshtë: një faqe, një premtim, një rrjedhë rezervimi, dhe duhej të ndihej si të hyje në sallë.",
        approach:
          "U mbështeta te fotografia ekzistuese e brendshme dhe ndërtova një landing page rreth një pretendimi të vetëm: Makaronat më të mira në qytet. Brumi i bërë me dorë. Ngrohtësi mesdhetare. Butonat e rezervimit dhe porosisë mbi palosjen, asgjë më shumë.",
        outcome:
          "E dorëzuar brenda një dite. Faqja i jep Eja-s një derë të përparme online të pastër dhe të sigurt, me atmosferën e restorantit që e bën pjesën më të madhe të shitjes.",
        highlights: [
          "Hero me një pretendim të vetëm dhe fotografi të brendshme",
          "CTA për rezervime dhe porositje në Wolt mbi palosjen",
          "Seksione ditari dhe menuje të gatshme për përmbajtje të ardhshme",
          "E publikuar në Vercel po atë ditë",
        ],
      },
    },
    aty: {
      title: "ATY: tarracë, art, oreks",
      kicker: "Hoteleri · Landing brenda një dite",
      summary:
        "Një landing page me atmosferë muzgu dhe frymë galerie për ATY Restaurant & Gallery, tarraca pranë Piramidës së Tiranës. Ndërtuar brenda një dite.",
      client: "ATY Restaurant & Gallery",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e tarracës ATY Restaurant & Gallery",
      body: {
        problem:
          "ATY është një tarracë që luan tre role njëkohësisht: restorant, galeri dhe dhomë muzike live. Faqja duhej t'i mbante të treja pa u dukur e mbingarkuar.",
        approach:
          "Shkrova një rresht të vetëm hero që kap të tre personat njëkohësisht, dhe ndërtova një faqe të gjatë rreth tij me menu, galeri dhe rezervime. Paletë e qetë, e orientuar nga muzgu, për t'u përshtatur me atmosferën e tarracës.",
        outcome:
          "E dizajnuar dhe e dorëzuar brenda një dite. I jep ATY-së një fjali që salla mund ta mbajë, dhe një funnel rezervimi që trajton njësoj mëngjesin dhe natën e vonë.",
        highlights: [
          "Pozicionim hero në një rresht (ku arti takon oreksin)",
          "Galeri, menu dhe rezervime në një scroll të vetëm",
          "Paletë e orientuar nga muzgu për të ndërthurur atmosferën e tarracës",
          "Publikim në Vercel po atë ditë",
        ],
      },
    },
    "gjeli-i-pazarit": {
      title: "Gjeli i Pazarit: tavernë shqiptare",
      kicker: "Hoteleri · Landing brenda një dite",
      summary:
        "Një tavernë tradicionale shqiptare në Tiranë kishte nevojë për një landing page që të ndihej si salla. Ndërtuar, stiluar dhe publikuar brenda një dite.",
      client: "Gjeli i Pazarit",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e tavernës shqiptare Gjeli i Pazarit",
      body: {
        problem:
          "Gjeli i Pazarit donte një landing page që t'i përshtatej tavernës: e ngrohtë, e ndershme dhe qartësisht shqiptare, me menunë dhe rezervimet vetëm një prekje larg.",
        approach:
          "Ndërtova një layout me ndjenjë tradicionale rreth një pjate kryesore si hero, vlerësim dhe orare si shirita statistikash, dhe një navigim që vë menunë në plan të parë. Pa seksione mbushëse, pa fotografi gjenerike.",
        outcome:
          "E dorëzuar po atë ditë. Taverna ka një shtëpi web që mban karakterin e saj, me një rrjedhë rezervimi që funksionon nga telefoni sa nga laptopi.",
        highlights: [
          "Fotografi hero e pjatës kryesore",
          "Vlerësim, partnerë dhe orare si shirita statistikash",
          "Navigim menu-first me CTA për rezervime",
          "E publikuar në Vercel ditën që u dizajnua",
        ],
      },
    },
    "niza-global": {
      title: "Niza Global: landing fintech",
      kicker: "Fintech · Landing brenda një dite",
      summary:
        "Një rifreskim njëditor i landing-ut për Niza Global, një platformë kripto me shtrirje shumëgjuhësore, që shtrëngon rrugën e konvertimit mbi palosjen.",
      client: "Niza Global",
      role: "Dizajn dhe ndërtim solo",
      alt: "Landing page e platformës kripto Niza Global",
      body: {
        problem:
          "Niza kishte nevojë që landing-u i saj të shprehte një premtim të vetëm dhe agresiv, Më shumë fitim, më pak komisione, pa e varrosur atë nën pjesën tjetër të produktit.",
        approach:
          "E rindërtova seksionin hero brenda një dite: titull të madh dhe të guximshëm, hook për zero komisione, statistika besimi poshtë, dhe një CTA primare të vetme. Ndërrimi i gjuhës dhe linqet e shkarkimit u mbajtën afër, çdo gjë tjetër u shty poshtë në faqe.",
        outcome:
          "Një pjesë mbi palosjen më e shtrënguar që e komunikon vlerën me një shikim të vetëm, e lokalizuar për anglisht, ndërsa pjesa tjetër e faqes ruan sipërfaqen e saj shumëgjuhësore.",
        highlights: [
          "Hero me një pretendim të vetëm (Më shumë fitim, më pak komisione)",
          "Statistika besimi (vëllim tregtimi, përdorues, pjesë tregu) nën palosje",
          "CTA për App Store dhe Google Play të çiftuara me kapje email-i",
          "Gati për shumë gjuhë, anglishtja si parazgjedhje",
        ],
      },
    },
  },
  de: {
    jarna: {
      title: "Jarna: traditionelles Restaurant",
      kicker: "Gastronomie · Landing an einem Tag",
      summary:
        "Eine warme, editoriale Landing Page für ein traditionelles albanisches Restaurant in Tirana, gebaut, getextet und deployed an einem einzigen Arbeitstag.",
      client: "Traditionelles Restaurant Jarna",
      role: "Solo-Design und -Build",
      alt: "Landing Page des traditionellen Restaurants Jarna",
      body: {
        problem:
          "Jarna brauchte eine Landing Page, die das Gewicht einer traditionellen albanischen Küche im Web tragen konnte: warm, verwurzelt, bewertungsgetrieben und ab dem ersten Tag bereit, Reservierungen entgegenzunehmen.",
        approach:
          "Die Seite wurde in einem Arbeitstag entworfen und gebaut. Eine einzige Long-Scroll-Seite mit Hero, Menü-Highlights, Über-Bereich und Kontakt, an WhatsApp-Reservierungen angebunden und um eine 4,9-Google-Bewertung als Social Proof verankert.",
        outcome:
          "Noch am selben Tag in Produktion ausgeliefert. Die Küche bekam eine Seite, die sich wie der Raum anfühlt: ruhig, traditionell und selbstbewusst, mit einem Reservierungsfluss, der Buchungen direkt an WhatsApp übergibt.",
        highlights: [
          "Editorialer Hero mit einem Bewertungs-Zitat über dem Fold",
          "WhatsApp-Reservierungsfluss, kein Formular-Aufwand",
          "Zweisprachig-fähige Textstruktur",
          "Am selben Tag auf Vercel deployed",
        ],
      },
    },
    "trattoria-venezia": {
      title: "Trattoria Venezia: italienische Meeresküche",
      kicker: "Gastronomie · Landing an einem Tag",
      summary:
        "Eine cineastische One-Pager-Seite für ein italienisches Fischrestaurant in Shkodër, entworfen, gebaut und an einem einzigen Tag gelauncht.",
      client: "Trattoria Venezia",
      role: "Solo-Design und -Build",
      alt: "Landing Page des italienischen Restaurants Trattoria Venezia",
      body: {
        problem:
          "Trattoria Venezia brauchte ein einziges, schönes Web-Ziel, das den Raum vor der Speisekarte verkauft: italienische Küche, frischer Fisch, Kulisse in Shkodër, alles auf einer Seite.",
        approach:
          "Klassisch cineastisch gebaut: Full-Bleed-Hero-Teller, schnelle Navigation zu Menü und Reservierungen und ein kompakter Über-Bereich. Ein Tag, ein Scroll, ein klarer CTA.",
        outcome:
          "Noch am selben Nachmittag auf Vercel live gegangen. Gibt dem Restaurant eine glaubwürdige Web-Präsenz mit Raum, später in Mehrsprachigkeit und Online-Bestellung auszubauen.",
        highlights: [
          "Full-Bleed cineastischer Hero mit Restaurant-Fotografie",
          "Menü, Reservierungen und Kontakt in einem Scroll",
          "Mobile-First-Layout, abgestimmt auf Walk-in-Discovery",
          "Bereit für albanische und italienische Sprachversionen",
        ],
      },
    },
    eja: {
      title: "Eja: das erste Italienische in Tirana",
      kicker: "Gastronomie · Landing an einem Tag",
      summary:
        "Eine grün-goldene Landing Page für das Restaurant Eja, das als erstes italienisches Restaurant in Tirana auftritt, Ende-zu-Ende an einem Tag ausgeliefert.",
      client: "Restaurant Eja",
      role: "Solo-Design und -Build",
      alt: "Landing Page des Restaurants Eja",
      body: {
        problem:
          "Eja wollte eine Web-Präsenz, die die Pasta zum Helden macht. Der Brief war schlicht: eine Seite, ein Versprechen, ein Buchungsfluss, und es sollte sich anfühlen, als würde man den Raum betreten.",
        approach:
          "Ich habe mich auf die vorhandene Innenfotografie gestützt und eine Landing Page um eine einzige Aussage gebaut: Die beste Pasta der Stadt. Handgemachter Teig. Mediterrane Wärme. Reservierungs- und Bestell-Buttons über dem Fold, nichts darüber hinaus.",
        outcome:
          "In einem Tag ausgeliefert. Die Seite gibt Eja eine saubere, selbstbewusste digitale Eingangstür, wobei die Atmosphäre des Restaurants den Großteil des Verkaufens übernimmt.",
        highlights: [
          "Single-Claim-Hero mit Innenfotografie",
          "Reservierung und Wolt-Bestell-CTAs über dem Fold",
          "Journal- und Menü-Bereiche, bereit für künftige Inhalte",
          "Am selben Tag auf Vercel deployed",
        ],
      },
    },
    aty: {
      title: "ATY: Dachterrasse, Kunst, Appetit",
      kicker: "Gastronomie · Landing an einem Tag",
      summary:
        "Eine dämmerige, galerie-inspirierte Landing Page für ATY Restaurant & Gallery, die Dachterrasse neben der Pyramide von Tirana. An einem Tag gebaut.",
      client: "ATY Restaurant & Gallery",
      role: "Solo-Design und -Build",
      alt: "Landing Page der ATY Restaurant & Gallery Dachterrasse",
      body: {
        problem:
          "ATY ist eine Dachterrasse, die drei Rollen gleichzeitig spielt: Restaurant, Galerie und Live-Musik-Raum. Die Seite musste alle drei tragen, ohne überladen zu wirken.",
        approach:
          "Ich habe eine einzige Hero-Zeile geschrieben, die alle drei Personas auf einmal einfängt, und eine lange Seite um sie herum mit Menü, Galerie und Buchung gebaut. Zurückhaltende, dämmerungsorientierte Palette, abgestimmt auf die Stimmung der Dachterrasse.",
        outcome:
          "An einem Tag entworfen und ausgeliefert. Gibt ATY einen Satz, an dem sich der Raum festhalten kann, und einen Buchungsfunnel, der Frühstück und späte Nacht gleich behandelt.",
        highlights: [
          "Einzeilige Hero-Positionierung (wo Kunst auf Appetit trifft)",
          "Galerie, Menü und Reservierungen in einem Scroll",
          "Dämmerungsorientierte Palette, abgestimmt auf die Dachterrasse",
          "Same-Day-Deploy auf Vercel",
        ],
      },
    },
    "gjeli-i-pazarit": {
      title: "Gjeli i Pazarit: albanische Taverne",
      kicker: "Gastronomie · Landing an einem Tag",
      summary:
        "Eine traditionelle albanische Taverne in Tirana brauchte eine Landing Page, die sich wie der Raum anfühlt. An einem Tag gebaut, gestaltet und deployed.",
      client: "Gjeli i Pazarit",
      role: "Solo-Design und -Build",
      alt: "Landing Page der albanischen Taverne Gjeli i Pazarit",
      body: {
        problem:
          "Gjeli i Pazarit wollte eine Landing Page, die zur Taverne passt: warm, ehrlich und klar albanisch, mit Menü und Reservierungen einen einzigen Tap entfernt.",
        approach:
          "Ich habe ein traditionell wirkendes Layout um einen Signature-Hero-Teller gebaut, mit Bewertung und Öffnungszeiten als Statistikleisten und einer menü-zuerst-Navigation. Keine Füllabschnitte, kein generisches Stockmaterial.",
        outcome:
          "Am selben Tag ausgeliefert. Die Taverne bekommt ein Web-Zuhause, das ihren Charakter trägt, mit einem Reservierungsfluss, der vom Handy genauso funktioniert wie vom Laptop.",
        highlights: [
          "Signature-Dish-Hero-Fotografie",
          "Bewertung, Partner und Öffnungszeiten als Statistikleisten",
          "Menü-zuerst-Navigation mit Reservierungs-CTA",
          "Am selben Tag auf Vercel deployed",
        ],
      },
    },
    "niza-global": {
      title: "Niza Global: Fintech-Landing",
      kicker: "Fintech · Landing an einem Tag",
      summary:
        "Ein eintägiger Landing-Refresh für Niza Global, eine Krypto-Plattform mit mehrsprachiger Reichweite, der den Conversion-Pfad über dem Fold strafft.",
      client: "Niza Global",
      role: "Solo-Design und -Build",
      alt: "Landing Page der Krypto-Plattform Niza Global",
      body: {
        problem:
          "Niza brauchte, dass seine Landing ein einziges, aggressives Versprechen formuliert, Mehr Gewinn, weniger Gebühren, ohne es unter dem Rest des Produkts zu vergraben.",
        approach:
          "Den Hero-Bereich in einem Tag neu gebaut: große, mutige Headline, Zero-Fee-Hook, Trust-Stats darunter und ein einziger primärer CTA. Sprachumschalter und Download-Links bleiben nah dran, alles andere wird nach unten verschoben.",
        outcome:
          "Ein engerer Above-the-Fold-Bereich, der den Wert auf einen Blick kommuniziert, lokalisiert für Englisch, während der Rest der Seite seine mehrsprachige Oberfläche behält.",
        highlights: [
          "Single-Claim-Hero (Mehr Gewinn, weniger Gebühren)",
          "Trust-Stats (Handelsvolumen, Nutzer, Marktanteil) unter dem Fold",
          "App-Store- und Google-Play-CTAs gepaart mit E-Mail-Capture",
          "Mehrsprachig bereit, Englisch als Standard",
        ],
      },
    },
  },
  fr: {
    jarna: {
      title: "Jarna : restaurant traditionnel",
      kicker: "Hôtellerie · Landing en un jour",
      summary:
        "Une landing page chaleureuse et éditoriale pour un restaurant traditionnel albanais à Tirana, conçue, rédigée et déployée en une seule journée de travail.",
      client: "Restaurant traditionnel Jarna",
      role: "Design et build en solo",
      alt: "Landing page du restaurant traditionnel Jarna",
      body: {
        problem:
          "Jarna avait besoin d'une landing page capable de porter le poids d'une cuisine traditionnelle albanaise sur le web : chaleureuse, enracinée, portée par les avis et prête à prendre des réservations dès le premier jour.",
        approach:
          "Conçue et construite en une journée de travail. Une seule page en long scroll avec hero, temps forts de la carte, à-propos et contact, reliée aux réservations WhatsApp et ancrée sur une note Google de 4,9 comme preuve sociale.",
        outcome:
          "Mise en production le jour même. La cuisine a obtenu un site qui ressemble à la salle : calme, traditionnel et assuré, avec un parcours de réservation qui envoie les demandes directement dans WhatsApp.",
        highlights: [
          "Hero éditorial avec une citation d'avis au-dessus de la ligne de flottaison",
          "Parcours de réservation via WhatsApp, sans plomberie de formulaire",
          "Structure de texte prête pour le bilingue",
          "Déployée sur Vercel le jour même de sa conception",
        ],
      },
    },
    "trattoria-venezia": {
      title: "Trattoria Venezia : cuisine italienne de la mer",
      kicker: "Hôtellerie · Landing en un jour",
      summary:
        "Un site one-pager cinématographique pour un restaurant italien de fruits de mer à Shkodër, conçu, construit et lancé en une seule journée.",
      client: "Trattoria Venezia",
      role: "Design et build en solo",
      alt: "Landing page du restaurant italien Trattoria Venezia",
      body: {
        problem:
          "Trattoria Venezia avait besoin d'une destination web unique et belle qui vende la salle avant la carte : cuisine italienne, poisson frais, cadre de Shkodër, le tout sur une seule page.",
        approach:
          "Construite comme une landing cinématographique classique : assiette hero en pleine page, navigation rapide vers la carte et les réservations, et une section à-propos compacte. Un jour, un scroll, un CTA clair.",
        outcome:
          "Mise en ligne l'après-midi même sur Vercel. Offre au restaurant une présence web crédible, avec de la place pour s'étendre plus tard au multi-langue et à la commande en ligne.",
        highlights: [
          "Hero cinématographique pleine page avec photographie du restaurant",
          "Carte, réservations et contact sur un seul scroll",
          "Mise en page mobile-first pensée pour la découverte de passage",
          "Prête à s'étendre en albanais et en italien",
        ],
      },
    },
    eja: {
      title: "Eja : le premier italien de Tirana",
      kicker: "Hôtellerie · Landing en un jour",
      summary:
        "Une landing page verte et or pour le Restaurant Eja, présenté comme le premier restaurant italien de Tirana, livrée de bout en bout en une journée.",
      client: "Restaurant Eja",
      role: "Design et build en solo",
      alt: "Landing page du Restaurant Eja",
      body: {
        problem:
          "Eja voulait une présence web qui fasse des pâtes le personnage principal. Le brief était simple : une page, une promesse, un parcours de réservation, et ça devait donner l'impression d'entrer dans la salle.",
        approach:
          "Je me suis appuyé sur les photos d'intérieur existantes et j'ai construit une landing autour d'une seule affirmation : Les meilleures pâtes de la ville. Pâte faite main. Chaleur méditerranéenne. Boutons de réservation et de commande au-dessus de la ligne de flottaison, rien de plus.",
        outcome:
          "Livrée en une journée. Le site offre à Eja une façade en ligne nette et assurée, l'atmosphère du restaurant faisant la plus grande partie de la vente.",
        highlights: [
          "Hero à promesse unique avec photographie d'intérieur",
          "CTA réservation et commande Wolt au-dessus de la ligne de flottaison",
          "Sections journal et carte prêtes à accueillir du contenu futur",
          "Déployée sur Vercel le jour même",
        ],
      },
    },
    aty: {
      title: "ATY : toit-terrasse, art, appétit",
      kicker: "Hôtellerie · Landing en un jour",
      summary:
        "Une landing page crépusculaire inspirée d'une galerie pour ATY Restaurant & Gallery, le toit-terrasse à côté de la Pyramide de Tirana. Construite en un jour.",
      client: "ATY Restaurant & Gallery",
      role: "Design et build en solo",
      alt: "Landing page du toit-terrasse ATY Restaurant & Gallery",
      body: {
        problem:
          "ATY est un toit-terrasse qui joue trois rôles à la fois : restaurant, galerie et salle de concert. Le site devait porter les trois sans paraître surchargé.",
        approach:
          "J'ai rédigé une seule ligne de hero qui accroche les trois personas en même temps, et j'ai construit une longue page autour d'elle avec carte, galerie et réservations. Palette tamisée, tournée vers le crépuscule, pour coller à l'ambiance du toit-terrasse.",
        outcome:
          "Conçue et livrée en un jour. Donne à ATY une phrase à laquelle la salle peut se raccrocher, et un tunnel de réservation qui traite le petit-déjeuner et la fin de soirée à égalité.",
        highlights: [
          "Positionnement hero en une ligne (là où l'art rencontre l'appétit)",
          "Galerie, carte et réservations sur un seul scroll",
          "Palette tournée vers le crépuscule, calée sur l'ambiance du toit",
          "Déploiement Vercel le jour même",
        ],
      },
    },
    "gjeli-i-pazarit": {
      title: "Gjeli i Pazarit : taverne albanaise",
      kicker: "Hôtellerie · Landing en un jour",
      summary:
        "Une taverne albanaise traditionnelle à Tirana avait besoin d'une landing page qui ressemble à la salle. Construite, stylée et déployée en un jour.",
      client: "Gjeli i Pazarit",
      role: "Design et build en solo",
      alt: "Landing page de la taverne albanaise Gjeli i Pazarit",
      body: {
        problem:
          "Gjeli i Pazarit voulait une landing page qui corresponde à la taverne : chaleureuse, honnête et clairement albanaise, avec la carte et les réservations à portée de doigt.",
        approach:
          "J'ai construit une mise en page à la sensation traditionnelle autour d'un plat signature en hero, la note et les horaires en barres de stats, et une navigation orientée menu. Aucune section de remplissage, aucune photo stock générique.",
        outcome:
          "Livrée le jour même. La taverne obtient une maison web qui porte son caractère, avec un parcours de réservation qui fonctionne aussi bien depuis un téléphone que depuis un laptop.",
        highlights: [
          "Photographie hero du plat signature",
          "Note, partenaires et horaires en barres de stats",
          "Navigation menu-first avec CTA de réservation",
          "Déployée sur Vercel le jour même de sa conception",
        ],
      },
    },
    "niza-global": {
      title: "Niza Global : landing fintech",
      kicker: "Fintech · Landing en un jour",
      summary:
        "Un refresh de landing en une journée pour Niza Global, une plateforme crypto à portée multilingue, resserrant le parcours de conversion au-dessus de la ligne de flottaison.",
      client: "Niza Global",
      role: "Design et build en solo",
      alt: "Landing page de la plateforme crypto Niza Global",
      body: {
        problem:
          "Niza avait besoin que sa landing affirme une promesse unique et agressive, Plus de profits, moins de frais, sans l'enterrer sous le reste du produit.",
        approach:
          "J'ai reconstruit la section hero en une journée : gros titre audacieux, accroche zéro frais, stats de confiance en dessous, et un seul CTA principal. Sélecteur de langue et liens de téléchargement gardés à proximité, tout le reste repoussé plus bas.",
        outcome:
          "Un above-the-fold plus resserré qui communique la valeur d'un seul coup d'œil, localisé en anglais pendant que le reste du site conserve son interface multilingue.",
        highlights: [
          "Hero à promesse unique (Plus de profits, moins de frais)",
          "Stats de confiance (volume d'échanges, utilisateurs, part de marché) sous la ligne",
          "CTA App Store et Google Play couplés à une capture d'e-mail",
          "Prêt pour le multilingue, anglais par défaut",
        ],
      },
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return projectBases.map((base) => ({
    ...base,
    ...projectContent[locale][base.slug],
  }));
}

export function getProjectBySlug(
  slug: string,
  locale: Locale,
): Project | undefined {
  const base = projectBases.find((p) => p.slug === slug);
  if (!base) return undefined;
  const content = projectContent[locale][base.slug];
  if (!content) return undefined;
  return { ...base, ...content };
}

export function getFeaturedProjects(locale: Locale, limit?: number): Project[] {
  const all = getProjects(locale).filter((p) => p.featured);
  return typeof limit === "number" ? all.slice(0, limit) : all;
}

export function getAdjacentProjects(
  slug: string,
  locale: Locale,
): {
  prev: Project | null;
  next: Project | null;
} {
  const list = getProjects(locale);
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  };
}

/** All project slugs (locale-invariant). Useful for generateStaticParams. */
export function getAllProjectSlugs(): string[] {
  return projectBases.map((p) => p.slug);
}
