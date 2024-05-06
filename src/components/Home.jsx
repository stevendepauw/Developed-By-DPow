import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-red-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#43AAA0]">
          Steven DePauw
        </h1>
        <h2 className="text-4xl sm:text-7-xl font-bold text-[#97D6D0]">
          Full Stack Developer
        </h2>
        <p className="text-[#97D6D0] py-4 max-w-[700px]">
          I'm a full stack developer who recently completed the University of
          Central Florida's Full Stack Web Development bootcamp. I got my first
          look at web development after seeing some classmates messing around
          with it when I first started college and I have been hooked on it ever
          since.
        </p>

        <div>
          <button className="text-[#97D6D0] border-2 border-current px-3 py-2 my-2 flex items-center hover:bg-red-400 hover:border-red-400">
            {" "}
            <Link to="portfolio" smooth={true} duration={500}>
              View Portfolio
            </Link>
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
