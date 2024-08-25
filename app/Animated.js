import React, { useEffect, useRef } from "react";

const AnimatedSection = ({ children, className, effect, delay, triggerFlip }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
            if (triggerFlip) {
              setTimeout(triggerFlip, 2500); // Flip after 1 second
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={`${className} ${effect}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
