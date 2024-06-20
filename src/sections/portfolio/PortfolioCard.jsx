import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import ProjectModal from "../projectModal/ProjectModal";

const PortfolioCard = ({ project, theme }) => {
  // state to keep track of Project modal visibility
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleProjectModal = (value) => {
    setShowProjectModal(value);
    setShowProjectModal(!showProjectModal);
  };

  // useRef to set the projectModal as the reference
  // let projectModalRef = useRef();

  // useEffect to handle modal visibility on click outside of the modal
  // useEffect(() => {
  //   let handler = (event) => {
  //     // ignore clicks on the component itself
  //     // returns false if the event target is inside of the projectModalRef
  //     if (!projectModalRef.current.contains(event.target)) {
  //       setShowProjectModal(false);
  //       console.log(projectModalRef.current);
  //     }
  //   };

  //   // attach the event listener
  //   document.addEventListener("mousedown", handler);

  //   // cleanup function
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <div
      className='project-cards-container'
      data-aos='fade-up'
      data-aos-delay='50'
      data-aos-offset='200'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
    >
      <div className='card-container gradient-border'>
        <img
          className='cover-image'
          src={project.image}
          alt='Portfolio Project Image'
        />
        <div className={`overlay ${theme}`}></div>
        <div className='project-description'>
          <p className='project-title'>{project.title}</p>
          <p className='card-description'>{project.desc}</p>
          <div className='button-card-container'>
            <button className='btn button-card demo'>
              <p>
                <a
                  href={project.demo}
                  target='_blank'
                  className=''
                  rel='noopener noreferrer'
                >
                  Demo
                </a>
              </p>
            </button>
            <button
              className='btn button-card'
              onClick={() => handleProjectModal(true)}
              rel='noopener noreferrer'
            >
              <p style={{ color: "white", fontSize: "18px" }}>Details</p>
            </button>
          </div>
        </div>
      </div>
      {showProjectModal && (
        <ProjectModal
          project={project}
          handleProjectModal={showProjectModal}
          theme={theme}
          // pass the ref to the projectModal
          // ref={projectModalRef}
        />
      )}
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
};

export default PortfolioCard;
