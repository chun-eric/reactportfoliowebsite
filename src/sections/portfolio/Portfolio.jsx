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
  const navigate = useNavigate();

  const CATEGORY_LABELS = {
    all: "All",
    instructional_design:
      "Instructional Design, Learning Experience, E-Learning",
    html_email: "Email",
    frontend: "Frontend",
    landing_pages: "Landing Page",

    fullstack: "Fullstack",
    in_development: "In Development...",
  };

  // Use Object.values for button display names
  const categories = Object.values(CATEGORY_LABELS);
  // console.log("Categories", categories);

  // Create reverse mapping: display name -> data category
  const DISPLAY_TO_DATA = {};
  Object.entries(CATEGORY_LABELS).forEach(([dataCategory, displayName]) => {
    DISPLAY_TO_DATA[displayName] = dataCategory;
  });

  const filterProjectsHandler = (displayCategory) => {
    // console.log("Filter called with display category:", displayCategory);

    // Convert display name back to data category
    const dataCategory = DISPLAY_TO_DATA[displayCategory];
    // console.log("Converted to data category:", dataCategory);

    if (dataCategory === "all") {
      setProjects(data);
      return;
    }

    const filteredProjects = data.filter((project) => {
      // console.log(`Comparing: project.category (${project.category}) === dataCategory (${dataCategory})`);
      return project.category === dataCategory;
    });

    // console.log("Filtered projects:", filteredProjects);
    setProjects(filteredProjects);
  };

  const handleCardClick = (item) => {
    // console.log("Card clicked, category:", item.category);

    if (item.category === "case_studies") {
      navigate(`/case-study/${item.id}`);
    } else {
      setSelectedProject(item);
    }
  };

  const { theme } = props;

  return (
    <section id="portfolio" className={theme} ref={ref}>
      <div className={`portfolio-overlay ${theme}`}></div>
      <div className="portfolio-content">
        <div className="skills-title">
          <h3 className={`title project-title ${theme}`}>Projects</h3>
        </div>

        <ProjectsCategories
          categories={categories} // This is now ['All', 'Case Studies', 'HTML Email', ...]
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
