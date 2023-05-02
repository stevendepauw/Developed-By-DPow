import React from "react";
import WeatherApp from "../assets/weather-app.PNG";
import GameSpotlight from "../assets/game_spotlight.png";
import GameQuiz from "../assets/game_quiz.png";
import ReactPortfolio from "../assets/react-portfolio.png";
import SQLDemo from "../assets/sql-demo.png";
import OnlyDevs from "../assets/onlydevs.png";

const Portfolio = () => {
  return (
    <div
      id="portfolio_div"
      name="portfolio"
      className="w-full md:h-screen text-[#97D6D0] bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            Portfolio
          </p>
          <p className="py-6">You can check out some of my previous work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{ backgroundImage: `url(${SQLDemo})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                SQL Employee Tracker
              </span>

              <div className="pt-8 text-center">
                <a href="https://github.com/stevendepauw/SQL-Employee-Tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                Weather Forecast Application
              </span>

              <div className="pt-8 text-center">
                <a href="https://stevendepauw.github.io/Weather-Dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

                <a href="https://github.com/stevendepauw/Weather-Dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GameSpotlight})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                Gaming Spotlight
              </span>

              <div className="pt-8 text-center">
                <a href="https://alexbrenes999.github.io/project1/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

                <a href="https://github.com/alexbrenes999/project1">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GameQuiz})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                Gaming Quiz
              </span>

              <div className="pt-8 text-center">
                <a href="https://powerful-inlet-74359.herokuapp.com/login">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

                <a href="https://github.com/GarrettAnderson/gamers-gauntlet">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ReactPortfolio})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                React Portfolio
              </span>

              <div className="pt-8 text-center">
                <a href="https://stevendepauw.github.io/Weather-Dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

                <a href="https://github.com/stevendepauw/Developed-By-DPow">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${OnlyDevs})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                OnlyDevs
              </span>

              <div className="pt-8 text-center">
                <a href="https://od-test-kzg1pno3u-stevendepauw.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

                <a href="https://github.com/alexbrenes999/OnlyDevs">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
