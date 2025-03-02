import React from "react";
// components
import CTAButton from "./CTAButton";
import DoctorCard from "./DoctorCard";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="bg-background">
      <HeroText />
      <CTAButton />
    </div>
  );
};

export default Hero;
