import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../styles/contentWrapper';
import { graphql, useStaticQuery } from 'gatsby';

// Wrapper for the entire "About Me" section
const AboutWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
`;

// Container for the content within the section
const ContentContainer = styled(ContentWrapper)`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 4rem;
  }
`;

// Heading for the section
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 1rem;
  }
`;

// Paragraph for the section
const SectionParagraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

// Button component
const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
`;

const Author = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          about
          aboutDescription
        }
      }
    }
  `);

  const { title, about, aboutDescription } = data.site.siteMetadata;

  return (
    <AboutWrapper>
      <ContentContainer>
        <SectionHeading>{about}</SectionHeading>
        <SectionParagraph>{aboutDescription}</SectionParagraph>
        <SectionParagraph>
          In my free time, I enjoy writing technical articles on my blog,
          exploring new technologies, and contributing to open-source projects.
          I believe in continuous learning and staying up-to-date with the
          latest trends and best practices in web development.
        </SectionParagraph>
      </ContentContainer>
    </AboutWrapper>
  );
};

export default Author;
