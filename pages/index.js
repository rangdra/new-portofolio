import BlogItem from "../components/moleculs/BlogItem";
import Footer from "../components/moleculs/Footer";
import Hero from "../components/moleculs/Hero";
import Navbar from "../components/moleculs/Navbar";

import NavbarExample from "../components/moleculs/NavbarExample";
import ProjectItem from "../components/moleculs/ProjectItem";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="dark:bg-gray-800">
        {/* <NavbarExample /> */}
        <Navbar />
        <Hero />
        <BlogItem />
        <ProjectItem />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
