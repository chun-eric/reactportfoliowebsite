import { useState, useEffect, useRef, forwardRef } from "react";
import data from "./data";
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
          // Reset visible items when section is out of view
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
      const totalItems = data.length * 2; // For both icons and badges
      let timer = 0;
      for (let i = 0; i < totalItems; i++) {
        timer += 100; // 100ms delay between each item
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, timer);
      }
    }
  }, [isIntersecting]);

  const { theme } = prop;

  // Define Category display names and order
  const categoryConfig = {
    strategy: {
      title: "Product Strategy & Vision",
      order: 1
    },
    growth: {
      title: "Growth & Analytics", 
      order: 2
    },
    technical: {
      title: "Technical Proficiency",
      order: 3
    },
    tools: {
      title: "Content & Design",
      order: 4
    }
  }

 // Group skills by category and sort by defined order
 const groupedSkills = data.reduce((acc, skill) => {
  const category = skill.category || "Other"
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(skill);
  return acc;
 }, {})

 
  // sort categories
  const sortedCategories = Object.entries(groupedSkills).sort(([a],[b]) => {
    const orderA = categoryConfig[a]?.order || 999;
    const orderB = categoryConfig[b]?.order || 999;
    
  })

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
            <h3 className={`title ${theme}`}>Skills</h3>
          </div>

    <div className='skills-grid'>
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`skill-item fade-in ${
                  visibleItems.includes(index) ? "visible" : ""
                }`}
              >
                <div className="skill-icon">
                  <img
                    loading='lazy'
                    src={item.src}
                    alt={item.title}
                    className={`skill-image ${
                      theme === "dark" &&
                      (item.title === "Wordpress" || item.title === "Git")
                        ? "changeToWhite"
                        : ""
                    }`}
                  />
                </div>
                <span className={`skill-name ${theme}`}>{item.title}</span>
              </div>
            ))}
          </div>

            {/* <div className='skills-badge-container'>
              {data.map((item, index) => (
                <button
                  alt={item.title}
                  key={item.id}
                  className={`skill-btn fade-in ${
                    visibleItems.includes(data.length + index) ? "visible" : ""
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
