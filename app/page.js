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

  const github = "https://github.com/ousamuel";
  const linkedIn = "https://www.linkedin.com/in/samuel-ou-0510s/";
  const projects = [
    {
      github: "https://github.com/ousamuel/cashtrack",
      title: "CashTrack (Click for Demo)",
      description:
        "TypeScript - Node/Express - MongoDB - Socket.IO\n• Expense-sharing application that simplifies group finances inspired by Splitwise\n• Users can add bills and payments to calculate distribution",
      src: "/projects/cashtrack.png",
      live: "https://www.loom.com/share/a811ea6664ad44ea8a67e11eb4f71439",
    },
    {
      github: "https://github.com/ousamuel/fitness-app",
      title: "SteelStance (Deployed)",
      description:
        "React - Next - Python - Flask\n• Fitness application where users can view programs and personal records\n• Registered users have access to saving/posting features",
      src: "/projects/steelstance.png",
      live: "https://fitness-app-ousamuel.vercel.app/",
    },
    {
      github: "https://github.com/MarkTocino/PhaseFourAutoDetailProject",
      title: "Auto Shop (Deployed)",
      description:
        "React - Next - Python - Flask - Stripe\n• Automotive application that provides scheduled car servicing and anonymous bidding\n• Integrated Stripe for seamless payments",
      src: "/projects/auto-shop.png",
      live: "https://phase-four-auto-detail-project.vercel.app/",
    },
    {
      github: "https://github.com/dommieh97/Rainy-Day-Repository",
      title: "RainyDay",
      description:
        "JavaScript/HTML/CSS\n• Discord/Pinterest clone that shows posts related to specific communities/channels\n• Users can easily favorite posts ",
      src: "/projects/rainy-day.png",
    },
    {
      github: "https://github.com/ousamuel/Subreddit-Clone",
      title: "r/BrewCrew",
      description:
        "JavaScript/HTML/CSS\n• Reddit clone allowing users to interact with beer-related posts\n• Implemented sorting and saving options",
      src: "/projects/subreddit.png",
    },
  ];
  ``;
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

  return (
    <div
      style={
        {
          // backgroundImage: backgroundImage,
          // backgroundPosition: backgroundPosition,
          // backgroundSize: "cover",
          // backgroundColor: "rgb(83,96,118)",
        }
      }
      className="flex flex-col items-center bg-slate-700"
    >
      <Header hide={hideHeader} />

      <div id="welcome" className="container text-7xl flex ">
        <div className="welcome-left my-auto">
          <p className="opening-slide">Hi, my name is</p>
          <h2 className="opening-slide font-bold text-8xl">Sam</h2>
          <p className="text-4xl mt-4 bio w-full">
            I&apos;m a creative software developer from{" "}
            <span className="text-red-200">Queens, NY</span>, Crafting
            Responsive & Intuitive Web Experiences
          </p>
          <span className="flex mt-3 resume">
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
        <div className="welcome-right flex flex-col m-auto">
          <Image
            src="/images/with-laptop-1.png"
            className="home-logo flex m-auto"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-full max-w-[95%] px-3 text-lg flex flex-col items-center justify-center border-t border-b border-solid border-amber-100 sm:w-3/5 sm:text-3xl">
        <h1 className="py-5">Technical Skills</h1>
        <p className="text-xl"> Languages, Frameworks, & Tools</p>
        <div className="p-5 flex justify-around items-center w-full  ">
          <ul>
            {/* <h3>Frontend</h3> */}
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/javascript.svg"
                width="40px"
                alt="js-logo"
              />
              JavaScript
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/react.svg"
                width="40px"
                alt="js-logo"
              />
              React
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/typescript.svg"
                width="40px"
                alt="ts-logo"
              />
              TypeScript
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/nextjs.svg"
                width="40px"
                alt="js-logo"
              />
              Next.js
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/html.svg"
                width="40px"
                alt="js-logo"
              />
              Html
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/css.svg"
                width="40px"
                alt="js-logo"
              />
              CSS/Tailwind
            </li>
          </ul>
          <ul>
            {/* <h3>Backend</h3>{" "} */}
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/python.svg"
                width="40px"
                alt="js-logo"
              />
              Python
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/java.svg"
                width="40px"
                alt="js-logo"
              />
              Java
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/nodejs.svg"
                width="40px"
                alt="js-logo"
              />
              Node.js/Express
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/mongo.svg"
                width="40px"
                alt="js-logo"
              />
              MongoDB
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/mysql.svg"
                width="40px"
                alt="js-logo"
              />
              MySQL
            </li>
            <li className="flex items-center">
              <Image
                className="pr-2 rounded-none"
                src="/logos/rest.svg"
                width="40px"
                alt="js-logo"
              />
              RESTful API
            </li>
          </ul>
          {/* <ul>
            <h3>Tools</h3>
          </ul> */}
        </div>
        {/* Front end: html, css js, react, tailwinds, query?? Bootstrap
Back end: next js mysql, restful api, python
Other/tools: git, GITHUB, VERCEL, heroic, typescript, viscose, bash
 */}
      </div>
      <div id="about" className="container text-4xl sm:mt-10">
        <div className="welcome-right ">
          <h1 className="pb-2 text-center">Education</h1>
          <ul className="edu">
            <li className=" text-xl flex justify-center items-center ">
              <Image
                className="m-2 ml-0 w-[40px]"
                src="/logos/sbu.png"
                alt="sbu-logo"
              />
              Stony Brook University
              <br />- B.S. in Biology
            </li>
            <li className=" text-xl flex justify-center items-center">
              <Image
                className="rounded-full m-2.5 w-[38px]"
                src="/logos/flatironlogo.png"
                alt="sbu-logo"
              />
              Flatiron School
            </li>
            <li className="flex justify-center items-center">
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
            seeking different approaches for user optimization. <br />
            <br />
            I&apos;m a strong communicator and have demonstrated high
            adaptability in high-pressure situations from my experience as an
            EMT & medical assistant at Stony Brook University.
            <br />
            My knack for statistics, physics, and logic-related courses led me
            to enroll in a bootcamp to pursue a comprehensive software
            engineering education.
            <br />
            <br />
            In my free time, I love to cook and find new recipes, go to the gym,
            and spend time with my friends and family.
          </p>
        </div>
      </div>
      <h1>Projects</h1>
      <p className="text-2xl">
        {"Deployed applications are viewable by clicking on the image"}
      </p>
      <div
        id="projects"
        className="container text-5xl items-center justify-center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-small m-5 py-5 bg-gray-300 w-2xl h-4xl project-card"
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
                  <strong className="text-black">{project.title}</strong>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/logos/githubblack.svg"
                      alt="github logo"
                      width="25px"
                      className="rounded-none float-right min-w-[25px]"
                    />
                  </Link>
                </small>
                <h4 className="font-bold text-large lg:text-xl">
                  {project.description.split("\n").map((item, key) => (
                    <span key={key}>
                      {item}
                      <br />
                    </span>
                  ))}
                </h4>
              </CardHeader>
            </CardBody>
          </Card>
        ))}
      </div>
      {/* <div id="contact-me" className="container">
        <h1 className="text-2xl">Email me @ samuelou510@gmail.com</h1>
      </div> */}
    </div>
  );
}
