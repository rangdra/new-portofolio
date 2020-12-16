import React from "react";
import Head from "next/head";

export default function PageTitle({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Rangdra Pangestu</title>
        <link rel="icon" href="icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}
