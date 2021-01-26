import React from "react";

const KnownFor = ({ department, gender }) => {
  if (department === "Acting" && gender === 1) return <span>Actress</span>;
  if (department === "Acting" && gender === 2) return <span>Actor</span>;
  return null;
};

export default KnownFor;
