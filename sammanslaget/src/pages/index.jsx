// import Image from "next/image";
import styled, { css } from "styled-components";
import Layout from "@/components/Layout";
import Link from "next/link";



const StyledSpan = styled.span`
color: #1C9067;
`;



export default function Home() {
    return (
    <Layout>
    <h1>Urvalstest för <StyledSpan>Webbdesign</StyledSpan></h1>
    </Layout>
    )
}