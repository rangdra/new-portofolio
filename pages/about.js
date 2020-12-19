import Navbar from "../components/moleculs/Navbar";
import Footer from "../components/moleculs/Footer";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="dark:bg-gray-800">
        <Navbar />
        <div className="container mx-auto px-5 mt-12 lg:mt-20">
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              About Me
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              Saya Rangdra Pangestu, saat ini saya sedang berkuliah di salah
              satu universitas. Di waktu luang, saya fokus belajar tentang web
              development khususnya dibidang front-end. Tujuan saya adalah
              membuat aplikasi/web yang berguna dan berkontribusi pada proyek
              open source sambil menyelesaikan studi s1 saya . 😄
            </p>
          </div>
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              Why make this website?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              Saya membuat situs ini untuk mempelajari apapun tentang web
              development. Mulai dari perencanaan, desain, pengembangan,
              deployment, dan pemeliharaan. masih banyak hal lain yang belum
              saya temui, dan saya siap mempelajarinya.
            </p>
          </div>
          {/* <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              Why write a blog?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              My first blog post explained it. I'd be happy if you read it :)
            </p>
          </div> */}
          <div className="lg:w-1/2 w-full mb-12">
            <h1 className="text-cyan-500 font-semibold mb-4 text-3xl">
              What else?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-justify">
              Ketika saya sedang tidak ngoding atau kuliah, saya suka menonton
              video tentang web development di yt atau diplatform lainnya. dan
              saya suka bermain game terutama game MOBA 😍
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default About;
