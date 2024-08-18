import React from "react";
import AnimatedSection from "../Animated";
export default function Traits() {
  const traits = [
    "Quality-Focused",
    "Team Player",
    "Continuous Learner",
    "Creative Problem Solver",
    "Strong Communicator",
    // "UI/UX Sensitivity",
    "Full-Stack",
  ];

  return (
    <AnimatedSection effect="" className="my-2 marquee">
      <div className="marquee-content">
        {traits.map((message, index) => (
          <span key={index} className="marquee-item">
            {message} <span className="mx-2">•</span>
            {/* {message} <span className='mx-2 opacity-30'>|</span> */}
          </span>
        ))}
        {traits.map((message, index) => (
          <span key={index} className="marquee-item">
            {message} <span className="mx-2">•</span>
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
