import React from "react";

function Card({ cityName, tagline, description, imageUrl }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden md:flex shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2">
      {/* 1. IMAGE SECTION */}
      <div className="md:shrink-0 overflow-hidden">
        <img
          className="h-32 w-full object-cover md:h-full md:w-40 transition-transform duration-700 group-hover:scale-110"
          src={imageUrl}
          alt={`A view of ${cityName}`}
        />
      </div>
      {/* 2. TEXT SECTION */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="uppercase tracking-widest text-[10px] text-indigo-600 font-bold">
            {tagline}
          </div>

          <div className="block mt-1 text-lg leading-tight font-bold text-slate-800">
            {cityName}
          </div>

          <p className="mt-2 text-xs text-slate-500 line-clamp-2 italic">
            {description}
          </p>
        </div>

        {/* 3. THE "SEXY" BUTTON */}
        <div className="mt-4">
          <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group/btn">
            {/* The sliding background with the Arrow */}
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>

            {/* The original text that slides out */}
            <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Explore Now
            </span>

            {/* Maintains the button's physical size */}
            <span className="relative invisible">Explore Now</span>
          </button>
        </div>
      </div>{" "}
      {/* CLOSED TEXT SECTION */}
    </div> // CLOSED MAIN CONTAINER
  );
}

export default Card;
