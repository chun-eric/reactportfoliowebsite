import PropTypes from "prop-types";
import { useState } from "react";
import ProjectModalbeta from "./ProjectModalbeta";

const PortfolioCard = ({ project, theme, onCardClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Check if its a case study
  const isCaseStudy = project.category && project.category === "case_studies"

  // Check if demo exists and is valid
  const hasValidDemo = project.demo && 
                      project.demo !== null && 
                      project.demo !== 'n/a' && 
                      project.demo !== '#' && 
                      project.demo.trim() !== '';



  // Handle details button click
  const handleDetailsClick = () => {
    console.log('=== DEBUG: Details button clicked ===');
  console.log('Project title:', project.title);
  console.log('Project category:', project.category);
  console.log('Is case study:', isCaseStudy);
  console.log('onCardClick function exists:', !!onCardClick);
  console.log('onCardClick type:', typeof onCardClick);
  
  if (isCaseStudy && onCardClick) {
    console.log('✅ About to call onCardClick for case study');
    onCardClick(project);
    console.log('✅ onCardClick called successfully');
  } else {
    console.log('❌ Opening modal instead because:');
    console.log('   - isCaseStudy:', isCaseStudy);
    console.log('   - onCardClick exists:', !!onCardClick);
    openModal();
  }
  }

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
              {/* Only show demo button if there's a valid demo */}
             {hasValidDemo && (
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
              )}
              
              {/* Details button - changes behavior for case studies */}
              <button className='btn button-card' onClick={handleDetailsClick}>
                <p style={{ color: "white", fontSize: "18px" }}>
                  {isCaseStudy ? "View Case" : "Details"}
                </p>
              </button>
            </div>
          </div>
        )}
      </div>

       {/* Only show modal for non-case-study projects */}
     {!isCaseStudy && (
        <ProjectModalbeta
          project={project}
          onClose={closeModal}
          theme={theme}
          show={showModal}
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
    demo: PropTypes.string,
    github: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  theme: PropTypes.string.isRequired,
  onCardClick: PropTypes.func, // Added missing prop type
};

export default PortfolioCard;
