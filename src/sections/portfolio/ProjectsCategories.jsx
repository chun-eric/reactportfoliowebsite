/* eslint-disable react/prop-types */
import CategoryButton from "./CategoryButton";
import { useState } from "react";
import A0S from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectsCategories = ({ categories, onFilterProjects, theme }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (category) => {
    setActiveCategory(category);
    onFilterProjects(category);
  };

  useEffect(() => {
    A0S.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <section className='section-categorybutton'>
      <div
        className={`portfolio__categories ${theme}`}
        data-aos='fade-in'
        data-aos-delay='350'
        data-aos-offset='200'
        data-aos-duration='1500'
        data-aos-easing='ease-in-out'
      >
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
