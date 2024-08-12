import React, { useState, useEffect, useRef } from "react";
import data from "./data";
import "./skills.css";

const Skills = ({ theme }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.35 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='skills-section' ref={sectionRef}>
      <div className={`skills ${theme}`}>
        <div className='ripple-background'>
          <div className={`circle xxlarge shade1 ${theme}`}></div>
          <div className='circle xlarge shade2'></div>
          <div className='circle large shade3'></div>
          <div className='circle medium shade4'></div>
          <div className='circle small shade5'></div>
        </div>

        <div className={`skills-wrapper ${theme}`}>
          <div className={`skills-title ${isIntersecting ? "fade-in" : ""}`}>
            <h3 className={`title ${theme}`}>Skills</h3>
          </div>

          <div className='skills-container'>
            <div className='skills-image-container'>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`item ${isIntersecting ? "fade-in" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`image ${
                      theme === "dark" &&
                      (item.title === "Wordpress" || item.title === "Git")
                        ? "changeToWhite"
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className='skills-badge-container'>
              {data.map((item, index) => (
                <button
                  key={item.id}
                  className={`skill-btn ${isIntersecting ? "fade-in" : ""}`}
                  style={{ animationDelay: `${(data.length + index) * 100}ms` }}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
