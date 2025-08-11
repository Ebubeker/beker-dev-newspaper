import NizaWebsite from "@/assets/images/niza-global.png";
import Subdivide from "@/assets/images/subdivide.co.png";
import TripFlip from "@/assets/images/tripflip.png";
import Github from "@/assets/svg/Github";
import LinkIcon from "@/assets/svg/Link";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "TripFlip: Plan your trip with the help of AI",
      description: (
        <>
          Trip planning app which uses AI to suggest flights and trips at a
          destination based on users budget, interests and travel styles. The
          app is 95% finished but due to lack of marketing budget I was unable
          to continue it.
          {/* <b>React Native</b> without <b>typescript</b> and <b>tailwind</b>. */}
        </>
      ),
      tools: ["React Native", "Typescript", "Node JS", "Tailwind"],
      image: TripFlip,
      alt: "TripFlip: Plan your trip with the help of AI",
      link: "https://tripflip.site/",
      github: "https://github.com/Ebubeker/tripflip-app",
    },
    {
      title: "NIZA company website",
      description: (
        <>
          I have built this project while I was working for Niza Global. I used{" "}
          <b>Next JS</b> combined with <b>tailwind</b> as a styling library. I
          have also used translations to make the website language selectable.
          Considering the large amount of content it had, the company website
          performed well.
        </>
      ),
      tools: ["Next JS", "Typescript", "Tailwind", "SWR"],
      image: NizaWebsite,
      alt: "NIZA company website: part of work screenshot",
      link: "https://niza.io/",
    },
    {
      title: "Subdivide Web App",
      description: (
        <>
          This is the subdivide web app which automates the process of dealing
          with data, cleaning, preparing, analyzing and AI feedback for further
          quality improvement. It was discontinued as a startup due to lack of
          time and priority. But with this idea we were nominated as top 5 ACTI
          YOUTH startups in Albania.
        </>
      ),
      tools: ["Next JS", "Tailwind", "Supabase", "FastAPI", "SWR"],
      image: Subdivide,
      alt: "Subdivide Web App",
      link: "https://app.subdivide.co/",
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
              <div className="flex w-full justify-start gap-3">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="text-red-500 font-bold text-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={project.image}
                alt={project.alt}
                className="w-full xl:w-auto xl:max-h-[120px] grayscale-[90%] border border-black/10 rounded-[2px]"
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
