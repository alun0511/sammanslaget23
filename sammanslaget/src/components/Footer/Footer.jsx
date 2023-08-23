import { styled } from "styled-components";
import Link from "next/link";

const StyledFooter = styled.div`
    width: 100%;
    height: 64px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
color: red;
text-decoration: none;
margin: 18px 40px 10px 40px ;
`


const Footer = () => {
    return (
        <StyledFooter>
            <StyledLink href="/"><h1>YRGO</h1></StyledLink>
        </StyledFooter>
    )
}

export default Footer;