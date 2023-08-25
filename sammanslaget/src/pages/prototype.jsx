import Layout from "@/components/Layout";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

const Prototype = ( { pageProps } ) => {
    const { unityProvider, isLoaded, loadingProgression, unload } = useUnityContext({
        loaderUrl: "/sammanslaget/build/Sammanslaget.loader.js",
        dataUrl: "/sammanslaget/build/Sammanslaget.data",
        frameworkUrl: "/sammanslaget/build/Sammanslaget.framework.js",
        codeUrl: "/sammanslaget/build/Sammanslaget.wasm",
      });

      const loadingPercentage = Math.round(loadingProgression * 100);
  
    return (
        <Layout>
        <h1>Prototyp</h1>
      <div className="container">
        {isLoaded === false && (
          <div className="loading-overlay">
            <p>Laddar provdel ... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity className="unity" unityProvider={unityProvider} 
        style={{ width: 800, height: 600 }} 
        devicePixelRatio={2}/>
      </div>
    </Layout>
    );
    {/* return (
    <Layout>
    <h1>Prototyp</h1> */}
    {/* <Game></Game>
    </Layout>
    ) */}
}

export default Prototype;