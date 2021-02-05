import React from "react";
import unavailableLandscape from "../../images/unavailable-landscape.jpg";
import unavailablePortrait from "../../images/unavailable-portrait.jpg";

const ItemImage = ({ image, name, width, height, landscape }) => {
  if (image) {
    return (
      <img
        className="image-item"
        width={width}
        height={height}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`${name} poster`}
      />
    );
  }

  if (!image && landscape) {
    return (
      <img
        className="image-item"
        width={width}
        height={height}
        src={unavailableLandscape}
        alt={`${name}`}
      />
    );
  }
  return (
    <img
      className="image-item"
      width={width}
      height={height}
      src={unavailablePortrait}
      alt={`${name}`}
    />
  );
};

export default React.memo(ItemImage);
