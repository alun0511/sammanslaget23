import { styled } from "styled-components";
import Link from "next/link";

const StyledNavigation = styled.nav`
  width: 100%;
  height: 64px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #1c9067;
  text-decoration: none;
  margin: 18px 40px 10px 40px;
`;

const StyledNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Navigation = () => {  

  return (
    <StyledNavigation>
      <StyledLink href="/">
        <h1>Sammanslaget</h1>
      </StyledLink>
      <StyledNavDiv>
        <StyledLink href="/about">Om oss</StyledLink>
        <StyledLink href="/prototype">Prototype</StyledLink>
      </StyledNavDiv>
    </StyledNavigation>
  );
};

export default Navigation;
