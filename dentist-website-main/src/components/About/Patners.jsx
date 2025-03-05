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

const Patners = () => {
  return (
    <div className="pt-[10%]">
      <h2 className="uppercase text-subheading font-bold text-center">
        our clinic patners
      </h2>

      <div
        className="flex flex-row flex-nowrap items-center space-x-8 overflow-x-auto scrollbar-hide w-full px-4 py-[10%]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {logoLayout.map((logo, index) => (
          <div
            className="flex flex-col items-center shrink-0 w-[120px]"
            key={index}
          >
            <Image source={logo.src} className="w-24 h-auto object-contain" />
            <Image source={logo.name} className="w-20 h-auto pt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patners;
