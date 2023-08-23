import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
      loaderUrl: "build/Sammanslaget.loader.js",
      dataUrl: "build/Sammanslaget.data",
      frameworkUrl: "build/Sammanslaget.framework.js",
      codeUrl: "build/Sammanslaget.wasm",
    });

    const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
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