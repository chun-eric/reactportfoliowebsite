import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";
("react");


const Project = ({ project, theme, onCardClick }) => {
  return (
    <PortfolioCard
      project={project}
      theme={theme}
      onCardClick={onCardClick}
    />
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  onCardClick: PropTypes.func
};

export default Project;
