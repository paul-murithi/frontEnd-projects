import React from "react";
import Image from "../Image/Image";

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

const scrollBarStyles = {};

const Patners = () => {
  return (
    <div className="pt-[10%]">
      <h2 className="uppercase text-subheading font-bold text-center">
        our clinic patners
      </h2>

      <div
        className="flex overflow-x-auto  gap-24 py-[10%]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {logoLayout.map((logo, index) => (
          <div className="flex" key={index}>
            <Image source={logo.src} />
            <Image source={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patners;
