"use client";
import { useState, useEffect, useContext } from "react";
import * as React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import SpinCoin from "./SpinCoin";
import Header from "./header";
import GoogleAnalytics from "./components/GoogleAnalytics";
import VantaBackground from "./components/Vanta";
import HomeComp from "./components/HomeComp";
import AboutComp from "./components/AboutComp";
import ExperienceComp from "./components/ExperienceComp";
import ProjectsComp from "./components/ProjectsComp";
import SkillsComp from "./components/SkillsComp";
import PhotosComp from "./components/PhotosComp";
export default function Home() {
  // for resume
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("Home");
  const handleScroll = () => {
    // Check if the user has scrolled to the bottom
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  const loadComponent = () => {
    if (selectedComponent == "About") {
      return <AboutComp />;
    } else if (selectedComponent == "Experience") {
      return <ExperienceComp />;
    } else if (selectedComponent == "Projects") {
      return <ProjectsComp />;
    } else if (selectedComponent == "Skills") {
      return <SkillsComp />;
    } else if (selectedComponent == "Photos") {
      return <PhotosComp />;
    } else {
      return <HomeComp />;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2650);
    const finishedLoading = setTimeout(() => {
      setIsPageReady(true);
    }, 3050);
    return () => {
      clearTimeout(timer);
      clearTimeout(finishedLoading);
    };
  }, []);

  const allButtons = ["Home", "About", "Experience", "Projects"];
  if (isLoading) {
    return <SpinCoin />;
  }
  // IDEA: if button space is too small, then makae it slideable instead, check ur phone
  return (
    <div
      className="flex flex-col px-[10px] pb-[10px] items-center"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center h-[65px]">
        {/* <img
          className="rounded-none h-[203px] z-40"
          id="top-page"
          src="/images/robot.png"
          alt="robot"
        /> */}
        <img
          className="z-50 coin cursor-pointer"
          src="/logo.png"
          alt="logo"
          onClick={() => {
            // setIsDarkMode((prevState) => !prevState);
          }}
        />
      </div>
      {/* <div className={isVisible ? "see-more" : "hidden absolute"}>
        <img src="/images/see-more_white.svg" alt="▽" className="w-[40px]" />
      </div> */}
      <main className="main-body ">
        <div className="buttons z-50 w-5/6 md:w-3/5 max-w-[500px]">
          {allButtons.map((btnName, i) => {
            return (
              <Button
                key={i}
                className={
                  selectedComponent == btnName ? "bg-blue-400 mx-1" : "mx-1"
                }
                onClick={() => setSelectedComponent(btnName)}
              >
                {btnName}
              </Button>
            );
          })}
        </div>

        <section
          className={isPageReady ? "w-full flex justify-center" : "hidden"}
        >
          {loadComponent()}
        </section>
      </main>
    </div>
  );
}
