import { MoveLeft, CircleChevronLeft, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import data from "./data";
import "./projectmodal.css";

const ProjectModal = ({ props }) => {
  //
  const [showProjectModal, setShowProjectModal] = useState(true);

  const handleModal = () => {
    setShowProjectModal(false);
  };

  useEffect(() => {
    if (showProjectModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showProjectModal]);

  return (
    <>
      {showProjectModal && (
        <div className='projectmodal-container'>
          <div className='overlay-projectmodal'></div>
          <div className='container-right'>
            <div className='projectmodal'>
              <div className='projectmodal-top-row'>
                <CircleChevronLeft
                  onClick={handleModal}
                  className='back'
                  size={34}
                />
                <p className='back-to-projects' onClick={handleModal}>
                  <a>Back To Projects.</a>
                </p>
              </div>

              <div className='separator'>
                <hr className='solid' />
              </div>
              <h2 className='project-main-title-modal'>Scoutbar</h2>
              <p className='project-modal-text'>
                One line value offer. Manage all your properties in one place.
              </p>
              <div className='projectmodal-image'>
                <img src='../../assets/images/project1.jpg' alt='' />
              </div>
              <div className='projectmodal-about'>
                <h3 className='project-title-modal title-name'>About</h3>
                <p className='project-modal-text '>
                  2 sentence Description. Liveizy About We reduce the cost of
                  living and help you meet your most important living
                  expectations by increasing easy access to all the necessary
                  resources needed to improve living standards.
                </p>
              </div>
              <div className='projectmodal-tech'>
                <h3 className='project-title-modal technologies title-name'>
                  Technologies
                </h3>
                <p className='project-modal-text '>
                  <span>Javascript</span>
                </p>
              </div>
              <div className='project-website-heading'>
                <h3 className='project-title-modal title-name'>Website Link</h3>
                <p className='projectmodal-websitelink'>https://google.ocm</p>
              </div>
              <div className='project-website-heading'>
                <h3 className='project-title-modal title-name'>Github</h3>
                <p className='projectmodal-websitelink'>https://github.com</p>
              </div>
            </div>
            <div className='projectmodal-footer'>
              <a href='' className='projectmodal-footer-link'>
                <p>Open Projects</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
