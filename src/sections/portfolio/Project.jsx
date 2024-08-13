import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";
("react");


const Project = ({ project, theme }) => {
  return (
    <PortfolioCard
      project={project}
      theme={theme}
     
    />
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Project;
