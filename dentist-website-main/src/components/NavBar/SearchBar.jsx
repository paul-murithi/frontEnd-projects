import React from "react";

import searchIcon from "../../assets/icons/search-icon.png";
import Image from "../Image/Image";

const SearchBar = () => {
  return (
    <div className="bg-white flex py-1 px-2 rounded-3xl focus-within:ring-1">
      <input
        type="search"
        placeholder="Search In here"
        className="p-1.5 rounded-3xl focus:outline-none"
      />
      <button title="search">
        <Image source={searchIcon} height="24px" />
      </button>
    </div>
  );
};

export default SearchBar;
