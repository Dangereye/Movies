import React from "react";
import StatusAndDate from "./StatusAndDate";
import GenresComponent from "./GenresComponent";
import RunTimeComponent from "./RunTimeComponent";

const MovieHeader = ({ details, credits }) => {
  const bgImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.data.backdrop_path})`,
  };
  return (
    <header id="movie-header" style={bgImage}>
      <div className="container">
        <div className="content">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.data.poster_path}`}
              alt={details.data.title}
            />
          </div>
          <div className="details">
            <h1>{details.data.title}</h1>
            <div className="stats">
              <StatusAndDate
                date={details.data.release_date}
                status={details.data.status}
              />
              <GenresComponent genres={details.data.genres} />
              <RunTimeComponent runtime={details.data.runtime} />
            </div>

            <h3>Overview</h3>
            <p>{details.data.overview}</p>
            <h3>Director(s)</h3>
            <p>
              {credits.data.crew.map((member) => {
                if (member.job === "Director") {
                  return member.name;
                } else {
                  return "";
                }
              })}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MovieHeader;
