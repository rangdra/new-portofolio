const CardProject = ({ project }) => {
  return (
    <div className="card  bg-gray-100 dark:bg-gray-900 py-5 px-6 rounded-lg relative">
      <span class="flex h-3 w-3 absolute -top-1 -right-1">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 dark:bg-gray-200 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-gray-500 dark:bg-white"></span>
      </span>
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 dark:text-white text-3xl font-semibold">
          {project.title}
        </h1>
        <p className="text-gray-500 font-medium dark:text-gray-400">
          {project.createdAt}
        </p>
      </div>
      <h3 className="text-gray-500 w-3/4 text-lg dark:text-gray-400">
        {project.subtitle}
      </h3>
      <div className="flex items-center mt-8">
        <a
          href={project.linkWeb}
          target="_blank"
          className="flex items-center mr-4 "
        >
          <p className="text-gray-700 dark:text-gray-400 text-lg font-medium mr-1 hover:text-opacity-50 hover:underline">
            Web
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-700 dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href={project.linkCode} className="flex items-center">
          <p className="text-gray-700 dark:text-gray-400 text-lg font-medium mr-1 hover:text-opacity-50 hover:underline">
            Code
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-700 dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardProject;
