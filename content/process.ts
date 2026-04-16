import type { Locale } from "@/i18n/config";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const processStepsByLocale: Record<Locale, ProcessStep[]> = {
  en: [
    {
      number: "01",
      title: "Brief",
      description:
        "We jump on a short call or exchange a few messages. You describe what you need; I'll tell you honestly whether I'm the right person, how long it'll take, and what it'll cost.",
    },
    {
      number: "02",
      title: "Scope",
      description:
        "I write up a one-page scope covering what's in, what's out, what you'll get, and when. No bloated proposals, no hidden surprises, no upsell games.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Heads-down development, with daily progress updates on Slack or email. You see the work as it lands. No black box, no end-of-sprint reveals.",
    },
    {
      number: "04",
      title: "Ship",
      description:
        "Deploy to your domain, hand over everything, and stay available for a revision round. You leave with a working product, clean code, and the keys.",
    },
  ],
  sq: [
    {
      number: "01",
      title: "Përmbledhje",
      description:
        "Bëjmë një telefonatë të shkurtër ose shkëmbejmë disa mesazhe. Ti përshkruan çfarë të nevojitet; unë të them me ndershmëri nëse jam personi i duhur, sa do të zgjasë dhe sa do të kushtojë.",
    },
    {
      number: "02",
      title: "Fusha",
      description:
        "Shkruaj një dokument njëfaqësh që përmbledh çfarë përfshihet, çfarë jo, çfarë do të marrësh dhe kur. Pa propozime të fryra, pa surpriza, pa lojëra shitjeje.",
    },
    {
      number: "03",
      title: "Ndërtimi",
      description:
        "Zhvillim i përqendruar, me përditësime të përditshme në Slack ose email. E sheh punën ndërsa bëhet. Pa kuti të zezë, pa zbulime në fund të sprintit.",
    },
    {
      number: "04",
      title: "Dorëzimi",
      description:
        "Publikim në domenin tënd, dorëzim i gjithçkaje dhe qëndrim në dispozicion për një raund rishikimesh. Largohesh me një produkt funksional, kod të pastër dhe çelësat.",
    },
  ],
  de: [
    {
      number: "01",
      title: "Briefing",
      description:
        "Wir machen einen kurzen Call oder tauschen ein paar Nachrichten aus. Sie beschreiben, was Sie brauchen; ich sage Ihnen ehrlich, ob ich der richtige Mensch dafür bin, wie lange es dauert und was es kostet.",
    },
    {
      number: "02",
      title: "Scope",
      description:
        "Ich schreibe einen einseitigen Scope, der festhält, was drin ist, was draußen, was Sie bekommen und wann. Keine aufgeblähten Angebote, keine versteckten Überraschungen, keine Upsell-Spielchen.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Fokussierte Entwicklung mit täglichen Fortschrittsupdates per Slack oder E-Mail. Sie sehen die Arbeit, während sie entsteht. Keine Blackbox, keine Überraschungen am Sprintende.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Deployment auf Ihre Domain, Übergabe von allem, plus Verfügbarkeit für eine Revisionsrunde. Sie gehen mit einem funktionierenden Produkt, sauberem Code und den Schlüsseln nach Hause.",
    },
  ],
  fr: [
    {
      number: "01",
      title: "Brief",
      description:
        "On fait un court appel ou on échange quelques messages. Vous décrivez ce dont vous avez besoin ; je vous dis honnêtement si je suis la bonne personne, combien de temps ça prendra, et combien ça coûtera.",
    },
    {
      number: "02",
      title: "Cadrage",
      description:
        "Je rédige un cadrage d'une page : ce qui est inclus, ce qui ne l'est pas, ce que vous obtenez et quand. Aucune proposition boursouflée, aucune mauvaise surprise, aucun jeu d'upsell.",
    },
    {
      number: "03",
      title: "Construction",
      description:
        "Développement concentré, avec des mises à jour quotidiennes par Slack ou e-mail. Vous voyez le travail à mesure qu'il avance. Pas de boîte noire, pas de révélation en fin de sprint.",
    },
    {
      number: "04",
      title: "Mise en ligne",
      description:
        "Déploiement sur votre domaine, remise de tout, et disponibilité pour une série de retouches. Vous repartez avec un produit qui fonctionne, un code propre et les clés.",
    },
  ],
};

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return processStepsByLocale[locale];
}
