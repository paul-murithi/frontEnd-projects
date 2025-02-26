import React from "react";
import { LogoContent } from "./NavBar";
import { navLinks } from "./NavBar";
import DropdownMenu from "./DropdownMenu";
import NavbarItem from "./NavbarItem";

import Image from "../Image/Image";
import closeMenu from "../../assets/icons/CLOSE-BUTTON.png";

const MobileMenu = ({ onClose }) => {
  return (
    <div className={`w-3/4 md:w-1/2 h-full bg-background z-50 top-0 fixed`}>
      <button
        className="absolute top-8 right-4 text-white"
        onClick={onClose}
        title="Close Menu"
      >
        <Image source={closeMenu} />
      </button>
      <div className="flex items-center bg-navBG p-4">
        <LogoContent />
      </div>
      <div className="flex flex-col uppercase px-4 h-1/2 w-2/3 md:w-1/2 justify-evenly font-extrabold">
        {navLinks.map((link, index) =>
          link.dropdown ? (
            <DropdownMenu key={index} label={link.label} items={link.items} />
          ) : (
            <NavbarItem key={index} href={link.href} label={link.label} />
          )
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
