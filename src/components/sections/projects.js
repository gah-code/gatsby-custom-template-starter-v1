import React from 'react';
import styled from 'styled-components';
import Underlining from '../../styles/underlining';
import ContentWrapper from '../../styles/contentWrapper';
// Styled Components
const ProjectsWrapper = styled(ContentWrapper)`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.5rem;
  padding: 2rem 1rem;

  &::-webkit-scrollbar {
    height: 6px;
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
`;

const ProjectItem = styled.div`
  flex: 0 0 auto;
  width: 300px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card || '#fff'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.card};

  &:hover {
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
  }
  &:hover ${Underlining} {
    box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 2rem 2.5rem 2rem 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 260px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary || '#0070f3'};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text || '#333'};
`;

const ProjectLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.link || '#0070f3'};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Projects Section Component
const ProjectsSection = ({ projects }) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <ProjectItem key={project.id}>
          {/* <ProjectTitle>{project.title}</ProjectTitle> */}
          <Underlining color='tertiary' hoverColor='secondary'>
            {project.title}
          </Underlining>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink href={project.link}>Learn More</ProjectLink>
        </ProjectItem>
      ))}
    </ProjectsWrapper>
  );
};

// Project Data
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description:
      'This is the description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/projects/project-1',
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      'This is the description of Project 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: '/projects/project-2',
  },
  {
    id: 3,
    title: 'Project 3',
    description:
      'This is the description of Project 3. Duis aute irure dolor in reprehenderit.',
    link: '/projects/project-3',
  },
];

// Main Component
const Projects = () => {
  return <ProjectsSection projects={projects} />;
};

export default Projects;
