import React from "react";
// components
import CTAButton from "./CTAButton";
import DoctorCard from "./DoctorCard";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col items-center md:flex">
        <div>
          <HeroText />
          <CTAButton />
        </div>
        <div className="w-full md:w-8/12">
          <DoctorCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
