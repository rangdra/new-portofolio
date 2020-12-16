import React from "react";
import Navbar from "../components/moleculs/Navbar";
import Footer from "../components/moleculs/Footer";
import PageTitle from "../components/atoms/PageTitle";

const about = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="dark:bg-gray-800">
        <Navbar />
        <div className="container mx-auto px-5 mt-12 lg:mt-20">
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              About Me
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              I'm Rangdra Pangestu, I work full-time as a game programmer at
              Secret 6, Inc. In my free time, I study front-end development with
              React. My goal is to write useful apps and contribute to open
              source projects while working a full-time job .
            </p>
          </div>
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              Why make this website?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              I made this website to learn what actually goes into web
              development. From planning, design, development, launch, and
              maintenance. For sure there are other things that I have yet to
              encounter, and I’m ready to learn them.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              I made this website to learn what actually goes into web
              development. From planning, design, development, launch, and
              maintenance. For sure there are other things that I have yet to
              encounter, and I’m ready to learn them.
            </p>
          </div>
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              Why write a blog?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              My first blog post explained it. I'd be happy if you read it :)
            </p>
          </div>
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              What else?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              When I’m not programming, I endlessly browse Reddit (/r/gamedev,
              /r/webdev, /r/animalsbeingderps). I also love watching movies and
              listening to awesome music. You can catch me playing games
              sometimes, I play as xKore, xKored, or xKoreddd.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default about;
