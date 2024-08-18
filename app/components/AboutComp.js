import { Image } from "@nextui-org/react";
export default function AboutComp({isDarkMode}) {
  return (
    <section id="about" className="container text-4xl mt-10">
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
          from <span className="text-red-600">Stony Brook University</span> and{" "}
          <span className="text-blue-600"> Flatiron Bootcamp</span> <br />
          <br />
          As a developer, I specialize in solving technical problems, finding
          the most creative and efficient solutions that also provide valuable
          learning experiences. My passion lies in constant learning and growing
          my craftsmanship in software. <br />
          {/* <strong>Listen first, questions second.</strong> */}
          <br />
          <strong className="">
            &quot;What single accomplishment are you most proud of?&quot;
          </strong>
          <br />
          I&apos;m most proud of my growth as a person. When I was younger, I
          used to be quite hot-headed and stubborn, which often led to conflicts
          between me and my peers. Fortunately, I was able to turn it around by
          surrounding myself with the right people. These traits branched out
          into every aspect of my life, whether it was talking to
          friends/strangers or finding solutions to fix my code. I&apos;m proud
          of who I&apos;ve become and am excited to keep growing.
          <br />
          <br />
          &quot;Listen first, questions after.&quot; - Mama Ou
        </p>
        {/* <AnimatedSection effect="fade-in" className="">
        <h2>First Section</h2>
        <p>This section will fade in when scrolled into view.</p>
      </AnimatedSection> */}
      </div>

      <div></div>
    </section>
  );
}
