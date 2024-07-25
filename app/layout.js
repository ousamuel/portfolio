"use client";
import "./globals.css";
import "animate.css";
import { useContext } from "react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Providers, Context } from "./providers";
import GoogleAnalytics from "./GoogleAnalytics";
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
        <GoogleAnalytics />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
