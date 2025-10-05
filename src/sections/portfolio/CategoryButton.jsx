import PropTypes from "prop-types";

const CategoryButton = ({ category, className, changeCategory }) => {
  return (
    <button className={className} onClick={() => changeCategory(category)}>
      {category}
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default CategoryButton;