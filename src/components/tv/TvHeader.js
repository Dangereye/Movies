import React from "react";
import Genres from "../shared/Genres";
import HomePageButton from "../shared/HomePageButton";
import Year from "../shared/Year";

const TvHeader = ({ details }) => {
  const bgImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
  };
  return (
    <header className="bg-image" style={bgImage}>
      <div className="container">
        <div className="content">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={details.name}
            />
          </div>
          <div className="details">
            <h1>{details.name}</h1>
            <span className="group">
              <Year date={details.first_air_date} />
            </span>
            <span className="group">{details.number_of_seasons} Seasons</span>
            <span className="group">
              <Genres genres={details.genres} />
            </span>

            <h3>Overview</h3>
            <p>{details.overview}</p>
            {details.homepage ? (
              <HomePageButton gender={1} url={details.homepage} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TvHeader;
