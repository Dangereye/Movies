import React from "react";

const KnownFor = ({ department, gender }) => {
  if (department === "Acting" && gender === 0) {
    return <span>{department}</span>;
  } else if (department === "Acting" && gender === 1) {
    return <span>Actress</span>;
  } else if (department === "Acting" && gender === 2) {
    return <span>Actor</span>;
  } else {
    return <span>Unknown job</span>;
  }
};

export default KnownFor;
