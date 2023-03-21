import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import ContentWrapper from '../styles/contentWrapper';

const StyledHeader = styled(motion.header)`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.colors.background};
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const StyledBurger = styled.button`
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0.625rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        header
        {/* <Link to='/' aria-label='home'>
          <Logo color='primary' size='2rem' />
        </Link>
        {navigation} */}
        <nav>navigation</nav>
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
