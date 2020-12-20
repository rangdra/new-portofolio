import CardProject from "../components/atoms/CardProject";
import TitlePage from "../components/atoms/TitlePage";
import { listCardProjects } from "../utils/data";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout title="Projects">
      <TitlePage
        title="Projects"
        subtitle="Collection of web and game development side projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {listCardProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
      <TitlePage
        title="Web Development Skills"
        subtitle="Skills I learned during the quarantine"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:mb-0 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1 dark:text-white">
            Front-end Development
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            HTML, CSS, JavaScript
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            React: CRA and NextJs
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Tailwind CSS
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">Bootstrap</p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            SASS / SCSS{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Jest & React Testing Library{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            SEO-friendly and Accessible Designs{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
            Back-end Development
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            NodeJs{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            ExpressJs{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Mongo DB{" "}
            <span className="text-base text-gray-300 dark:text-gray-600">
              --Basic
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
