import PropTypes from "prop-types";
import { useState } from "react";

const PortfolioCard = ({ project }) => {
  return (
    // <div className='portfolio__project '>
    //   <div className='portfolio__project-image '>
    //     <img
    //       className='cover-image'
    //       src={project.image}
    //       alt='Portfolio Project Image'
    //     />
    //   </div>
    //   <div className='overlay'></div>
    //   <div className='project__description' onMouseEnter={{}}>
    //     <div className='project__lowerthird'>
    //       <p className='project__title'>{project.title}</p>
    //       <p className='card-description'>{project.desc}</p>
    //       <div className='portfolio__project-cta'>
    //         <button className='btn skill-btn button-card'>
    //           <p>
    //             <a href={project.demo} className='' rel='noopener noreferrer'>
    //               Demo
    //             </a>
    //           </p>
    //         </button>
    //         <button className='btn skill-btn button-card'>
    //           <a href={project.github} rel='noopener noreferrer'>
    //             GitHub
    //           </a>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='project-cards-container'>
      <div className='card'>
        <div className='image-wrapper '>
          <img
            className='cover-image'
            src={project.image}
            alt='Portfolio Project Image'
          />
        </div>
        <div className='overlay'></div>
        <div className='project__description'>
          <div className='project__lowerthird'>
            <p className='project__title'>{project.title}</p>
            <p className='card-description'>{project.desc}</p>
            <div className='portfolio__project-cta'>
              <button className='btn skill-btn button-card'>
                <p>
                  <a href={project.demo} className='' rel='noopener noreferrer'>
                    Demo
                  </a>
                </p>
              </button>
              <button className='btn skill-btn button-card'>
                <a href={project.github} rel='noopener noreferrer'>
                  Details
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioCard;
