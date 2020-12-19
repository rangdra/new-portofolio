import Head from "next/head";
import { ThemeProvider } from "../hooks/themeContext";

const Layout = ({ title, children }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>{title} | Rangdra Pangestu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
