import React from "react";
import { Link } from "react-router-dom";

const MobileCategories = ({ categories, open, toggle }) => {
  return (
    <div className="mobile-categories">
      <ul>
        {categories.map((category, index) => (
          <li key={category.name}>
            <Link to={category.path} onClick={() => toggle(!open)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(MobileCategories);
