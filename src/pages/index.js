import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Articles />
    </Layout>
  );
};

export default IndexPage;
