import ItemList from "../atoms/ItemList";
import { listBlogs } from "../../utils/data";
import Link from "next/link";

const BlogItem = () => {
  const listBlog = listBlogs.filter(function (blog) {
    return blog.id < 4;
  });
  return (
    <div className="container mx-auto px-5 lg:mt-44 mt-24">
      <h2 className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest text-xl mb-4">
        Latest Writings
      </h2>
      {listBlog.map((post) => (
        <ItemList key={post.id} post={post} />
      ))}
      <Link href="/blog">
        <a className="w-full flex justify-end text-blue-400 pr-4 underline hover:opacity-50">
          View All Blogs
        </a>
      </Link>
    </div>
  );
};

export default BlogItem;
