export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
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
];
