import PropTypes from "prop-types";

const PortfolioCard = ({ project }) => {
  return (
    <div className='portfolio__project overlay'>
      <div className='portfolio__project-image '>
        <img src={project.image} alt='Portfolio Project Image' />
      </div>
      <p className='project__title'>{project.title}</p>
      <p className='card-description'>{project.desc}</p>
      <div className='portfolio__project-cta'>
        <a href={project.demo} className='btn sm' rel='noopener noreferrer'>
          Demo
        </a>
        <a
          href={project.github}
          className='btn sm primary'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioCard;
