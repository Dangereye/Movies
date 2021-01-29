import React from "react";

const GenresComponent = ({ genres }) => {
  if (genres.length > 0) {
    return (
      <>
        {genres.map((type, index) => (
          <span key={`Genres ${index}`}>{type.name}</span>
        ))}
      </>
    );
  } else {
    return <span>Unknown genres.</span>;
  }
};

export default GenresComponent;
