import React from "react";
import { Link } from "react-router-dom";

const MobileCategories = ({ categories, setMobileMenuIsOpen }) => {
  return (
    <div className="mobile-categories">
      <ul>
        {categories.map((category, index) => (
          <li key={`category.name-${index}`}>
            <Link to={category.path} onClick={() => setMobileMenuIsOpen(false)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(MobileCategories);
