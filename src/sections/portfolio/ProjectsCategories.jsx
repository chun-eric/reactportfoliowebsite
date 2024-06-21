/* eslint-disable react/prop-types */
import CategoryButton from "./CategoryButton";
import { useState } from "react";

const ProjectsCategories = ({ categories, onFilterProjects, theme }) => {
  // state to keep track of active category
  const [active, setActive] = useState("All");

  // function to change active category
  const changeCategoryHandler = (active) => {
    setActive(active);
    onFilterProjects(active);
  };
  return (
    <section className='section-categorybutton'>
      <div
        className={`portfolio__categories ${theme}`}
        // data-aos='fade-up'
        // data-aos-delay='100'
        // data-aos-offset='100'
        // data-aos-duration='800'
        // data-aos-easing='ease-in'
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            active={active}
            className={`btn cat__btn skill-btn ${
              active === category ? "primary" : "white"
            }`}
            changeCategory={() => changeCategoryHandler(category)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCategories;
