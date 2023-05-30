import React from 'react';
import styled from 'styled-components';

// Wrapper for the projects section
const ProjectsWrapper = styled.section`
  /* background-color: #dff8; */
  padding: 3rem 0;
`;

// Container for the projects content
const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Heading for the projects section
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
`;

// Project list container
const ProjectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// Project item
const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.8rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Project title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 1.2rem;
  magrin-top: 3rem;
`;

// Project description
const ProjectDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

// Project link
const ProjectLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description:
      'This is the description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      'This is the description of Project 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: '/project2',
  },
  // Add more project objects as needed
];

const ProjectsSection = () => {
  return (
    <ProjectsWrapper>
      <ContentContainer>
        <SectionHeading>Projects</SectionHeading>
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link}>Learn More</ProjectLink>
            </ProjectItem>
          ))}
        </ProjectList>
      </ContentContainer>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
