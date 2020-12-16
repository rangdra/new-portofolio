import React from "react";
import Navbar from "../components/moleculs/Navbar";
import Footer from "../components/moleculs/Footer";
import ItemList from "../components/atoms/ItemList";
import TitlePage from "../components/atoms/TitlePage";
import { listBlogs } from "../utils/data";
import PageTitle from "../components/atoms/PageTitle";

const blog = () => {
  return (
    <>
      <PageTitle title="Blog" />
      <div className="dark:bg-gray-800">
        <Navbar />
        <div className="container mx-auto px-5">
          <TitlePage
            title="Blogs"
            subtitle="I write about things I learn in web development and also stuff that I find interesting."
            className="my-10 lg:mt-20 lg:mb-10"
          />
          {listBlogs.map((blog) => (
            <ItemList key={blog.id} post={blog} />
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default blog;
