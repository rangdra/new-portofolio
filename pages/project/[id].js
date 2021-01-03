import React, { useState } from "react";
import { listProjects } from "../../utils/data";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const DetailProject = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = listProjects.find((item) => item.id === id);
  const [tab, setTab] = useState(0);

  return (
    <Layout title="Detail Project">
      <div className="text-gray-800 dark:text-white flex items-center justify-center mt-8 cursor-pointer hover:bg-cyan-300 hover:text-white dark:hover:text-gray-800 w-28 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <p className="ml-1" onClick={() => router.back()}>
          Go Back
        </p>
      </div>
      <div className="my-4 lg:my-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <img
            src={project.images[tab]}
            className={`w-full border border-gray-400 p-1.5 mb-1`}
            style={{ height: "350px" }}
            alt="img-thumbnail"
            loading="lazy"
          />

          {project.images.length === 0
            ? "No images"
            : project.images.map((img, idx) => (
                <img
                  src={img}
                  className={`h-24 w-24 inline-flex border  mr-1 cursor-pointer ${
                    tab === idx ? "border-red-400 p-0.5" : "border-gray-400 p-1"
                  }`}
                  onClick={() => setTab(idx)}
                  loading="lazy"
                />
              ))}
        </div>
        <div className="w-full">
          <h2 className="text-3xl lg:mt-0 mt-6 text-gray-800 font-semibold dark:text-white">
            {project.title}
          </h2>
          <div className="flex justify-between items-center text-red-500 text-lg font-semibold">
            <p>{project.createdAt}</p>
          </div>
          <p className=" text-gray-400 my-8">{project.subtitle}</p>
          <div className="flex items-center">
            <a
              href={project.linkWeb}
              target="_blank"
              className="flex items-center mr-4 bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600"
            >
              <p className="text-white font-medium mr-1 hover:text-opacity-50 hover:underline">
                View
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={project.linkCode}
              className="flex items-center bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600"
            >
              <p className="text-white font-medium mr-1 hover:text-opacity-50 hover:underline">
                Code
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProject;
