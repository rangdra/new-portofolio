import Link from "next/link";

const CardProject = ({ project }) => {
  return (
    <div className="card  bg-gray-100 dark:bg-gray-900 py-5 px-6 rounded-lg relative">
      <span className="flex h-3 w-3 absolute -top-1 -right-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 dark:bg-gray-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500 dark:bg-white"></span>
      </span>
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 dark:text-white text-3xl font-semibold">
          {project.title}
        </h1>
        <p className="text-gray-500 font-medium dark:text-gray-400">
          {project.createdAt}
        </p>
      </div>
      <h3 className="text-gray-500 w-3/4 text-lg dark:text-gray-400 mb-12">
        {project.subtitle}
      </h3>
      <Link href={`/project/${project.id}`}>
        <a className="px-4 py-2 bg-gray-700 dark:bg-cyan-600 text-white hover:bg-cyan-600 dark:hover:bg-gray-700 rounded ">
          Detail
        </a>
      </Link>
    </div>
  );
};

export default CardProject;
