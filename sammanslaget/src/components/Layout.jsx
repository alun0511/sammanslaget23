import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';

const LayoutStyle = styled.div`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  main {
    max-width: 800px;
    margin: auto;
  }
`;

const Layout = ({ children, slug }) => {
  return (
    <LayoutStyle>
      <Navigation />
      <main id="main">{children}</main>
      <Footer></Footer>
    </LayoutStyle>
  );
};

export default Layout;