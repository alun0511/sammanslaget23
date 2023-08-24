import "../../styles/global.css";
import { Quantico } from "@next/font/google";
import { Josefin_Sans } from "@next/font/google";
import { Component } from "react";

const quantico = Quantico({
  subsets: ["latin"],
  weight: "400",
});

const jossan = Josefin_Sans({
  subsets: ["latin"],
  weight: "200",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={quantico.className}>
      <Component {...pageProps} />
      <p className={jossan.className}></p>
    </main>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
