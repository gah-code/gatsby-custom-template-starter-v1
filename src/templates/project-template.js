import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import GlobalStateProvider from '../context/provider';
import ContentWrapper from '../styles/contentWrapper';

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const initialState = {
    isIntroDone: false,
    darkMode: false,
  };
  // const { frontmatter } = data.index.edges[0].node;
  // const { frontmatter } = data?.index?.edges?.[0]?.node?.frontmatter || {};

  // const frontmatter = data?.index?.edges?.[0]?.node?.frontmatter;

  // const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter;

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    // isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <ContentWrapper>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <a href='/projects'>Back to Projects</a>
        </ContentWrapper>
      </Layout>
    </GlobalStateProvider>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

export default ProjectTemplate;
