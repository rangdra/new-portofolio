import Card from "../../components/atoms/Card";
import TitlePage from "../../components/atoms/TitlePage";
import Layout from "../../components/Layout";
import dataProjects from "../../utils/dataProjects";

const Projects = () => {
  return (
    <Layout title="Projects">
      <TitlePage
        title="Projects"
        subtitle="Collection of web development and side projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 gap-y-8 mb-12 sm:mb-0">
        <Card
          image="https://miro.medium.com/max/700/1*vHHBwcUFUaHWXntSnqKdCA.png"
          title="React Projects"
          tags={["React"]}
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          bgIcon="bg-blue-400 hover:bg-gray-50"
          linkHref="/projects/react-projects"
        />
        {/* <Card
          image="https://miro.medium.com/max/700/1*htbUdWgFQ3a94PMEvBr_hQ.png"
          title="Nextjs Projects"
          tags={["Nextjs"]}
          icon="https://res.cloudinary.com/rangdra/image/upload/v1617515461/img-projects/nextjs_f8njar.png"
          bgIcon="bg-gray-200 hover:bg-gray-50"
          linkHref="/projects/nextjs-projects"
        /> */}
        <Card
          image={dataProjects.nextjs_projects[0].image}
          title={dataProjects.nextjs_projects[0].title}
          tags={dataProjects.nextjs_projects[0].tags}
          icon="https://res.cloudinary.com/rangdra/image/upload/v1617515461/img-projects/nextjs_f8njar.png"
          bgIcon="bg-gray-200 hover:bg-gray-50"
          linkHref={dataProjects.nextjs_projects[0].linkWeb}
          linkCode={dataProjects.nextjs_projects[0].linkCode}
        />
        <Card
          image="https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png"
          title="Mini Projects"
          tags={["HTML", "CSS", "JavaScript"]}
          icon="https://res.cloudinary.com/rangdra/image/upload/v1617514604/img-projects/icon-html_zglfac.png"
          bgIcon="bg-gradient-to-r from-blue-400 via-orange-500 to-yellow-400 hover:bg-gradient-to-r from-blue-300 via-orange-400 to-yellow-300"
          linkHref="/projects/html-css-js-projects"
        />
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

export default Projects;
