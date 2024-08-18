"use client";
import { useState, useEffect, useContext, useRef } from "react";
import * as React from "react";
import { Button, select, useDisclosure } from "@nextui-org/react";
import SpinCoin from "./SpinCoin";
import Header from "./header";
import GoogleAnalytics from "./components/GoogleAnalytics";
import VantaBackground from "./components/Vanta";
import HomeComp from "./components/HomeComp";
import AboutComp from "./components/AboutComp";
import ExperienceComp from "./components/ExperienceComp";
import ProjectsComp from "./components/ProjectsComp";
import PhotosComp from "./components/PhotosComp";
export default function Home() {
  const [switchingComps, setSwitchingComps] = useState(false);
  // for resume
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(0);
  const allButtons = ["Home", "About", "Experience", "Projects"];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  const handleButton = (i) => {
    if (i == selectedComponent) {
      return;
    }
    setSwitchingComps(true);
    setTimeout(() => {
      setSwitchingComps(false);
    }, 1300);
    setTimeout(() => {
      setSelectedComponent(i);
    }, 1300 / 2);
  };
  const loadComponent = () => {
    switch (selectedComponent) {
      case 1:
        return <AboutComp />;
      case 2:
        return <ExperienceComp />;
      case 3:
        return <ProjectsComp isDarkMode={isDarkMode}/>;
      default:
        return <HomeComp />;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2650);
    const finishedLoading = setTimeout(() => setIsPageReady(true), 3050);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishedLoading);
    };
  }, []);
  const vantaRef = useRef(null); // Reference to the DOM element

  if (isLoading) {
    return <SpinCoin />;
  }

  return (
    <div
      className={`flex flex-col px-[10px] pb-[10px] items-center ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-[#09113e]"
      }`}
    >
      <Header />
      <div className="flex flex-col items-center justify-center h-[65px]">
        <img
          className={`z-50 coin cursor-pointer ${
            isDarkMode ? "white-shadow" : "black-shadow"
          }`}
          src="/logo.png"
          alt="logo"
          onClick={() => {
            setIsDarkMode((prevState) => !prevState);
          }}
        />
      </div>
      <div
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
        className={` ${switchingComps ? `white-block-left` : "hidden"}`}
      ></div>
      <div
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
        className={` ${switchingComps ? `white-block-right` : "hidden"}`}
      ></div>
      {/* <div className="white-block-right"></div> */}
      {/* </section> */}
      {/* <div className={isVisible ? "see-more" : "hidden absolute"}>
        <img src="/images/see-more_white.svg" alt="▽" className="w-[40px]" />
      </div> */}
      <main
        className={`main-body ${
          isDarkMode ? `background-gradient-dark` : `background-gradient`
        }`}
      >
        <div className="buttons z-40 w-5/6 md:w-3/5 max-w-[500px]">
          {allButtons.map((btnName, i) => {
            return (
              <Button
                key={i}
                className={selectedComponent == i ? "bg-blue-400 mx-1" : "mx-1"}
                onClick={() => handleButton(i)}
              >
                {btnName}
              </Button>
            );
          })}
        </div>
        <section
          className={isPageReady ? `w-full flex justify-center ` : "hidden"}
        >
          {loadComponent()}
        </section>
      </main>
    </div>
  );
}
