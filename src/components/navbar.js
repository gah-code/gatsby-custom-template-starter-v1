import React, { useState } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background: #333;
`;

const NavCenter = styled.div`
  width: 90vw;
  max-width: var(--max-width);
`;

const NavHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 200px;
  margin-left: -6px;
  margin-bottom: -9px;
`;

const NavBtn = styled.button`
  padding: 0.15rem 0.75rem;

  svg {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);

  &.show-links {
    height: 23.9375rem;
  }

  @media screen and (min-width: 992px) {
    height: auto !important;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: var(--grey-1000);
  letter-spacing: var(--letterSpacing);
  padding: 1rem 0;
  border-top: 1px solid var(--grey-500);
  transition: var(--transition);

  &.active-link {
    color: var(--primary-500);
  }

  @media screen and (min-width: 992px) {
    padding: 0;
    border-top: none;
    margin-right: 1rem;
    font-size: 1rem;
  }
`;

const ContactLink = styled.div`
  display: flex;
  justify-content: center;

  a {
    padding: 0.15rem 1rem;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0;
  }
`;

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar>
      <NavCenter>
        <NavHeader>
          <Link to='/'>
            {/* <NavLogo src={logo} alt='simply recipes' /> */}
          </Link>
          <NavBtn onClick={() => setShow(!show)}>
            {/* <FiAlignJustify /> */}icons
          </NavBtn>
        </NavHeader>
        <NavLinks className={show ? 'show-links' : ''}>
          <NavLink
            to='/'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            home
          </NavLink>
          <NavLink
            to='/recipes'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            recipes
          </NavLink>
          <NavLink
            to='/tags'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            tags
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            about
          </NavLink>
          <ContactLink>
            <Link to='/contact' className='btn' onClick={() => setShow(false)}>
              contact
            </Link>
          </ContactLink>
        </NavLinks>
      </NavCenter>
    </Navbar>
  );
};

export default NavBar;
