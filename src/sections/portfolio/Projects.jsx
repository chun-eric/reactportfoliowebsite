import Project from "./Project";
import PropTypes from "prop-types";

// shows all the projects
// we need to render a single project component
const Projects = ({ projects, theme }) => {
  console.log(projects);
  return (
    <div
      className='portfolio__projects'
      data-aos='fade-up'
      data-aos-delay='50'
      data-aos-offset='50'
      data-aos-duration='1000'
      data-aos-easing='ease-in'
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
