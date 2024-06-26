import { CircleChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import "./projectmodal.css";
import PropTypes from "prop-types";

const ProjectModal = ({ project, handleProjectModal, theme }) => {
  // destructuring values object

  // state to keep track of modal visibility
  const [showProjectModal, setShowProjectModal] = useState(handleProjectModal);

  const handleModal = () => {
    setShowProjectModal(!showProjectModal);
  };

  // useEffect to handle modal visibility
  useEffect(() => {
    if (showProjectModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showProjectModal]);

  // useRef to set the projectModal as the reference
  let projectModalRef = useRef();

  // useEffect to handle modal visibility on click outside of the modal
  useEffect(() => {
    let handler = (event) => {
      // ignore clicks on the component itself
      // returns false if the event target is inside of the projectModalRef
      if (!projectModalRef.current.contains(event.target)) {
        setShowProjectModal(false);
        console.log(projectModalRef.current);
      }
    };

    // attach the event listener
    document.addEventListener("mousedown", handler);

    // cleanup function
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      {showProjectModal && (
        <div className={`projectmodal-container ${theme} `}>
          <div className='overlay-projectmodal'></div>
          <div className={`container-right ${theme} `} ref={projectModalRef}>
            <div className={`projectmodal ${theme}`}>
              <div className='projectmodal-top-row'>
                <CircleChevronLeft
                  onClick={handleModal}
                  className={`back ${theme}`}
                  size={34}
                />
                <p
                  className={`back-to-projects ${theme}`}
                  onClick={handleModal}
                >
                  <a className={`${theme}`}>Back To Projects.</a>
                </p>
              </div>

              <div className='separator'>
                <hr className='solid' />
              </div>
              <h2 className={`project-main-title-modal ${theme}`}>
                {project.title}
              </h2>
              <p className='project-modal-text'>{project.desc}</p>
              <div className={`projectmodal-image ${theme}`}>
                <img src={project.image} alt='' />
              </div>
              <div className='projectmodal-about'>
                <h3 className={`project-title-modal title-name ${theme}`}>
                  About
                </h3>
                <p className={`project-modal-text ${theme}`}>{project.about}</p>
              </div>
              <div className='projectmodal-tech'>
                <h3
                  className={`project-title-modal technologies title-name ${theme}`}
                >
                  Technologies
                </h3>
                {project.stack.map((tech, index) => (
                  <p className='project-modal-text' key={index}>
                    <span>{tech}</span>
                  </p>
                ))}
              </div>
              <div className='project-website-heading'>
                <h3 className={`project-title-modal title-name ${theme}`}>
                  Website Link
                </h3>
                <p className={`projectmodal-websitelink ${theme}`}>
                  <a href={project.demo} target='_blank'>
                    {project.demo}
                  </a>
                </p>
              </div>
              <div className='project-website-heading'>
                <h3 className={`project-title-modal title-name ${theme}`}>
                  Github
                </h3>
                <p className={`projectmodal-websitelink ${theme}`}>
                  <a target='_blank' href={project.github}>
                    {project.github}
                  </a>
                </p>
              </div>
            </div>
            <div className={`projectmodal-footer ${theme}`}>
              <a href='' className={`projectmodal-footer-link ${theme}`}>
                <p className={`${theme} open-text`}>
                  {" "}
                  <a target='_blank' href={project.demo}>
                    Open Project
                  </a>
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProjectModal.propTypes = {
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
  handleProjectModal: PropTypes.bool.isRequired,
};
export default ProjectModal;
