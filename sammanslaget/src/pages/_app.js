import "../../styles/global.css";
import { Quantico } from "@next/font/google";
import { Component } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";



const quantico = Quantico({
  subsets: ["latin"],
  weight: "400",
});

export default function MyApp({ Component, pageProps }) {

  const { unityProvider, isLoaded, loadingProgression, unload, unityContext } = useUnityContext({
    loaderUrl: "/Prototype/Build/Sammanslaget.loader.js",
    dataUrl: "/Prototype/Build/Sammanslaget.data",
    frameworkUrl: "/Prototype/Build/Sammanslaget.framework.js",
    codeUrl: "/Prototype/Build/Sammanslaget.wasm",
  });

const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <main className={quantico.className}>
      <Component { ... pageProps} />
    </main>
  );
}