import React from "react";
import { Image } from "@nextui-org/react";

const frontendSkills = [
  { name: "JavaScript", src: "/logos/javascript.svg", alt: "js-logo" },
  { name: "React", src: "/logos/react.svg", alt: "react-logo" },
  { name: "TypeScript", src: "/logos/typescript.svg", alt: "ts-logo" },
  { name: "Next.js", src: "/logos/nextjs.svg", alt: "nextjs-logo" },
  { name: "HTML", src: "/logos/html.svg", alt: "html-logo" },
  { name: "CSS/Tailwind", src: "/logos/css.svg", alt: "css-logo" },
  { name: "NodeJS/Express", src: "/logos/nodejs.svg", alt: "nodejs-logo" },
  { name: "Git", src: "/logos/git.svg", alt: "git-logo" },
];

// { name: "RESTful API", src: "/logos/rest.svg", alt: "rest-logo" },
const backendSkills = [
  { name: "Java", src: "/logos/java.svg", alt: "java-logo" },
  { name: "Python", src: "/logos/python.svg", alt: "python-logo" },
  { name: "Django", src: "/logos/django.svg", alt: "django-logo" },
  { name: "Flask", src: "/logos/flask.svg", alt: "flask-logo" },
  { name: "AWS", src: "/logos/aws.svg", alt: "aws-logo" },
  { name: "MongoDB", src: "/logos/mongo.svg", alt: "mongo-logo" },
  { name: "SQL", src: "/logos/sql.svg", alt: "sql-logo" },
  { name: "PostgreSQL", src: "/logos/postgres.svg", alt: "postgres-logo" },
];
 {/* Front end: html, css js, react, tailwinds, query?? Bootstrap
Back end: next js mysql, restful api, python
Other/tools: git, GITHUB, VERCEL, heroic, typescript, viscose, bash
 */}
const SkillsList = () => (
  <div className="p-5 flex justify-evenly items-center w-full text-md sm:text-[20px] ">
    <ul>
      {frontendSkills.map((skill) => (
        <li key={skill.name} className="flex items-center">
          <Image
            className="pr-2 rounded-none"
            src={skill.src}
            width="40px"
            height="40px"
            alt={skill.alt}
          />
          {skill.name}
        </li>
      ))}
    </ul>
    <ul>
      {backendSkills.map((skill) => (
        <li key={skill.name} className="flex items-center justify-end">
          {skill.name}
          <Image
            className="pl-2 rounded-none"
            src={skill.src}
            width="40px"
            height="40px"
            alt={skill.alt}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsList;
