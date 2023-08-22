import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

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

const Layout = ({ children, slug, description, shareImage }) => {
  return (
    <LayoutStyle>
      <Navigation />
      <main id="main">{children}</main>
    </LayoutStyle>
  );
};

export default Layout;