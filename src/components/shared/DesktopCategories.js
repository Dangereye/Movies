import React from "react";
import { Link } from "react-router-dom";

const DesktopCategories = ({ categories, setPage }) => {
  return (
    <div className="desktop-categories">
      <div className="container">
        <ul>
          {categories.map((category, index) => (
            <li key={`${category.name}${index}`}>
              <Link to={category.path} onClick={() => setPage(1)}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(DesktopCategories);
