import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Meta from "./Meta";

const LayoutStyle = styled.div`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  main {
    margin: auto;
  }
`;

const Layout = ({ children, slug, description, shareImage  }) => {
  return (
    <LayoutStyle>
      <Meta
              siteTitle={`Silikonvalen - ${slug}`}
              title={`SilikonValen - ${slug}`}
              image={shareImage}
              description={description}
      />
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;
