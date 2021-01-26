import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "../shared/ItemImage";
import Year from "../shared/Year";

const TvCredits = ({ data }) => {
  return (
    <section>
      <div className="container">
        <h2>Tv ({data.length})</h2>
        <div className="grid-list">
          {data
            .sort((a, b) => {
              const aDate = new Date(a.first_air_date);
              const bDate = new Date(b.first_air_date);
              return bDate - aDate;
            })
            .map((tv, index) => {
              return (
                <div key={`tv-credits${index}`} className="grid-item">
                  <Link to={`/tv-shows/${tv.id}`}>
                    <ItemImage
                      name={tv.title}
                      image={tv.poster_path}
                      width="188px"
                      height="283px"
                    />
                  </Link>
                  <div className="content">
                    <h3>{tv.name}</h3>
                    <Year date={tv.first_air_date} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TvCredits;
