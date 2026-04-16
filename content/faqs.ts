import type { Locale } from "@/i18n/config";

export type Faq = {
  question: string;
  answer: string;
};

const faqsByLocale: Record<Locale, Faq[]> = {
  en: [
    {
      question: "Is BekerDev really a one-person studio?",
      answer:
        "Yes. Every project is designed, built, and shipped by Ebubeker Rexha. No handoffs to junior devs, no offshoring, no project managers between you and the person writing the code. When something goes wrong or right, you're talking to the same person.",
    },
    {
      question: "How do you ship a landing page in one day?",
      answer:
        "Tight scope and no committee. We lock the page structure and copy in the morning, build and style in the afternoon, and deploy to your domain by the end of the day. It works because I limit the scope: one page, one goal, one round of revisions.",
    },
    {
      question: "What does an MVP Sprint actually include?",
      answer:
        "A working, deployed product with the core flow a user needs to do the thing your business is about: usually auth, a database, one or two primary user journeys, and a simple admin surface. It's deliberately minimal. You'll get a functioning web app in 3–5 days that you can put in front of real users or investors.",
    },
    {
      question: "What tech stack do you work in?",
      answer:
        "React, Next.js, TypeScript, Tailwind, Node.js on the front and API side. Supabase, Postgres, and FastAPI on the backend when more is needed. Deployed on Vercel by default. I'll use a different stack if a project genuinely needs it, but I won't chase trends for the sake of it.",
    },
    {
      question: "Do you show prices up front?",
      answer:
        "No. Every project is slightly different, and I'd rather quote you something honest than anchor you on a number that doesn't fit. Drop me a note via the contact form and I'll come back with a real quote within a day.",
    },
    {
      question: "Where are you based and who do you work with?",
      answer:
        "I'm based in Albania and work remotely with founders and teams anywhere in Europe, the US, and beyond. Async-friendly by default, happy to take calls when they're useful.",
    },
    {
      question: "What happens after the project ships?",
      answer:
        "You own the code, the repo, and the deployment. Every project comes with a revision window, and if you want me to keep building, the Dev Partnership retainer makes that straightforward. No lock-in, and you can walk away any time.",
    },
  ],
  sq: [
    {
      question: "A është BekerDev vërtet një studio një-personëshe?",
      answer:
        "Po. Çdo projekt dizajnohet, ndërtohet dhe dorëzohet nga Ebubeker Rexha. Pa kalime te zhvillues junior, pa outsourcing, pa menaxherë projekti mes teje dhe personit që shkruan kodin. Kur diçka shkon mirë ose keq, po flet me të njëjtin person.",
    },
    {
      question: "Si arrin të dorëzosh një landing page brenda një dite?",
      answer:
        "Fushë e ngushtë dhe pa komision. E fiksojmë strukturën dhe tekstin e faqes në mëngjes, ndërtojmë dhe stilojmë pasdite, dhe publikojmë në domenin tënd para mbrëmjes. Funksionon sepse e kufizoj fushën: një faqe, një qëllim, një raund rishikimesh.",
    },
    {
      question: "Çfarë përfshin realisht MVP Sprint?",
      answer:
        "Një produkt funksional të publikuar, me rrjedhën bazë që një përdorues i duhet për të bërë atë që biznesi yt përfaqëson: zakonisht autentikim, një bazë të dhënash, një ose dy rrjedha kryesore, dhe një panel të thjeshtë admin. Është qëllimisht minimal. Do të marrësh një web-aplikacion funksional brenda 3–5 ditëve që mund ta vendosësh para përdoruesve të vërtetë ose investitorëve.",
    },
    {
      question: "Me çfarë stack-u teknologjik punon?",
      answer:
        "React, Next.js, TypeScript, Tailwind, Node.js në front-end dhe API. Supabase, Postgres dhe FastAPI në backend kur nevojitet më shumë. Publikim në Vercel si standard. Do të përdor një stack tjetër nëse projekti e kërkon vërtet, por nuk ndjek tendencat për hir të tendencave.",
    },
    {
      question: "A i tregon çmimet paraprakisht?",
      answer:
        "Jo. Çdo projekt është pak ndryshe, dhe preferoj të të jap një ofertë të ndershme sesa të të ankoroj në një numër që nuk i përshtatet. Më dërgo një mesazh në formular kontakti dhe do të kthehem me një ofertë të vërtetë brenda një dite.",
    },
    {
      question: "Ku je i bazuar dhe me kë punon?",
      answer:
        "Jam i bazuar në Shqipëri dhe punoj nga distanca me themelues dhe ekipe kudo në Evropë, SHBA dhe më gjerë. Miqësor me punën asinkrone, i hapur për telefonata kur janë të dobishme.",
    },
    {
      question: "Çfarë ndodh pasi projekti publikohet?",
      answer:
        "Ti zotëron kodin, repon dhe deploy-in. Çdo projekt vjen me një dritare rishikimesh, dhe nëse dëshiron të vazhdoj të ndërtoj, retaineri Dev Partnership e bën këtë të thjeshtë. Pa angazhim afatgjatë, mund të largohesh kurdo.",
    },
  ],
  de: [
    {
      question: "Ist BekerDev wirklich ein Ein-Personen-Studio?",
      answer:
        "Ja. Jedes Projekt wird von Ebubeker Rexha entworfen, gebaut und ausgeliefert. Keine Übergaben an Junior-Entwickler, kein Offshoring, keine Projektmanager zwischen Ihnen und der Person, die den Code schreibt. Wenn etwas schiefgeht oder gut läuft, sprechen Sie mit derselben Person.",
    },
    {
      question: "Wie schaffen Sie es, eine Landing Page an einem Tag auszuliefern?",
      answer:
        "Enger Scope und kein Komitee. Wir fixieren Seitenstruktur und Texte am Vormittag, bauen und stylen am Nachmittag und deployen bis zum Abend auf Ihre Domain. Es funktioniert, weil ich den Scope begrenze: eine Seite, ein Ziel, eine Revisionsrunde.",
    },
    {
      question: "Was genau umfasst ein MVP Sprint?",
      answer:
        "Ein funktionierendes, deployetes Produkt mit dem Kern-Flow, den Nutzer für das brauchen, worum es in Ihrem Business geht: normalerweise Auth, eine Datenbank, ein oder zwei Hauptflows und ein einfaches Admin-Surface. Bewusst minimal. Sie bekommen in 3–5 Tagen eine funktionierende Web-App, die Sie echten Nutzern oder Investoren zeigen können.",
    },
    {
      question: "Mit welchem Tech-Stack arbeiten Sie?",
      answer:
        "React, Next.js, TypeScript, Tailwind, Node.js im Frontend und auf der API-Seite. Supabase, Postgres und FastAPI im Backend, wenn mehr nötig ist. Deployment standardmäßig auf Vercel. Ich nutze einen anderen Stack, wenn ein Projekt ihn wirklich braucht, aber ich jage keinen Trends nach.",
    },
    {
      question: "Zeigen Sie Preise im Voraus an?",
      answer:
        "Nein. Jedes Projekt ist etwas anders, und ich gebe Ihnen lieber ein ehrliches Angebot, als Sie an eine Zahl zu binden, die nicht passt. Schreiben Sie mir über das Kontaktformular, und ich melde mich innerhalb eines Tages mit einem echten Angebot.",
    },
    {
      question: "Wo sind Sie ansässig und mit wem arbeiten Sie?",
      answer:
        "Ich bin in Albanien ansässig und arbeite remote mit Gründern und Teams überall in Europa, den USA und darüber hinaus. Standardmäßig async-freundlich, gerne auch Calls, wenn sie nützlich sind.",
    },
    {
      question: "Was passiert, nachdem das Projekt ausgeliefert ist?",
      answer:
        "Sie besitzen den Code, das Repo und das Deployment. Jedes Projekt bringt ein Revisionsfenster mit, und wenn Sie wollen, dass ich weiterbaue, macht der Dev-Partnership-Retainer das einfach. Keine Bindung, Sie können jederzeit gehen.",
    },
  ],
  fr: [
    {
      question: "BekerDev est-il vraiment un studio en solo ?",
      answer:
        "Oui. Chaque projet est conçu, construit et livré par Ebubeker Rexha. Aucun passage de relais à des juniors, aucune délocalisation, aucun chef de projet entre vous et la personne qui écrit le code. Quand ça va bien ou mal, vous parlez toujours à la même personne.",
    },
    {
      question: "Comment livrez-vous une landing page en un jour ?",
      answer:
        "Cadrage serré et aucun comité. On fige la structure et le texte le matin, on construit et on met en forme l'après-midi, et on déploie sur votre domaine en fin de journée. Ça marche parce que je limite le périmètre : une page, un objectif, une série de retouches.",
    },
    {
      question: "Que contient vraiment un MVP Sprint ?",
      answer:
        "Un produit fonctionnel, déployé, avec le parcours essentiel dont un utilisateur a besoin pour faire ce qui compte dans votre activité : généralement l'auth, une base de données, un ou deux parcours principaux et une interface d'administration simple. Volontairement minimal. Vous obtenez en 3–5 jours une application web qui fonctionne et que vous pouvez montrer à de vrais utilisateurs ou à des investisseurs.",
    },
    {
      question: "Avec quelle stack technique travaillez-vous ?",
      answer:
        "React, Next.js, TypeScript, Tailwind, Node.js côté front et API. Supabase, Postgres et FastAPI côté back quand il en faut plus. Déploiement sur Vercel par défaut. J'utilise une autre stack si un projet l'exige vraiment, mais je ne cours pas après les tendances pour le plaisir.",
    },
    {
      question: "Affichez-vous les prix à l'avance ?",
      answer:
        "Non. Chaque projet est un peu différent, et je préfère vous donner un devis honnête plutôt que de vous ancrer sur un chiffre qui ne colle pas. Écrivez-moi via le formulaire de contact et je reviens avec un vrai devis en moins d'une journée.",
    },
    {
      question: "Où êtes-vous basé et avec qui travaillez-vous ?",
      answer:
        "Je suis basé en Albanie et je travaille à distance avec des fondateurs et des équipes partout en Europe, aux États-Unis et ailleurs. Compatible asynchrone par défaut, disponible pour des appels quand c'est utile.",
    },
    {
      question: "Que se passe-t-il après la mise en ligne ?",
      answer:
        "Vous êtes propriétaire du code, du dépôt et du déploiement. Chaque projet inclut une fenêtre de retouches, et si vous voulez que je continue à construire, le forfait Dev Partnership rend ça simple. Aucun engagement, vous pouvez partir à tout moment.",
    },
  ],
};

export function getFaqs(locale: Locale): Faq[] {
  return faqsByLocale[locale];
}
