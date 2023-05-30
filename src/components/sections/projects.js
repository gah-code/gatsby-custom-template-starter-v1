import React from 'react';
import styled from 'styled-components';
import ProjectsSection from '../ProjectsSection';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    status: 'In Progress',
    description: 'This is project 1.',
  },
  {
    id: 2,
    name: 'Project 2',
    status: 'Completed',
    meta: ['Client: ABC Corp', 'Budget: $1000'],
  },
  { id: 3, name: 'Project 3', status: 'Pending' },
];

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dff8;
  padding: 3rem 0;
`;

const Projects = () => {
  return (
    <CenteredContainer>
      <ProjectsSection projects={projects} />
    </CenteredContainer>
  );
};

export default Projects;
