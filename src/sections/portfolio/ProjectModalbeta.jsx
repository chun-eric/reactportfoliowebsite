import { CircleChevronLeft } from "lucide-react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "./projectModal.css";
import PropTypes from "prop-types";

const ProjectModalbeta = ({ project, onClose, show, theme }) => {
  const [modalRoot, setModalRoot] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setModalRoot(document.getElementById("modal-root"));
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  const handleOverlayClick = (e) => {
    // Prevent click from immediately propagating
    e.stopPropagation();
    handleClose();
  };

  if (!show && !isClosing) return null;

  if (!show || !modalRoot) return null;

  const modalContent = (
    <>
      <div
        className={`overlay-projectmodal ${
          show && !isClosing ? "visible" : "fade-out"
        } ${theme}`}
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`projectmodal-container visible ${
          isClosing ? "slide-out" : "slide-in"
        } ${theme}`}
      >
        <div className={`container-right ${theme} `}>
          <div className={`projectmodal ${theme}`}>
            <div className='projectmodal-top-row'>
              <CircleChevronLeft
                onClick={handleClose}
                className={`back ${theme}`}
                size={34}
              />
              <button
                className={`back-to-projects ${theme} back-to-projects`}
                onClick={handleClose}
              >
                Back To Projects.
              </button>
            </div>

            <div className='separator'>
              <hr className='solid' />
            </div>
            <h2 className={`project-main-title-modal ${theme}`}>
              {project.title}
            </h2>
            <p className='project-modal-text'>{project.desc}</p>
            <div
              className={`projectmodal-image ${theme} ${
                project.category === "HTML Email" ? "wide-image" : ""
              }`}
            >
              <img src={project.image} alt={project.title} />
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
                <a
                  target='_blank'
                  href={project.github}
                  rel='noopener noreferrer'
                >
                  {project.github}
                </a>
              </p>
            </div>
          </div>
          <div className={`projectmodal-footer ${theme}`}>
            <a
              href={project.demo}
              className={`projectmodal-footer-link ${theme}`}
            >
              <p className={`${theme} open-text`}>Open Project</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

ProjectModalbeta.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    demo: PropTypes.string,
    github: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};
export default ProjectModalbeta;
