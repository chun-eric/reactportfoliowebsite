import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";

const Project = ({ project }) => {
  return <PortfolioCard project={project} />;
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
