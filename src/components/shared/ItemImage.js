import React from "react";
import unavailable from "../../images/unavailable.jpg";

const ItemImage = ({ image, name }) => {
  if (image !== null) {
    return (
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`${name} poster`}
      />
    );
  }
  return <img src={unavailable} alt={`${name}`} />;
};

export default ItemImage;
