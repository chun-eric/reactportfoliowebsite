import { useState } from "react";
import data from "./data";
import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import PropTypes from "prop-types";

const Portfolio = ({ theme }) => {
  const [projects, setProjects] = useState(data);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const filterProjectsHandler = (category) => {
    if (category === "All") {
      setProjects(data);
    } else {
      setProjects(data.filter((project) => project.category === category));
    }
  };

  return (
    <section id='portfolio' className={theme}>
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
          <Projects projects={projects} theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

Portfolio.propTypes = {
theme: PropTypes.string.isRequired,
};
