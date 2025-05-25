import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ButtonCv = () => {
  return (
    <div className="absolute left-[1250px] flex py-7">
      <button className=" bg-white text-black px-4 py-2 rounded-full flex items-center gap-x-2">
        Download CV
        <BsArrowRight />
      </button>
    </div>
  );
};

export default ButtonCv;
