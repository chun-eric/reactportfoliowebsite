import PropTypes from "prop-types";
import { useState } from "react";
import ProjectModalbeta from "./ProjectModalbeta";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PortfolioCard = ({ project, theme, onCardClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const isInstructionalDesign = project.category === "instructional_design";

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Check if its a case study
  const isCaseStudy = project.category && project.category === "case_studies";

  // Check if demo exists and is valid
  const hasValidDemo =
    project.demo &&
    project.demo !== null &&
    project.demo !== "n/a" &&
    project.demo !== "#" &&
    project.demo.trim() !== "";

  // Handle details button click
  const handleDetailsClick = () => {
    if (isCaseStudy && onCardClick) {
      onCardClick(project);
    } else if (isInstructionalDesign) {
      // Navigate to a dedicated page, e.g., /phrasecamp or /austrac-tranche2
      // You can use project.title or project.id to determine the route
      if (project.title === "AUSTRAC Tranche 2 Implementation") {
        navigate("/austrac-tranche2");
      } else if (project.title === "English PhraseCamp") {
        navigate("/phrasecamp");
      } else if (project.title === "Austrade Business Etiquette in Japan") {
        navigate("/austrade-japan");
      } else if (
        project.title === "Cybersecurity Awareness Employee Microlearning"
      ) {
        navigate("/cyber");
      }
      // Add more conditions for other instructional design projects
    } else {
      openModal();
    }
  };

  return (
    <div
      className="project-cards-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card-container gradient-border ${theme}`}>
        <img
          className="cover-image"
          src={project.image}
          alt={`${project.title} Project ${theme}`}
        />
        <div
          className={`overlay ${theme} ${hovered ? "overlay-hover" : ""}`}
        ></div>
        {hovered && (
          <div className="project-description fade-in">
            <p className="portfolio-card project-title">{project.title}</p>
            <p className="card-description">{project.desc}</p>
            <div className="button-card-container">
              {/* Only show demo button if there's a valid demo */}
              {hasValidDemo && (
                <button className="btn button-card demo">
                  <p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </p>
                </button>
              )}

              {/* Details button - changes behavior for case studies */}
              <button className="btn button-card" onClick={handleDetailsClick}>
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
    // about: PropTypes.string.isRequired,
    demo: PropTypes.string,
    github: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  theme: PropTypes.string.isRequired,
  onCardClick: PropTypes.func, // Added missing prop type
};

export default PortfolioCard;
