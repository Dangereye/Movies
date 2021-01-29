import React from "react";

const RunTimeComponent = ({ runtime }) => {
  if (runtime > 0) {
    const hours = runtime / 60;
    const fhours = Math.floor(hours);
    const mins = (hours - fhours) * 60;
    const rmins = Math.round(mins);
    return <span className="runtime"> {`${fhours}h ${rmins}m`}</span>;
  } else {
    return <span>Unknown runtime</span>;
  }
};

export default RunTimeComponent;
