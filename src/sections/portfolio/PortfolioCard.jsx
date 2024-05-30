import PropTypes from "prop-types";
import { useState } from "react";
import ProjectModal from "../projectModal/ProjectModal";

const PortfolioCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      className='project-cards-container'
      data-aos='fade-up'
      data-aos-delay='100'
      data-aos-offset='200'
      data-aos-duration='1200'
      data-aos-easing='ease-in-out'
    >
      <div className='card-container gradient-border'>
        <img
          className='cover-image'
          src={project.image}
          alt='Portfolio Project Image'
        />
        <div className='overlay'></div>
        <div className='project-description'>
          <p className='project-title'>{project.title}</p>
          <p className='card-description'>{project.desc}</p>
          <div className='button-card-container'>
            <button className='btn button-card demo'>
              <p>
                <a href={project.demo} className='' rel='noopener noreferrer'>
                  Demo
                </a>
              </p>
            </button>
            <button className='btn button-card' onClick={() => handleModal()}>
              <p>
                <a href={project.github} rel='noopener noreferrer'>
                  Details
                </a>
              </p>
            </button>
          </div>
        </div>
        {}
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
