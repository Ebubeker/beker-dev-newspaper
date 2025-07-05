import NizaTwoImage from "@/assets/images/niza-2.png";
import NizaImage from "@/assets/images/niza.png";
import Plan4BetterImage from "@/assets/images/plan4better.jpg";
import SubdivideImage from "@/assets/images/subdivide.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-[600] text-3xl flex items-center gap-2 mt-6">
        {" "}
        My Work Experience!
      </h2>
      <div className="border-b-2 border-black/20 pb-5">
        <div className="mb-2">
          <p className="font-[600] text-xl">Front-End Web Developer</p>
          <p className="text-sm mb-2">- Plan4Better -</p>
          <h4>
            Worked there from june 2022 to february 2024. Gained most of my
            professional skills here, there is were I was formed as a true
            programmer.
          </h4>
        </div>
        <Image
          src={Plan4BetterImage}
          alt="Plan4Better company"
          className="grayscale-[90%]"
        />
      </div>
      <div className="border-b-2 border-black/20 pb-5">
        <div className="mb-2">
          <p className="font-[600] text-xl">Front-End Web Developer</p>
          <p className="text-sm mb-2">- Niza Global -</p>
          <h4>
            Worked here for some months from april 2023 to october 2023 and from march to november of 2024. I was
            mainly working using Vue JS and also with React JS where I had to
            create a company website using it.
          </h4>
        </div>
        <Image
          src={NizaImage}
          alt="Niza Global company"
          className="grayscale-[90%]"
        />
      </div>
      <div className="pb-5">
        <div className="mb-2">
          <p className="font-[600] text-xl">CEO | Co-founder</p>
          <p className="text-sm mb-2">- Subdivide -</p>
          <h4>
            Co-founded Subdivide which is a data automation tool where we aim to
            automate the repetitive tasks done while cleaning, analyzing and
            preparing the data.{" "}
          </h4>
        </div>
        <Image
          src={SubdivideImage}
          alt="Niza Global company"
          className="grayscale-[90%]"
        />
      </div>
    </div>
  );
};

export default Experience;
