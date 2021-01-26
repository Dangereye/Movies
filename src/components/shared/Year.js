import React from "react";

const Year = ({ date }) => {
  const d = new Date(date);
  const year = d.getFullYear();

  if (date === "" || date === undefined || date === null) {
    return null;
  }

  return <span>{year}</span>;
};

export default Year;
