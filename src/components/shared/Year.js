import React from "react";

const Year = ({ date }) => {
  if (date) {
    const d = new Date(date);
    const year = d.getFullYear();
    return <span>{year}</span>;
  } else {
    return <span>Unknown year</span>;
  }
};

export default Year;
