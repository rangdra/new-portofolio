import React, { useRef } from "react";
import CardProject from "../../components/atoms/CardProject";

const NextjsProjects = ({ data }) => {
  const refProject = useRef();

  function showMostPicked() {
    window.scrollTo({
      top: refProject.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div
        className="sm:h-96 h-80  flex justify-center items-center bg-gray-200 flex-col"
        // style={{ height: 350 }}
      >
        <h1 className=" text-5xl font-extrabold text-gray-600 tracking-wider">
          Next Js
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-600 h-20 w-20 mt-8 animate-bounce cursor-pointer hover:text-gray-400"
          onClick={showMostPicked}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <section
        className="container mx-auto sm:px-24 px-5 mt-24"
        ref={refProject}
      >
        <h1 className="text-center text-4xl text-gray-800 font-semibold tracking-wide">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 gap-y-8 my-12">
          {data.map((item) => (
            <CardProject
              key={item?.id}
              image={item?.image}
              title={item?.title}
              tags={item?.tags}
              linkWeb={item?.linkWeb}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  const { nextjs_projects } = await res.json();

  return {
    props: {
      data: nextjs_projects,
    },
  };
};
export default NextjsProjects;
