import React from "react";
import {
  FaSearch,
  FaPlusCircle,
  FaBell,
  FaUserCircle,
  FaPen,
} from "react-icons/fa";

function Header({ toggleButton }) {
  return (
    <div className="flex p-3 justify-between pl-5 pr-5 relative bg-white items-center">
      {toggleButton}

      <div className="flex items-center gap-5">
        <FaBell className="text-[25px] text-gray-600 cursor-pointer" />

        <FaUserCircle className="text-[30px] text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
