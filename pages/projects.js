import CardProject from "../components/atoms/CardProject";
import TitlePage from "../components/atoms/TitlePage";
import Layout from "../components/Layout";

const Projects = ({ data }) => {
  return (
    <Layout title="Projects">
      <TitlePage
        title="Projects"
        subtitle="Collection of web development and side projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.map((project) => (
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
            SASS / SCSS
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
            Back-end Development
          </h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">NodeJs</p>
          <p className="text-lg text-gray-500 dark:text-gray-400">ExpressJs</p>
          <p className="text-lg text-gray-500 dark:text-gray-400">Mongo DB</p>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("https://rangdra22.vercel.app/api/projects");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Projects;
