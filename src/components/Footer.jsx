import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import {HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-[80px] flex justify-center items-center px-4  bg-[#0a192f] text-[#97D6D0] border-t-4 border-red-400">
      <ul className="flex ">
        <li className="flex justify-between items-center hover:text-red-400">
          <a className="flex flex-col items-center" href="https://www.linkedin.com/"><FaLinkedin size={30} /> LinkedIn</a>
        </li>

        <li className="hover:text-red-400">
          <a className="flex flex-col items-center" href="https://github.com/stevendepauw"><FaGithub size={30}/> GitHub</a>
        </li>

        <li className="hover:text-red-400"> <Link className="flex flex-col items-center" to="contact" smooth={true}  duration={500}>
          <HiOutlineMail size={30}/>Contact
        </Link></li>
      </ul>
    </div>
  );
};

export default Footer;
