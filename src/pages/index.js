import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const indexPage = () => {
  return (
    <Layout pageTitle={"Home page"}>
      <p>I'm making this by following the gatsby tutorial</p>
      <StaticImage
        alt="An image of high office building in Klaipeda"
        src="..\images\uab-statega-apskon-1.jpg"
      ></StaticImage>
    </Layout>
  );
};

export default indexPage;
