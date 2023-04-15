import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [Nav, setNav] = useState(false)
    const handleClick = () => setNav(!Nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Regular Nav Menu */}
      <ul className="hidden md:flex">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Skills/Resume</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav Menu */}
      <ul className={!Nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Skills/Resume</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
