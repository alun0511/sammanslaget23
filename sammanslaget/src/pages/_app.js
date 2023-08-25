import "../../styles/global.css";
import { Quantico } from "@next/font/google";

import { Component } from "react";

const quantico = Quantico({
  subsets: ["latin"],
  weight: "400",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={quantico.className}>
      <Component {...pageProps} />
    </main>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
