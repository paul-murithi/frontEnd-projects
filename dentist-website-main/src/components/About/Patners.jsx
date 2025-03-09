import React from "react";
import Image from "../Image/Image";

import "../../styles/marquee.css";

const logoLayout = [
  {
    name: "/icons/fictional-company-logo/group-1-name.png",
    src: "/icons/fictional-company-logo/group-1-logo.png",
  },
  {
    name: "/icons/fictional-company-logo/group-2-name.png",
    src: "/icons/fictional-company-logo/group-2-logo.png",
  },
  {
    name: "/icons/fictional-company-logo/group-3-name.png",
    src: "/icons/fictional-company-logo/group-3-logo.png",
  },
  {
    name: "/icons/fictional-company-logo/group-4-name.png",
    src: "/icons/fictional-company-logo/group-4-logo.png",
  },
  {
    name: "/icons/fictional-company-logo/group-5-name.png",
    src: "/icons/fictional-company-logo/group-5-logo.png",
  },
];

const Patners = () => {
  return (
    <div className="pt-[10%]">
      <h2 className="uppercase text-subheading font-bold text-center">
        our clinic patners
      </h2>

      <div className="w-full overflow-hidden relative">
        <div className="flex space-x-8 marquee">
          <LogoMarquee />
          <LogoMarquee ariaHidden={true} />
        </div>
      </div>
    </div>
  );
};

const LogoMarquee = ({ ariaHidden }) => {
  return (
    <>
      {logoLayout.map((logo, index) => (
        <div
          className="flex flex-col items-center shrink-0 w-[120px] marquee__content"
          key={index}
          aria-hidden={ariaHidden ? "true" : undefined}
        >
          <Image source={logo.src} className="w-24 h-auto object-contain" />
          <Image source={logo.name} className="w-20 h-auto pt-2" />
        </div>
      ))}
    </>
  );
};
export default Patners;
