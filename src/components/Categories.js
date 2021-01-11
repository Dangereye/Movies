import React from 'react';

const Categories = ({ categories, setCategory }) => {
  return (
    <div className='categories'>
      <div className='container'>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => setCategory(categories[index])}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
