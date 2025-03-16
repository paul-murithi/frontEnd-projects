import React from "react";

import checkboxIcon from "../../assets/icons/checkbox.png";
import rightIcon from "../../assets/icons/Right.png";

import { LightText, SubHeading } from "../Hero/HeroText";
import Image from "../Image/Image";

const clinicFeatures = [
  "Modern Equipment",
  "Comfortable Clinic",
  "Easy Online Appointment",
  "always monitored",
];

const AboutUsText = () => {
  return (
    <div className="flex flex-col ml-10">
      <h2 className="text-subheading font-bold uppercase">about us</h2>
      <>
        <SubHeading
          content={"Your "}
          hasHighlightedText={true}
          highlightedText={"Trusted Patner"}
          textBefore={true}
        />
        <SubHeading content={"For Dental Health "} />
      </>
      <>
        <LightText
          content={`Out team is dedicated to providing the best possible dental care for
          you. A healthy smile - we help you achieve both`}
        />
      </>
      <>
        {clinicFeatures.map((feature) => (
          <span className="flex p-2">
            <Image source={checkboxIcon} className="mr-2" />
            <p>{feature}</p>
          </span>
        ))}
      </>
      <div className="py-8">
        <a href="#" className="uppercase text-titleBlue flex">
          <span className="mr-1 text-2xl hover:text-blue-800 transition-all">
            read more
          </span>
          <Image source={rightIcon} width="28" />
        </a>
      </div>
    </div>
  );
};

export default AboutUsText;
