"use client";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import Photos from "../lists/Photos";
import AnimatedSection from "../Animated";
export default function AboutComp({ isDarkMode }) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <section id="about" className="container text-4xl mt-10">
      <div className="container min-h-full">
        <div className="welcome-right ">
          <h1 className="pb-2 text-center">Education</h1>
          <ul className="edu">
            <li className="text-xl flex justify-center items-center my-1">
              <Image
                className="mr-2 w-[40px]"
                src="/logos/sbu.png"
                alt="sbu-logo"
              />
              Stony Brook University
            </li>
            <li className=" text-xl flex justify-center items-center my-1">
              <Image
                className="rounded-full mr-2 w-[38px]"
                src="/logos/flatironlogo.png"
                alt="sbu-logo"
              />
              Flatiron School
            </li>
            <li className="flex justify-center items-center my-4">
              <Image
                className=" h-[300px] sm:h-[450px]  "
                src="/images/profile.png"
                alt="portrait"
              />
            </li>
          </ul>
        </div>
        <div className="welcome-left about-section">
          <h1 className=" pl-6">About me</h1>
          <p className={`text-lg p-6 lower ${!isDarkMode && "easy-see"}`}>
            My name is <span className="">Samuel Ou</span> and I am a graduate
            from <span className="text-red-600">Stony Brook University</span>{" "}
            and <span className="text-blue-600"> Flatiron Bootcamp</span> <br />
            <br />
            As a developer, I specialize in solving technical problems, finding
            the most creative and efficient solutions that also provide valuable
            learning experiences. My passion lies in constant learning and
            growing my craftsmanship in software. <br />
            <br />
            <strong className="">
              &quot;What single accomplishment are you most proud of?&quot;
            </strong>
            <br />
            I&apos;m most proud of my growth as a person. When I was younger, I
            used to be quite hot-headed and stubborn, which often led to
            conflicts between me and my peers. Fortunately, I was able to turn
            it around by surrounding myself with the right people. These traits
            branched out into every aspect of my life, whether it was talking to
            friends/strangers or finding solutions to fix my code. I&apos;m
            proud of who I&apos;ve become and am excited to keep growing.
            <br />
            <br />
            &quot;Listen first, questions second.&quot;
          </p>
        </div>
      </div>
      <div className="w-full p-10 px-6">
        <h1 className="text-center p-4 pb-0 lg:text-left leading-[50px]">
          My Transition Into Tech
        </h1>
        <div className={`text-lg lower p-4 ${!isDarkMode && "easy-see"}`}>
          During my time in college, I thought I knew what I wanted, following a
          traditional path towards medicine. I was going through the motions,
          following in the footsteps of others, believing I had the rest of my
          life planned out. My motivation stemmed from a genuine desire to help
          people, but it wasn&apos;t until I was exposed to the world of tech
          and programming that everything clicked. The thrill of solving complex
          problems and the creativity involved in coding sparked a passion I
          never knew I had.
          <br />
          <div
            onMouseEnter={() => setFlipped(false)}
            onMouseLeave={() => setFlipped(true)}
          >
            <AnimatedSection
              id="gif-transition"
              className="flex justify-center items-center perspective-container"
              effect="fade-in"
              delay={0}
              triggerFlip={handleFlip}
            >
              <div className={`flip ${flipped ? "flipped" : ""}`}>
                <div className="side front">
                  <img
                    className="w-full"
                    src="/gifs/medicine.gif"
                    alt="ambu gif"
                  />
                </div>
                <div className="side back">
                  <img
                    className="w-full"
                    src="/gifs/coder.gif"
                    alt="medicine gif"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
          <br />
          From that moment on, I realized that just following the path that
          others laid out wasn&apos;t for me. Instead, I learned to take charge
          of my journey, embracing challenges head-on, and constantly seeking to
          learn more. I discovered that I could still make a meaningful impact,
          but in a different way - by building software that solves real-world
          problems. This shift in mindset empowered me to transition into
          software development, where I now specialize in tackling technical
          challenges and finding innovative, practical solutions. My journey
          from medicine to tech has taught me the importance of pursuing what
          truly excites you, and I bring that enthusiasm and dedication to every
          project I work on.
        </div>
      </div>
      {/* <div className="w-full pb-10 px-6 ">
        <h3 className="text-center mb-6">
          Hobbies{" "}
          <button
            onClick={() => {
              setOpenImages((prev) => !prev);
            }}
          >
            openimages
          </button>
        </h3>

        <div className="flex w-full justify-evenly h-fit">
          {!openImages && (
            <h4 className="w-1/3 flex flex-col justify-center items-center text-center">
              Photography <br /> <small>Collection of my favorite shots</small>
              {hoveringImage && "hovering"}
            </h4>
          )}
          <div
            className="images-box w-1/3 cursor-pointer"
            onMouseOver={() => setHoveringImage(true)}
            onMouseLeave={() => setHoveringImage(false)}
          >
            <div>
              <motion.img
                className="image-card-vert z-[60]"
                src="/photos/bk-bridge.jpeg"
                alt="bk-bridge"
              ></motion.img>
              <img
                className={`image-card-vert z-50 ${
                  hoveringImage && "pop-move-5"
                }`}
                src="/photos/tunnel.jpeg"
                alt="tunnel"
              ></img>
              <img
                className={`image-card-vert z-40 ${
                  hoveringImage && "pop-move-10"
                }`}
                src="/photos/alley.jpeg"
                alt="alley"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
