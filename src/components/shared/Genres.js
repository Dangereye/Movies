import React from "react";

const GenresComponent = ({ genres }) => {
  return (
    <>
      {genres.map((type, index) => (
        <span key={`Genres ${index}`}>{type.name}</span>
      ))}
    </>
  );
};

export default GenresComponent;
