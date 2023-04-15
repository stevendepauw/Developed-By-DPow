import React from "react";

const Resume = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-400 text-[#43AAA0] ">Experience and Skills</p>
          <p className="text-[#97D6D0] py-4">Some of the technologies that I have worked with are listed below </p>
          <p className="text-[#97D6D0]">To view my full resume <a href >Click Here</a></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <p className ="text-[#97D6D0]">HTML</p>
            <p className="text-[#97D6D0]">CSS </p>
            <p className="text-[#97D6D0]">JavaScript</p>
            <p className="text-[#97D6D0]">React</p>
            <p className="text-[#97D6D0]">Github</p>
            <p className="text-[#97D6D0]">Node JS</p>
            <p className="text-[#97D6D0]">SQL</p>
            <p className="text-[#97D6D0]">Tailwind CSS</p>
        </div>

       

      </div>
    </div>
  );
};

export default Resume;
