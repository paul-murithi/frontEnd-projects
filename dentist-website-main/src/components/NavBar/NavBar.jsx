import React, { useEffect } from "react";
// components
import NavbarItem from "./NavbarItem";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import AppointmentButton from "./AppointmentButton";
import Image from "../Image/Image";
// Images
import logo from "../../assets/icons/Frame.png";
import location from "../../assets/icons/location.png";
import menu from "../../assets/icons/BURGER.png";

const navLinks = [
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

const RightNavSection = ({ linkText }) => {
  return (
    <div className="hidden lg:flex gap-3">
      {" "}
      <Image source={location} alt={"icons"} className="max-h-10" />
      <p className="text-textLight capitalize">{linkText}</p>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-background pb-24">
      <header
        id="top-header"
        className="flex justify-between w-10/12 m-auto"
        data-description="top-header"
      >
        <div className="logo-name flex items-center h-20">
          <button className="menu mr-6 lg:hidden" title="menu">
            <Image source={menu} alt={"Hamburger Menu"} />
          </button>
          <div className="logo mx-2">
            <Image source={logo} alt={"Logo"} />
          </div>
          <div className="name-title">
            <p className="text-2xl text-blue-700 font-extrabold">Confident</p>
            <p className="text-blue-600 capitalize">dental care clinic</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-8">
          <RightNavSection linkText={"st. sanguin number 40"} />
          <RightNavSection linkText={"+251-11-034-690"} />
          <>
            <AppointmentButton />
          </>
        </div>
      </header>
      <div className="bg-stroke h-0.5 w-full"></div>
      <div
        data-description="sub-header"
        className="bg-navBG w-4/5 m-auto  justify-evenly items-center font-bold mt-6 p-4 rounded-3xl lg:flex hidden"
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
    </nav>
  );
};

export default NavBar;
