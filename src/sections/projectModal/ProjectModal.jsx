import { CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";
// import data from "../../data";

const ProjectModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='projectmodal-container transform-modal'>
      <div className='projectmodal'>
        <MoveLeft className='back-icon' onClick={handleModal} />
        <a href=''>
          <p className='back-to-projects'>Back To Projects</p>
        </a>
      </div>
      <div className='separator'></div>
      <h3 className='project-title'>Project Title</h3>
      <p className='project-modal-text'>
        One line value offer. Manage all your properties in one place.
      </p>
      <div className='projectmodal-image'>
        <img src='' alt='' />
      </div>
      <div className='projectmodal-about'>
        <h3 className='project-title'>About</h3>
        <p>
          2 sentence Description. Liveizy About We reduce the cost of living and
          help you meet your most important living expectations by increasing
          easy access to all the necessary resources needed to improve living
          standards.
        </p>
      </div>
      <div className='projectmodal-tech'>
        <h3 className='project-title'>Technologies</h3>
        <p>
          <span>Javascript.</span>
        </p>
      </div>
      <div className='project-title'>
        <h3>Website</h3>
        <p className='projectmodal-websitelink'>websiteurl link</p>
      </div>
      <div className='projectmodal-footer'>
        <a href='' className='projectmodal-footer-link'>
          <p>Open Project</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
