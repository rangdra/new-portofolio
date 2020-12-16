import React from "react";
import Navbar from "../components/moleculs/Navbar";
import Footer from "../components/moleculs/Footer";
import CardProject from "../components/atoms/CardProject";
import TitlePage from "../components/atoms/TitlePage";
import { listCardProjects } from "../utils/data";
import PageTitle from "../components/atoms/PageTitle";

const projects = () => {
  return (
    <>
      <PageTitle title="Projects" />
      <div className="dark:bg-gray-800">
        <Navbar />
        <div className="container mx-auto px-5">
          <TitlePage
            title="Projects"
            subtitle="Collection of web and game development side projects."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {listCardProjects.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>
          <TitlePage
            title="Web Development Skills"
            subtitle="Skills I learned during the quarantine"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:mb-0 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1 dark:text-white">
                Front-end Development
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                React: CRA and NextJs
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Tailwind CSS and Component Libraries
              </p>{" "}
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Bootstrap
              </p>{" "}
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Jest & React Testing Library
              </p>{" "}
              <p className="text-lg text-gray-500 dark:text-gray-400">
                SEO-friendly and Accessible Designs
              </p>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                Back-end Development
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                ExpressJs
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Mongo DB
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default projects;
