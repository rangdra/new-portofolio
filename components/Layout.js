import Head from "next/head";
import { ThemeProvider } from "../hooks/themeContext";
import Footer from "./moleculs/Footer";
import Navbar from "./moleculs/Navbar";

const Layout = ({ title, children }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>{title} | Rangdra Pangestu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="dark:bg-gray-800">
        <Navbar />
        <div className="container mx-auto sm:px-5 px-5">{children}</div>{" "}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
