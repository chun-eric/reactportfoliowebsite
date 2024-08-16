import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ProjectModalbeta from "./ProjectModalbeta";
import A0S from "aos";
import "aos/dist/aos.css";

const PortfolioCard = ({ project, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    A0S.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className='project-cards-container'>
      <div
        className='card-container gradient-border'
        data-aos='fade-in'
        data-aos-delay='200'
        data-aos-offset='200'
        data-aos-duration='1500'
        data-aos-easing='ease-in'
      >
        <img
          className='cover-image'
          src={project.image}
          alt={`${project.title} Project`}
        />
        <div
          className={`overlay ${theme} ${hovered ? "overlay-hover" : ""}`}
        ></div>
        <div
          className='project-description fade-in'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
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
