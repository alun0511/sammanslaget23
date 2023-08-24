import Image from "next/image";
import ImgComputer from "../assets/person_computer.png";
import ImgShapes from "../assets/shapes.png";
import ImgDaim from "../assets/daim.png";
import ImgBulletlist from "../assets/bulletlist.png";
import ImgHtml from "../assets/html.png";
import ImgGirl from "../assets/girl.png";
import ImgNoToAi from "../assets/no_to_ai.png";
import styled, { css } from "styled-components";
import Layout from "@/components/Layout";
import Link from "next/link";

const StyledWrapper = styled.div`
  background-color: #312b2b;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  flex-wrap: wrap;
  gap: 50px;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-top: 0;
`;

const StyledHeroText = styled.div`
  text-align: center;
  max-width: 450px;
  overflow-wrap: break-word;
`;

const StyledHeading = styled.h1`
  margin-top: 80px;
`;
const StyledSpan = styled.span`
  color: #1c9067;
`;

const StyledContainer = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 10;
  gap: 100px;
`;

const StyledContainerContent = styled.div`
  width: 381px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const StyledContainerContentText = styled.div`
  width: 300px;
  overflow-wrap: break-word;
  text-align: center;
`;

//const Styled

export default function Home() {
  return (
    <Layout>
      <StyledWrapper>
        <StyledHero>
          <StyledHeading>
            Urvalsprov för <StyledSpan>Webbutveckling</StyledSpan>
          </StyledHeading>
          <StyledHeroText>
            <p>
              Hej och välkommen! Vi är Grupp 1 och har tillsammans utvecklat ett
              nytt och spännande koncept på urvalsprov för utbildningen
              Webbutveckling vid YRGO.
            </p>
          </StyledHeroText>
          {
            <Image
              src={ImgComputer}
              alt="animated person sitting in front of a computer"
              height="auto"
              width="auto"
            />
          }
        </StyledHero>
        <StyledContainer>
          {
            <Image
              src={ImgShapes}
              alt="animated person sitting infront of a computer"
              height="auto"
              width="auto"
            />
          }
          <StyledContainerContent>
            <h2>One size does not fit all</h2>

            <p>
              Vårt urvalsprov innehåller en variation av uppgifter för att ge
              provtagaren större möjlighet att visa relevanta kunskaper och
              färdigheter. Traditionella flervalsfrågor varvas med praktiska och
              kreativa uppgifter.
            </p>
          </StyledContainerContent>

          <StyledContainerContent>
            {
              <Image
                src={ImgBulletlist}
                alt="animated bullet list"
                height="300"
                width="300"
              />
            }
            <StyledContainerContentText>
              <p>
                Flervalsfrågor testar baskunskaper inom HTML, Javascript & CSS.
              </p>
            </StyledContainerContentText>
          </StyledContainerContent>

          <StyledContainerContent>
            {
              <Image
                src={ImgDaim}
                alt="animated computes, cactus flower, letter and a star"
                height="300"
                width="300"
              />
            }
            <StyledContainerContentText>
              <p>
                Sort It testar logiskt tänkande genom kategorisering av objekt
              </p>
            </StyledContainerContentText>
          </StyledContainerContent>

          <StyledContainerContent>
            {
              <Image
                src={ImgHtml}
                alt="animated html tag"
                height="300"
                width="300"
              />
            }
            <StyledContainerContentText>
              <p>Make it Work utmanar problemlösningsförmågan</p>
            </StyledContainerContentText>
          </StyledContainerContent>

          {
            <Image
              src={ImgGirl}
              alt="animated person sitting infront of a computer"
              height="auto"
              width="auto"
            />
          }
          <StyledContainerContent>
            <h2>Ingen intervju - men personligt</h2>

            <p>
              Vårt nya koncept sänker personalkostnader genom att omvandla
              resurskrävande intervjuer till frågor som tar plats i
              urvalsprovet.
            </p>
            <p>
              I en helt ny del efter att provet är färdigt får deltagaren
              motivera om varför hen vill komma in på utbildningen och om vad
              hen tycker är spännande med webbutveckling. På så vis får Yrgo
              veta mer om personen som söker och kan ta med det i urvalet.
            </p>
          </StyledContainerContent>

          <StyledContainerContent>
            <h2>Ingen AI tillåten</h2>

            <p>
              För att AI-säkra urvalsprovet är tanken att provet ska göras på
              plats i skolan, där det finns en lärare som övervakar testet.
              Mobiltelefoner ska lämnas in innan provet börjar och datorerna
              kommer att övervakas med hjälp av Safe-Exam.{" "}
            </p>
            <p>
              Safe-Exam är ett gratisverktyg som gör att det inte går att öppna
              andra program än det som är tillåtet, på detta sätt minskar det
              möjlighet för deltagarna att gå in på exempelvis chat-gpt och
              fuska sig till svaren.
            </p>
          </StyledContainerContent>
          {
            <Image
              src={ImgNoToAi}
              alt="animated person sitting infront of a computer"
              height="auto"
              width="auto"
            />
          }
        </StyledContainer>
      </StyledWrapper>
    </Layout>
  );
}
