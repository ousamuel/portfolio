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
      github: "https://github.com/ousamuel/E-Commerce",
      title: "eCommerce Platform (In Dev)",
      description:
        "TypeScript - AWS Lambda/Cognito - DynamoDB\n• Implemented end-to-end features, ensuring web and mobile-friendly experience\n• Optimized cloud infrastructure on AWS, incorporating server-less architecture with AWS Lambda",
      src: "/projects/ecommerce.png",
      // live: "https://main.d3pzfughhwvxcj.amplifyapp.com/",
    },
    {
      github: "https://github.com/ousamuel/cashtrack",
      title: "CashTrack (Deployed)",
      description:
        "TypeScript - Node/Express - MongoDB\n• Expense-sharing application that simplifies group finances inspired by Splitwise\n• Users can add bills and payments to calculate distribution",
      src: "/projects/cashtrack.png",
      live: "https://main.d3pzfughhwvxcj.amplifyapp.com/",
    },
    {
      github: "https://github.com/ousamuel/fitness-app",
      title: "SteelStance (Deployed)",
      description:
        "React - Next - Python - Flask\n• Fitness application where users can view programs and personal records\n• Utilized SQLAlchemy ORM to interact with the database, ensuring data integrity and efficient storage",
      src: "/projects/steelstance.png",
      live: "https://fitness-app-ousamuel.vercel.app/",
    },
    {
      github: "https://github.com/MarkTocino/PhaseFourAutoDetailProject",
      title: "Auto Shop (Deployed)",
      description:
        "React - Next - Python - Flask - Stripe\n• Automotive application that provides scheduled car servicing and anonymous bidding\n• Implemented user authentication and authorization features using Flask-Login",
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
      className="flex flex-col items-center bg-slate-700 source-sans"
    >
      <Header hide={hideHeader} />

      <div id="welcome" className="container text-6xl flex ">
        <div className="welcome-left my-auto">
          <p className="opening-slide">Hi, my name is</p>
          <h2 className="opening-slide font-bold text-8xl">Sam</h2>
          <p className="mt-4 bio w-full">
            I&apos;m a Software Engineer from{" "}
            <span className="text-red-200">Queens, NY</span> <br></br>
            Delivering Creative Technical Solutions & Web Experiences
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
      <div className="w-full max-w-[95%] px-3 text-md flex flex-col items-center justify-center border-t border-b border-solid border-amber-100 sm:w-3/5 sm:text-3xl">
        <h1 className="py-5">Technical Skills</h1>
        <p className="text-xl"> Languages, Frameworks, & Tools</p>
        <div className="p-5 flex justify-around items-center w-full text-[20px]">
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
              HTML
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
                src="/logos/postgres.svg"
                width="40px"
                alt="js-logo"
              />
              PostgreSQL 
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
          <p className="text-lg p-6 lower">
            I&apos;m a graduate from{" "}
            <span className="text-red-400">Stony Brook University</span> and{" "}
            <span className="text-sky-400"> Flatiron Bootcamp</span> <br />
            <br />
            I&apos;m proficient in JavaScript, React, TypeScript, Node/Express,
            and Python/Flask.
            <br />
            Post-graduation, I&apos;ve continued to grow my coding skills in:
            data structures/algorithms, SQL and NoSQL databases managed with
            ORM/ODMs, Context API + React Hooks for state management, and custom
            web development.
            <br />
            <br />
            <span className="text-orange-500">Current Position: </span>
            Freelance developer for an eCommerce platform created in TypeScript
            and AWS, leveraging my expertise in full-stack development to ensure
            seamless integration of user interfaces, efficient backend
            functionalities, and secure cloud-based solutions.
            <br />
            <br />
            In my free time, I love to cook and find new recipes, go to the gym,
            and spend time with my friends and family.
          </p>
        </div>
      </div>
      <h1>Projects</h1>
      <p className="text-lg">
        {"Deployed applications are viewable by clicking on the image"}
      </p>
      <div
        id="projects"
        className="container text-3xl items-center justify-center"
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
                <h4 className="text-sm">
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
