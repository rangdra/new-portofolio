import ItemList from "../atoms/ItemList";
import { listProjects } from "../../utils/data";
import Link from "next/link";

const ProjectItem = () => {
  const listProject = listProjects.filter(function (blog) {
    return blog.id < 4;
  });
  return (
    <div className="lg:mt-24 mt-24">
      <h2 className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest text-xl mb-4">
        Projects
      </h2>
      {listProject.map((post) => {
        return (
          <Link key={listProject.id} href={`/project/${post.id}`}>
            <a>
              <ItemList key={post.id} post={post} />
            </a>
          </Link>
        );
      })}
      <Link href="/projects">
        <a className="w-full flex justify-end text-blue-400 pr-4 underline hover:opacity-50">
          View All Projects
        </a>
      </Link>
    </div>
  );
};

export default ProjectItem;
