import React from "react";

const DateComponent = ({ date, status }) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  if (date === "") {
    return (
      <div>
        <strong>{status} </strong>
        Unknown
      </div>
    );
  }

  return (
    <div className="status-date">
      <strong>{status}: </strong>
      {`${day}, ${month}, ${year}`}
    </div>
  );
};

export default DateComponent;
