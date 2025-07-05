import React from "react";

const OtherExperience = () => {
  return (
    <div className="mt-8">
      <h2 className="font-[600] text-3xl flex items-center gap-2 mb-6">
        Other Experiences
      </h2>
      <div className="bg-[#222222]/80 text-white p-4">
        <div>
          <h3 className="text-lg font-[500]">
            Web Scraping{" "}
            <span className="ml-2 text-xs text-neutral-400">
              - Plan4Better -
            </span>
          </h3>
          <p className="text-neutral-300 mt-1 text-sm">
            Scraped data related to points of interest, like supermarket
            lcoations, doctors in germany, schools, banks, etc... Also
            contributed to{" "}
            <a
              href="https://github.com/alltheplaces/alltheplaces"
              className="text-red-300"
            >
              All The Places
            </a>{" "}
            repo.
          </p>
        </div>
      </div>
      <div className="bg-[#222222]/80 text-white p-4 mt-4">
        <div>
          <h3 className="text-lg font-[500]">
            Data Processing{" "}
            <span className="ml-2 text-xs text-neutral-400">
              - Plan4Better -
            </span>
          </h3>
          <p className="text-neutral-300 mt-1 text-sm">
            Worked on some traffic data where I had to process them from a raw
            format to a map layer.
          </p>
        </div>
      </div>
      <div className="bg-[#222222]/80 text-white p-4 mt-4">
        <div>
          <h3 className="text-lg font-[500]">
            Data Science{" "}
            <span className="ml-2 text-xs text-neutral-400">- Subdivide -</span>
          </h3>
          <p className="text-neutral-300 mt-1 text-sm">
            Since in the startup we automate the simple code which is usually
            done with some data science background, it has helped me to form a
            solid foundation in Data Science.
          </p>
        </div>
      </div>
      <div className="bg-[#222222]/80 text-white p-4 mt-4 max-2xl:hidden">
        <div>
          <h3 className="text-lg font-[500]">
            Balkan Olympiad In Informatics{" "}
            <span className="ml-2 text-xs text-neutral-400">
              - High School -
            </span>
          </h3>
          <p className="text-neutral-300 mt-1 text-sm">
            Participated in the Balkan Olympiad in Informatics. I would say it
            was the biggest and I would consider it still one of the most
            challenging experiences. The tasks were very complex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherExperience;
