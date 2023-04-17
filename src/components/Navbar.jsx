import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'


const Navbar = () => {
    const [Nav, setNav] = useState(false)
    const handleClick = () => setNav(!Nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#97D6D0] border-b-4 border-red-400">
      {/* Regular Nav Menu */}
      <ul className="hidden md:flex ">
        <li className="hover:text-red-400"> <Link to="home" smooth={true}  duration={500}>
          About Me
        </Link></li>
        <li className="hover:text-red-400"> <Link to="skills" smooth={true}  duration={500}>
          Skills/Resume
        </Link></li>
        <li className="hover:text-red-400"> <Link to="portfolio" smooth={true}  duration={500}>
          Portfolio
        </Link></li>
        <li className="hover:text-red-400"> <Link to="contact" smooth={true}  duration={500}>
          Contact
        </Link></li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className="md:hidden z-10 px-2">
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav Menu */}
      <ul className={!Nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="hover:text-red-400 py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true}  duration={500}>
          About Me
        </Link></li>
        <li className="hover:text-red-400 py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
          Skills/Resume
        </Link></li>
        <li className="hover:text-red-400 py-6 text-4xl"><Link onClick={handleClick} to="portfolio" smooth={true}  duration={500}>
          Portfolio
        </Link></li>
        <li className="hover:text-red-400 py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
          Contact
        </Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
