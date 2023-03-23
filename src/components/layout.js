import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/theme';
// import { useDarkMode } from '../hooks';
import Context from '../context';

import GlobalStyle from '../styles/globalStyle';
import Header from '../components/header';
// import CookieBar from '../components/cookieBar';
import SplashScreen from '../components/splashScreen';

import { useCookieBar } from '../../config';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const Layout = ({ children }) => {
  const { isIntroDone } = useContext(Context);
  const theme = darkTheme;
  return (
    <StyledLayoutWrapper id='layout-wrapper'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <main id='main-content'>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </StyledLayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
