import React from "react";
import { ReactComponent as ProjectNext}  from "../assets/arrow-right.svg"
import { ReactComponent as ProjectPrev}  from "../assets/arrow-left.svg"


const Card = ({ title, subtitle, imgSrc }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden relative min-h-[20rem] md:min-h-[45vh] hover:cursor-pointer">
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity ease-in-out duration-1000  z-10"></div>{" "}
      <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <p className="mb-2 text-sm font-thin text-gray-300 z-20 pointer-events-none">{subtitle}</p>
        <h2 className="text-lg font-semibold text-white z-20 pointer-events-none">{title}</h2>
        <div className="mt-5 flex w-full justify-between">
          <ProjectPrev className="z-20"/>
          <ProjectNext className="z-20"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
