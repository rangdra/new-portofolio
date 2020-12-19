import ItemList from "../atoms/ItemList";
import { listCardProjects } from "../../utils/data";
import Link from "next/link";

const ProjectItem = () => {
  const listProject = listCardProjects.filter(function (blog) {
    return blog.id < 4;
  });
  return (
    <div className="container lg:mt-40 mt-24 mx-auto px-5">
      <h2 className="text-blue-500 dark:text-cyan-400 uppercase tracking-widest text-xl mb-4">
        Projects
      </h2>
      {listProject.map((post) => {
        return <ItemList key={post.id} post={post} />;
      })}
      <Link href="/projects">
        <a className="w-full flex justify-end text-blue-500 pr-4 underline hover:opacity-50">
          View All Projects
        </a>
      </Link>
    </div>
  );
};

export default ProjectItem;
