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
  const [switchingComps, setSwitchingComps] = useState(false);
  // for resume
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(0);
  const allButtons = ["Home", "About", "Experience", "Projects"];
  const [vantaEffect, setVantaEffect] = useState(null);
  const [darkNote, setDarkNote] = useState(false);
  const vantaRef = useRef(null);

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
  const loadComponent = () => {
    switch (selectedComponent) {
      case 1:
        return <AboutComp isDarkMode={isDarkMode} />;
      case 2:
        return <ExperienceComp />;
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
          scale: 1.0,
          scaleMobile: 1.0,
          color: isDarkMode ? 0x6f7cb6 : 0xe1825,
          shininess: isDarkMode ? 20 : 0,
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
    const timer = setTimeout(() => setIsLoading(false), 2650);
    const finishedLoading = setTimeout(() => setIsPageReady(true), 3050);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(finishedLoading);
    };
  }, []);
  useEffect(() => {
    if (isPageReady && vantaRef.current && !vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE, // Pass the THREE.js instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6f7cb6,
          shininess: 20,
          waveSpeed: 0.7,
          zoom: 0.81,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isPageReady, vantaEffect]);
  if (isLoading) {
    return <SpinCoin />;
  }
  return (
    <div
      className={`flex flex-col px-[10px] pb-[10px] items-center full-bg ${
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
          onClick={handleDarkMode}
        />
      </div>
      <div
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
        className={` ${switchingComps ? `white-block-left full-bg` : ""}`}
      ></div>
      <div
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
        className={` ${switchingComps ? `white-block-right full-bg` : ""}`}
      ></div>
      <main ref={vantaRef} className={`main-body `}>
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
