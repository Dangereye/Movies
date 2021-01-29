import React from "react";

const FullDate = ({ date }) => {
  if (date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return <span className="date">{`${day} . ${month} . ${year}`}</span>;
  } else {
    return <span className="date">Unknown date</span>;
  }
};

export default FullDate;
