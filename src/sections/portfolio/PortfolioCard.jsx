import PropTypes from "prop-types";
import { useState } from "react";
import ProjectModalbeta from "./ProjectModalbeta";

const PortfolioCard = ({ project, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div
      className='project-cards-container'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card-container gradient-border ${theme}`}>
        <img
          className='cover-image'
          src={project.image}
          alt={`${project.title} Project ${theme}`}
        />
        <div
          className={`overlay ${theme} ${hovered ? "overlay-hover" : ""}`}
        ></div>
        {hovered && (
          <div className='project-description fade-in'>
            <p className='portfolio-card project-title'>{project.title}</p>
            <p className='card-description'>{project.desc}</p>
            <div className='button-card-container'>
              <button className='btn button-card demo'>
                <p>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Demo
                  </a>
                </p>
              </button>
              <button className='btn button-card' onClick={openModal}>
                <p style={{ color: "white", fontSize: "18px" }}>Details</p>
              </button>
            </div>
          </div>
        )}
      </div>

      <ProjectModalbeta
        project={project}
        onClose={closeModal}
        theme={theme}
        show={showModal}
      />
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  theme: PropTypes.string.isRequired,
};

export default PortfolioCard;
