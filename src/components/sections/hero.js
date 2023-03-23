import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../styles/contentWrapper';
import { motion } from 'framer-motion';

import Context from '../../context/';
import Underlining from '../../styles/underlining';
import Social from '../social';

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

// const AnimatedUnderlining = motion.custom(Underlining);

const Hero = () => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
        type: 'tween',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div initial='hidden' animate='visible' variants={HeroItems}>
      <StyledSection id='hero'>
        <StyledContentWrapper>
          <h1 className='title'>
            Hello
            <div className='greetings'>I'm Gilbert Haro</div>
          </h1>
          <h2 className='subtitle'>sub title</h2>
          <div className='description'>body</div>
          <p>Lorem</p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Social fontSize='.95rem' padding='.3rem 1.25rem' width='auto' />
          </motion.div>
        </StyledContentWrapper>
      </StyledSection>
    </motion.div>
  );
};

export default Hero;
