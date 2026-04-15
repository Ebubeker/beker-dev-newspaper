import type { StaticImageData } from "next/image";

import NizaImage from "@/assets/images/niza.png";
import Plan4BetterImage from "@/assets/images/plan4better.jpg";
import SubdivideImage from "@/assets/images/subdivide.png";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  image: StaticImageData;
  alt: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Web Developer",
    company: "Plan4Better",
    period: "Jun 2022 – Feb 2024",
    summary:
      "Most of my professional formation happened here. This is where I moved from 'writing code' to actually engineering products.",
    image: Plan4BetterImage,
    alt: "Plan4Better",
  },
  {
    role: "Front-End Web Developer",
    company: "Niza Global",
    period: "Apr–Oct 2023 · Mar–Nov 2024",
    summary:
      "Built marketing and product front-ends in Vue and React, including the full NIZA company website.",
    image: NizaImage,
    alt: "Niza Global",
  },
  {
    role: "CEO & Co-founder",
    company: "Subdivide",
    period: "2023 – 2024",
    summary:
      "Co-founded and led the build of a data automation startup. Shipped a working product, hit top-5 at ACTI YOUTH.",
    image: SubdivideImage,
    alt: "Subdivide",
  },
];
