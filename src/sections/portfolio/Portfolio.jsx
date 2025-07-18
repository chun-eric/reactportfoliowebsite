import { useState, forwardRef } from "react";
import data from "./data";
import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";



const Portfolio = forwardRef((props, ref) => {
  const [projects, setProjects] = useState(data);
    const [selectedProject, setSelectedProject] = useState(null); 

  const categories = ["All",  "Case Studies",...new Set(data.map((item) => item.category))];
  
  const navigate = useNavigate()

  const filterProjectsHandler = (category) => {
    if (category === "All") {
      setProjects(data);
    } else if (category === "Case Studies") {
      // Filter for case studies
      setProjects(data.filter((project) => project.category.includes("Case Study")));
    } else {
      setProjects(data.filter((project) => project.category === category));
    }
  };


  // Case study click and routing
  const handleCardClick = (item) => {
    if (item.category && item.category.includes("Case Study")) {
      navigate(`/case-study/${item.id}`)
    } else {
      setSelectedProject(item)
    }
  }


  const { theme } = props;

  
  return (
    <section id='portfolio' className={theme} ref={ref}>
<div className={`portfolio-overlay ${theme}`}></div>
      <div className='portfolio-content'>
        <div className='skills-title'>
          <h3 className={`project-title ${theme}`}>Projects</h3>
        </div>
        <ProjectsCategories
          categories={categories}
          onFilterProjects={filterProjectsHandler}
          theme={theme}
        />
        <div className={`container portfolio__container ${theme}`}>
          <Projects 
            projects={projects} 
            theme={theme} 
            onCardClick={handleCardClick} 
          />
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;

Portfolio.propTypes = {
  theme: PropTypes.string.isRequired,
};
