import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const About = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.18 } // Trigger when 35% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id='about' ref={aboutRef}>
      <div className='about-container'>
        <div className={`about-background-overlay ${theme}`}></div>
        <div className={`about-me ${isVisible ? "fade-in" : ""}`}>
          <div className='section-title'>
            <h2 className='title'>About Me</h2>
          </div>
          <div className='bio-container'>
            <p className='bio-info'>
              Hi, I'm Eric Chun, an Australian with roots in Dubai, now
              currently calling Osaka, Japan my home. My journey through diverse
              cultures has ignited a deep passion for blending Western and
              Eastern cultures in my development and design work. I'm fascinated
              by Japanese culture — from anime and video games to streetwear
              fashion and automotive design. I'm equally drawn to the warmth of
              'omotenashi' hospitality that permeates everyday life here. These
              diverse influences fuel my creativity, inspiring me to craft
              experiences that are both unique and engaging for users.
            </p>
            <p className='bio-info'>
              When developing digital products, whether it be emails, landing
              pages, websites, or web apps, I strive to make them simple, easy
              to understand, and practical for users. UX/UI is also very
              important to me, so I'm constantly improving my skills and
              knowledge to achieve the best results for my clients. Feel free to
              get in touch with me.
            </p>
            <div className='button-container'>
              <a href='#contact'>
                <button className='btn btn--theme--about'>Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
