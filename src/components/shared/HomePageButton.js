import React from "react";

const HomePageButton = ({ url }) => {
  if (url) {
    return (
      <a className="btn homepage" href={url} target="_blank" rel="noreferrer">
        Visit Website
      </a>
    );
  } else {
    return null;
  }
};

export default HomePageButton;
