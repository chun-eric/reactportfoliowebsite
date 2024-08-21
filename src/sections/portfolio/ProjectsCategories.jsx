/* eslint-disable react/prop-types */
import CategoryButton from "./CategoryButton";
import { useState } from "react";

const ProjectsCategories = ({ categories, onFilterProjects, theme }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (category) => {
    setActiveCategory(category);
    onFilterProjects(category);
  };

  return (
    <section className='section-categorybutton'>
      <div className={`portfolio__categories ${theme}`}>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            className={`btn cat__btn category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            changeCategory={changeCategoryHandler}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCategories;
