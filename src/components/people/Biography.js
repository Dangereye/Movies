import React from "react";

const Biography = ({ details }) => {
  return (
    <section id="biography">
      <div className="container">
        <h2>Biography</h2>
        <p>{details.data.biography}</p>
      </div>
    </section>
  );
};

export default Biography;
