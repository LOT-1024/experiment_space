import React from "react";
import { Link, useLocation } from "react-router-dom";

const navList = [
  {
    numlist: "00",
    link: "/",
    title: "HOME",
  },
  {
    numlist: "01",
    link: "/destination",
    title: "DESTINATION",
  },
  {
    numlist: "02",
    link: "/crew",
    title: "CREW",
  },
  {
    numlist: "03",
    link: "/technology",
    title: "TECHNOLOGY",
  },
];

const Navbar: React.FC = () => {
  
  return (
    <div className="flex justify-between h-full">
      <div className="w-1/4 flex justify-center items-center">
        <img className="h-[65%]" src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div className="hidden md:block"></div>
      <nav className="hidden sm:block"></nav>
      <div className="w-1/4 flex justify-center items-center sm:hidden">
        <img className="h-1/3" src="/assets/shared/icon-hamburger.svg" alt="hamburger-button" />
      </div>
    </div>
  );
};

export default Navbar;
