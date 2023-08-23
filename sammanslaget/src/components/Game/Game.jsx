import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
      loaderUrl: "../assets/Build/Sammanslaget.loader.js",
      dataUrl: "../assets/Build/Sammanslaget.data",
      frameworkUrl: "../assets/Build/Sammanslaget.framework.js",
      codeUrl: "../assets/Build/Sammanslaget.wasm",
    });
   
    const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Laddar provdel ... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} 
      style={{ width: 800, height: 600 }} 
      devicePixelRatio={2}
      />
    </div>
  );
}

export default Game;