import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Img from "../../assets/valen.png";

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
  color: #ffffff;
  text-decoration: none;
  margin: 18px 40px 10px 40px;

  a:hover {
    color: #47cda0;
  }
`;

const StyledNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledHeader = styled.h1`
  color: #47cda0;
  margin-left: 0;
  display: flex;

  align-items: center;
  gap: 10px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavDiv>
        <StyledLink href="/">
          <StyledHeader>
            Silikonvalen
            {<Image src={Img} alt="whale" height="auto" width="auto" />}
          </StyledHeader>
        </StyledLink>
      </StyledNavDiv>
      <StyledNavDiv>
        <StyledLink href="/about">Om oss</StyledLink>
        <StyledLink href="/prototype">Prototyp</StyledLink>
      </StyledNavDiv>
    </StyledNavigation>
  );
};

export default Navigation;
