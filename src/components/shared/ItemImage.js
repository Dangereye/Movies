import React from "react";
import unavailable from "../../images/unavailable.jpg";

const ItemImage = ({ image, name, width, height }) => {
  if (image) {
    return (
      <img
        width={width}
        height={height}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`${name} poster`}
      />
    );
  }
  if (!image) return <img src={unavailable} alt={`${name}`} />;
};

export default ItemImage;
