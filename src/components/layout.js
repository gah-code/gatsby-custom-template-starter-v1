import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/theme';
// import { useDarkMode } from '../hooks';
import GlobalStyle from '../styles/globalStyle';
import Header from '../components/header';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const Layout = ({ children }) => {
  const theme = darkTheme;
  return (
    <StyledLayoutWrapper id='layout-wrapper'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <main id='main-content'>{children}</main>
      </ThemeProvider>
    </StyledLayoutWrapper>
  );
};

export default Layout;
