import BlogItem from "../components/moleculs/BlogItem";
import Hero from "../components/moleculs/Hero";
import NavbarExample from "../components/moleculs/NavbarExample";
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
