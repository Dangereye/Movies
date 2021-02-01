import React from "react";

const CommaSeparatedNumber = ({ number }) => {
  if (number) {
    return (
      <span>
        {" "}
        of {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      </span>
    );
  } else {
    return null;
  }
};

export default CommaSeparatedNumber;
