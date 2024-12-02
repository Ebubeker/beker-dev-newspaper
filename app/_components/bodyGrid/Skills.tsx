import React from "react";

const Skills = () => {
  return (
    <>
      <p className="font-[600] text-3xl flex items-center gap-2">
        My skillset and languages
      </p>
      <p className="mt-2 mb-6">
        Here is a list of my strongest programming languages.
      </p>
      <div>
        <div className="bg-black/80 py-3 flex justify-center font-bold text-white">
          <p>Programming Languages</p>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex justify-between items-center">
            <p>JavaScript</p>
            <p>10/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>TypeScript</p>
            <p>8/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>React JS</p>
            <p>10/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Next JS</p>
            <p>9/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Vue JS</p>
            <p>7.5/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Node JS</p>
            <p>8/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Python</p>
            <p>8/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>C++</p>
            <p>6/10</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-black/80 py-3 flex justify-center font-bold text-white">
          <p>Tools</p>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex justify-between items-center">
            <p>OpenLayers</p>
            <p>7/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Mapbox</p>
            <p>5/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Scrapy</p>
            <p>8/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Selenium</p>
            <p>6/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>SWR</p>
            <p>7/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tanstack</p>
            <p>6/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Localize</p>
            <p>8/10</p>
          </div>
          <div className="flex justify-between items-center">
            <p>i18n</p>
            <p>10/10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
