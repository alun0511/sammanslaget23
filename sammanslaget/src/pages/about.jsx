import styled from "styled-components";
import Image from "next/image";
import Img from "../assets/daim.png";


const StyledWrapperAbout = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  //margin: 100px;
`;

const StyledNameAbout = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const StyledAbout = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const About = () => {
  return (
    <>
      <h1>About</h1>
      <StyledWrapperAbout>
        <StyledNameAbout>
          <h2>Elisabet</h2>
          <p>UX-Designer </p>
          <StyledAbout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {<Image src={Img} alt="animated person" height="200" width="200" />}
          </StyledAbout>
        </StyledNameAbout>

        <StyledNameAbout>
          <h2>Nina</h2>
          <p>UX-Designer </p>
          <StyledAbout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {<Image src={Img} alt="animated person" height="200" width="200" />}
          </StyledAbout>
        </StyledNameAbout>

        <StyledNameAbout>
          <h2>Alfred</h2>
          <p>Webutvecklare</p>
          <StyledAbout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {<Image src={Img} alt="animated person" height="200" width="200" />}
          </StyledAbout>
        </StyledNameAbout>

        <StyledNameAbout>
          <h2>Vali</h2>
          <p>Webbutvecklare</p>
          <StyledAbout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {<Image src={Img} alt="animated person" height="200" width="200" />}
          </StyledAbout>
        </StyledNameAbout>

        <StyledNameAbout>
          <h2>Lucas</h2>
          <p>Spelprogrammerare</p>
          <StyledAbout>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {<Image src={Img} alt="animated person" height="200" width="200" />}
          </StyledAbout>
        </StyledNameAbout>
      </StyledWrapperAbout>
    </>
  );
};

export default About;
