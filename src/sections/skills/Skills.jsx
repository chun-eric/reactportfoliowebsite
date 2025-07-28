import { useState, useEffect, useRef, forwardRef } from "react";
import data, { skillsData, categoryConfig } from "./data";
import "./skills.css";

const Skills = forwardRef((prop, ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setVisibleItems([]);
        }
      },
      { threshold: 0.08 }
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

  useEffect(() => {
    if (isIntersecting) {
      // Calculate total items across all categories
      const totalItems = Object.values(skillsData).flat().length;
      let timer = 0;
      for (let i = 0; i < totalItems; i++) {
        timer += 150; // 150ms delay between each item
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, timer);
      }
    }
  }, [isIntersecting]);

  const { theme } = prop;

  return (
    <section id='skills-section' ref={ref}>
      <div className={`skills ${theme}`} ref={sectionRef}>
        <div className='ripple-background'>
          <div className='circle xxlarge shade1'></div>
          <div className='circle xlarge shade2'></div>
          <div className='circle large shade3'></div>
          <div className='circle medium shade4'></div>
          <div className='circle small shade5'></div>
        </div>

        <div className={`skills-wrapper ${theme}`}>
          <div
            className={`skills-title ${
              isIntersecting ? "fade-in visible" : "fade-in"
            }`}
          >
            <h3 className={`title ${theme}`}>Core Skills</h3>
          </div>

          {/* Organized Skills Grid with Column Headers */}
          <div className='skills-columns-container'>
            {Object.entries(skillsData).map(([categoryKey, skills], categoryIndex) => {
              const config = categoryConfig[skills[0]?.category] || categoryConfig.tools;
              let itemIndex = Object.values(skillsData).slice(0, categoryIndex).flat().length;
              
              return (
                <div 
                  key={categoryKey} 
                  className={`skills-column ${config.highlight ? 'primary-column' : ''}`}
                >
                  {/* Column Header */}
                  <div 
                    className={`column-header fade-in ${
                      isIntersecting ? "visible" : ""
                    }`}
                  >
                  <div className="">
                    <span>{config.icon}</span>
                    <h4 className={`column-title ${theme}`}>
                      {config.title}
                    </h4>
                  </div>
                    <p className={`column-subtitle ${theme}`}>
                      {config.subtitle}
                    </p>
                  </div>

                  {/* Skills in this column */}
                  <div className='column-skills'>
                    {skills.map((skill, skillIndex) => {
                      const currentItemIndex = itemIndex + skillIndex;
                      return (
                        <div
                          key={skill.id}
                          className={`skill-item fade-in ${
                            visibleItems.includes(currentItemIndex) ? "visible" : ""
                          }`}
                        >
                          <div className="skill-icon">
                            <img
                              loading='lazy'
                              src={skill.src}
                              alt={skill.title}
                              className={`skill-image ${
                                theme === "dark" &&
                                (skill.title === "WordPress" || skill.title === "Git")
                                  ? "changeToWhite"
                                  : ""
                              }`}
                            />
                          </div>
                          <div className="skill-content">
                          <div className="">
                            {/* <span className="">{skill.icon}</span> */}
                            <span className={`skill-name ${theme}`}>
                              {skill.title}
                            </span>
                          </div>
                            {skill.description && (
                              <span className={`skill-description ${theme}`}>
                                {skill.description}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proof Points Section */}
          {/* <div className={`proof-points fade-in ${
            isIntersecting ? "visible" : ""
          }`}> */}
            {/* <div className="proof-item">
              <span className="proof-number">80K</span>
              <span className="proof-label">Global Learners</span>
            </div> */}
            {/* <div className="proof-item">
              <span className="proof-number">78%</span>
              <span className="proof-label">Retention Rate</span>
            </div> */}
            {/* <div className="proof-item">
              <span className="proof-number">45%</span>
              <span className="proof-label">Confidence Improvement</span>
            </div> */}
            {/* <div className="proof-item">
              <span className="proof-number">50+</span>
              <span className="proof-label">Countries Reached</span>
            {/* </div> */}
          {/* </div> */} 
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;