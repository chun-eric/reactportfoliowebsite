import PropTypes from "prop-types";
import PortfolioCard from "./PortfolioCard";
("react");
import AOS from "aos";

const Project = ({ project, theme }) => {
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
  project: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Project;
