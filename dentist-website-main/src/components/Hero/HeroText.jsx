import React from "react";
import Image from "../Image/Image";
import playLogo from "../../assets/icons/play.png";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-evenly pl-10">
      <div className="py-4">
        <h1 className="text-subheading uppercase font-bold">
          Welcome to confident
        </h1>
      </div>

      <h2
        className="text-heading font-extrabold text-4xl md:text-7xl"
        aria-label="subheading"
      >
        High Quality &
      </h2>
      <h2
        className="text-heading font-extrabold text-4xl md:text-7xl pt-4"
        aria-label="subheading"
      >
        <span className="text-titleBlue">Painless </span>Dentistry
      </h2>
      <p className="text-textLight font-light py-8 pr-2 md:text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius cum
        labore fuga, architecto possimus quibusdam veniam sunt ex incidunt
        ducimus asperiores optio natus similique explicabo commodi?
      </p>
    </div>
  );
};

export default HeroText;
