import "../../styles/global.css";
import { Quantico } from "@next/font/google";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Component } from "react";
import { useUnityContext } from "react-unity-webgl";


const quantico = Quantico({
  subsets: ["latin"],
  weight: "400",
});

export default function MyApp({ Component, pageProps }) {
  const { unload } = useUnityContext();

  const router = useRouter()

  useEffect(() => {
      const exitingFunction = () => {
          console.log('exiting...');
      };

      router.events.on('routeChangeStart', exitingFunction );

      return () => {
          console.log('unmounting component...');
          router.events.off('routeChangeStart', exitingFunction);
      };
  }, []);


  return (
    <main className={quantico.className}>
      <Component {...pageProps} />
    </main>
  );
}