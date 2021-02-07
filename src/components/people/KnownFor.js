import React from "react";

const KnownFor = ({ department }) => {
  return department ? <span>{department}</span> : null;
};
export default KnownFor;
