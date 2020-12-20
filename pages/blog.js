import ItemList from "../components/atoms/ItemList";
import TitlePage from "../components/atoms/TitlePage";
import { listBlogs } from "../utils/data";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout title="Blog">
      <TitlePage
        title="Blogs"
        subtitle="I write about things I learn in web development and also stuff that I find interesting."
        className="my-10 lg:mt-20 lg:mb-10"
      />
      {listBlogs.map((blog) => (
        <ItemList key={blog.id} post={blog} />
      ))}
    </Layout>
  );
};

export default Blog;
