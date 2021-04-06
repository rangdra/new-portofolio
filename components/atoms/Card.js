import React from "react";
import Link from "next/link";
import Router from "next/router";

const Card = ({ image, title, tags, icon, bgIcon, linkHref, linkCode }) => {
  return (
    <div className="shadow-lg w-full transition-all duration-500 transform hover:scale-105 dark:bg-gray-50 ">
      <div className="relative">
        <img src={image} alt="" className="h-48 w-full object-cover" />
        <div className="absolute left-1/2 -bottom-10">
          <img
            onClick={() => Router.push("/projects/react-projects")}
            src={icon}
            alt="icon"
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

      {linkCode ? (
        <div className="py-4 px-4 bg-cyan-200 text-cyan-500 text-lg flex items-center justify-between">
          <div className=""></div>
          <a className="hover:text-cyan-400 hover:underline" href={linkHref}>
            View
          </a>
          <a className="hover:text-cyan-400 hover:underline" href={linkCode}>
            Code
          </a>
        </div>
      ) : (
        <div className="py-4 px-4 bg-cyan-200 text-cyan-500 text-lg text-center">
          <Link href={linkHref}>
            <a className="hover:text-cyan-400">View</a>
          </Link>
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  linkHref: "/",
};
export default Card;
