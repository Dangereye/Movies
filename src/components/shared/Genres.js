import React from "react";

const GenresComponent = ({ genres }) => {
  return (
    <div className="genres">
      {genres.map((type, index) => (
        <span key={index}> {type.name}, </span>
      ))}
    </div>
  );
};

export default GenresComponent;
