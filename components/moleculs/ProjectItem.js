import ItemList from "../atoms/ItemList";
import { listProjects } from "../../utils/data";

const ProjectItem = () => {
  const listProject = listProjects.filter(function (blog) {
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
    </div>
  );
};

export default ProjectItem;
