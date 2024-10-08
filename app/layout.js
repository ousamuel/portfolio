"use client";
import "./globals.css";
import "animate.css";
import { useContext, useEffect } from "react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Providers, Context } from "./providers";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Samuel Ou</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Raleway:wght@100&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        {/* <GoogleTagManager gtmId="G-6PVQ9726CR" /> */}
        <GoogleAnalytics />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
