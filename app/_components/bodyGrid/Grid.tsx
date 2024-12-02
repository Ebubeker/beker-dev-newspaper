import ShkoderBackground from "@/assets/images/download.png";
import EbubekerPerson from "@/assets/images/ebubeker.png";
import Image from "next/image";
import Experience from "./Experience";
import OtherExperience from "./OtherExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Grid = () => {
  return (
    <div className="py-8">
      <div className="flex max-lg:hidden">
        <div className="w-1/3 xl:w-1/2">
          <div className="h-fit relative">
            <Image
              src={ShkoderBackground}
              alt="Profile Pic"
              className="w-full grayscale-[90%]"
            />
            <Image
              src={EbubekerPerson}
              alt="Ebubeker"
              className="absolute bottom-0 right-[100px] w-[300px] grayscale-[70%] max-xl:hidden"
            />
          </div>
          <Projects />
        </div>
        <div className="w-1/3 xl:w-1/4 pl-8">
          <Summary />
          <Experience />
        </div>
        <div className="w-1/3 xl:w-1/4 ml-[15px] pl-[15px] border-l-2 border-black/20">
          <Skills />
          <OtherExperience />
        </div>
      </div>
      <div className="max-md:hidden lg:hidden flex gap-8">
        <div className="h-fit relative w-1/2">
          <Image
            src={ShkoderBackground}
            alt="Profile Pic"
            className="w-full grayscale-[90%]"
          />
          <Image
            src={EbubekerPerson}
            alt="Ebubeker"
            className="absolute bottom-0 right-[100px] w-[300px] grayscale-[70%] max-xl:hidden"
          />
          <Experience />
          <OtherExperience />
        </div>
        <div className="w-1/2">
          <Summary />
          <br />
          <Skills />
          <Projects />
        </div>
      </div>
      <div className="md:hidden">
        <div className="h-fit relative">
          <Image
            src={ShkoderBackground}
            alt="Profile Pic"
            className="w-full grayscale-[90%]"
          />
          <Image
            src={EbubekerPerson}
            alt="Ebubeker"
            className="absolute bottom-0 right-[100px] w-[300px] grayscale-[70%] max-xl:hidden"
          />
        </div>
        <br />
        <Summary />
        <br />
        <Skills />
        <Experience />
        <Projects />
        <OtherExperience />
      </div>
    </div>
  );
};

export default Grid;
