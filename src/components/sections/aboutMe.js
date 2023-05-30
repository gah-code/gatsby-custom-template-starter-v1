import React from 'react';
import styled from 'styled-components';

// Wrapper for the entire "About Me" section
const AboutWrapper = styled.section`
  /* background-color: #f8f8f8; */
  padding: 3rem 0;
`;

// Container for the content within the section
const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Heading for the section
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
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

const AboutMe = () => {
  return (
    <AboutWrapper>
      <ContentContainer>
        <SectionHeading>About Me</SectionHeading>
        <SectionParagraph>
          Hi, I'm Tania, a web developer with a passion for creating beautiful
          and user-friendly websites. I have experience in both front-end and
          back-end development, and I love turning ideas into reality through
          coding.
        </SectionParagraph>
        <SectionParagraph>
          In my free time, I enjoy writing technical articles on my blog,
          exploring new technologies, and contributing to open-source projects.
          I believe in continuous learning and staying up-to-date with the
          latest trends and best practices in web development.
        </SectionParagraph>
        <Button href='/portfolio'>View Portfolio</Button>
      </ContentContainer>
    </AboutWrapper>
  );
};

export default AboutMe;
