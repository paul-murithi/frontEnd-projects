import React, { useEffect, useState } from "react";
// components
import NavbarItem from "./NavbarItem";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import Image from "../Image/Image";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
// Images
import logo from "../../assets/icons/Frame.png";
import location from "../../assets/icons/location.png";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    dropdown: true,
    items: ["Team", "Pricing"],
  },
  {
    label: "Blog",
    dropdown: true,
    items: ["LatestPosts", "Categories"],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const RightNavSection = ({ linkText }) => {
  return (
    <div className="hidden lg:flex gap-3">
      {" "}
      <Image source={location} alt={"icons"} className="max-h-10" />
      <p className="text-textLight capitalize">{linkText}</p>
    </div>
  );
};

export const LogoContent = () => {
  return (
    <>
      <div className="logo mx-2">
        <Image source={logo} alt={"Logo"} />
      </div>
      <div className="name-title">
        <p className="text-2xl text-blue-700 font-extrabold">Confident</p>
        <p className="text-blue-600 capitalize">dental care clinic</p>
      </div>
    </>
  );
};

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

  return (
    <nav
      className={`bg-background pb-24 ${
        isMobileMenuOpen ? "bg-white overflow-hidden" : ""
      }`}
      role="navigation"
      aria-expanded={isMobileMenuOpen}
    >
      <Header
        toggleMobileMenu={toggleMobileMenu}
        isMenuOpen={isMobileMenuOpen}
      />
      <div className="bg-stroke h-0.5 w-full"></div>
      <div
        data-description="sub-header"
        className={`bg-navBG w-4/5 m-auto  justify-evenly items-center font-bold mt-6 p-4 rounded-3xl lg:flex hidden`}
      >
        {navLinks.map((link, index) =>
          link.dropdown ? (
            <DropdownMenu key={index} label={link.label} items={link.items} />
          ) : (
            <NavbarItem key={index} href={link.href} label={link.label} />
          )
        )}
        <SearchBar />
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </nav>
  );
};

export default NavBar;
