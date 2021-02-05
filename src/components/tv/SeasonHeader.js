import React from "react";
import ItemImage from "../shared/ItemImage";
import Overview from "../shared/Overview";
import Year from "../shared/Year";

const SeasonHeader = ({ details }) => {
  console.log(details);
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="image">
            <ItemImage
              image={details.poster_path}
              name={details.name}
              width="300px"
              height="450px"
            />
          </div>
          <div className="details">
            <h1>{details.name}</h1>
            <span className="group">
              <Year date={details.air_date} />
            </span>
            <span className="group">{details.episodes.length} Episodes</span>

            <h3>Overview</h3>
            <Overview data={details.overview} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SeasonHeader;
