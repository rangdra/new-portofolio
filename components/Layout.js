import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title} | Rangdra Pangestu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
