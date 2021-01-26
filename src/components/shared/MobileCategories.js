import React from "react";

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
          <li key={category.name} onClick={() => handleClick(index)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCategories;
