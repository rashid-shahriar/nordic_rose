import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/images/nordic_rose_logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b border-gray-200">
      <div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black ">
        <img
          src={Logo}
          alt="Nordic Rose Logo"
          className="mr-3 h-6 sm:h-6"
        ></img>
        <ul className="hidden md:flex font-new_york_reg text-base">
          <li className="p-4">
            <a
              href="#blog"
              className="inline-block py-7 active border-b-2 border-transparent border-gray-800 "
            >
              BLOG
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="inline-block py-7 border-b-2 border-transparent hover:border-gray-800 "
            >
              ABOUTS
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="inline-block py-7 border-b-2 border-transparent hover:border-gray-800 "
            >
              LINKS
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="inline-block py-7 border-b-2 border-transparent hover:border-gray-800 "
            >
              PROJECTS
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "bg-white opacity-90 fixed left-0 top-0 w-[80%] h-full border-r ease-in-out duration-500 pt-24 md:hidden font-new_york_reg text-base"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <li className="p-4 border-b border-gray-600">BLOG</li>
          <li className="p-4 border-b border-gray-600">ABOUTS</li>
          <li className="p-4 border-b border-gray-600">LINKS</li>
          <li className="p-4 border-b border-gray-600">PROJECTS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
