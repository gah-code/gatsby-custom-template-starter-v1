import React from 'react';
import styled from 'styled-components';
// import ContentWrapper from '../../styles/contentWrapper';
import ContentWrapper from '../styles/contentWrapper';
// import ProjectsList from './ProjectsList';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 2rem 2.5rem 3rem 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Heading = styled.h3`
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 3rem;
`;

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

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TwoColumnGrid = ({ imageSrc, heading, paragraph, buttonText }) => {
  return (
    <ContentWrapper>
      <GridContainer>
        <Column>
          <Heading>{heading}</Heading>
          <Paragraph>{paragraph}</Paragraph>
          {buttonText && <Button>{buttonText}</Button>}
        </Column>

        <Column>
          <Image src={imageSrc} alt='Image' />
        </Column>
      </GridContainer>
    </ContentWrapper>
  );
};

export default TwoColumnGrid;
