import React from "react";

// components
import Image from "../Image/Image";

// Images
import playLogo from "../../assets/icons/play.png";

const CTAButton = () => {
  return (
    <div
      aria-label="CTA Links"
      className="flex flex-col sm:flex-row items-center sm:justify-between md:justify-start md:gap-10 gap-4 sm:gap-0 px-6 sm:pl-10 sm:pr-4 pb-12"
    >
      <button className="uppercase bg-buttonBG hover:bg-buttonBGHover transition text-white px-6 sm:px-10 py-2 rounded-3xl font-semibold">
        contact us
      </button>
      <a href="#" className="flex items-center">
        <Image source={playLogo} className="pr-2 sm:pr-3 w-10 sm:w-auto" />
        <span className="text-sm sm:text-base">Watch Video Profile</span>
      </a>
    </div>
  );
};

export default CTAButton;
