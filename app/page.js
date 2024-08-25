"use client";
import { useState, useEffect, useContext, useRef } from "react";
import * as React from "react";
import { Button, select, useDisclosure } from "@nextui-org/react";
import SpinCoin from "./components/SpinCoin";
import Header from "./header";
import GoogleAnalytics from "./components/GoogleAnalytics";
import VantaBackground from "./components/Vanta";
import HomeComp from "./components/HomeComp";
import AboutComp from "./components/AboutComp";
import ExperienceComp from "./components/ExperienceComp";
import ProjectsComp from "./components/ProjectsComp";
import PhotosComp from "./components/PhotosComp";
import WAVES from "vanta/dist/vanta.waves.min";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
export default function Home() {
  const lightBackground = "#FFFFFF";
  const darkBackground = "#00051f";
  const [switchingComps, setSwitchingComps] = useState(false);
  // for resume
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(0);
  const allButtons = ["Home", "About", "Experience", "Projects"];
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  const loadComponent = () => {
    switch (selectedComponent) {
      case 1:
        return <AboutComp isDarkMode={isDarkMode} />;
      case 2:
        return <ExperienceComp isDarkMode={isDarkMode} />;
      case 3:
        return <ProjectsComp isDarkMode={isDarkMode} />;
      default:
        return <HomeComp />;
    }
  };
  const transitionTime = 1300;
  const handleButton = (i) => {
    if (i == selectedComponent) {
      return;
    }
    setSwitchingComps(true);
    setTimeout(() => {
      setSwitchingComps(false);
    }, transitionTime);
    setTimeout(() => {
      setSelectedComponent(i);
    }, transitionTime / 2);
  };

  const handleDarkMode = () => {
    setSwitchingComps(true);
    setTimeout(() => {
      setIsDarkMode((prev) => !prev);
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 0.75,
          scaleMobile: 1.0,
          color: isDarkMode ? 0x7b90ff : 0xe1825,
          shininess: 0,
          waveSpeed: 0.7,
          zoom: 0.81,
        })
      );
    }, transitionTime / 2);
    setTimeout(() => {
      setSwitchingComps(false);
    }, transitionTime);
  };

  useEffect(() => {
    if (!isLoading && vantaRef.current && !vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE, // Pass the THREE.js instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x7b90ff,
          shininess: 0,
          waveSpeed: 0.7,
          zoom: 0.81,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isPageReady, vantaEffect]);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2650);
    const finishedLoading = setTimeout(() => {
      setIsPageReady(true);
    }, 3050);
    return () => {
      clearTimeout(timer);
      clearTimeout(finishedLoading);
    };
  }, []);

  if (isLoading) {
    return <SpinCoin />;
  }
  return (
    <div
      className={`flex flex-col px-[10px] pb-[10px] items-center full-bg ${
        isDarkMode ? "bg-[#00051f] text-[#e9ecef]" : "bg-white text-[#09113e]"
      }`}
    >
      <div className="open-left-gate"></div>
      <div className="open-right-gate"></div>
      <Header />
      <div className="flex flex-col items-center justify-center h-[55px]">
        <img
          className={`z-50 coin cursor-pointer ${
            isDarkMode ? "white-shadow" : "black-shadow"
          }`}
          src="/logo.png"
          alt="logo"
          onClick={handleDarkMode}
        />
      </div>{" "}
      <div
        style={{
          backgroundColor: isDarkMode ? darkBackground : lightBackground,
        }}
        className={` ${switchingComps ? `left-gate full-bg` : ""}`}
      ></div>
      <div
        style={{
          backgroundColor: isDarkMode ? darkBackground : lightBackground,
        }}
        className={` ${switchingComps ? `right-gate full-bg` : ""}`}
      ></div>
      <main ref={vantaRef} className="main-body">
        <div className="buttons z-40 top-[60px] w-full md:top-[12px] md:right-[25px] md:w-[35%]">
          {allButtons.map((btnName, i) => {
            return (
              <p
                key={i}
                className={`nav-btn ${
                  selectedComponent === i
                    ? isDarkMode
                      ? "bg-blue-600"
                      : "bg-blue-400"
                    : isDarkMode
                    ? "text-black bg-gray-200"
                    : "bg-gray-200"
                }`}
                onClick={() => handleButton(i)}
              >
                {btnName}
              </p>
            );
          })}
        </div>
        {isPageReady && (
          <section
            className="section-body"
            // className={`section-body ${
            //   isDarkMode ? `background-gradient-dark` : `background-gradient`
            // }`}
          >
            {loadComponent()}
          </section>
        )}
      </main>
    </div>
  );
}
