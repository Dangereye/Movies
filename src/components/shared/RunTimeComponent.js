import React from "react";

const RunTimeComponent = ({ runtime }) => {
  const format = () => {
    const hours = runtime / 60;
    const fhours = Math.floor(hours);
    const mins = (hours - fhours) * 60;
    const rmins = Math.round(mins);
    return `${fhours}h ${rmins}m`;
  };

  format();

  if (runtime === 0) {
    return (
      <div className="runtime">
        <strong>Runtime: </strong>
        Unknown
      </div>
    );
  }

  return (
    <div className="runtime">
      <strong>Runtime: </strong>
      {format()}
    </div>
  );
};

export default RunTimeComponent;
