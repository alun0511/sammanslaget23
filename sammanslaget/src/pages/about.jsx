import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import ImgElisabet from "../assets/Elisabet.png";
import ImgNina from "../assets/Nina.png";
import ImgAlfred from "../assets/Alfred.png";
import ImgVali from "../assets/Vali.png";
import ImgLucas from "../assets/Lucas.png";

const StyledWrapperAbout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-left: 200px;
  flex-wrap: wrap;
  //gap: 128px;
`;

const StyledNameAbout = styled.div`
  width: 500px;
  display: flex;
  margin-bottom: 180px;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;

const StyledAboutUs = styled.div`
  width: 500px;
  height: 100px;
`;

const StyledAbout = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  padding-top: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledHeading = styled.h1`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 200px 200px 100px 200px;
`;

const About = () => {
  return (
    <>
      <Layout>
        <StyledHeading>Det här är vi! Grupp Silikonvalen</StyledHeading>
        <StyledWrapperAbout>
          <StyledNameAbout>
            <h2>Elisabet</h2>
            <p>UX-Designer </p>
            <StyledAbout>
              <p>
                Har alltid gillat att skapa saker med händerna och nu också
                digitalt. Älskar djur men är pälsallergiker. Göteborgsbo i 10
                år, västerbottning i hjärtat.
              </p>
              {
                <Image
                  src={ImgElisabet}
                  alt="animated person"
                  height="auto"
                  width="auto"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Nina</h2>
            <p>UX-Designer </p>
            <StyledAbout>
              <p>
                Gillar att utveckla nya idéer och skapa pixel art. Är på
                fritiden en gamer, småbarnsmamma och lajvare. Sann Göteborgare.
              </p>
              {
                <Image
                  src={ImgNina}
                  alt="animated person"
                  height="auto"
                  width="auto"
                />
              }
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
              {
                <Image
                  src={ImgAlfred}
                  alt="animated person"
                  height="auto"
                  width="auto"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Vali</h2>
            <p>Webbutvecklare</p>
            <StyledAbout>
              <p>
                Silcon Vali är mitt hackernamn. Älskar djur och ordvitsar. Badar
                gärna året runt och snusar när jag inte bestämt mig för att
                sluta för 1000 gången.
              </p>
              {
                <Image
                  src={ImgVali}
                  alt="animated person"
                  height="auto"
                  width="auto"
                />
              }
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
              {
                <Image
                  src={ImgLucas}
                  alt="animated person"
                  height="auto"
                  width="auto"
                />
              }
            </StyledAbout>
          </StyledNameAbout>
        </StyledWrapperAbout>
      </Layout>
    </>
  );
};

export default About;
