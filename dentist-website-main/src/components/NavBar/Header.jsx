import React from "react";

import { RightNavSection } from "./NavBar";
import AppointmentButton from "./AppointmentButton";
import Image from "../Image/Image";
import { LogoContent } from "./NavBar";

import menu from "../../assets/icons/BURGER.png";

const Header = ({ toggleMobileMenu, isMenuOpen }) => {
  return (
    <header
      id="top-header"
      className={`flex justify-between w-10/12 m-auto ${
        isMenuOpen ? "hidden" : ""
      }`}
      data-description="top-header"
    >
      <div className="logo-name flex items-center h-20">
        <button
          className="menu mr-6 lg:hidden"
          title="menu"
          onClick={toggleMobileMenu}
        >
          <Image source={menu} alt={"Hamburger Menu"} />
        </button>
        <LogoContent />
      </div>

      <div className="flex items-center justify-between gap-8">
        <RightNavSection linkText={"st. sanguin number 40"} />
        <RightNavSection linkText={"+251-11-034-690"} />
        <>
          <AppointmentButton />
        </>
      </div>
    </header>
  );
};

export default Header;
