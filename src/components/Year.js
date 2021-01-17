import React from "react";

const Year = ({ date }) => {
  const d = new Date(date);
  const year = d.getFullYear();

  if (date === "") {
    return null;
  }

  return <div>{year}</div>;
};

export default Year;
