import PropTypes from "prop-types";
import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className='portfolio__project'>
      <div className='portfolio__project-image'>
        <img src={project.image} alt='Portfolio Project Image' />
      </div>
      <h4>{project.title}</h4>
      <p className='card-description'>{project.desc}</p>
      <div className='portfolio__project-cta'>
        {/* <a href={project.demo} className='btn sm' rel='noopener noreferrer'>
          Demo
        </a>
        <a
          href={project.github}
          className='btn sm primary'
          rel='noopener noreferrer'
        >
          GitHub
        </a> */}
      </div>
    </Card>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
