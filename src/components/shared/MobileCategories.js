import React from "react";
import { Link } from "react-router-dom";

const MobileCategories = ({ categories, open, toggle, setPage }) => {
  const handleClick = (index) => {
    setPage(1);
    toggle(!open);
  };

  return (
    <div className="mobile-categories">
      <ul>
        {categories.map((category, index) => (
          <li key={category.name}>
            <Link to={category.path} onClick={() => handleClick(index)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCategories;
