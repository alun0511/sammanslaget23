import Layout from "@/components/Layout";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";
import styled from "styled-components";

const StyledHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSpanGreen = styled.span`
  color: #1c9067;
`;

const StyledHeading = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-size: 42px;
`;

const StyledHeadingText = styled.div`
  width: 500px;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
  }
`;

const Prototype = ({ pageProps }) => {
  const { unityProvider, isLoaded, loadingProgression, unload } =
    useUnityContext({
      loaderUrl: "/Prototype/Build/Sammanslaget.loader.js",
      dataUrl: "/Prototype/Build/Sammanslaget.data",
      frameworkUrl: "/Prototype/Build/Sammanslaget.framework.js",
      codeUrl: "/Prototype/Build/Sammanslaget.wasm",
    });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <Layout>
      <StyledHeadingContainer>
        <StyledHeading>
          Prototyp <StyledSpanGreen>Sortera Mera</StyledSpanGreen>
        </StyledHeading>
        <StyledHeadingText>
          <h2>
            Logiskt tänkande och analysförmåga är nödvändiga färdigheter för en
            webbutvecklare. Detta minispel testar båda delar.
          </h2>
        </StyledHeadingText>

        <div className="container">
          {isLoaded === false && (
            <div className="loading-overlay">
              <p>Laddar provdel ... ({loadingPercentage}%)</p>
            </div>
          )}
          <Unity
            className="unity"
            unityProvider={unityProvider}
            style={{ width: 1300, height: 1100 }}
            devicePixelRatio={2}
          />
        </div>
      </StyledHeadingContainer>
    </Layout>
  );
};

export default Prototype;
