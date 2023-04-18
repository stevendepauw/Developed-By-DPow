import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Node from "../assets/node.png";
import ReactIcon from "../assets/react.png";
import GraphQL from "../assets/GraphQL.png";
import Tailwind from "../assets/tailwind.png";

const Resume = () => {
  return (
    <div name="skills" className="w-full h-screen px-2  bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-400 text-[#43AAA0] ">
            Skills
          </p>

          <p className="text-[#97D6D0] py-4">
            Here are some of the technologies that I have worked with listed below
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div  className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="text-[#97D6D0]">HTML</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="text-[#97D6D0]">CSS</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img
              className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="text-[#97D6D0]">JavaScript</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="text-[#97D6D0]">GitHub</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={Node} alt="NodeJS icon" />
            <p className="text-[#97D6D0]">NodeJS</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={ReactIcon} alt="React icon" />
            <p className="text-[#97D6D0]">React</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={GraphQL} alt="GraphQL icon" />
            <p className="text-[#97D6D0]">GraphQL</p>
          </div>

          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500" >
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="text-[#97D6D0]">Tailwind CSS</p>
          </div>
        </div>

        <div>
          <button className="text-[#97D6D0] border-2 border-current px-3 py-2 my-2 flex items-center hover:bg-red-400 hover:border-red-400">
            View Full Resume (Coming Soon){" "}
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
