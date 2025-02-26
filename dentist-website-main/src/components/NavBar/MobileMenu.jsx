import React from "react";
import { LogoContent } from "./NavBar";

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
    </div>
  );
};

export default MobileMenu;
