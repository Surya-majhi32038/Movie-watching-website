import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const NavDesk = () => {
  return (
    <ul className="flex md:space-x-4   md-xsm:bg-gray-800  md-xsm:flex-col md-xsm:pl-[70%] md-xsm:pb-2  transition-all duration-500  md-xsm:gap-2  md:flex-row ">
      <li>
        <NavLink
          to="/"
          className="text-white  hover:bg-gray-700 px-3 py-2 rounded"
        //   style={({ isActive }) => ({
        //     color: isActive ? "orange" : "white",
        //   })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="text-white  hover:bg-gray-700 px-3 py-2 rounded"
        //   style={({ isActive }) => ({
        //     color: isActive ? "orange" : "white",
        //   })}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movie"
          className="text-white  hover:bg-gray-700 px-3 py-2 rounded"
        //   style={({ isActive }) => ({
        //     color: isActive ? "orange" : "white",
        //   })}
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className="text-white  hover:bg-gray-700 px-3 py-2 rounded"
        //   style={({ isActive }) => ({
        //     color: isActive ? "orange" : "white",
        //   })}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="bg-gray-800 p-4 md:top-0  md:sticky top-0 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold w-screen">
          MyApp
        </NavLink>
        <div>
          <div className="md-xsm:hidden ">
            <NavDesk />
          </div>
          <div className="md:hidden mr-2 flex flex-wrap">
                <button onClick={toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </div>
    </nav>
    {isOpen && (
        <div className={`bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`} >
        <NavDesk />
      </div>
    )}
    </>
    
  );
};

export default Nav;
