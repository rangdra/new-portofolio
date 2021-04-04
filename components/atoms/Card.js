import React from "react";

const Card = ({ image, title, tags, icon, bgIcon }) => {
  return (
    <div className="w-full shadow-lg transition-all duration-500 transform hover:scale-105">
      <div className="relative">
        <img src={image} alt="" className="h-48 w-full object-cover" />
        <div className="absolute left-1/2 -bottom-10">
          <img
            src={icon}
            alt=""
            className={`relative -left-1/2 h-20 w-20 object-cover border-8 border-gray-50 rounded-full cursor-pointer transition-all duration-200 animation-spin ${bgIcon}`}
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-12 mb-8">
        <h1 className="text-2xl tracking-wider text-gray-600 mb-4">{title}</h1>
        <div className="flex items-center">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="py-1 px-2 mr-2 font-light rounded bg-gray-300 text-gray-600"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 px-4 bg-cyan-200 text-cyan-500 text-lg flex justify-between items-center">
        <div className=""></div>
        <div className="hover:text-cyan-400">View</div>
        <div className="">Code</div>
      </div>
    </div>
  );
};

export default Card;
