import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the gatsby tutorial!</p>
      <StaticImage
        alt="Crazy duck looking crazy!"
        src="https://i.pinimg.com/236x/0b/c0/c5/0bc0c5ee2e27506dc1f1e03cba3f9636.jpg"
        // src="../images/crazy-duck.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
