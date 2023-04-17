import React from "react";
import WeatherApp from "../assets/weather-app.PNG";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-screen text-[#97D6D0] bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            Portfolio
          </p>
          <p className="py-6">You can check out some of my previous work</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 ">
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-red-400 group container rounded-md flex justify-center items-center mx-auto portfolio-backgrounds my-1"
          >
            <div className="opacity-0 group-hover:opacity-100 p-2 ">
              <span className="text-2xl font-bold text-white tracking-wider  ">
                SQL Employee Tracker
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    View Demo
                  </button>
                </a>

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

        </div>

      </div>
    </div>
  );
};

export default Portfolio;
