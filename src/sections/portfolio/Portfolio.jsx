import data from "./data";

import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import { useState } from "react";

const Portfolio = ({ theme }) => {
  const [projects, setProjects] = useState(data);

  // get all the categories
  const categories = data.map((item) => item.category);

  // Get unique categories only remove duplicates
  const uniqueCategories = ["All", ...new Set(categories)];

  // function to filter projects based on categories
  const filterProjectsHandler = (category) => {
    // if All is selected, return all projects
    if (category === "All") return setProjects(data);

    // filter data based on category
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id='portfolio' className={theme}>
      <div
        className='skills-title'
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-offset='200'
        data-aos-duration='800'
        data-aos-easing='ease-in-out'
      >
        <h3 className='project-title'>Projects</h3>
      </div>
      <div className={`container portfolio__container ${theme}`}>
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
