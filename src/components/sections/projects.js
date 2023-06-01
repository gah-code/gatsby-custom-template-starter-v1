import React from 'react';
import styled from 'styled-components';
import StyledTag from '../StyledTag';

const CenteredContainer = styled.div`
  /* display: grid; */
  justify-content: center;
  /* grid-template-columns: 1fr 1fr; */
  background-color: #dff8;
  padding: 2rem 0;

  .flex-grid-wrap {
    padding: 2rem;
  }

  .flex-grid {
    display: flex;

    & > * {
      flex: 0 1 100%;

      &:not(:first-child) {
        margin-left: 2rem;
      }
    }

    @media (max-width: (12rem * 3)) {
      flex-wrap: wrap;

      & > * {
        margin: 2rem 0 0 !important;
      }
    }

    @media (min-width: (12rem * 3)) {
      & + .flex-grid {
        margin-top: 2rem;
      }
    }
  }

  .subtitle {
    margin-top: -0.75rem;
  }

  .description {
    font-size: 1.125rem;
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsWrapper = styled.section`
  padding: 5rem 0;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3.5rem;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ProjectItem = styled.li`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  margin-bottom: 2.5rem;
  background-color: #f3333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  /* margin-bottom: 24px; */
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;

  margin-bottom: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  margin: 0.5rem 0 1.5rem 0;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

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

const ProjectsSection = ({ projects }) => {
  return (
    <ProjectsWrapper className='grid-flex-wrap'>
      <ContentContainer>
        <SectionHeading>Projects</SectionHeading>
        <ProjectList className='flex-grid'>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link}>Learn More</ProjectLink>
            </ProjectItem>
          ))}
        </ProjectList>

        <StyledTag />
      </ContentContainer>
    </ProjectsWrapper>
  );
};

const Projects = () => {
  return (
    <CenteredContainer>
      <ProjectsSection projects={projects} />
    </CenteredContainer>
  );
};

export default Projects;
