import { styled } from "styled-components";
import Link from "next/link";

const StyledNavigation = styled.nav`
    width: 100vw;
    height: 70px;
    background-color: #494949;
`

const StyledLink = styled(Link)`
color: blue;
`

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
            <StyledLink href="/prototype">Prototype</StyledLink>
        </StyledNavigation>
    )
}