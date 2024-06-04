import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaProductHunt, FaGifts, FaMoneyCheckAlt } from "react-icons/fa";
import { MdMessage, MdPermMedia } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

export default function SideNavBar() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <IoHome />,
    },
    {
      id: 2,
      name: "Products",
      path: "/Products",
      icon: <FaProductHunt />,
    },
    {
      id: 3,
      name: "Orders",
      path: "/Order",
      icon: <FaGifts />,
    },
    {
      id: 4,
      name: "Payment",
      path: "/Payment",
      icon: <FaMoneyCheckAlt />,
    },
    {
      id: 5,
      name: "Media Manager",
      path: "/Media_Manager",
      icon: <MdPermMedia />,
    },
    {
      id: 6,
      name: "Messages",
      path: "/Messages",
      icon: <MdMessage />,
    },
  ];

  return (
    <div className="p-5 bg-white shadow-sm border h-screen flex flex-col justify-between">
      <div>
        {/* LOGO Image */}
        <img
          src="/logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="p-2 mb-10"
        ></img>
        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setActive(item.path)}
          >
            <div
              className={`group flex gap-4 mt-3 p-[8px] pl-4 pr-4 text-[16px] items-center text-gray-700 cursor-pointer hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200
              ${active === item.path ? "bg-gray-700 text-white" : ""}`}
            >
              <i className="size-4">{item.icon}</i>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to="/Help"
          className="group flex gap-4 mt-3 p-[8px] pl-4 pr-4 text-[16px] items-center text-gray-700 cursor-pointer hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
        >
          <i className="size-4">
            <TfiHelpAlt />
          </i>
          Help
        </Link>
        {isLoggedIn ? (
          <Link
            to="/Logout"
            className="group flex gap-4 mt-3 p-[8px] pl-4 pr-4 text-[16px] items-center text-gray-700 cursor-pointer hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
            onClick={() => setIsLoggedIn(false)}
          >
            <i className="size-4">
              <FiLogOut />
            </i>
            Logout
          </Link>
        ) : (
          <Link
            to="/Login"
            className="group flex gap-4 mt-3 p-[8px] pl-4 pr-4 text-[16px] items-center text-gray-700 cursor-pointer hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
            onClick={() => setIsLoggedIn(true)}
          >
            <i className="size-4">
              <FiLogIn />
            </i>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
