import { styled } from "styled-components";
import Link from "next/link";
//import ImgVal from;

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

const StyledHeader = styled.h1`
  margin-left: 0;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <StyledHeader>Silikonvalen</StyledHeader>
      </StyledLink>
      <StyledNavDiv>
        <StyledLink href="/about">Om oss</StyledLink>
        <StyledLink href="/prototype">Prototyp</StyledLink>
      </StyledNavDiv>
    </StyledNavigation>
  );
};

export default Navigation;
