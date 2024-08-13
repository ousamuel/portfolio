import { projects } from "../Projects";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";
export default function ProjectsComp() {
  return (
    <main className="main-body">
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
            className="rounded-small m-5 py-5 pb-1 bg-gray-300 project-card "
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
                <h4 className="text-base">
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
    </main>
  );
}
