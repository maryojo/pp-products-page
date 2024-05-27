import React from "react";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="z-10 w-full flex justify-center mt-10">
    <div className="w-[75%] xl:[70%]">
    <div className="w-full flex flex-row justify-between">
        <p className="text-[1.2rem] font-[700]">PRODUCTS</p>
        <nav className="w-[20px] sm:w-[25px]">
          <span className="mb-1 bg-black h-[2px] w-full block"></span>
          <span className="mb-1 bg-black h-[2px] w-full block"></span>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Header;
