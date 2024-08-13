"use client";
import { useState, useEffect, useContext } from "react";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
  NextUIProvider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import RobotEyes from "./RobotEyes";
import Traits from "./Traits";
import SpinCoin from "./SpinCoin";
import AnimatedSection from "./Animated";

import { useRouter } from "next/navigation";
import Header from "./header";
import Contact from "./Contact";
import Certs from "./Certs";
import SkillsList from "./Skills";
import ProjectsComp from "./components/ProjectsComp";
import SkillsComp from "./components/SkillsComp";
import { projects } from "./Projects";
import AboutComp from "./components/AboutComp";
import ExperienceComp from "./components/ExperienceComp";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // for resume
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("none");
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
    } else {
      return <div></div>;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const finishedLoading = setTimeout(() => {
      setIsPageReady(true);
    }, 3500);
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
      className="flex flex-col items-center px-[10px] pb-[10px]"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <Header />
      <div className="flex justify-center h-[100px]">
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
      <div className={isVisible ? "see-more" : "hidden absolute"}>
        <img src="/images/see-more_white.svg" alt="▽" className="w-[40px]" />
      </div>
      <main className="main-body">
        <section
          id="welcome"
          className="container text-6xl flex h-[calc(100vh-60px)] mb-4"
        >
          <div className="welcome-left my-auto">
            <h3 className="opening-slide font-bold">Samuel Ou</h3>
            <div className="my-4 bio w-full">
              Software Engineer from <strong>Queens, NY</strong> <br></br>
              Delivering Creative Solutions
              <Traits />
            </div>
            {/*  */}
            <span className="flex mt-3 resume">
              <Button className="resume-pop font-bold text-xl" onPress={onOpen}>
                Resume
              </Button>
              <Modal
                size="4xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="text-black"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                      <ModalBody>
                        <embed
                          src="/Samuel Ou Resume.pdf"
                          type="application/pdf"
                          className="m-auto w-full h-[500px] "
                        />
                      </ModalBody>
                      <ModalFooter></ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </span>
          </div>
          <div className="welcome-right flex flex-col m-auto">
            <img
              src="/images/with-laptop-1.png"
              className="home-logo flex m-auto"
              alt="logo"
            />
          </div>
        </section>
        <section>
          <Button onClick={() => setSelectedComponent("About")}>About</Button>
          <Button onClick={() => setSelectedComponent("Experience")}>
            Experience
          </Button>
          <Button onClick={() => setSelectedComponent("Projects")}>
            Projects
          </Button>
          <Button onClick={() => setSelectedComponent("Skills")}>Skills</Button>
        </section>
        <section>{loadComponent()}</section>
      </main>
    </div>
  );
}
