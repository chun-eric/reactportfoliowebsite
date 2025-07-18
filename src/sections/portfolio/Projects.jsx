import Project from "./Project";
import PropTypes from "prop-types";

// shows all the projects
// we need to render a single project component
const Projects = ({ projects, theme, onCardClick  }) => {
  console.log('Project component - onCardClick received:', !!onCardClick);
  return (
    <div className='portfolio__projects'>
      {projects.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          theme={theme}
          aosDeloy={index * 100}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  onCardClick: PropTypes.func,
};

export default Projects;
