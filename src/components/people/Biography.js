import React, { useContext } from "react";
import { PeopleContext } from "../../contexts/PeopleContext";

const Biography = () => {
  const { biography } = useContext(PeopleContext);
  return (
    <section id="biography">
      <div className="container">
        <h2>Extended Biography</h2>
        {biography ? (
          <>
            {Array.isArray(biography) &&
              biography.map((paragraph, index) => {
                return <p key={`biography ${index}`}>{paragraph}.</p>;
              })}
            {!Array.isArray(biography) && <p>{biography}</p>}
          </>
        ) : (
          <p>Currently unavailable.</p>
        )}
      </div>
    </section>
  );
};

export default Biography;
