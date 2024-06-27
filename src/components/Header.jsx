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
      {/* Left section */}
      {/* <div className="relative flex items-center w-full lg:mx-36 sm:mx-6">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search or type Command ..."
          className="outline-none border border-gray-300 rounded-full px-10 py-2 text-md w-full"
        />
      </div> */}
      {/* Right section */}
      <div className="flex items-center gap-5">
        <button className="flex justify-center items-center gap-2 font-bold bg-blue-700 text-white">
          <FaPlusCircle /> Create
        </button>
        <FaBell className="text-[25px] text-gray-600 cursor-pointer" />
        <FaPen className="text-[20px] text-gray-600 cursor-pointer" />
        <FaUserCircle className="text-[30px] text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
