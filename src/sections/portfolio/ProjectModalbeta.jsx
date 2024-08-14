import { CircleChevronLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import "./projectModal.css";
import PropTypes from "prop-types";

const ProjectModalbeta = ({ project, handleProjectModal, show, theme }) => {
  const projectModalRef = useRef();

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [show]);

  useEffect(() => {
    const handler = (event) => {
      if (
        projectModalRef.current &&
        !projectModalRef.current.contains(event.target)
      ) {
        handleProjectModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [handleProjectModal]);

  return (
    <>
      <div className={`overlay-projectmodal ${show ? "visible" : ""}`}></div>
      <div
        className={`projectmodal-container ${
          show ? "visible slide-in" : ""
        } ${theme}`}
      >
        <div className={`container-right ${theme} `} ref={projectModalRef}>
          <div className={`projectmodal ${theme}`}>
            <div className='projectmodal-top-row'>
              <CircleChevronLeft
                onClick={handleProjectModal(false)}
                className={`back ${theme}`}
                size={34}
              />
              <p
                className={`back-to-projects ${theme}`}
                onClick={() => handleProjectModal(false)}
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
    </>
  );
};

ProjectModalbeta.propTypes = {
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
  handleProjectModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
export default ProjectModalbeta;
