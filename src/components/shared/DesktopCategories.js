import React from "react";

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
            <li
              key={`${category.name}${index}`}
              onClick={() => handleClick(index)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopCategories;
