import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';
import AboutMe from '../components/sections/aboutMe';
import CardSlider from '../components/CardSlider';
import TwoColumnGrid from '../components/TwoColumnGrid';
import Projects from '../components/sections/projects';
import Social from '../components/social';
import Author from '../components/sections/author';
// import ProjectsSection from '../components/ProjectsSection';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <CardSlider />
      <Author />
      {/* <Articles /> */}
      {/* <Projects /> */}
      <AboutMe />
      {/* <Social /> */}

      <TwoColumnGrid
        imageSrc='path/to/image.jpg'
        heading='Header Text'
        paragraph='Currently, I work as a marketing web developer for Robert Half, a global staffing firm that specializes in placing professionals in a variety of fields, including accounting, finance, and technology.'
        buttonText='Button Text'
      />
    </Layout>
  );
};

export default IndexPage;
