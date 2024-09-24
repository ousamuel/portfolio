import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Certs from "../lists/Certs";
import SkillsList from "../lists/Skills";
import Experiences from "../lists/Experience";
export default function ExperienceComp({ isDarkMode }) {
  return (
    <div className="flex flex-col pt-6">
      <section
        className="w-full px-5 text-md flex flex-col 
        items-center justify-center text-center md:text-3xl"
      >
        <h1 className="py-3 leading-none">Technical Skills</h1>
        <p className="text-xl"> Languages, Frameworks, Libraries, Tools</p>

        <SkillsList />
      </section>
      <section className="">
        <h1 className="text-center">Experience</h1>
        <VerticalTimeline>
          {Experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              visible={true}
              className="vertical-timeline-element--work"
              dateClassName={isDarkMode ? "text-[#f2f2f2]" : "text-black"}
              contentStyle={{
                background: exp.backgroundColor,
                color: exp.fontColor,
              }}
              contentArrowStyle={{ borderRight: "7px solid  #000000" }}
              date={exp.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <Image
                  src={exp.src}
                  className="rounded-full"
                  alt={exp.company}
                />
              }
            >
              <h3 className={`vertical-timeline-element-title`}>
                {exp.position}
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                <a
                  className="hover:bg-gray-400"
                  target="_blank"
                  href={exp.companyHref}
                >
                  @ {exp.company}
                </a>
              </h4>
              {exp.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
              {/* {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))} */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
      <section className="">
        <h1 className="text-center">Certifications</h1>
        <div
          id="certifications"
          className="container text-3xl items-stretch justify-center mb-10"
        >
          {Certs.map((cert) => (
            <Card
              key={cert.title}
              className="rounded-none m-2 py-5 bg-gray-300 w-1/4 min-w-[250px]"
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
