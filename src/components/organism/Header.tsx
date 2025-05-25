import React from "react";
import Navbar from "../atoms/Navbar";
import Hero from "../organism/Hero";
import ButtonCv from "../molecules/ButtonCv";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ButtonCv />
      <Hero />
    </div>
  );
};

export default Header;
