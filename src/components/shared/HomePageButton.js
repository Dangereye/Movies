import React from "react";

const HomePageButton = ({ url }) => {
  return (
    <a className="btn homepage" href={url} target="_blank" rel="noreferrer">
      Visit Website
    </a>
  );
};

export default HomePageButton;
