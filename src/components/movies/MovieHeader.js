import React from "react";
import Genres from "../shared/Genres";
import RunTime from "../shared/RunTime";
import Year from "../shared/Year";
import ImageItem from "../shared/ItemImage";

const MovieHeader = ({ details, credits }) => {
  const bgImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
  };
  return (
    <header className="bg-image" style={bgImage}>
      <div className="container">
        <div className="content">
          <div className="image">
            <ImageItem
              image={details.poster_path}
              name={details.title}
              width="300px"
              height="450px"
            />
          </div>
          <div className="details">
            <h1>{details.title}</h1>
            <span className="group">
              <Year date={details.release_date} />
            </span>
            <span className="group">
              <Genres genres={details.genres} />
            </span>
            <span className="group">
              <RunTime runtime={details.runtime} />
            </span>

            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h3>Director(s)</h3>
            <p>
              {credits.crew &&
                credits.crew.map((member) => {
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
