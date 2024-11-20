import React from 'react';
import { graphql, Link } from 'gatsby';

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ node }) => (
          <li key={node.frontmatter.slug}>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
