export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
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
];
