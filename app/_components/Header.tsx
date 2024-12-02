import React from "react";
import Linkedin from "@/assets/svg/Linkedin";
import Github from "@/assets/svg/Github";
import { getFormattedDate } from "../../lib/helpers";

const Header = () => {
  return (
    <>
      <div className="flex justify-center sm:justify-between items-stretch py-8 border-b-[3px] border-black/80">
        <div className="max-sm:hidden w-[150px] lg:w-[210px] xl:w-[300px] px-6 text-center border-r-[2px] border-black/20 flex items-center justify-center">
          <div>
            <p className="text-xs xl:text-sm">-Since 2019-</p>
            <p className="text-xl xl:text-3xl font-extrabold pirateOne">
              PORT<span className="text-red-400">FOLIO</span>
            </p>
            <p className="text-xs xl:text-sm">WEB DEVELOPER</p>
          </div>
        </div>
        <p className="unifrakturmaguntia text-[73px] sm:text-[55px] md:text-[73px] lg:text-[100px] xl:text-[120px] 2xl:text-[145px] leading-[100px] lg:leading-[145px] relative">
          BEKERDEV
          <span
            className="absolute top-0.5 -right-5 w-[20px] h-[20px] border border-black text-black rounded-full flex justify-center items-center !text-sm font-bolder"
            style={{
              fontFamily: "Sans-serif",
            }}
          >
            <span>./</span>
          </span>
        </p>
        <div className="max-sm:hidden w-[150px] lg:w-[210px] xl:w-[300px] px-6 text-center border-l-[2px] border-black/20 flex items-center justify-center">
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ebubeker-rexha-3528bb1a2/"
              className="rounded-full"
            >
              <Linkedin width="38px" height="38px" className="cursor-pointer max-xl:w-8" />
            </a>
            <a href="https://github.com/Ebubeker" className="rounded-full">
              <Github width="38px" height="38px" className="cursor-pointer max-xl:w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black/20 mt-1 pb-1 flex justify-between max-lg:text-xs">
        <p>{getFormattedDate()}</p>
        <a href="https://www.linkedin.com/in/ebubeker-rexha-3528bb1a2">
          linkedin/ebubeker-rexha
        </a>
      </div>
    </>
  );
};

export default Header;
