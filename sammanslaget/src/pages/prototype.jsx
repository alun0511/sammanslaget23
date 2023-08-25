import Layout from "@/components/Layout";
import { Unity, useUnityContext } from "react-unity-webgl";


const Prototype = ( { pageProps } ) => {

    const { unityProvider, isLoaded, loadingProgression, unload } = useUnityContext({
        loaderUrl: "/Prototype/Build/Sammanslaget.loader.js",
        dataUrl: "/Prototype/Build/Sammanslaget.data",
        frameworkUrl: "/Prototype/Build/Sammanslaget.framework.js",
        codeUrl: "/Prototype/Build/Sammanslaget.wasm",
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