import Hero from "../components/moleculs/Hero";
import ProjectItem from "../components/moleculs/ProjectItem";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      {/* <NavbarExample /> */}
      <Hero />
      {/* <BlogItem /> */}
      <ProjectItem />
    </Layout>
  );
};

export default Home;
