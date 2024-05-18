import React from "react";
import logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
export default function Navber() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* {upper navber} */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center ">
          <div>
            <a
              href="#"
              className="flex uppercase items-center font-bold text-2xl sm:text-3xl  gap-3"
            >
              <img src={logo} alt="" className="w-10 " />
              Sopify
            </a>
          </div>
          <div>
            <div className="relative group ">
              <input
                type="text"
                placeholder="search..."
                className=" w-[200px] sm:w-[200px] 
                    group-hover:w-[300px] transition-all duration-300 
                    rounded-full border-gray-300
                    px-2 py-1 focus:outline-none  focus:border-1
                    focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-purple-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* button */}
          <button
            onClick={() => {
              alert("Hello");
            }}
            className="bg-gradient-to-r from-red-500 to-orange-500 border 
            rounded-lg relative 
            transition duration-700 ease-in-out
            text-white py-1 px-4
            flex items-center justify-center
            gap-3 group
            "
          >
            <span className="group-hover:block hidden transition duration-700 ease-in-out ">
              Order
            </span>
            <FaCartShopping />
          </button>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower navber */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden  items-center gap-6">
          {Menu.map((item, index) => (
            <li className=" hover:text-orange-500">
              <a href="#">{item.name}</a>
            </li>
          ))}
        <li className="group relative  ">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
             
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
