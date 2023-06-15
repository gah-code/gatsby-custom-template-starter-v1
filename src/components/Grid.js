import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import { graphql, useStaticQuery } from 'gatsby';
import { imageSrc } from '../../config';

const GridContainer = styled(ContentWrapper)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
    background-color: grey;
    grid-template-columns: 1.2fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Grid = ({ heading, paragraph, buttonText, layout }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          about
          aboutDescription
          imageSrc
        }
      }
    }
  `);

  const { title, about, aboutDescription, imageSrc } = data.site.siteMetadata;
  return (
    // <ContentWrapper>
    <GridContainer>
      <Column>
        One
        <p> {title}</p>
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        {buttonText && <Button>{buttonText}</Button>}
      </Column>

      <Column layout={layout}>
        two
        <Image src={imageSrc} image={imageSrc} alt='Image' />
        {/* <span>{imageSrc}</span>
        <imageSrc /> */}
        {/* <Image>{imageSrc}</Image> */}
      </Column>

      <Column layout={layout}>
        three
        <Paragraph>{paragraph}</Paragraph>
        {/* <Image>{imageSrc}</Image> */}
      </Column>
    </GridContainer>

    // </ContentWrapper>
  );
};

export default Grid;
