import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import GlobalStateProvider from '../context/provider';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import ColorSwitcher from '../context/ColorSwitcher';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';
import AboutMe from '../components/sections/aboutMe';
import CardSlider from '../components/CardSlider';
import Grid from '../components/Grid';
import Projects from '../components/sections/projects';
import Social from '../components/social';
import Author from '../components/sections/author';
import { seoTitleSuffix } from '../../config';

// import ProjectsSection from '../components/ProjectsSection';

const AboutPage = ({ data }) => {
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
        about
        <Hero />
        <Author />
        <Grid
          imageSrc='me.jpg'
          heading='Header Text'
          paragraph='Currently, I work as a marketing web developer for Robert Half, a global staffing firm that specializes in placing professionals in a variety of fields, including accounting, finance, and technology.'
          buttonText='Button Text'
          layout='1fr 1fr 1fr' // Specify the desired column layout here
        />
        <CardSlider />
        <Articles />
        {/* <Projects /> */}
        {/* <AboutMe /> */}
      </Layout>
    </GlobalStateProvider>
  );
};

export default AboutPage;
