import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">
        REACT DATA ANALYTICS
      </h1>
      <ul className="hidden md:flex text-lg cursor-pointer">
        <li className="p-4 hover:text-violet-600">Home</li>
        <li className="p-4 hover:text-violet-600">Company</li>
        <li className="p-4 hover:text-violet-600">Resources</li>
        <li className="p-4 hover:text-violet-600">About</li>
        <li className="p-4 hover:text-violet-600">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">MENU</h1>
        <li className="p-4 border-b border-gray-600 hover:text-violet-600">Home</li>
        <li className="p-4 border-b border-gray-600 hover:text-violet-600">Company</li>
        <li className="p-4 border-b border-gray-600 hover:text-violet-600">Resources</li>
        <li className="p-4 border-b border-gray-600 hover:text-violet-600">About</li>
        <li className="p-4 hover:text-violet-600">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
