import Link from "next/link";

const ProjectItem = () => {
  return (
    <div className="lg:mt-24 mt-24">
      <h2 className="text-cyan-500 dark:text-cyan-400 uppercase tracking-widest text-xl mb-4">
        Projects
      </h2>

      <div className="w-full mb-8 cursor-pointer pt-2 pl-2 transition-all duration-200">
        <Link href="/projects/react-projects">
          <a className="text-gray-800 font-semibold text-xl mb-4 border-b border-gray-400 block pb-3 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400">
            React Projects
          </a>
        </Link>
        <Link href="/projects/html-css-js-projects">
          <a className="text-gray-800 font-semibold text-xl border-b border-gray-400 block pb-3 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400  dark:text-white dark:hover:text-cyan-400">
            HTML, CSS & JS Projects
          </a>
        </Link>
      </div>
      <Link href="/projects">
        <a className="w-full flex transition-all duration-200 justify-end text-blue-400 pr-4 underline hover:opacity-50">
          View All Projects
        </a>
      </Link>
    </div>
  );
};

export default ProjectItem;
