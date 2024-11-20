import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import ContentWrapper from '../../styles/contentWrapper';
import Underlining from '../../styles/underlining';
import Social from '../social';
import Context from '../../context';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  padding: 5rem 0 8rem 0;
`;

const StyledContentWrapper = styled(ContentWrapper)`
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
    margin-bottom: 1.6rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 0;
    }
  }

  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #61ad7c;
  }

  .subtitle {
    margin-top: -0.75rem;
  }

  .description {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const Hero = ({ content }) => {
  // const { frontmatter, body } = content[0].node;
  // const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter;

  return (
    <StyledSection id='hero'>
      <StyledContentWrapper>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1,
                staggerChildren: 0.3,
                type: 'tween',
              },
            },
          }}
        >
          <h1 className='title'>
            {/* {frontmatter.title} */}
            <div className='greetings'>Hola</div>
            I'm Gilberto
          </h1>
          <h2 className='subtitle'>
            Surfing the world wide web
            <br />
            <span className='highlighted'>for all front end dev insight</span>
          </h2>
          <h2>Thanks for stopping by!</h2>
          <div className='description'>
            It's mind-boggling how active the front-end development ecosystem
            has been. It feels like not so long ago I stumbled upon this world
            while needing a solution to market my photography services at the
            time. The variety of frameworks that have come, gone, and remained
            the most used before I even began my front-end journey is
            remarkable.
            <br />
            This is where I compile some of my favorite discoveries and
            concepts.
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Social fontSize='.95rem' padding='.3rem 1.25rem' width='auto' />
          </motion.div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  );
};

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default Hero;
