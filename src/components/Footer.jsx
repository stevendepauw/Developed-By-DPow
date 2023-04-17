import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#97D6D0] border-t-4 border-red-400">
      <ul className="hidden md:flex ">
        <li className="hover:text-red-400">
          {" "}
          <Link to="home" smooth={true} duration={500}>
            LinkedIn
          </Link>
        </li>
        <li className="hover:text-red-400">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            GitHub
          </Link>
        </li>
        <li className="hover:text-red-400">
          {" "}
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
