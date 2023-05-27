import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';
import CardSlider from '../components/CardSlider';
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Articles />

      <CardSlider />
    </Layout>
  );
};

export default IndexPage;
