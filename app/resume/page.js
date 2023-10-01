"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
  NextUIProvider,
} from "@nextui-org/react";
export default function Resume() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/images/top-right-orange.png'), url('images/bot-left-orange.png')",
        backgroundPosition: "right bottom, left top",
        backgroundSize: "cover",
        backgroundColor: "rgb(83,96,118)",
      }}
    >
      asd
      <embed src="/resume.pdf" type="application/pdf" width="600" height="400" />

    </div>
  );
}
