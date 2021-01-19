import React from "react";
import { Link } from "react-router-dom";

const MobileCategories = ({
  categories,
  setCategory,
  setPage,
  open,
  toggle,
}) => {
  const handleClick = (index) => {
    setCategory(categories[index]);
    setPage(1);
    toggle(!open);
  };

  return (
    <div className="mobile-categories">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to="/movies" onClick={() => handleClick(index)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCategories;
