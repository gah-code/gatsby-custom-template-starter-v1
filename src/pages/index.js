import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';
import AboutMe from '../components/sections/aboutMe';
import CardSlider from '../components/CardSlider';
import Grid from '../components/Grid';
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
      <Grid
        imageSrc='me.jpg'
        heading='Header Text'
        paragraph='Currently, I work as a marketing web developer for Robert Half, a global staffing firm that specializes in placing professionals in a variety of fields, including accounting, finance, and technology.'
        buttonText='Button Text'
        layout='1fr 1fr 1fr' // Specify the desired column layout here
      />
    </Layout>
  );
};

export default IndexPage;
