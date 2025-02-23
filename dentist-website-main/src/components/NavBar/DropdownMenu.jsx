import React, { useState } from "react";
import Image from "../Image/Image";

import downIcon from "../../assets/icons/down-chevron.png";
import downIconHover from "../../assets/icons/down-chevron-hover.png";

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href="#"
        className="flex items-center hover:text-linkHover relative"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <div className="relative w-7 h-7">
          <Image
            alt={label}
            source={downIcon}
            height="28px"
            width="28px"
            className={`absolute left-0 top-0 transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            alt={label}
            source={downIconHover}
            height="28px"
            width="28px"
            className={`absolute left-0 top-0 transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </a>

      {isOpen && (
        <div
          className="absolute left-0 top-full bg-white shadow-lg rounded-lg py-2 w-40 z-50"
          role="menu"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 hover:bg-gray-200 text-black"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
