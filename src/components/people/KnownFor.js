import React from "react";

const KnownFor = ({ department, gender }) => {
  if (department === "Acting" && gender === 1)
    return <p className="known-for">Actress</p>;
  if (department === "Acting" && gender === 2)
    return <p className="known-for"> Actor</p>;
  return null;
};

export default KnownFor;
