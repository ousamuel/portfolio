import { projects } from "../lists/Projects";
import { useState } from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

export default function ProjectsComp({ isDarkMode }) {
  const [selectedSrc, setSelectedSrc] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleMouseEnter = (index) => {
    setSelectedSrc(index);
  };

  const handleMouseLeave = () => {
    setSelectedSrc(null);
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="mt-4 text-center ">Projects</h1>
      {/* <p className="px-4 text-center text-lg">
        {"Video demos are viewable by clicking on the image"}
      </p> */}
      <div id="projects" className="flex w-full px-4">
        <section className="hidden sm:flex sm:w-3/5 relative">
          <div
            className="absolute w-full h-full 
          flex justify-center items-center  "
          >
            {selectedSrc ? "" : `Choose any Project to Learn More`}
            <br />
          </div>
          {projects.map((project, i) => {
            return (
              <img
                key={i}
                className={
                  selectedSrc == project.src
                    ? "fade-in-out-projects show"
                    : "fade-in-out-projects"
                }
                src={project.src}
                alt="selected-hover"
              />
            );
          })}
        </section>
        <section className="w-full sm:w-2/5 flex flex-col justify-center">
          {projects.map((project, i) => {
            // project: title, live, src, github, description

            return (
              <a
                href={project.live}
                target="_blank"
                key={i}
                className={`p-4 ml-4 ${
                  isDarkMode ? "hover:bg-gray-900" : "hover:bg-[#ecf0fa]"
                }`}
                onMouseEnter={() => handleMouseEnter(project.src)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  setSelectedSrc(null);
                  setSelectedSrc(project.src);
                }}
              >
                <div className="flex justify-between text-xl">
                  <strong>{project.title}</strong>
                  <span
                    className={`flex px-2 py-1 rounded-sm ${
                      selectedSrc == project.src
                        ? "fade-in-bouncing-arrow show"
                        : "fade-in-bouncing-arrow"
                    }`}
                  >
                    <img
                      src="/images/right-arrow.svg"
                      width={24}
                      alt="right-arrow"
                    />
                    <img
                      src="/logos/githubblack.svg"
                      width={24}
                      alt="githublogo"
                    />
                  </span>
                </div>
                <p className={selectedSrc == project.src ? `pt-1` : "hidden"}>
                  {project.description}
                </p>
              </a>
            );
          })}
        </section>
      </div>
    </div>
  );
}
{
  /* {projects.map((project) => (
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
                </h4>
              </CardHeader>
            </CardBody>
          </Card>
        ))} */
}

// import { projects } from "../lists/Projects";
// import { useState, useRef } from "react";

// export default function ProjectsComp({ isDarkMode }) {
//   const [selectedSrc, setSelectedSrc] = useState(null);
//   const videoRefs = useRef([]); // Create an array of refs for the videos

//   const handleMouseEnter = (index, videoSrc) => {
//     setSelectedSrc(videoSrc);
//     if (videoRefs.current[index]) {
//       // videoRefs.current[index].currentTime = 0; // Reset video to start
//       videoRefs.current[index].playbackRate = 1.5; // Set playback speed to 1.5x

//       videoRefs.current[index].play(); // Play the video
//     }
//   };

//   const handleMouseLeave = (index) => {
//     setSelectedSrc(null);
//     if (videoRefs.current[index]) {
//       videoRefs.current[index].pause(); // Pause video on mouse leave
//     }
//   };

//   return (
//     <div className="flex flex-col w-full">
//       <h1 className="mt-4 text-center ">Projects</h1>
//       <div id="projects" className="flex w-full px-4">
//         <section className="w-full md:w-2/5 flex flex-col justify-center">
//           {projects.map((project, i) => (
//             <a
//               href={project.github}
//               target="_blank"
//               key={i}
//               className={`p-4 ml-4 ${
//                 isDarkMode ? "hover:bg-gray-900" : "hover:bg-[#ecf0fa]"
//               }`}
//               onMouseEnter={() => handleMouseEnter(i, project.vid)}
//               onMouseLeave={() => handleMouseLeave(i)}
//             >
//               <div className="flex justify-between text-xl">
//                 <strong>{project.title}</strong>
//                 <span
//                   className={`flex px-2 py-1 rounded-sm ${
//                     selectedSrc === project.src
//                       ? "fade-in-bouncing-arrow show"
//                       : "fade-in-bouncing-arrow"
//                   }`}
//                 >
//                   <img
//                     src="/images/right-arrow.svg"
//                     width={24}
//                     alt="right-arrow"
//                   />
//                   <img
//                     src="/logos/githubblack.svg"
//                     width={24}
//                     alt="githublogo"
//                   />
//                 </span>
//               </div>
//               <p className={selectedSrc === project.vid ? `pt-1` : "hidden"}>
//                 {project.description} <br />
//                 {project.muted && "(In-depth video + audio)"}
//               </p>
//             </a>
//           ))}
//         </section>
//         <section className="hidden md:flex md:w-3/5 relative">
//           <div className="absolute w-full h-full flex justify-center items-center">
//             {selectedSrc ? "" : `Choose any Project to Learn More`}
//             <br />
//           </div>
//           {projects.map((project, i) => (
//             <video
//               key={i}
//               ref={(el) => (videoRefs.current[i] = el)} // Assign each video element to the corresponding ref
//               className={
//                 selectedSrc === project.vid
//                   ? "fade-in-out-projects show"
//                   : "fade-in-out-projects"
//               }
//               id="myVideo"
//               muted={project.muted}
//               autoPlay={selectedSrc === project.vid} // Only autoplay when selected
//               loop
//             >
//               <source src={project.vid} type="video/mp4" />
//               <img src={project.src} alt="selected-hover-img" />
//               Your browser does not support the video tag.
//             </video>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }
