import React from "react";

// components
import Image from "../Image/Image";

// Images
import playLogo from "../../assets/icons/play.png";

const CTAButton = () => {
  return (
    <div
      aria-label="CTA Links"
      className="flex justify-between pr-4 pb-12 pl-10"
    >
      <button className="uppercase bg-buttonBG hover:bg-buttonBGHover transition text-white px-10 py-2 rounded-3xl font-semibold">
        contact us
      </button>
      <a href="" className="flex items-center">
        <Image source={playLogo} className="pr-3" />
        <span>Watch Video Profile</span>
      </a>
    </div>
  );
};

export default CTAButton;
