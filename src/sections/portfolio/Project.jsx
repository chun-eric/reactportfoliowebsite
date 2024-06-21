import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";
("react");
import AOS from "aos";

const Project = ({ project, theme, aosDelay }) => {
  return (
    <PortfolioCard
      project={project}
      theme={theme}
      // data-aos-easing='ease-in'
      // data-aos-delay={aosDelay}
    />
  );
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
