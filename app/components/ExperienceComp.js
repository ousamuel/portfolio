import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Certs from "../Certs";
import SkillsList from "../Skills";
export default function ExperienceComp() {
  return (
    <div className="flex flex-col pt-6">
      <section
        className="w-full px-5 text-md flex flex-col items-center justify-center 
  md:text-3xl"
      >
        <h1 className="py-3 text-center leading-none">Technical Skills</h1>
        <p className="text-xl"> Languages, Frameworks, Libraries, Tools</p>

        <SkillsList />
      </section>
      <section className="">
        <h1 className="text-center">Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work "
            dateClassName="text-black"
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
            {" "}
            <h3 className="vertical-timeline-element-title text-white ">
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
              • Building 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI
              with 98% model accuracy, verified by 1000+ users <br />
              • Developed projects from design to deployment leading other
              engineering fellows using MVC design patterns <br />• Coached by
              Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git,
              and microservice patterns{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <section className="">
        <h1 className="text-center">Certifications</h1>
        <div
          id="certifications"
          className="container c2 text-3xl items-stretch justify-center"
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
                  {/* <span className="text-sm text-gray-500">{cert.date_id}</span> */}
                  <span className="text-sm">{cert.desc}</span>
                </CardHeader>{" "}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
