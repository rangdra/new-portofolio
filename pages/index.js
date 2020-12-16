import React from "react";
import BlogItem from "../components/moleculs/BlogItem";
import Footer from "../components/moleculs/Footer";
import Hero from "../components/moleculs/Hero";
import Navbar from "../components/moleculs/Navbar";
import ProjectItem from "../components/moleculs/ProjectItem";
import PageTitle from "../components/atoms/PageTitle";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="dark:bg-gray-800">
        <Navbar />
        <Hero />
        <BlogItem />
        <ProjectItem />
        <Footer />
      </div>
    </>
  );
};

export default Home;
