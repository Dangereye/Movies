import React from "react";

const HomePageButton = ({ gender, url }) => {
  const background = {
    backgroundColor: gender === 1 ? "#ff78d6" : "#78d9ff",
  };
  return (
    <a
      className="btn homepage"
      href={url}
      target="_blank"
      rel="noreferrer"
      style={background}
    >
      Visit Website
    </a>
  );
};

export default HomePageButton;
