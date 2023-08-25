import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Img from "../../assets/yrgo.png";

const StyledFooter = styled.div`
  width: 100%;
  height: 139px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin-top: 200px;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 18px 40px 10px 40px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink href="/">
        {<Image src={Img} alt="Yrgo logo" height="150" width="200" />}
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
