import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
      {data.allFile.nodes.map((node) => (
        <li key={node.name}>{node.name}</li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      pageInfo {
        perPage
      }
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
