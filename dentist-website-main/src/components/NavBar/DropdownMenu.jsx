import React from "react";
import Image from "../Image/Image";

import downIcon from "../../assets/icons/down-chevron.png";
import downIconHover from "../../assets/icons/down-chevron-hover.png";

const DropdownMenu = ({ label, items }) => {
  return (
    <div className="flex">
      <a
        href="#"
        className="flex items-center hover:text-linkHover group relative"
      >
        <span>{label}</span>
        <div className="relative w-7 h-7">
          <Image
            alt={label}
            source={downIcon}
            height="28px"
            width="28px"
            className="absolute left-0 top-0 transition-all duration-200 ease-in-out group-hover:opacity-0"
          />
          <Image
            alt={label}
            source={downIconHover}
            height="28px"
            width="28px"
            className="absolute left-0 top-0 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
      </a>
    </div>
  );
};

export default DropdownMenu;
