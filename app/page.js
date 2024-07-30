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

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Context } from "./providers";
import { useRouter } from "next/navigation";
import Header from "./header";
import Contact from "./Contact";
import Certs from "./Certs";
import SkillsList from "./Skills";
import { projects } from "./Projects";
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const github = "https://github.com/ousamuel";
  const linkedIn = "https://www.linkedin.com/in/samuel-ou-0510s/";

  ``;
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
    <div className="flex flex-col items-center bg-slate-400 source-sans">
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
                        src="/Samuel Ou Resume.pdf"
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
        <p className="text-xl"> Languages, Frameworks, Libraries, Tools</p>
        <SkillsList />
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
            My name is <span className="text-black">Samuel Ou</span> and I am a
            graduate from{" "}
            <span className="text-red-600">Stony Brook University</span> and{" "}
            <span className="text-blue-600"> Flatiron Bootcamp</span> <br />
            <br />
            As a developer, I specialize in solving technical problems, finding
            the most creative and efficient solutions that also provide valuable
            learning experiences. My passion lies in constant learning and
            growing my craftsmanship in software.
            <br />
            <br />
            <span className="text-black">
              &quot;What single accomplishment are you most proud of?&quot;
            </span>
            <br />
            I&apos;m most proud of my growth as a person. When I was younger, I
            used to be quite hot-headed and stubborn, which often led to
            conflicts between me and my peers. Fortunately, I was able to turn
            myself around, but this accomplishment was not a solo
            accomplishment; surrounding myself with the right people is what
            pushed me to become more open-minded and patient. These traits
            branched out into every aspect of my life, whether it was talking to
            friends/strangers or finding solutions to fix my code. I&apos;m
            proud of who I&apos;ve become and am excited to keep growing.
            <br />
            <br />
            Fun fact about me: After years of playing pool, I successfully
            learned how to juggle.
          </p>
        </div>
      </div>

      <h1>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#000000", color: "#00e4b3" }}
          contentArrowStyle={{ borderRight: "7px solid  #000000" }}
          date="Jul 2024 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Image
              src="/images/headstarter.jpg"
              className="rounded-full"
              alt="headstarter"
            />
          }
        >
          <h3 className="vertical-timeline-element-title text-white">
            Software Engineering Fellow
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a
              className="underline"
              target="_blank"
              href="https://www.linkedin.com/company/headstarterai/mycompany/"
            >
              @ Headstarter AI
            </a>
          </h4>
          <p>
            • Building 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI with
            98% model accuracy, verified by 1000+ users <br />
            • Developed projects from design to deployment leading other
            engineering fellows using MVC design patterns <br />• Coached by
            Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git,
            and microservice patterns{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h1 className="mt-4">Projects</h1>
      <p className="px-4 text-center text-lg">
        {"Video demos are viewable by clicking on the image"}
      </p>
      <div
        id="projects"
        className="container text-3xl items-stretch justify-center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-small m-5 py-5 bg-gray-300 project-card "
          >
            <CardBody className="overflow-visible pt-1 items-center h-auto">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={project.title + "image"}
                  className="object-cover rounded-none max-w-2xl h-xl"
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
                      className="rounded-full float-right min-w-[25px] hover:bg-blue-600"
                    />
                  </Link>
                </small>
                <h4 className="text-sm">
                  {/* {project.description.split("\n").map((item, key) => ( */}
                  <span className="mb-2">
                    {project.description}
                    <br />
                  </span>
                  {/* ))} */}
                </h4>
              </CardHeader>
            </CardBody>
          </Card>
        ))}
      </div>
      {/* <div id="contact-me" className="container">
        <h1 className="text-2xl">Email me @ samuelou510@gmail.com</h1>
      </div> */}

      <h1>Certifications</h1>
      <div
        id="certifications"
        className="container c2 text-3xl items-center justify-center"
      >
        {Certs.map((cert) => (
          <Card
            key={cert.title}
            className="rounded-none m-5 py-5 bg-gray-300 w-2xl h-4xl project-card"
          >
            <CardBody className="overflow-visible pt-1 items-center h-auto">
              <CardHeader className="pb-0 px-4 flex-col items-start">
                <small className="text-default-600 w-full flex justify-between items-center">
                  <strong className="text-black flex justify-between">
                    {cert.title}
                  </strong>
                  <Image
                    alt={cert.title + "image"}
                    className="rounded flex"
                    src={cert.image}
                    width={40}
                  />
                </small>
                <span className="text-sm text-gray-500">{cert.date_id}</span>
                <span className="text-sm">{cert.desc}</span>
              </CardHeader>{" "}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
