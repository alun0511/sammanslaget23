import React from "react";
import Head from "next/head";
import Script from "next/script";

const Meta = ({ siteTitle, title, description, image, url }) => {
  return (
    <Head>
      {/* From Favicon generator */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="icon" type="image/png" sizes="16x16" href="/Favicon.png" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* Dynamic data */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={1200} />
      <meta property="og:image:height" content={610} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
