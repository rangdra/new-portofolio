import React, { useRef } from "react";
import CardProject from "../../components/atoms/CardProject";

const ReactProjects = ({ basic, advance }) => {
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
        className="sm:h-96 h-80 flex justify-center items-center bg-gray-800 flex-col"
        // style={{ height: 350 }}
      >
        <h1 className=" text-5xl text-center font-extrabold text-blue-400 tracking-wider">
          React Projects
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-blue-400 h-20 w-20 mt-8 animate-bounce cursor-pointer hover:text-blue-300"
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
          Basic Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 gap-y-8 mt-12">
          {basic.map((item) => (
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
      <section className="container mx-auto sm:px-24 px-5 mt-24">
        <h1 className="text-center text-4xl text-gray-800 font-semibold tracking-wide">
          Advance Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 gap-y-8 my-12">
          {advance.map((item) => (
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
  const {
    react_projects: { basic, advance },
  } = await res.json();

  return {
    props: {
      basic,
      advance,
    },
  };
};
export default ReactProjects;
