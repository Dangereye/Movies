import React, { useContext } from "react";
import { PeopleContext } from "../../contexts/PeopleContext";

const Biography = () => {
  const { biography } = useContext(PeopleContext);
  return (
    <section id="biography">
      <div className="container">
        <h2>Extended Biography</h2>
        {biography &&
          biography.map((paragraph, index) => {
            return <p key={`biography ${index}`}>{paragraph}.</p>;
          })}
      </div>
    </section>
  );
};

export default Biography;
