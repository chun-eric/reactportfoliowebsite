import Project from "./Project";
import PropTypes from "prop-types";

// shows all the projects
// we need to render a single project component
const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className='portfolio__projects'>
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
