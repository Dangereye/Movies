import React from "react";
import { Link } from "react-router-dom";

const DesktopCategories = ({ categories, setCategory, setPage }) => {
  const handleClick = (index) => {
    setCategory(categories[index]);
    setPage(1);
  };
  return (
    <div className="desktop-categories">
      <div className="container">
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
    </div>
  );
};

export default DesktopCategories;
