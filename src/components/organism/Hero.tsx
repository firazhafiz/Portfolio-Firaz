import React from "react";
import Image from "next/image";
import { ElementHero } from "../../../public/images";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-y-hidden pt-[5rem] sm:pt-[4.25rem]">
      <div className="absolute top-[-250px] left-[-100px] w-[1250px] h-[1250px] opacity-50 z-0">
        <Image src={ElementHero} alt="Hero Image" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-0">
        {/* <TextHero /> */}
      </div>
    </div>
  );
};

export default Hero;
