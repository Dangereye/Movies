import React, { useState, useEffect } from "react";

const Biography = ({ data }) => {
  const [biography, setBiography] = useState([]);
  useEffect(() => {
    setBiography([]);
    if (data) {
      const str = data;
      const match = str.match(/[A-Z][^.]+.?[^s]?/g);
      if (match) {
        setBiography([...match]);
      } else {
        setBiography([...str]);
      }
    }
  }, [setBiography, data]);
  return (
    <section id="biography">
      <div className="container">
        <h2>Biography continued</h2>
        {biography.map((paragraph, index) => {
          return <p key={`biography ${index}`}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};

export default Biography;
