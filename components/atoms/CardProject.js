import React from "react";

const Cardproject = ({ image, title, tags, linkWeb }) => {
  return (
    <div className="w-full shadow-lg transition-all duration-500 transform hover:scale-105">
      <div className="relative">
        <img src={image} alt="" className="h-48 w-full object-cover" />
        <div className="absolute left-1/2 -bottom-10">
          <a href={linkWeb} target="_blenk" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`relative p-2 -left-1/2 h-20 w-20  border-8 border-white rounded-full cursor-pointer transition-all duration-900 bg-gray-300 hover:bg-gray-500 text-gray-500 hover:text-gray-100`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-12 mb-8 sm:p-0 p-4">
        <h1 className="text-xl tracking-wider text-gray-600 mb-4 text-center px-2">
          {title}
        </h1>
        <div className="flex items-center flex-wrap justify-center">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="py-1 px-2 mr-2 mb-2 font-light rounded bg-gray-300 text-gray-600"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
