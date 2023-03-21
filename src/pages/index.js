import * as React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <StyledSection id='hero'>
        <StyledContentWrapper>
          <h1 className='title'>
            {' '}
            title
            <div className='greetings'>greetings</div>
          </h1>

          <h2 className='subtitle'>sub title</h2>
          <div className='description'>body</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            officiis.
          </p>
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  );
};

export default IndexPage;
