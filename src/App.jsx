import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 md:pt-10 mb-0">
        <div className="px-2 sm:px-6 md:px-6 md:pb-0 md:pt-8 items-center bg-blue-50 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-6 rounded-2xl relative shadow-2xl">
          <div className="px-2 sm:px-6 md:px-16 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              We Are <br /> Concerned <br /> About Water
            </h1>
            <ul className="space-y-2 mb-4 sm:mb-6 flex flex-col justify-center sm:justify-start items-center sm:items-start">
              <li className="bg-blue-500 text-white font-medium px-3 sm:px-6 py-2 rounded-full w-fit shadow text-sm sm:text-base">
                Non-expiry formula
              </li>
              <li className="bg-blue-500 text-white font-medium px-3 sm:px-6 py-2 rounded-full w-fit shadow text-sm sm:text-base">
                Bacteria-free technology
              </li>
              <li className="bg-blue-500 text-white font-medium px-3 sm:px-6 py-2 rounded-full w-fit shadow text-sm sm:text-base">
                Health benefits
              </li>
            </ul>
            <button className="bg-blue-500 text-white font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-full shadow hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <div className="flex justify-center rounded-2xl mb-4 sm:mb-6 md:mb-0">
            <img
              src="/assets/image2.png"
              alt="Doctor"
              className="w-40 sm:w-60 md:w-72 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute z-50 -bottom-20 sm:-bottom-20 md:-bottom-5 left-0 w-full">
        <svg
          className="w-full h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[220px]"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,320 1120,320 1440,0"
            stroke="#fff"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0,0 C320,320 1120,320 1440,0 L1440,500 L0,500 Z"
            fill="#D7E0E7"
            filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
          />
        </svg>
      </div>

      <div className="bg-[#D7E0E7] w-full min-h-screen mt-0 sm:mt-6 md:mt-6 px-4 sm:px-6 md:px-10 py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-20 p-4 sm:p-6 md:p-10 border-t">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Current situation
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Approximately 2.4 billion people do not have access to safe
              drinking water and 3.5 billion people do not have access to clean
              drinking water. This problem is increasing due to the rapidly
              increasing population. Poor water management has further
              aggravated the crisis.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Health impact of contaminated water
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Every 33 seconds a person dies from heart disease across the world
              and around 26,300 people die daily. Contaminated water releases
              harmful bacteria and micro plastics which lead to health problems
              like cancer, and also cause high blood pressure and heart
              problems.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-10 bg-[#EEF3F7] rounded-2xl shadow-lg my-4 sm:my-6 md:my-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-3">
          <div>
            <h1 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              Aqua Edition <br /> Pvt. Ltd.
            </h1>
            <p className="text-sm sm:text-base">
              Revolutionary water <br /> technology Groundbreaking <br />{" "}
              invention that eliminates the <br /> expiration date on bottled
              water
            </p>
            <li className="bg-blue-500 text-white font-medium px-3 sm:px-6 py-2 rounded-full w-fit shadow mt-2 sm:mt-4">
              Our mission safe water
            </li>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/assets/image1.png"
              alt="water"
              className="h-40 sm:h-60 md:h-60 w-auto object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              Provide non expiry water <br /> Pvt. Ltd.
            </h1>
            <p className="text-sm sm:text-base">
              We are committed to producing safe drinking water. The substance
              we discovered when added to water ensures lifelong freshness and
              health.
            </p>
            <li className="bg-blue-500 text-white font-medium px-3 sm:px-6 py-2 rounded-full w-fit shadow mt-2 sm:mt-4">
              Purification technologies
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
