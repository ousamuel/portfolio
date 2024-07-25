"use client";
import "./globals.css";
import "animate.css";
import { useContext } from "react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Providers, Context } from "./providers";
import GoogleAnalytics from "./GoogleAnalytics";
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  const { isOpen, setIsOpen } = useContext(Context);

  return (
    <html lang="en">
      <head>
        <title>Samuel Ou</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@800;700&display=swap"
          rel="stylesheet"
        />
      <GoogleTagManager gtmId="G-6PVQ9726CR" />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
