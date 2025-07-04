import React from "react";
import Image from "next/image";
import Quirklr from "@/assets/images/quirklr.png";
import NizaWebsite from "@/assets/images/niza.png";
import VllazniaPage from "@/assets/images/vllaznia.png";
import Github from "@/assets/svg/Github";
import LinkIcon from "@/assets/svg/Link";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Quirklr: Social Media website",
      description: (
        <>
          Social Media website done as a school project. It consists of 2
          versions, the first had basic implementations and the second version
          has more advanced features. Since it was for school I was forced to
          use <b>React</b> without <b>typescript</b> and <b>tailwind</b>.
        </>
      ),
      tools: ["React", "Firebase", "SWR"],
      image: Quirklr,
      alt: "Quirklr: Social Media website screenshot",
      link: "https://quirklr.vercel.app/",
      github: "https://github.com/Ebubeker/quirklr",
    },
    {
      title: "NIZA company website: part of work",
      description: (
        <>
          I have built this project while I was working for Niza Global. I used{" "}
          <b>React JS</b> combined with <b>tailwind</b> as a styling library. I
          have also used translations to make the website language selectable.
          Considering the large amount of content it had, the company website
          performed well.
        </>
      ),
      tools: ["React", "Tailwind", "SWR"],
      image: NizaWebsite,
      alt: "NIZA company website: part of work screenshot",
      link: "https://niza.io/",
    },
    {
      title: "Vllaznia Unofficial Website",
      description: (
        <>
          This website was done before some years, still when <b>Next JS</b> was
          not as popular as today. I used a <b>CMS</b> to handle the matches
          that my hometown used to play.
        </>
      ),
      tools: ["React", "Firebase", "SWR"],
      image: VllazniaPage,
      alt: "Vllaznia Unofficial Website screenshot",
      link: "https://vllaznia-unofficial-website.vercel.app/",
      github: "https://github.com/Ebubeker/vllazniaUnofficialWebsite",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="font-[600] text-4xl">My Projects</h2>
      <h3 className="mt-2">
        Here are some of my recent projects that I have done both in my work and
        personally. I have tried to use the latest technologies to match the
        current web development trends.
      </h3>
      <div className="flex flex-col gap-4 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex max-xl:flex-col-reverse gap-4 justify-between items-start border-b-2 border-black/20 pb-4 group cursor-pointer"
          >
            <div className="xl:w-7/12">
              <p className="font-[600] text-xl">{project.title}</p>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="flex xl:w-5/12 justify-start gap-3">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="text-red-500 font-bold">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={project.image}
                alt={project.alt}
                className="w-full xl:w-auto xl:max-h-[100px] grayscale-[90%] border border-black/10 rounded-[2px]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 transition-all ease-in duration-150 hidden group-hover:flex justify-center items-center gap-[10px]">
                {project.github && (
                  <Link href={project.github}>
                    <Github width="33px" height="33px" fill="#ffffff" />{" "}
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link}>
                    <LinkIcon width="33px" height="33px" color="#ffffff" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p>
          You can explore more projects that I have worked on, showcasing a
          variety of skills and technologies I’ve utilized, by visiting my
          GitHub repository:{" "}
          <a href="https://github.com/Ebubeker" className="text-red-500">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
