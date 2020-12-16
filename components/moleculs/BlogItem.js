import React from "react";
import ItemList from "../atoms/ItemList";
import { listBlogs } from "../../utils/data";

const BlogItem = () => {
  const listBlog = listBlogs.filter(function (blog) {
    return blog.id < 4;
  });
  console.log(listBlog);
  return (
    <div className="container mx-auto px-5 lg:mt-44 mt-24">
      <h2 className="text-blue-500 dark:text-cyan-400 uppercase tracking-widest text-xl mb-4">
        Latest Writings
      </h2>
      {listBlog.map((post) => (
        <ItemList key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogItem;
