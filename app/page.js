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

import { Context } from "./providers";
import { useRouter } from "next/navigation";
import Header from "./header";
import Contact from "./Contact";
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const { isOpen, setIsOpen } = useContext(Context);
  const resumeLink =
    "https://docs.google.com/document/d/1FjXpPvXPx983ZDkfXYzVC8UMfDPKg-qNZn1Rfm4jgQA/preview";
  const github = "https://github.com/ousamuel";
  const linkedIn = "https://www.linkedin.com/in/samuel-ou-0510s/";
  const projects = [
    {
      github: "https://github.com/ousamuel/fitness-app",
      title: "SteelStance",
      description:
        "Fullstack fitness application developed using the framework Next.js with a Flask backend. Anonoymous users can view programs and personal records, registered users have access to saving/posting features",
      src: "/images/steelstance.png",
      live: "https://fitness-app-ousamuel.vercel.app/",
    },
    {
      github: "https://github.com/ousamuel/Auto-Repair",
      title: "Auto Shop",
      description:
        "Fullstack website that provides services, scheduling, and sign-up options. Users can select from a list of offered services and schedule based on available dates/times, sign-up not required.",
      src: "/images/auto-gallery.png",
    },
    {
      github: "https://github.com/ousamuel/Subreddit-Clone",
      title: "r/BrewCrew",
      description:
        "Subreddit clone - single page application. Developed using only vanilla JavaScript, combined with HTML & CSS ",
      src: "/images/subreddit.png",
    },
  ];
  const [backgroundImage, setBackgroundImage] = useState(
    "url('/images/top-left.png'), url('images/bot-right.png')"
  );
  const [backgroundPosition, setBackgroundPosition] = useState(
    "right bottom, left top"
  );
  const [hideHeader, setHideHeader] = useState(true);
  useEffect(() => {
    function handleScroll() {
      const homeSection = document.getElementById("welcome");
      const homeRect = homeSection.getBoundingClientRect();
      if (homeRect.top <= 0 && homeRect.bottom >= 0) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY =
  //       (window.scrollY + window.innerHeight) /
  //       document.documentElement.scrollHeight;

  //     if (scrollY < 0.5) {
  //       setBackgroundImage(
  //         "url('/images/top-left.png'), url('images/bot-right.png')"
  //       );
  //       setBackgroundPosition("right bottom, left top");
  //     } else if (scrollY >= 0.5 && scrollY < 1) {
  //       setBackgroundImage(
  //         "url('/images/bot-left-orange.png'), url('images/top-right-orange.png')"
  //       );
  //       setBackgroundPosition("left top, right bottom");
  //     } else if (scrollY >= 1 && scrollY < 1.5) {
  //       setBackgroundImage(
  //         "url('/images/top-left.png'), url('images/bot-right.png')"
  //       );
  //       setBackgroundPosition("left top, right bottom");
  //     } else if (scrollY >= 1.5) {
  //       setBackgroundImage(
  //         "url('/images/bot-left-orange.png'), url('images/top-right-orange.png')"
  //       );

  //       setBackgroundPosition("right bottom, left top");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundPosition: backgroundPosition,
        backgroundSize: "cover",
        backgroundColor: "rgb(83,96,118)",
      }}
    >
      <Header hide={hideHeader} />

      <div id="welcome" className="container text-7xl flex">
        <div className="welcome-left">
          <p className="opening-slide">Hi, my name is</p>
          <h2 className="opening-slide font-bold text-8xl">Sam</h2>
          <p className="text-4xl mt-4 bio">
            I&apos;m a web developer from{" "}
            <span className="text-red-200">Queens, NY</span>, transitioning away
            from the pre-health track.
          </p>
          <span className="flex mt-3 resume">
            {/* <Link
              className="p-1 link text-xl font-bold text-black bg-amber-100 rounded-small"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <Image
                className="rounded-none pl-1"
                style={{ transform: "translateY(-5px)" }}
                width="15px"
                alt="new-window-icon"
                src="/images/new-window.svg"
              />
            </Link> */}
            <Button
              className="resume-pop bg-amber-100 font-bold text-xl"
              onPress={onOpen}
            >
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
                        src="/resume.pdf"
                        type="application/pdf"
                        className="m-auto w-full h-[500px] "
                      />
                    </ModalBody>
                    <ModalFooter>
                      {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            {/* <Link
              className="link"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              something else?
            </Link> */}
          </span>
        </div>
        <div className="welcome-right flex flex-col ml-auto mr-auto">
          <Image
            src="/images/with-laptop-1.png"
            className="home-logo"
            alt="logo"
          />
        </div>
      </div>
      <div id="about" className="container text-4xl mt-10">
        <div className="welcome-right pl-10 items-center justify-center ">
          <h1 className="pb-2 lg:pl-10">Education</h1>
          <ul className="edu">
            <li className=" text-xl flex items-center text-center">
              <Image
                className="m-2 ml-0 w-[40px]"
                src="/images/sbu.png"
                alt="sbu-logo"
              />
              Stony Brook University
              <br />- B.S. in Biology
            </li>
            <li className=" text-xl flex items-center">
              <Image
                className="rounded-full m-2.5 w-[38px]"
                src="/images/flatironlogo.png"
                alt="sbu-logo"
              />
              Flatiron School
            </li>
            <li>
              <Image
                className=" h-[300px] sm:h-[450px]  "
                src="/images/profile.png"
                alt="portrait"
              />
            </li>
          </ul>
        </div>
        <div className="welcome-left about-section">
          <h1 className="opening-slide pl-6">About me</h1>
          <p className="text-2xl p-6 font-bold lower">
            I am proficient in creating user-friendly websites and specialize in
            seeking different approaches for backend optimization. <br />
            <br />
            After my undergrad at Stony Brook University and working as an EMT
            and medical assistant, I pivoted towards technology, driven by my
            strengths in logic and math.
            <br /> Working in medicine has enhanced my ability to collaborate
            within a team and adapt quickly to changing circumstances. <br />{" "}
            <br />
            In my free time, I love to cook and find new recipes, go to the gym,
            and spend time with my friends and family.
          </p>
        </div>
      </div>
      <h1>Projects</h1>
      <div
        id="projects"
        className="container text-5xl items-center justify-center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-small m-5 py-5 bg-gray-300 max-w-xl project-card"
          >
            <CardBody className="overflow-visible pt-1 items-center h-auto">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={project.title + "image"}
                  className="object-cover rounded-none max-w-2xl "
                  src={project.src}
                  width="100%"
                />
              </Link>
              <CardHeader className="pb-0 px-4 flex-col items-start">
                <small className="text-default-600 w-full flex justify-between items-center">
                  <p className="font-bold">{project.title}</p>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/githubblack.svg"
                      alt="github logo"
                      width="25px"
                      className="rounded-none float-right min-w-[25px]"
                    />
                  </Link>
                </small>
                <h4 className="font-bold text-large">{project.description}</h4>
              </CardHeader>
            </CardBody>
          </Card>
        ))}
      </div>
      <div id="contact-me" className="container">
        {/* Contact */}
        <h1 className="text-2xl">Email me @ samuelou510@gmail.com</h1>
        {/* <Contact /> */}
      </div>
    </div>
  );
}
