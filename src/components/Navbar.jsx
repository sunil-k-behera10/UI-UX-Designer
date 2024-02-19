import React from "react";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full  ">
      <div className="flex">
        {/* Logo tag */}
        <h1 className="text-2xl font-bold p-5"> UI/UX Designer🚀</h1>

        {/* list tags */}

        <ul className="flex ml-32 py-4 text-center items-center">
          <li className=" p-3 w-20 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 rounded-md">
            Home 
          </li>
          <li className="flex p-3 w-24 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 rounded-md gap-1">
            Designer
            <span>
              <FaCaretDown className="mt-1" />
            </span>
          </li>
          <li className="p-3 w-20 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 rounded-md">
            Pages
          </li>
          <li className="flex p-3 w--20 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 rounded-md gap-1">
            Pricing
            <span>
              <FaCaretDown className="mt-1" />
            </span>
          </li>
          <li className="flex p-3 w-28 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 rounded-md gap-1">
            Resources
            <span>
              <FaCaretDown className="mt-1" />
            </span>
          </li>
        </ul>
      </div>

      {/* buttons */}
      <div className="font-bold ">
        <button className=" mr-2 px-5 py-3 text-black rounded-full bg-white">
          Log in
        </button>
        <button className="bg-black px-5 py-3 text-white rounded-full mr-5 ">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
