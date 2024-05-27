import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <div className="banner flex justify-center">
      <div className="w-[75%] xl:[70%]">
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] font-[700] z-40 banner-heading flex flex-col">
          <div className="line">
          <span className="absolute">Creating unique products</span>
          </div>
          <div className="line">
          <span className="absolute">is what we do</span>
          </div>
          </h2>
        </div>
        <div className="flex flex-row mt-5 items-center gap-3">
          <p className="font-semibold">More about us</p>
          <a href="/">
          <RightArrow/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
