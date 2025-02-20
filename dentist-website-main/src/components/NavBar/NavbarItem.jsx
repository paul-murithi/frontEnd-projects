import React from "react";

const NavbarItem = ({ href, label }) => {
  return (
    <>
      <a
        href={href}
        className={`${
          label == "Home" ? "text-titleBlue underline" : ""
        } hover:text-linkHover`}
      >
        {label}
      </a>
    </>
  );
};

export default NavbarItem;
