import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
      loaderUrl: "./assets/build/Sammanslaget.loader.js",
      dataUrl: "./assets/build/Sammanslaget.data",
      frameworkUrl: "./assets/build/Sammanslaget.framework.js",
      codeUrl: "./assets/build/Sammanslaget.wasm",
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