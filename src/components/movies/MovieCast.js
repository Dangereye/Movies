import React from "react";
import GridItem from "../shared/GridItem";

const MovieCast = ({ cast }) => {
  return (
    <section>
      <div className="container">
        <h2>Cast Members ({cast.length})</h2>
        {cast.length > 0 ? (
          <div className="grid-list">
            {cast.map((person, index) => {
              return (
                <GridItem key={`Cast${index}`} data={person} path="/people" />
              );
            })}
          </div>
        ) : (
          "No information available."
        )}
      </div>
    </section>
  );
};

export default MovieCast;
