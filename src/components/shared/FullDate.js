import React from "react";

const FullDate = ({ date }) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  if (date === "" || date === undefined || date === null) {
    return null;
  }

  return <span className="date">{`${day} . ${month} . ${year}`}</span>;
};

export default FullDate;
