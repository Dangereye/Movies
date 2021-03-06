import React from "react";
import GridItem from "../shared/GridItem";

const Seasons = ({ details }) => {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2>
          {details.seasons.length} Season(s) - {details.status}
        </h2>
        <div className="grid-list">
          {details.seasons.map((season, index) => {
            return (
              <GridItem
                data={{ details: details, season: season }}
                path="/tv-shows/:id/season/:season"
                key={`season${index}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Seasons;
