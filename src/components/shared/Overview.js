import React from "react";

const Overview = ({ data }) => {
  if (data && data !== "") {
    return <p>{data}</p>;
  } else {
    return <p>Currently unavailable.</p>;
  }
};

export default Overview;
